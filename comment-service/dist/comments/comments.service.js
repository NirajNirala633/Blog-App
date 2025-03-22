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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let CommentsService = class CommentsService {
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
    async verifyPost(postId) {
        await (0, rxjs_1.firstValueFrom)(this.httpService.get(`${process.env.POST_SERVICE_URL}/posts/${postId}`));
    }
    async createComment(userId, postId, content) {
        await this.verifyPost(postId);
        return this.prisma.comment.create({
            data: { content, postId, authorId: userId },
        });
    }
    async getComments(postId) {
        return this.prisma.comment.findMany({ where: { postId } });
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, axios_1.HttpService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map