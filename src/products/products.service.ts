import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { Category } from 'src/categories/entities/category.entity';
import { handleError } from 'src/utils/handle-error';
import { successResponse } from 'src/utils/success.response';

@Injectable()
export class ProductsService {
  constructor (
    @InjectModel(Product) private readonly productModel: typeof Product,
    @InjectModel(Category) private readonly categoryModel:typeof Category
  )
  {}
  async create(createProductDto: CreateProductDto) {
   try {
     const category=await this.categoryModel.findOne({where:{id:createProductDto.categoryId}})
     if(!category){
      throw new NotFoundException('Category not found')
     }
     const product=await this.productModel.create({...createProductDto})
     return successResponse(product)
   } catch (error) {
    handleError(error)
   }

  }

  async findAll() {
    try {
      const products=await this.productModel.findAll({include:{all:true}})
      return successResponse(products)
    } catch (error) {
      handleError(error)
    }
  }

  async findOne(id: number) {
    try {
      const product=await this.productModel.findOne({where:{id},include:{all:true}})
      if(!product){
        throw new NotFoundException('Product not found')
      }
      return successResponse(product)
    } catch (error) {
      handleError(error)
    }
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    try {
      const product=await this.productModel.findOne({where:{id}})
      if(!product){
        throw new NotFoundException('Product not found')
      }
      const category=await this.categoryModel.findOne({where:{id:updateProductDto.categoryId}})
     if(!category){
      throw new NotFoundException('Category not found')
     }
      const updatedCategory=await this.productModel.update({...updateProductDto},{where:{id},returning:true})
      return successResponse(updatedCategory)
    } catch (error) {
      handleError(error)
    }
  }

  async remove(id: number) {
    try {
      const product=await this.productModel.findOne({where:{id}})
      if(!product){
        throw new NotFoundException('Product not found')
      }
      await this.categoryModel.destroy({where:{id}})
      return successResponse({message:'Product deleted'})
    } catch (error) {
      handleError(error)
    }
  }
}
