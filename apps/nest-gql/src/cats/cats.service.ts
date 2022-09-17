import { Injectable } from '@nestjs/common';

export interface Icat {
  name: string;
  age: number;
  breed: string;
}

@Injectable()
export class CatsService {
  private readonly cats: Icat[] = [];

  create(cat: Icat) {
    this.cats.push(cat);
  }

  findAll(): Icat[] {
    return this.cats;
  }
}
