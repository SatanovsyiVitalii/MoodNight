import React from 'react';

const PostsEditorPage = React.lazy(() => import('../pages/PostsEditorPage'));

function PostsEditorRoute() {
  return (
    <PostsEditorPage />
  );
}

export default PostsEditorRoute;