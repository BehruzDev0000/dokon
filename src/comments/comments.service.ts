import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/entities/user.entity';
import { Comment } from 'src/comments/entities/comment.entity';
import { Product } from 'src/products/entities/product.entity';
import { handleError } from 'src/utils/handle-error';
import { successResponse } from 'src/utils/success.response';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(User) private readonly userModel:typeof User,
    @InjectModel(Product) private readonly productModel:typeof Product,
    @InjectModel(Comment) private readonly commentModel:typeof Comment
  ){}
  async create(createCommentDto: CreateCommentDto) {
    try {
      const user=await this.userModel.findOne({where:{id:createCommentDto.userId}})
      if(!user){
        throw new NotFoundException('User not found')
      }
      const product=await this.productModel.findOne({where:{id:createCommentDto.productId}})
      if(!product){
        throw new NotFoundException('Product not found')
      }
      const comment=await this.commentModel.create({...createCommentDto})
      return successResponse(comment,201)
    } catch (error) {
      handleError(error)
    }
  }

  async findAll() {
    try {
      const comments=await this.commentModel.findAll({include:{all:true}})
      return successResponse(comments)
    } catch (error) {
      handleError(error)
    }
  }

  async findOne(id: number) {
    try {
      const comment=await this.commentModel.findOne({where:{id},include:{all:true}})
      if(!comment){
        throw new NotFoundException('Comment not found')
      }
      return successResponse(comment)
    } catch (error) {
      handleError(error)
    }
  }

  async update(id: number, updateCommentDto: UpdateCommentDto) {
    try {
      const user=await this.userModel.findOne({where:{id:updateCommentDto.userId}})
      if(!user){
        throw new NotFoundException('User not found')
      }
      const product=await this.productModel.findOne({where:{id:updateCommentDto.productId}})
      if(!product){
        throw new NotFoundException('Product not found')
      }
      const comment=await this.commentModel.findOne({where:{id}})
      if(!comment){
        throw new NotFoundException('Comment not found')
      }
      const updatedcomment=await this.commentModel.update(updateCommentDto,{where:{id},returning:true})
      return successResponse(updatedcomment)
    } catch (error) {
      handleError(error)
    }
  }

  async remove(id: number) {
    try {
      const comment=await this.commentModel.findOne({where:{id}})
      if(!comment){
        throw new NotFoundException('Comment not found')
      }
      await this.commentModel.destroy({where:{id}})
      return successResponse({message:'Comment deleted'})
    } catch (error) {
      handleError(error)
    }
  }
}
