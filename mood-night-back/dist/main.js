"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
async function bootstrap() {
    console.log('Starting up...');
    if (!process.env.POSTGRES_PASSWORD) {
        throw new Error('POSTGRES_PASSWORD must be defined');
    }
    const options = new swagger_1.DocumentBuilder()
        .setTitle('MoodNight API')
        .setDescription('The API for MoodNight')
        .setVersion('1.0')
        .build();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/doc', app, document);
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map