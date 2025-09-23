import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Телефоны',
    description: 'Kategoriya nomi rus tilida',
  })
  @IsString()
  @IsNotEmpty()
  name_ru: string;

  @ApiProperty({
    example: 'Telefonlar',
    description: 'Kategoriya nomi o‘zbek tilida',
  })
  @IsString()
  @IsNotEmpty()
  name_uz: string;
}
