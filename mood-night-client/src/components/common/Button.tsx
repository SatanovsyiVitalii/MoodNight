/** @jsx jsx */ import { jsx } from '@emotion/react';
import React from 'react';
import { Button } from 'reactstrap';

export enum ButtonColors {
  Primary,
  Secondary
};

interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'link';
  children: string | React.ReactNode;
}

function CustomButton({ color = 'primary', children, ...rest }: ButtonPropsInterface) {

  let _color;
  let css = {};

  if (color === 'primary') {
    _color = 'primary';
  } else if (color === 'secondary') {
    _color = 'secondary';
  } else if (color === 'link') {
    _color = 'link';
    css = {
      textDecoration: 'none',
    };
  }

  return (
    <Button color={_color} css={css} {...rest}>
      {children}
    </Button>
  );
}

export default CustomButton;