import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {

  console.log('Starting up...');

  if (!process.env.POSTGRES_PASSWORD) {
    throw new Error('POSTGRES_PASSWORD must be defined');
  }

  const options = new DocumentBuilder()
    .setTitle('MoodNight API')
    .setDescription('The API for MoodNight')
    .setVersion('1.0')
    .build();

  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(4000);
}
bootstrap();
