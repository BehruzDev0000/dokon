import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'Eshmat Toshmatov',
    description: 'Foydalanuvchining to‘liq ismi',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'toshmatov',
    description: 'Foydalanuvchining unikal username',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'toshmat@example.com',
    description: 'Foydalanuvchining email manzili',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'mySecurePassword123',
    description: 'Foydalanuvchi paroli',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
