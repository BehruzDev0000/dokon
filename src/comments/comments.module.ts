import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Comment } from './entities/comment.entity';

@Module({
  imports:[
    SequelizeModule.forFeature([User,Product,Comment])
  ],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
