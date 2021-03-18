import Flex from '../Flex';

const CardRow = (props) => <Flex {...props} />;

CardRow.defaultProps = {
  px: 'regular',
  py: 'smallest',
  my: 'smaller',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export default CardRow;
