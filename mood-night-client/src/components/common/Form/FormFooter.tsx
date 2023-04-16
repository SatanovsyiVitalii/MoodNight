import React from 'react';
import Button from '../Button';

interface FormFooterInterface {
  text: string;
  disabled?: boolean;
}

function FormFooter({ text, disabled }: FormFooterInterface) {
  return (
    <Button css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 'calc(1.5em + .75rem + 2px)',
      fontSize: '0.8rem',
      borderRadius: '10rem',
      padding: '1.5rem 1rem',
    }} color='primary' disabled={disabled}>
      {text}
    </Button>
  )
}

export default FormFooter;