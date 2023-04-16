import React, { SyntheticEvent } from 'react';
import { Theme } from '@emotion/react';
import { Button, Logo, UserAvatar, CustomAccordion } from 'components';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PATHS } from 'routes/constants';
import { useSignOutUserMutation } from 'store/apis/userApi';
import { selectSignedInUser } from 'store/slices/userSlice';
import { pagesShowSideBar } from 'App';

interface HeaderPropsInterface {
  css?: {
    background?: string;
  }
}

function Header({ ...rest }: HeaderPropsInterface) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector(selectSignedInUser);

  const dropdownItems = [
    { text: 'Posts Editor', onClick: (e: SyntheticEvent) => navigate(PATHS.POSTS_EDITOR) },
    { text: 'Account Editor', onClick: (e: SyntheticEvent) => navigate(PATHS.ACCOUNT_EDITOR) },
    {
      text: 'Sign Out', onClick: (e: SyntheticEvent) => { console.log('Sign Out') },
      css: (theme: Theme) => ({
        background: theme.colors.background.gradient.primary,
        color: theme.colors.background.gradient.primary,
      }),
    },
  ];

  const [signOut, { isLoading }] = useSignOutUserMutation();
  const signOutHandler = async () => {
    await signOut();
    navigate(PATHS.SIGNIN);
  }

  return <div css={(theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: pagesShowSideBar[location.pathname] ? 'flex-end' : 'space-between',
    width: '100%',
    padding: '0.5rem',
    borderBottom: `1px solid ${theme.colors.background.gradient.primary}`,
  })}
    {...rest}>
    {!pagesShowSideBar[location.pathname] && <Logo />}
    <div>
      {!user && <Button color='link' onClick={() => navigate(PATHS.SIGNIN)}>Sign In</Button>}
      {user && <Button disabled={isLoading} color='link' onClick={signOutHandler}>Sign Out</Button>}
      {!user && <Button color='link' onClick={() => navigate(PATHS.SIGNUP)}>Sign Up</Button>}
      <Button color='link' id='test'>
        <CustomAccordion items={dropdownItems} name='text'>
          <UserAvatar />
        </CustomAccordion>
      </Button>
    </div>
  </div>;
}

export default Header;