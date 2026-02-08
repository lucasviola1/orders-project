import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const PORT = process.env.PORT ?? 3000;
  await app.listen(PORT);

  console.log(`API rodando em http://localhost:${PORT}`);
  console.log(`Endpoints disponiveis:`);
  console.log(`  GET  http://localhost:${PORT}/orders/:orderId  -> Buscar um pedido`);
  console.log(`  POST http://localhost:${PORT}/orders           -> Criar um pedido`);
}
bootstrap();
