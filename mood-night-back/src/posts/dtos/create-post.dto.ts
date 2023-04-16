import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'All quiet on the western front',
    description: 'A title of the creating post',
  })
  @IsString()
  title: string;

  @ApiProperty({
    example:
      'This is the testament of Paul B umer, who enlists with his classmates in the German army during World War I.',
    description: 'The content of the creating post',
  })
  @IsString()
  content: string;
}
