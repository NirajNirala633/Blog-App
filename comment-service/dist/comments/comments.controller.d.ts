import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    createComment(authHeader: string, body: {
        postId: number;
        content: string;
    }): Promise<{
        id: number;
        content: string;
        postId: number;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getComments(postId: string): Promise<{
        id: number;
        content: string;
        postId: number;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
}
