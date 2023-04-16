
import React from 'react';
import { Container, Row } from '../../';

interface ProductTablePropsInterface<T> {
  renderRaw: Function;
  data: T[] | undefined,
}

function ProductTable<T extends { id: number }>({ data, renderRaw }: ProductTablePropsInterface<T>) {
  return <Container css={(theme) => ({
    borderTop: `1px solid ${theme.colors.background.gradient.primary}`,
    borderBottom: `1px solid ${theme.colors.background.gradient.primary}`,
  })}>
    {data?.map((cell) => (<Row key={cell.id}>
      {renderRaw(cell)}
    </Row>))}
  </Container>;
}

export default ProductTable;