import React from 'react';
import Button, { ButtonColors } from '../Button';

interface FormFooterInterface {
  text: string;
}

function FormFooter({ text }: FormFooterInterface) {
  return (
    <Button color='primary'>
      {text}
    </Button>
  )
}

export default FormFooter;