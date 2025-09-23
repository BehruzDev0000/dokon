
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { handleError } from 'src/utils/handle-error';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { successResponse } from 'src/utils/success.response';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userModel:typeof User
  )
  {}
  async create(createUserDto: CreateUserDto) {
    try {
      const username=await this.userModel.findOne({
        where:{username:createUserDto.username}
      })
      if(username){
        throw new ConflictException('Username already exists')
      }
      const email=await this.userModel.findOne({
        where:{email:createUserDto.email}
      })
      if(email){
        throw new ConflictException('Email already exists')
      }
      const user=await this.userModel.create({...createUserDto})
      return successResponse(user,201)
    } catch (error) {
      handleError(error)
    }
  }

  async findAll() {
    try {
      const users=await this.userModel.findAll()
     return successResponse(users)
    } catch (error) {
      handleError(error)
    }
  }

  async findOne(id: number) {
    try {
      const user=await this.userModel.findOne({where:{id},include:{all:true}})
      if(!user){
        throw new NotFoundException('User not found')
      }
      return successResponse(user)
    } catch (error) {
      handleError(error)
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
       const user=await this.userModel.findOne({where:{id},include:{all:true}})
      if(!user){
        throw new NotFoundException('User not found')
      }
      const updatedUser=await this.userModel.update(updateUserDto,{where:{id},returning:true})
      return successResponse(updatedUser)
    } catch (error) {
      handleError(error)
    }
  }

  async remove(id: number) {
    try {
      const user=await this.userModel.findOne({where:{id},include:{all:true}})
      if(!user){
        throw new NotFoundException('User not found')
      }
      await this.userModel.destroy({where:{id}})
      return successResponse({message:'User deleted'})
    } catch (error) {
      handleError(error)
    }
  }
}
