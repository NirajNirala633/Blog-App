import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PostsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




