import createWithComponent from '../utils/createWithComponent';
import Flex from '../Flex';

const CardRow = createWithComponent(Flex, 'div', {
  defaultProps: {
    px: 'regular',
    py: 'smallest',
    my: 'smaller',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default CardRow;
