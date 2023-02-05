import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Input } from '../../..';

type InputAdapterProps = FieldRenderProps<string, any>;

function InputAdapter({ input, meta, ...rest }: InputAdapterProps) {
  return (
    <Input {...input} {...rest} />
  );
}

export default InputAdapter;