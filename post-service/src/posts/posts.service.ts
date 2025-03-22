import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService, private httpService: HttpService) {}

  async verifyUser(token: string): Promise<number> {
    const response = await firstValueFrom(
      this.httpService.get(`${process.env.USER_SERVICE_URL}/users/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      })
    );
    return response.data.id;
  }

  async createPost(userId: number, title: string, content: string) {
    return this.prisma.post.create({
      data: { title, content, authorId: userId },
    });
  }

  async getPosts() {
    return this.prisma.post.findMany();
  }

  async getPost(id: number) {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async updatePost(id: number, title: string, content: string) {
    return this.prisma.post.update({
      where: { id },
      data: { title, content },
    });
  }

  async deletePost(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}