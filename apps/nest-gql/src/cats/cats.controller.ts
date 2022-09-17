import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatsService, Icat } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Icat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  find(@Param() params): any {
    return {
      msg: 'This returns all cats on this path',
      request: 'some request',
      param: `request parama ${params.id}`,
    };
  }
}
