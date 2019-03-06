import styled from '@emotion/styled';

import Heading from '../Heading';
import createWithComponent from '../utils/createWithComponent';

const StyledHeading = styled(createWithComponent(Heading.h4, 'h1'))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;

export default StyledHeading;
