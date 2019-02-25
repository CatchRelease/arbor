import styled from '@emotion/styled';

import Box from '../Box';
import createWithComponent from '../utils/createWithComponent';

const CheckboxInput = styled(createWithComponent(Box, 'input'))`
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  opacity: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export default CheckboxInput;
