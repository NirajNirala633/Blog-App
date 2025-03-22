import { PostsService } from './posts.service';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createPost(authHeader: string, body: {
        title: string;
        content: string;
    }): Promise<{
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
    getPost(id: string): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    updatePost(id: string, body: {
        title: string;
        content: string;
    }): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    deletePost(id: string): Promise<{
        id: number;
        title: string;
        content: string;
        authorId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
