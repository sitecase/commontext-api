import { Injectable, ParseBoolPipe } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Language, Prisma } from '@prisma/client';

@Injectable()
export class LanguageService {
  constructor(private prisma: PrismaService) {}

  // Promise<Language>
  async createLanguage(data: Prisma.LanguageCreateInput): Promise<Language> {
    console.dir(data, { depth: null });
    const { code, name, isSupport } = data;
    return this.prisma.language.create({
      data: {
        code,
        name,
        isSupport: Boolean(isSupport),
      },
    });
  }

  // async posts(params: {
  //   skip?: number;
  //   take?: number;
  //   cursor?: Prisma.PostWhereUniqueInput;
  //   where?: Prisma.PostWhereInput;
  //   orderBy?: Prisma.PostOrderByWithRelationInput;
  // }): Promise<Post[]> {
  //   const { skip, take, cursor, where, orderBy } = params;
  //   return this.prisma.language.findMany({
  //     skip,
  //     take,
  //     cursor,
  //     where,
  //     orderBy,
  //   });
  // }
}
