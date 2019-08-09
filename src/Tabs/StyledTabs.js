import Box from '../Box';

const StyledTabs = Box.withComponent('div');

StyledTabs.defaultProps = {
  ...Box.defaultProps,
  borderBottom: '2px solid transparent',
  borderColor: 'border.default',
  display: 'inline-block'
};

export default StyledTabs;
