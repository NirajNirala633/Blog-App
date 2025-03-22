import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [CommentsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}




