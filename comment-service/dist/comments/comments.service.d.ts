import { PrismaService } from '../prisma.service';
import { HttpService } from '@nestjs/axios';
export declare class CommentsService {
    private prisma;
    private httpService;
    constructor(prisma: PrismaService, httpService: HttpService);
    verifyUser(token: string): Promise<number>;
    verifyPost(postId: number): Promise<void>;
    createComment(userId: number, postId: number, content: string): Promise<{
        id: number;
        content: string;
        postId: number;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getComments(postId: number): Promise<{
        id: number;
        content: string;
        postId: number;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
