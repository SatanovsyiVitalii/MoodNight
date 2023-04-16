import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '../';
import { pagesShowSideBar } from 'App';
interface PagePropsInterface {
  children: React.ReactNode;
  css?: {
    background?: string;
    padding?: string;
  };
}

function Page({ children, ...rest }: PagePropsInterface) {
  const location = useLocation();
  return (
    <div
      css={(theme) => ({
        padding: '2rem 3rem',
        width: pagesShowSideBar[location.pathname] ? `calc(100% - 14rem)` : '100%',
      })}
      {...rest}
    >
      <Container
        fluid
        css={{
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
        }}
      >
        {children}
      </Container>
    </div>
  );
}

export default Page;