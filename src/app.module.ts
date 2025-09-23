import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:'.env'
    }),
    SequelizeModule.forRoot({
      dialect:'postgres',
      host:process.env.DB_HOST,
      port:Number(process.env.DB_PORT),
      username:process.env.DB_USER,
      password:process.env.DB_PASSWORD,
      database:process.env.DB_NAME,
      logging:false,
      autoLoadModels:true,
      synchronize:true,
      models:[]
    }),
    ProductsModule,
    CategoriesModule,
    UsersModule,
    CommentsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
