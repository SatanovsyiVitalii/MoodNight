import { User } from '../users/user.entity';
import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
// import { Report } from '../reports/report.entity';

@Entity()
export class Post {
  @ApiProperty({ example: 1, description: 'The id of the post' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'All quiet on the western front',
    description: 'The title of the post',
  })
  @Column()
  title: string;

  @ApiProperty({
    example:
      'This is the testament of Paul B umer, who enlists with his classmates in the German army during World War I. They become soldiers with youthful enthusiasm. But the world of duty, culture, and progress they had been taught breaks in pieces under the first bombardment in the trenches.',
    description: 'The content of the post',
  })
  @Column()
  content: string;

  @ApiProperty({
    example: '2023-02-11T19:45:55.431Z',
    description: 'Creating date of the post',
  })
  @CreateDateColumn()
  created_at: Date;

  @ApiProperty({
    example: '2023-02-11T19:45:55.431Z',
    description: 'Updating date of the post',
  })
  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
