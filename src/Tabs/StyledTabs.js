import Box from '../Box';

const StyledTabs = Box.withComponent('div');

StyledTabs.defaultProps = {
  ...Box.defaultProps,
  borderBottom: '1px solid transparent',
  borderColor: 'border.muted',
  display: 'inline-block'
};

export default StyledTabs;
