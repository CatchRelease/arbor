import React from 'react';

import Grid from '../Grid';

const Pane = props => <Grid {...props} />;

Pane.defaultProps = {
  bg: 'background.white',
  boxShadow: 'elevation0',
  width: '100%'
};

export default Pane;
