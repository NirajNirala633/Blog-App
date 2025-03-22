import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(body: {
        username: string;
        password: string;
        email: string;
    }): Promise<{
        message: string;
        userId: number;
    }>;
    login(body: {
        username: string;
        password: string;
    }): Promise<{
        token: any;
    }>;
    getProfile(authHeader: string): Promise<{
        id: number;
        username: string;
        email: string;
    } | null>;
}
