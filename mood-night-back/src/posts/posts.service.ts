import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dtos/create-post.dto';
import { User } from '../users/user.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private repo: Repository<Post>) {}

  create(postDto: CreatePostDto, user: User) {
    const post = this.repo.create(postDto);
    post.user = user;
    return this.repo.save(post);
  }

  find() {
    return this.repo.find({ relations: { user: true } });
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne({ where: { id }, relations: { user: true } });
  }

  async remove(id: number) {
    const post = await this.findOne(id);
    if (!post) {
      throw new NotFoundException('post not found');
    }
    return this.repo.remove(post);
  }
}
