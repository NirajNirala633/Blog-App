import { Controller, Post, Get, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import * as jwt from 'jsonwebtoken';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() body: { username: string; password: string; email: string }) {
    try {
      return await this.usersService.register(body.username, body.password, body.email);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    try {
      return await this.usersService.login(body.username, body.password);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get('profile')
  async getProfile(@Headers('authorization') authHeader: string) {
    try {
      const token = authHeader?.split('Bearer ')[1];
      if (!token) throw new Error('No token provided');
      const decoded = jwt.verify(token, process.env.JWT_SECRET) as { id: number };
      return await this.usersService.getProfile(decoded.id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}