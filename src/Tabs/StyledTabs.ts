import styled from '@emotion/styled';
import Box, { BoxProps } from '../Box';

export type Props = BoxProps;

const StyledTabs = styled(Box)<Props>`
  justify-content: space-between;
`;

StyledTabs.defaultProps = {
  borderBottom: '1px solid transparent',
  borderColor: 'border.muted',
  display: 'inline-flex',
  width: '100%'
};

export default StyledTabs;
