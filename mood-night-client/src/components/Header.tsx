import React, { SyntheticEvent } from 'react';
import { Theme } from '@emotion/react';
import { Button, Logo, UserAvatar, CustomAccordion } from 'components';
import { AccordionItemInterface } from 'components/common/CustomAccordion/CustomAccordion';
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

const navbarItems = [
  { text: 'Lorem', onClick: (e: SyntheticEvent) => console.log('Lorem') },
  { text: 'Lorem', onClick: (e: SyntheticEvent) => console.log('Lorem') },
  { text: 'Lorem', onClick: (e: SyntheticEvent) => console.log('Lorem') },
];

function Header({ ...rest }: HeaderPropsInterface) {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector(selectSignedInUser);

  const dropdownItems: AccordionItemInterface[] = [
    {
      text: 'Posts Editor',
      onClick: (e: SyntheticEvent) => {
        // Replace navigate with history.push if using react-router-dom
        navigate(PATHS.POSTS_EDITOR);
      },
      type: 'item',
    },
    {
      text: 'Account Editor',
      onClick: (e: SyntheticEvent) => {
        // Replace navigate with history.push if using react-router-dom
        navigate(PATHS.ACCOUNT_EDITOR);
      },
      type: 'item',
    },
    {
      type: 'divider',
    },
    {
      text: 'Sign Out',
      onClick: (e: SyntheticEvent) => {
        console.log('Sign Out');
      },
      type: 'item',
    },
  ];

  const [signOut, { isLoading }] = useSignOutUserMutation();
  const signOutHandler = async () => {
    await signOut();
    navigate(PATHS.SIGNIN);
  }

  return (
    <div css={(theme) => ({
      height: '3.5rem',
      width: '100%',
      position: 'fixed',
      zIndex: 1000,
      background: theme.colors.background.gradient.primary,
      borderBottom: `1px solid ${theme.colors.border.light}`,
    })}>
      <div css={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
      }}>
        <div css={{ display: 'flex', height: 'inherit' }}>
          <div css={(theme) => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1.5em 0 1.5em',
            borderRight: `1px solid ${theme.colors.border.light}`,
            height: 'inherit'
          })}>
            <span css={(theme) => ({ fontWeight: 'bold', color: theme.colors.text.light })}>MOODNIGHT</span>
          </div>
          <nav css={(theme) => ({
            color: theme.colors.text.light,
          })}>
            <ul css={{
              height: '100%',
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              'li': {
                display: 'flex',
                alignItems: 'center',
              }
            }}>
              {navbarItems.map((item, index) => (
                <li key={index} css={{
                  // padding: '0 1em 0 1em',
                }}>
                  <Button css={(theme) => ({
                    height: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    color: theme.colors.text.light,
                    fontSize: '0.85em',
                    borderRadius: 'unset',
                    padding: '0 2.5rem',
                    borderLeft: index !== 0 ? `${theme.colors.border.light} 1px solid` : 'none',
                    '&:hover, &:active, &:focus': {
                      color: `${theme.colors.text.hover.light} !important`,
                      borderLeft: index !== 0 ? `${theme.colors.text.light} 1px solid` : 'none',
                    }
                  })} color='link' onClick={item.onClick}>
                    {item.text.toUpperCase()}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div css={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <span css={(theme) => ({
            color: theme.colors.text.light,
          })}>
            Satanovskyi Vitalii
          </span>
          <CustomAccordion items={dropdownItems} name='text'>
            <UserAvatar />
          </CustomAccordion>
        </div>
      </div>
    </div >
  );

  // return <div css={(theme) => ({
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: pagesShowSideBar[location.pathname] ? 'flex-end' : 'space-between',
  //   width: '100%',
  //   padding: '0.5rem',
  //   borderBottom: `1px solid ${theme.colors.background.gradient.primary}`,
  // })}
  //   {...rest}>
  //   {!pagesShowSideBar[location.pathname] && <Logo />}
  //   <div>
  //     {!user && <Button color='link' onClick={() => navigate(PATHS.SIGNIN)}>Sign In</Button>}
  //     {user && <Button disabled={isLoading} color='link' onClick={signOutHandler}>Sign Out</Button>}
  //     {!user && <Button color='link' onClick={() => navigate(PATHS.SIGNUP)}>Sign Up</Button>}
  //     <Button color='link' id='test'>
  //       <CustomAccordion items={dropdownItems} name='text'>
  //         <UserAvatar />
  //       </CustomAccordion>
  //     </Button>
  //   </div>
  // </div>;
}

export default Header;