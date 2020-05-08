import React from 'react';

import Pane from '../Pane';

const Card = (props) => <Pane {...props} />;

Card.defaultProps = {
  borderRadius: 'large'
};

export default Card;
