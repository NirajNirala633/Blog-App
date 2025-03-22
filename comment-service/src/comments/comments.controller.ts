import { Controller, Post, Get, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  async createComment(
    @Headers('authorization') authHeader: string,
    @Body() body: { postId: number; content: string }
  ) {
    try {
      const token = authHeader?.split('Bearer ')[1];
      if (!token) throw new Error('No token provided');
      const userId = await this.commentsService.verifyUser(token);
      return await this.commentsService.createComment(userId, body.postId, body.content);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get(':postId')
  async getComments(@Param('postId') postId: string) {
    return await this.commentsService.getComments(parseInt(postId));
  }
}