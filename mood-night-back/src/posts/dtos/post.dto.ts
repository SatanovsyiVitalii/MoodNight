import { Expose, Transform } from 'class-transformer';

export class PostDto {
  @Expose()
  id: number;
  @Expose()
  title: string;
  @Expose()
  content: string;

  @Expose()
  description: string;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
