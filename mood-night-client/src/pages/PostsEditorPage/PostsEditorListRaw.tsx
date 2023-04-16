
import React from 'react';
import moment from 'moment';
import { BsTrash } from 'react-icons/bs';
import { Post, useDeletePostMutation } from 'store/apis/postsApi';
import { ProductCell } from 'components';
import { ButtonWithConfirmation } from 'components';

interface PostsListRawPropsInterface {
  post: Post;
}

function PostsEditorListRaw({ post }: PostsListRawPropsInterface) {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  return (<React.Fragment>
    <ProductCell>#{post.id}</ProductCell>
    <ProductCell>{post.title}</ProductCell>
    <ProductCell>{post.content.length > 50 ? `${post.content.slice(0, 50)}...` : post.content}</ProductCell>
    <ProductCell>{moment(new Date(post.created_at)).format('MMMM Do YYYY hh:mm:ss')}</ProductCell>
    <ProductCell css={{ justifyContent: 'flex-end' }}>
      <ButtonWithConfirmation onClick={() => deletePost(post)} color='danger'>
        Delete
      </ButtonWithConfirmation>
    </ProductCell>
  </React.Fragment>);
}

export default PostsEditorListRaw;