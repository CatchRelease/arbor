import Box from '../Box';

const DescriptionDetails = Box.withComponent('dd');

DescriptionDetails.defaultProps = {
  color: 'text.default',
  fontSize: 'size4',
  lineHeight: 'small',
  mb: 'regular'
};

export default DescriptionDetails;
