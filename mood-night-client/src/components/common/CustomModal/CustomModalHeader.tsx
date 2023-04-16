import React from 'react';
import { ModalHeaderProps } from 'reactstrap';
import { ModalHeader } from '../../';

export interface CustomModalHeaderPropsInterface extends ModalHeaderProps {
  children: React.ReactNode;
}

function CustomModalHeader({ toggle, children }: CustomModalHeaderPropsInterface) {
  return <ModalHeader toggle={toggle}>
    {children}
  </ModalHeader>;
}

export default CustomModalHeader;