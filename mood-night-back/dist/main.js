"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log('Starting up...........');
    if (!process.env.POSTGRES_PASSWORD) {
        throw new Error('POSTGRES_PASSWORD must be defined');
    }
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map