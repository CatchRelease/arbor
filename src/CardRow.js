import Flex from './Flex';

const CardRow = Flex.withComponent('div');

CardRow.defaultProps = {
  px: 'regular',
  py: 'smallest',
  my: 'smaller',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export default CardRow;
