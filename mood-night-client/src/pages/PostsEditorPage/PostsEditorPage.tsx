
import React, { useState } from 'react';
import { Header, Page } from 'components';
import PostsEditorList from './PostsEditorList';
import PostsEditorListHeader from './PostsEditorListHeader';
import CreatePostModal from './CreatePostModal';

function PostsEditorPage() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  return <Page>
    <Header />
    <PostsEditorListHeader onOpen={onOpen} />
    <PostsEditorList />
    {isOpen && <CreatePostModal
      toggle={onClose}
      onClose={onClose}
    />}
  </Page>;
}

export default PostsEditorPage;