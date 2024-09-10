import { NestFactory } from '@nestjs/core';
import { LikeModule } from './like/like.module';

async function bootstrap() {
  const app = await NestFactory.create(LikeModule);
  app.enableCors({
    origin: 'http://localhost:8080',
    methods: 'GET,POST,DELETE,OPTIONS',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();