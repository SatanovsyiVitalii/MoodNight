import { UsersService, OpenAPI } from '../openapi';

const { usersControllerFindAllUsers } = UsersService;

OpenAPI.BASE = 'http://mood-night.com';

export const getUsers = async (email: string = "") => {
  try {
    const users = await usersControllerFindAllUsers(email);
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};