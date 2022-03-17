import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  app.listen(PORT, () => console.log(`Сервер слушает порт ${PORT}`));
}

start();
