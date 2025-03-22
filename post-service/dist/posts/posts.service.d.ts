import { PrismaService } from '../prisma.service';
import { HttpService } from '@nestjs/axios';
export declare class PostsService {
    private prisma;
    private httpService;
    constructor(prisma: PrismaService, httpService: HttpService);
    verifyUser(token: string): Promise<number>;
    createPost(userId: number, title: string, content: string): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getPosts(): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    getPost(id: number): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updatePost(id: number, title: string, content: string): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deletePost(id: number): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
