import { CreateUserDto } from '../dtos/create-user.dto';
import { UsersService } from '../users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signup({ email, password, ...rest }: CreateUserDto): Promise<import("../user.entity").User>;
    signin(email: string, password: string): Promise<import("../user.entity").User>;
}
