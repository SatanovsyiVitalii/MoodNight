import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'test@test.com',
    description: 'an email of the creating user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password12345',
    description: 'a password for the creating user',
  })
  @IsString()
  password: string;
}
