import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [LanguageController],
  providers: [LanguageService, PrismaService],
})
export class LanguageModule {}
