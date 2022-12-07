import {
  AfterInsert,
  AfterRemove,
  AfterUpdate,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  // OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
// import { Report } from '../reports/report.entity';

@Entity()
export class User {
  @ApiProperty({ example: 1, description: 'The id of the user' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'test@test.com',
    description: 'The email of the user',
  })
  @Column()
  email: string;

  @ApiProperty({
    example: 'password',
    description: 'The password of the user',
  })
  @Column()
  password: string;

  @ApiProperty({
    example: true,
    description: 'Shows if an user is admin',
  })
  @Column({ default: true })
  admin: boolean;

  // @OneToMany(() => Report, (report) => report.user)
  // reports: Report[];

  // @AfterInsert()
  // logInsert() {
  //   console.log('Inserted User with id', this.id);
  // }

  // @AfterUpdate()
  // logUpdate() {
  //   console.log('Updated User with id', this.id);
  // }

  // @AfterRemove()
  // logRemove() {
  //   console.log('Remove User with id', this.id);
  // }
}
