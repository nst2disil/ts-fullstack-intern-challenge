import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './entities/like.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Like]),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.js, .ts}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    })],
  controllers: [LikeController],
  providers: [LikeService],
})
export class LikeModule { }