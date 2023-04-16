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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../guards/auth.guard");
const serialize_interceptor_1 = require("../interceptors/serialize-interceptor");
const auth_service_1 = require("./auth/auth.service");
const current_user_decorator_1 = require("./decorators/current-user.decorator");
const create_user_dto_1 = require("./dtos/create-user.dto");
const signin_user_dto_1 = require("./dtos/signin-user.dto");
const user_dto_1 = require("./dtos/user.dto");
const user_entity_1 = require("./user.entity");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService, authService) {
        this.usersService = usersService;
        this.authService = authService;
    }
    whoAmI(user) {
        return user;
    }
    findAllUsers(email) {
        return this.usersService.find(email);
    }
    signOut(session) {
        session.userId = null;
    }
    async createUser(body, session) {
        const user = await this.authService.signup(body);
        session.userId = user.id;
        return user;
    }
    async signin(body, session) {
        const user = await this.authService.signin(body.email, body.password);
        session.userId = user.id;
        return user;
    }
    removeUser(id) {
        return this.usersService.remove(parseInt(id));
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get logged in user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Logged in user',
        type: user_entity_1.User,
    }),
    (0, common_1.Get)('/whoami'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", user_entity_1.User)
], UsersController.prototype, "whoAmI", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all users by email' }),
    (0, swagger_1.ApiQuery)({
        name: 'email',
        required: false,
        description: 'an email for searching users',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The found users',
        type: [user_entity_1.User],
    }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAllUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Sign out' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deletes cookies',
        type: undefined,
    }),
    (0, common_1.Post)('/signout'),
    __param(0, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "signOut", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a user' }),
    (0, swagger_1.ApiBody)({
        type: create_user_dto_1.CreateUserDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Created user',
        type: user_entity_1.User,
    }),
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Sign In' }),
    (0, swagger_1.ApiBody)({
        type: signin_user_dto_1.SignInUserDto,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Signed in user',
        type: user_entity_1.User,
    }),
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Session)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_user_dto_1.SignInUserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signin", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a user' }),
    (0, swagger_1.ApiQuery)({
        name: 'id',
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Deleted user',
        type: user_entity_1.User,
    }),
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "removeUser", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    (0, serialize_interceptor_1.Serialize)(user_dto_1.UserDto),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        auth_service_1.AuthService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map