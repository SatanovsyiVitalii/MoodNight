import React from 'react';
import { ModalFooterProps } from 'reactstrap';
import { ModalFooter, Button } from '../../';

export interface CustomModalFooterPropsInterface extends ModalFooterProps {
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

function CustomModalFooter({ onClick, onClose }: CustomModalFooterPropsInterface) {
  return <ModalFooter css={{ justifyContent: 'center' }}>
    <Button onClick={onClose} color='link'>
      Close
    </Button>
    <Button type="submit" color='primary'>
      Create
    </Button>
  </ModalFooter>;
}

export default CustomModalFooter;