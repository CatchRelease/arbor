import Box from '../Box';

const DescriptionTerm = Box.withComponent('dt');

DescriptionTerm.defaultProps = {
  ...Box.defaultProps,
  color: 'text.muted',
  fontSize: 'size3',
  lineHeight: 'small',
  mb: 'smallest'
};

export default DescriptionTerm;
