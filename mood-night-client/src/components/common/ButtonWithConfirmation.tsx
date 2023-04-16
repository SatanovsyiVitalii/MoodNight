import React from 'react';
import Swal from 'sweetalert2';
import { Button } from 'components';

interface ButtonWithConfirmationPropsInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'link' | 'danger';
  children: React.ReactNode;
}

function ButtonWithConfirmation({ children, onClick, ...rest }: ButtonWithConfirmationPropsInterface) {

  const onClickHandler = async (event: any) => {
    if (onClick) {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          onClick(event);
        }
      })
    }
  }

  return <Button onClick={onClickHandler} {...rest}>
    {children}
  </Button>;
}

export default ButtonWithConfirmation;