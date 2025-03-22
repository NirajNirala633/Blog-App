"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let PostsService = class PostsService {
    prisma;
    httpService;
    constructor(prisma, httpService) {
        this.prisma = prisma;
        this.httpService = httpService;
    }
    async verifyUser(token) {
        const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${process.env.USER_SERVICE_URL}/users/profile`, {
            headers: { Authorization: `Bearer ${token}` },
        }));
        return response.data.id;
    }
    async createPost(userId, title, content) {
        return this.prisma.post.create({
            data: { title, content, authorId: userId },
        });
    }
    async getPosts() {
        return this.prisma.post.findMany();
    }
    async getPost(id) {
        return this.prisma.post.findUnique({ where: { id } });
    }
    async updatePost(id, title, content) {
        return this.prisma.post.update({
            where: { id },
            data: { title, content },
        });
    }
    async deletePost(id) {
        return this.prisma.post.delete({ where: { id } });
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, axios_1.HttpService])
], PostsService);
//# sourceMappingURL=posts.service.js.map