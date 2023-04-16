import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from 'routes/constants';
import Button from './common/Button';
import logo from '../static/images/logo.png';

function Logo() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(PATHS.HOME)} css={{ padding: 0 }} color='link'><div css={(theme) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
    borderRadius: '20px',
    color: theme.colors.background.gradient.primary,
    maxWidth: '10rem'
  })}>
    <img
      css={{
        height: '3rem',
        width: '9rem',
        objectFit: 'cover'
      }}
      src={logo}
      alt='home'
    />
  </div></Button>;
}

export default Logo;