import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LanguageService } from './language.service';
import { Language as LanguageModel } from '@prisma/client';
import { CreateLanguageDto } from './dto/create-language-dto';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get()
  readAllLanguages(): Promise<LanguageModel[]> {
    return this.languageService.readAllLanguages();
  }

  @Post()
  @HttpCode(201)
  async createLanguage(
    @Body() postDataDto: CreateLanguageDto,
  ): Promise<LanguageModel> {
    console.dir(postDataDto, { depth: null });
    return this.languageService.createLanguage({
      ...postDataDto,
    });
  }

  @Delete(':id')
  async deleteLanguages(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<LanguageModel> {
    console.log(id, typeof id);
    return this.languageService.deleteLanguageById(id);
  }
}
