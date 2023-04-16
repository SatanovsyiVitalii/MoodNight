import React from 'react';
import { ModalProps } from 'reactstrap';
import { Modal } from '../../';

export interface CustomModalPropsInterface extends ModalProps {
  children: React.ReactNode;
}

function CustomModal({ toggle, children }: CustomModalPropsInterface) {
  return <Modal
    isOpen
    toggle={toggle}
    size='xl'
  >
    {children}
  </Modal>;
}

export default CustomModal;