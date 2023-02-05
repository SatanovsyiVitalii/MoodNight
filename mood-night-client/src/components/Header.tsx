/** @jsx jsx */ import { jsx } from '@emotion/react';
import React from 'react';
import { Button } from 'components';
import { useSelector } from 'react-redux';
import { selectUser, User } from 'store';

function Header() {

  const user: User | null = useSelector(selectUser);
  return <div css={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }}>
    <div>
      <span css={{ display: 'inline-block', marginRight: '1rem' }}>MoodNight</span>
      {user && <span>Hello, dear {user['email']}</span>}
    </div>
    <div>
      <Button color='link'>Sign In</Button>
      <Button color='link'>Sign Up</Button>
    </div>
  </div>;
}

export default Header;