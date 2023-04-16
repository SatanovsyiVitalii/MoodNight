import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

function UserAvatar() {
  return <div>
    <div css={(theme) => ({
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: `3px solid ${theme.colors.background.gradient.primary}`,
      borderRadius: '50px',
      width: '4rem',
      height: '4rem'
    })}>
      <FaUserAlt css={(theme) => ({ fontSize: '2rem', color: theme.colors.background.gradient.primary })} />
    </div>
  </div>;
}

export default UserAvatar;