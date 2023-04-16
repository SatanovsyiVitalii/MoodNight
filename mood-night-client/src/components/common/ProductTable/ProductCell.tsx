
import React from 'react';
import { Col } from '../../';

interface ProductCellPropsInterface {
  children: React.ReactNode;
  css?: {
    justifyContent: string;
  };
}

function ProductCell({ children, css, ...rest }: ProductCellPropsInterface) {
  return <Col css={(theme) => ({
    color: theme.colors.background.gradient.primary,
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    ...css,
  })} {...rest}>
    {children}
  </Col>;
}

export default ProductCell;