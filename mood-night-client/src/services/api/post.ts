import { PostsService } from '../openapi';

const { postsControllerCreatePost, postsControllerFindAllPosts } = PostsService;

export const getPosts = async () => {
  try {
    const posts = await postsControllerFindAllPosts();
    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
}

export const createPost = async (title: string = '', content: string = '') => {
  try {
    const post = await postsControllerCreatePost({
      title,
      content,
    });
    return post;
  } catch (error: any) {
    throw new Error(error);
  }
}