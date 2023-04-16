import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { Input } from '../../..';

type InputAdapterProps = FieldRenderProps<string, any>;

function InputAdapter({ input, meta }: InputAdapterProps) {
  return (
    <div>
      <Input customCSS={(theme: any) => ({ border: meta.error && meta.touched && `1px solid ${theme.colors.border.system.danger} !important` })} {...input} />
      {meta.error && meta.touched && <div css={(theme) => ({ color: theme.colors.text.system.danger })}>{meta.error}</div>}
    </div>
  );
}

export default InputAdapter;