import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { LanguageService } from './language.service';
import { Language as LanguageModel } from '@prisma/client';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  readAllLanguages(): Array<any> {
    return [1, 2];
  }

  @Post()
  @HttpCode(201)
  async createLanguage(@Body() postData): Promise<LanguageModel> {
    // const { code, name, isSupport } = postData;
    // console.dir(postData);
    return this.languageService.createLanguage({
      ...postData,
    });
  }
}
