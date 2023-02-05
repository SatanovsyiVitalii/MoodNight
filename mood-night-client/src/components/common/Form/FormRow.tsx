import React from 'react';
import { FormGroup, Label, Col } from '../..';

interface FormRowInterface {
  label: string;
  labelWidth?: number;
  children: React.ReactNode;
}

function FormRow({ label, labelWidth = 4, children }: FormRowInterface) {
  return (
    <FormGroup row>
      <Label
        xs={3}
        md={labelWidth}
      >
        {label}
      </Label>
      <Col
        xs={9}
        md={12 - labelWidth}
      >
        {children}
      </Col>
    </FormGroup>
  );
}

export default FormRow;