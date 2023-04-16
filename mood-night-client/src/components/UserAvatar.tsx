import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

function UserAvatar() {
  return <img
    css={{
      height: '2.5rem',
      width: '2.5rem',
      borderRadius: '50%',
      margin: '0 1.5rem',
    }}
    src='/images/undraw_profile.svg'
  />;
}

export default UserAvatar;