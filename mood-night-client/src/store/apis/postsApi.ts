import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from './userApi';

export interface Post {
  id: number
  title: string;
  content: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  user: User;
}

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  tagTypes: ['Posts'],
  endpoints(builder) {
    return {
      fetchPosts: builder.query<Post[], void>({
        providesTags: (result) => {
          const tags: { type: 'Posts'; id: number | string }[] = result ? result.map((post) => {
            return { type: 'Posts' as const, id: post.id };
          }) : [];
          tags.push({ type: 'Posts' as const, id: 'CREATE' })
          return tags;
        },
        query: () => {
          return {
            url: '/posts',
            credentials: 'include',
            method: 'GET',
          };
        },
      }),
      fetchPost: builder.query<Post, string | undefined>({
        query: (postID) => {
          return {
            url: `/posts/${postID}`,
            credentials: 'include',
            method: 'GET',
          };
        },
      }),
      createPost: builder.mutation({
        invalidatesTags: () => {
          return [{ type: 'Posts', id: 'CREATE' }]
        },
        query: ({ title, content, description, user }) => {
          return {
            url: '/posts',
            method: 'POST',
            credentials: 'include',
            body: {
              title,
              content,
              description,
            }
          };
        },
      }),
      deletePost: builder.mutation({
        invalidatesTags: (result, error, post) => {
          return [{ type: 'Posts', id: post.id }];
        },
        query: (post: Post) => {
          return {
            url: `/posts/${post.id}`,
            credentials: 'include',
            method: 'DELETE',
          };
        }
      }),
    }
  }
});

export const {
  useFetchPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useFetchPostQuery,
} = postsApi;