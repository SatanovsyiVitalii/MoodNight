import React from 'react';
import { Input } from 'reactstrap';

function CustomInput({ ...rest }) {
  return <Input {...rest} />
}

export default CustomInput;