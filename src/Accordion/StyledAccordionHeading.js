import styled from '@emotion/styled';

import Heading from '../Heading';

const StyledHeading = styled(Heading.h4.withComponent('h1'))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;

StyledHeading.defaultProps = {
  ...Heading.h4.defaultProps
};

export default StyledHeading;
