"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserInterceptor = void 0;
class CurrentUserInterceptor {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async intercept(context, handler) {
        const request = context.switchToHttp().getRequest();
        const { userId } = request.session || {};
        if (userId) {
            const user = await this.usersService.findOne(userId);
            request.currentUser = user;
        }
        return handler.handle();
    }
}
exports.CurrentUserInterceptor = CurrentUserInterceptor;
//# sourceMappingURL=current-user.interceptor.js.map