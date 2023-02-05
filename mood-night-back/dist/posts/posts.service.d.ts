import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dtos/create-post.dto';
import { User } from '../users/user.entity';
export declare class PostsService {
    private repo;
    constructor(repo: Repository<Post>);
    create(postDto: CreatePostDto, user: User): Promise<Post>;
    find(): Promise<Post[]>;
    findOne(id: number): Promise<Post>;
    remove(id: number): Promise<Post>;
}
