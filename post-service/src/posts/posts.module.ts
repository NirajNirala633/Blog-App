import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from '../prisma.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule], // Add HttpModule here
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}