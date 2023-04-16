import { useMemo } from 'react';
import { FormGroup, Label, Col } from '../..';

interface FormRowInterface {
  label?: string;
  labelWidth?: number;
  children: React.ReactNode;
}

function FormRow({ label, labelWidth = 4, children }: FormRowInterface) {
  const _labelWidth = useMemo(() => label ? labelWidth : 0, []);
  return (
    <FormGroup row>
      <Label
        xs={label ? 3 : 0}
        md={_labelWidth}
      >
        {label}
      </Label>
      <Col
        xs={label ? 9 : 12}
        md={12 - _labelWidth}
      >
        {children}
      </Col>
    </FormGroup>
  );
}

export default FormRow;