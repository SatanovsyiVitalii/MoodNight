import { Post } from '../posts/post.entity';
export declare class User {
    id: number;
    email: string;
    password: string;
    admin: boolean;
    created_at: Date;
    posts: Post[];
}
