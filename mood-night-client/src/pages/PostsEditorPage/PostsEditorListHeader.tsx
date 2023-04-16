
import { Button } from 'components';
import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

interface PostsListHeaderPropsInterface {
  onOpen: React.MouseEventHandler<HTMLButtonElement>;
}

function PostsEditorListHeader({ onOpen }: PostsListHeaderPropsInterface) {
  return (<div css={{
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem'
  }}>
    <h2 css={(theme) => ({
      color: theme.colors.text.dark,
    })}>Posts list</h2>
    <Button onClick={onOpen}>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <AiOutlinePlusCircle css={{ fontSize: '1.5rem' }} />
        <span css={{ display: 'inline-block', marginLeft: '0.5rem' }}>Create a new post</span>
      </div>
    </Button>
  </div>);
}

export default PostsEditorListHeader;