import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAllUsers(email: string): Promise<import("./user.entity").User[]>;
}
