import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { PostService } from './post/post.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, PrismaService, UserService, PostService],
})
export class AppModule {}
