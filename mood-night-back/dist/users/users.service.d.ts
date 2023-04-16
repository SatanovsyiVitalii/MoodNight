import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create({ email, password, name, surname }: {
        email: any;
        password: any;
        name: any;
        surname: any;
    }): Promise<User>;
    find(email: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
    remove(id: number): Promise<User>;
}
