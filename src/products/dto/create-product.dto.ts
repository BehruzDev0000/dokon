import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    example: 'Telefon',
    description: 'Mahsulot nomi (uzbek tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;

  @ApiProperty({
    example: 'Телефон',
    description: 'Mahsulot nomi (rus tilida)',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    example: 'Zamonaviy smartfon, 128GB xotira, qora rangda',
    description: 'Mahsulot tavsifi (uzbek tilida)',
  })
  @IsString()
  @IsNotEmpty()
  description_uz: string;

  @ApiProperty({
    example: 'Современный смартфон, 128ГБ памяти, черного цвета',
    description: 'Mahsulot tavsifi (rus tilida)',
  })
  @IsString()
  @IsNotEmpty()
  description_ru: string;

  @ApiProperty({
    example: 3500000,
    description: 'Mahsulot narxi (so‘mda)',
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    example: 1,
    description: 'Kategoriya ID (foreign key)',
  })
  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @ApiProperty({
    example: 50,
    description: 'Ombordagi mahsulot soni',
  })
  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @ApiProperty({
    example: 'Samsung',
    description: 'Mahsulot yetkazib beruvchisi',
  })
  @IsString()
  @IsNotEmpty()
  supplier: string;

  @ApiProperty({
    example: '8601234567890',
    description: 'Mahsulotning barcode raqami',
  })
  @IsString()
  @IsNotEmpty()
  barcode: string;
}
