/** @jsx jsx */ import { jsx } from '@emotion/react';
import React from 'react';
import { Container } from '../';

interface PagePropsInterface {
  children: React.ReactNode;
}

function Page({ children }: PagePropsInterface) {
  return (
    <div>
      <Container
        fluid
        css={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </Container>
    </div>
  );
}

export default Page;