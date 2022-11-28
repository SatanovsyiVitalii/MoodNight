import { PostsService } from './posts.service';
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    findAllPosts(): Promise<import("./post.entity").Post[]>;
}
