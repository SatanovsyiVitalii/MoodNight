import React from 'react';
import { ModalBody } from '../../';

export interface CustomModalBodyPropsInterface {
  children: React.ReactNode;
}

function CustomModal({ children }: CustomModalBodyPropsInterface) {
  return <ModalBody>
    {children}
  </ModalBody>;
}

export default CustomModal;