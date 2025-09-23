import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Product } from 'src/products/entities/product.entity';

@Table({ tableName: 'categories', timestamps: true ,underscored:true})
export class Category extends Model {
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare name_uz:string
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  declare name_ru: string;

   @HasMany(() => Product, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    declare products: Product[];
}

