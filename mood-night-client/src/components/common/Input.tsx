import styled from '@emotion/styled';
import { Input } from 'reactstrap';
// ${({ customCSS = {}, theme }) => 'border: ' + typeof customCSS === 'function' ? customCSS(theme).border : customCSS.border};
const StyledInput = styled(Input)`
  height: calc(1.5em + .75rem + 2px);
  font-size: .8rem;
  border-radius: 10rem;
  padding: 1.5rem 1rem;
  ${({ customCSS = {}, theme }) => { return 'border: ' + (typeof customCSS === 'function' ? customCSS(theme).border : customCSS.border) }};
  ${({ theme }) => 'color: ' + theme.colors.text.darkest};
  `;

function CustomInput({ ...rest }) {
  console.log('rest', rest);
  return <StyledInput {...rest} />
}

export default CustomInput;