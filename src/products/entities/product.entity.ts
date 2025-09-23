import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Category } from "src/categories/entities/category.entity";
@Table({
    tableName:'products',
    timestamps:true,
    underscored:true
})
export class Product extends Model{
    @Column({
        type:DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    declare id:number
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name_uz:string
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name_ru: string;
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description_uz:string
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare description_ru: string;

    @Column({
        type:DataType.INTEGER,
        allowNull:false,
    })
    declare price:number

    @ForeignKey(()=>Category)
    @Column({
        allowNull:false,
        type:DataType.INTEGER,
        field:'category_id'
    })
    declare categoryId:number
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    declare stock:number
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare supplier:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare barcode:string

    @BelongsTo(() => Category, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  declare category: Category;

}
