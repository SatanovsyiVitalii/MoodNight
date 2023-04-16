
import React from 'react';
import { useSelector } from 'react-redux';
import { FaUserAlt } from 'react-icons/fa';
import { selectSignedInUser } from 'store/slices/userSlice';
import { UserAvatar } from 'components';
import moment from 'moment';
import { Post } from 'store/apis/postsApi';

interface PostHeaderInfoPropsInterface {
  post: Post | undefined;
}

function PostHeaderInfo({ post }: PostHeaderInfoPropsInterface) {
  return <div>
    <div css={{ display: 'flex' }}>
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
    </div>
  </div>;
}

export default PostHeaderInfo;