
import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetailsPage = React.lazy(() => import('../pages/PostDetailsPage'));

function PostDetailsRoute() {
  const { id } = useParams();

  return (
    <PostDetailsPage postID={id} />
  );
}

export default PostDetailsRoute;