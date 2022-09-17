import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('language')
export class LanguageController {
  @Get()
  readAllLanguages(): Array<any> {
    return [1, 2];
  }

  @Post()
  @HttpCode(201)
  createLanguage(): Array<any> {
    return [1, 2];
  }
}
