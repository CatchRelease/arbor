import styled from '@emotion/styled';

import Box from '../Box';

const RadioButtonInput = styled(Box)`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

RadioButtonInput.defaultProps = {
  as: 'input'
};

export default RadioButtonInput;
