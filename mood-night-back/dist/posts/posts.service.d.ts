import { Repository } from 'typeorm';
import { Post } from './post.entity';
export declare class PostsService {
    private repo;
    constructor(repo: Repository<Post>);
    find(): Promise<Post[]>;
}
