import Pane from '../Pane';
import createWithComponent from '../utils/createWithComponent';

const Card = createWithComponent(Pane, 'div', {
  defaultProps: {
    borderRadius: 'large'
  }
});

export default Card;
