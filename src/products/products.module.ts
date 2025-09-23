import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Category } from 'src/categories/entities/category.entity';

@Module({
  imports:[
    SequelizeModule.forFeature([Product,Category])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
