import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { LanguageModule } from './language/language.module';

@Module({
  imports: [LanguageModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
