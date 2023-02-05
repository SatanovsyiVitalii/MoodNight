/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUserDto } from '../models/CreateUserDto';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Get logged in user
     * @returns User Logged in user
     * @throws ApiError
     */
    public static usersControllerWhoAmI(): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users/whoami',
        });
    }

    /**
     * Get all users by email
     * @param email an email for searching users
     * @returns User The found users
     * @throws ApiError
     */
    public static usersControllerFindAllUsers(
        email?: string,
    ): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
            query: {
                'email': email,
            },
        });
    }

    /**
     * Sign out
     * @returns any
     * @throws ApiError
     */
    public static usersControllerSignOut(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/signout',
        });
    }

    /**
     * Create a user
     * @param requestBody
     * @returns User Created user
     * @throws ApiError
     */
    public static usersControllerCreateUser(
        requestBody: CreateUserDto,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/signup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Sign In
     * @param requestBody
     * @returns User Signed in user
     * @throws ApiError
     */
    public static usersControllerSignin(
        requestBody: CreateUserDto,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users/signin',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete a user
     * @param id
     * @returns User Deleted user
     * @throws ApiError
     */
    public static usersControllerRemoveUser(
        id: number,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/users/{id}',
            query: {
                'id': id,
            },
        });
    }

}
