import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Product } from "src/products/entities/product.entity";
import { User } from "src/users/entities/user.entity";

@Table({
  tableName: 'comments',
  timestamps: true,
  underscored: true
})
export class Comment extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  declare id: number;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'user_id'
  })
  declare userId: number;

  @ForeignKey(() => Product)   // ✅ to‘g‘rilandi
  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    field: 'product_id'
  })
  declare productId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare comment: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  })
  declare rating: number;

  @BelongsTo(() => Product, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  declare product: Product;

  @BelongsTo(() => User, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  declare user: User;
}
