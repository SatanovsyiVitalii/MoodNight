/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export { ApiError } from './core/ApiError';
export { CancelablePromise, CancelError } from './core/CancelablePromise';
export { OpenAPI } from './core/OpenAPI';
export type { OpenAPIConfig } from './core/OpenAPI';

export type { CreatePostDto } from './models/CreatePostDto';
export type { CreateUserDto } from './models/CreateUserDto';
export type { Post } from './models/Post';
export type { User } from './models/User';

export { DefaultService } from './services/DefaultService';
export { PostsService } from './services/PostsService';
export { UsersService } from './services/UsersService';
