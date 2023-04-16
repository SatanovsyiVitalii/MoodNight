import { User } from '../users/user.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    description: string;
    user: User;
}
