import { Controller, Get, Post, Body, Patch, Param, Delete, Inject } from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dto/create-like.dto';

@Controller('like')
export class LikeController {
  constructor(private readonly likeService: LikeService) { }

  @Post()
  addLike(@Body() createLikeDto: CreateLikeDto) {
    return this.likeService.addLike(createLikeDto);
  }

  @Delete('/:id')
  deleteLike(@Param('id') id: string) {
    return this.likeService.deleteLike(id);
  }

  @Get()
  getAllLikes() {
    return this.likeService.getAllLikes();
  }
}
