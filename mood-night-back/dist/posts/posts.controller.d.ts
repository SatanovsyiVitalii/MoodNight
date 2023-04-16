import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
import { User } from '../users/user.entity';
import { Post as PostEntity } from './post.entity';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    findAllPosts(): Promise<PostEntity[]>;
    findPost(id: string): Promise<PostEntity>;
    createPost(body: CreatePostDto, user: User): Promise<PostEntity>;
    removePost(id: string): Promise<PostEntity>;
}
