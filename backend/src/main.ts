import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';
//import "reflect-metadata";
// For info on local ssl setup. See https://rehansattar.dev/creating-a-local-https-nestjs-server-with-free-ssl-certificates-a-step-by-step-guide
async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('./src/cert/key.pem'),
    cert: fs.readFileSync('./src/cert/cert.pem'),
  };
  const app = await NestFactory.create(AppModule,{httpsOptions});

  const config = new DocumentBuilder()
    .setTitle('Paleo API')
    .setDescription('The API Backend for the Paleo Apps frotend')
    .setVersion('1.0')
    .addTag('paelo')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
