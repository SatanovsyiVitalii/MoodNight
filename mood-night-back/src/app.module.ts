import { MiddlewareConsumer, Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { APP_PIPE, RouterModule } from '@nestjs/core';
const cookieSession = require('cookie-session');
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Post, User],
      synchronize: true,
    }),
    RouterModule.register([
      {
        path: 'api',
        module: UsersModule,
      },
      {
        path: 'api',
        module: PostsModule,
      },
    ]),
    UsersModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cookieSession({
          keys: [process.env.COOKIE_KEY],
        }),
      )
      .forRoutes('*');
  }
}
