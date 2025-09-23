import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   const PORT = process.env.PORT || 3000;

  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix('api/v1')
 

  const config=new DocumentBuilder()
  .setTitle('Hospital API')
  .setDescription('Hospital')
  .setVersion('1.0')
  .addTag('Hospital')
  .build();

  
  const document=SwaggerModule.createDocument(app,config)
  SwaggerModule.setup('api',app,document)
  await app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
    console.log(`📚 Swagger is available at http://localhost:${PORT}/api`);
  });
}
bootstrap();
