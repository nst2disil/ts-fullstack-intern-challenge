import { Injectable } from '@nestjs/common';
import { CreateLikeDto } from './dto/create-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(Like) private readonly likeRepository: Repository<Like>,
  ) { }

  async addLike(createLikeDto: CreateLikeDto): Promise<Like> {
    const { id } = createLikeDto;
    const { url } = createLikeDto;

    const newLike = this.likeRepository.create({
      id,
      url,
      created_at: new Date().toISOString(),
    });

    return this.likeRepository.save(newLike);
  }

  async deleteLike(id: string): Promise<void> {
    this.likeRepository.delete(id);
  }

  async getAllLikes(): Promise<Like[]> {
    return this.likeRepository.find();;
  }
}
