import { UsersService } from '../openapi';

const { usersControllerFindAllUsers, usersControllerCreateUser } = UsersService;

export const getUsers = async (email?: string) => {
  try {
    const users = await usersControllerFindAllUsers(email);
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createUser = async (email: string = '', password: string = '') => {
  try {
    const user = await usersControllerCreateUser({
      email,
      password,
    });
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
}