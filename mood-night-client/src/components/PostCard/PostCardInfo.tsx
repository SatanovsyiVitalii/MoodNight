
import PostDetails from 'components/PostDetails';
import UserAvatar from 'components/UserAvatar';
import React from 'react';
import { Post } from 'store/apis/postsApi';


interface PostCardPropsInterface {
  post: Post;
}

function PostCardInfo({ post }: PostCardPropsInterface) {
  console.log('post', post);
  return <div css={{ padding: '0.5rem' }}>
    <PostDetails post={post} />
  </div>;
}

export default PostCardInfo;