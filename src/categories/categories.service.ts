import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { handleError } from 'src/utils/handle-error';
import { successResponse } from 'src/utils/success.response';
import { Category } from './entities/category.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private readonly categoryModel:typeof Category
  ){

  }
  async create(createCategoryDto: CreateCategoryDto) {
    try {
      const category=await this.categoryModel.create({...createCategoryDto})

      return successResponse(category,201)
    } catch (error) {
      handleError(error)
    }
  }

  async findAll() {
    try {
      const cateogries=await this.categoryModel.findAll({include:{all:true}})
      return successResponse(cateogries)
    } catch (error) {
      handleError(error)
    }
  }

  async findOne(id: number) {
    try {
      const category=await this.categoryModel.findOne({where:{id},include:{all:true}})
      if(!category){
        throw new NotFoundException('Category not found')
      }
      return successResponse(category)
    } catch (error) {
      handleError(error)
    }
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try {
      const category=await this.categoryModel.findOne({where:{id},include:{all:true}})
      if(!category){
        throw new NotFoundException('Category not found')
      }
      const updatedcategory=await category.update(updateCategoryDto)
      return successResponse(updatedcategory)
    } catch (error) {
      handleError(error)
    }
  }

  async remove(id: number) {
    try {
      const category=await this.categoryModel.findOne({where:{id},include:{all:true}})
      if(!category){
        throw new NotFoundException('Category not found')
      }
      const deletedcategory=await this.categoryModel.destroy({where:{id}})

      return successResponse({message:'Category deleted'})
    } catch (error) {
      handleError(error)
    }
  }
}
