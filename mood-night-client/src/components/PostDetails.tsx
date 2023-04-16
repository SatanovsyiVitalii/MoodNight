import UserAvatar from 'components/UserAvatar';
import moment from 'moment';
import React from 'react';
import { Post } from 'store/apis/postsApi';


interface PostCardPropsInterface {
  post: Post;
}

function PostDetails({ post }: PostCardPropsInterface) {
  return <div css={{ display: 'flex' }}>
    <UserAvatar />
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      marginLeft: '1rem'
    }}>
      <div css={{ textAlign: 'start' }}>
        <span css={{ display: 'inline-block', marginRight: '0.2rem' }}>{post?.user?.name}</span>
        <span>{post?.user?.surname}</span>
      </div>
      <div>
        {post && moment(new Date(post.created_at)).format('MMMM Do YYYY hh:mm')}
      </div>
    </div>
  </div>;
}

export default PostDetails;