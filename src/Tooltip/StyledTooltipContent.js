import Box from '../Box';

const StyledTooltipContent = Box.withComponent('div');

StyledTooltipContent.defaultProps = {
  bg: 'monochrome.grey90',
  borderRadius: 'small',
  color: 'white',
  fontSize: 'size4',
  p: 'smaller'
};

export default StyledTooltipContent;
