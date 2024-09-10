import { Module } from '@nestjs/common';
import { LikeModule } from './like/like.module';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [LikeModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
