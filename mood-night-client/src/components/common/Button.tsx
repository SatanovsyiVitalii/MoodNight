import React from 'react';
import { Button } from 'reactstrap';

export enum ButtonColors {
  Primary,
  Secondary
};

interface ButtonPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'link' | 'danger' | 'success';
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
  } else if (color === 'danger') {
    _color = 'danger';
  } else if (color === 'success') {
    _color = 'success';
  }

  return (
    <Button color={_color} css={css} {...rest}>
      {children}
    </Button>
  );
}

export default CustomButton;