import { PrismaService } from '../prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    register(username: string, password: string, email: string): Promise<{
        message: string;
        userId: number;
    }>;
    login(username: string, password: string): Promise<{
        token: any;
    }>;
    getProfile(userId: number): Promise<{
        id: number;
        username: string;
        email: string;
    } | null>;
}
