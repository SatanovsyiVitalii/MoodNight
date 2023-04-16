import { Request, Response, NextFunction } from 'express';
import { NestMiddleware } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
declare global {
    namespace Express {
        interface Request {
            currentUser?: User;
            session?: any;
        }
    }
}
export declare class CurrentUserMiddleware implements NestMiddleware {
    private usersService;
    constructor(usersService: UsersService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
