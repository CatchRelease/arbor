import styled from '@emotion/styled';

import Heading from '../Heading';

const StyledHeading = styled(Heading.H4)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;

StyledHeading.defaultProps = {
  as: 'h1'
};

export default StyledHeading;
