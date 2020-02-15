import styled from '@emotion/styled';
import Box from '../Box';

const StyledTabs = styled(Box.withComponent('div'))`
  justify-content: space-between;
`;

StyledTabs.defaultProps = {
  ...Box.defaultProps,
  borderBottom: '1px solid transparent',
  borderColor: 'border.muted',
  display: 'inline-flex',
  width: '100%'
};

export default StyledTabs;
