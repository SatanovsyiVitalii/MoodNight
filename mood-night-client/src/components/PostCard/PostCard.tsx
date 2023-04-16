import { Button } from 'components';
import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { PATHS } from 'routes/constants';
import { Post } from 'store/apis/postsApi';
// import { PostHeaderInfo } 
import coffee from '../../static/images/coffee.jpg';
import PostCardInfo from './PostCardInfo';

interface PostCardPropsInterface {
  post: Post;
}

function PostCard({ post }: PostCardPropsInterface) {
  const navigate = useNavigate();
  console.log('post', post);
  return (
    <div
      css={(theme) => ({
        height: '25rem',
        width: '25rem',
        backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(coffee.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: `5px solid ${theme.colors.background.gradient.primary}`,
        color: theme.colors.background.gradient.primary,
        padding: '1rem',
        cursor: 'pointer',
        '&:hover': {
          border: `5px solid ${theme.colors.background.gradient.primary}`,
          boxShadow: `10px 5px 5px ${theme.colors.background.gradient.primary}`,

        }
      })}
      onClick={() => navigate(`${PATHS.POST_DETAILS}/${post.id}`)}
    >
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%'
      }}>
        <div>
          <div>
            <span css={{ fontSize: '2rem' }}>{post.title}</span>
          </div>
        </div>
        <div css={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <span>{post.user.name}</span>
            <span>{post.user.surname}</span>
          </div>
          <div>{post && moment(new Date(post.created_at)).format('MMMM Do YYYY hh:mm')}</div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;