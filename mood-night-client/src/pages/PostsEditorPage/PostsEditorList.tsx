
import React from 'react';
import { GoSync } from 'react-icons/go';
import { LoadingSpinner, ProductTable } from 'components';

import { useFetchPostsQuery } from 'store';
import PostsEditorListRaw from './PostsEditorListRaw';
import { Post } from 'store/apis/postsApi';

function PostsEditorList() {
  const { data: posts, isFetching } = useFetchPostsQuery();

  return <div>
    <LoadingSpinner isLoading={isFetching}>
      <ProductTable
        <Post>
        renderRaw={(data: Post) => <PostsEditorListRaw post={data} />}
        data={posts}
      />
    </LoadingSpinner>
  </div>;
}

export default PostsEditorList;