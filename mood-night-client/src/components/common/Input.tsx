import React from 'react';
import styled from '@emotion/styled';
import { Input } from 'reactstrap';

const StyledInput = styled(Input)`
  height: calc(1.5em + .75rem + 2px);
  font-size: .8rem;
  border-radius: 10rem;
  padding: 1.5rem 1rem;
  ${({ theme }) => 'color: ' + theme.colors.text.darkest};'
  `;

function CustomInput({ ...rest }) {
  return <StyledInput {...rest} />
}

export default CustomInput;