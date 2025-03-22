import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService, private httpService: HttpService) {}

  async verifyUser(token: string): Promise<number> {
    const response = await firstValueFrom(
      this.httpService.get(`${process.env.USER_SERVICE_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    );
    return response.data.id;
  }

  async verifyPost(postId: number): Promise<void> {
    await firstValueFrom(
      this.httpService.get(`${process.env.POST_SERVICE_URL}/posts/${postId}`)
    );
  }

  async createComment(userId: number, postId: number, content: string) {
    await this.verifyPost(postId);
    return this.prisma.comment.create({
      data: { content, postId, authorId: userId },
    });
  }

  async getComments(postId: number) {
    return this.prisma.comment.findMany({ where: { postId } });
  }
}