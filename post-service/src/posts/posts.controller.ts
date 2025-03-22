import { Controller, Post, Get, Put, Delete, Body, Param, Headers, HttpException, HttpStatus } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async createPost(
    @Headers('authorization') authHeader: string,
    @Body() body: { title: string; content: string }
  ) {
    try {
      const token = authHeader?.split('Bearer ')[1];
      if (!token) throw new Error('No token provided');
      const userId = await this.postsService.verifyUser(token);
      return await this.postsService.createPost(userId, body.title, body.content);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  @Get()
  async getPosts() {
    return await this.postsService.getPosts();
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {
    return await this.postsService.getPost(parseInt(id));
  }

  @Put(':id')
  async updatePost(
    @Param('id') id: string,
    @Body() body: { title: string; content: string }
  ) {
    return await this.postsService.updatePost(parseInt(id), body.title, body.content);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return await this.postsService.deletePost(parseInt(id));
  }
}