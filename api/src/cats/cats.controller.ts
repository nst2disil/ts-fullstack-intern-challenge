import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats() {
    return this.catsService.getCats();
  }
}
