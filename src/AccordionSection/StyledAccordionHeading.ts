import styled from '@emotion/styled';

import Heading, { HeadingProps } from '../Heading';

type Props = HeadingProps;

const StyledAccordionHeading = styled(Heading)<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0;
`;

export default StyledAccordionHeading;
