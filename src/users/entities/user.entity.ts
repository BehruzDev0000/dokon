import { Column, DataType, HasMany, Model, Table  } from "sequelize-typescript";
import { Comment } from "src/comments/entities/comment.entity";
@Table({
    tableName:'users',
    timestamps:true,
    underscored:true
})
export class User extends Model{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare name:string

    @Column({
        type:DataType.STRING,
        allowNull:false,
        primaryKey:true,
        unique:true
    })
    declare username:string

    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique:true
    })
    declare email:string
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare password:string
    @HasMany(() => Comment, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    declare workers: Comment[];
    
}
