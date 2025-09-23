import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    example: 1,
    description: 'Izoh qoldirilayotgan mahsulot ID si',
  })
  @IsNumber()
  @IsNotEmpty()
  productId: number;

  @ApiProperty({
    example: 10,
    description: 'Izoh qoldirayotgan foydalanuvchi ID si',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({
    example: 'Juda yaxshi mahsulot, sifati zo‘r!',
    description: 'Foydalanuvchining yozgan izohi',
  })
  @IsString()
  @IsNotEmpty()
  comment: string;

  @ApiProperty({
    example: 5,
    description: 'Mahsulot reytingi (1 dan 5 gacha)',
    minimum: 1,
    maximum: 5,
  })
  @Max(5)
  @Min(1)
  @IsNumber()
  @IsNotEmpty()
  rating: number;
}
