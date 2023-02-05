/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostDto } from '../models/CreatePostDto';
import type { Post } from '../models/Post';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PostsService {

    /**
     * Get all posts
     * @returns Post Returns all posts
     * @throws ApiError
     */
    public static postsControllerFindAllPosts(): CancelablePromise<Array<Post>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts',
        });
    }

    /**
     * Creates a new post
     * @param requestBody
     * @returns Post An user creates a new post
     * @throws ApiError
     */
    public static postsControllerCreatePost(
        requestBody: CreatePostDto,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/posts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a post
     * @param id
     * @returns Post Deleted post
     * @throws ApiError
     */
    public static postsControllerRemovePost(
        id: number,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/posts/{id}',
            query: {
                'id': id,
            },
        });
    }

}
