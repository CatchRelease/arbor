import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../Grid';

const Pane = ({ innerRef, ...props }) => <Grid ref={innerRef} {...props} />;

Pane.propTypes = {
  bg: PropTypes.string,
  boxShadow: PropTypes.string,
  innerRef: PropTypes.func,
  overflow: PropTypes.string,
  width: PropTypes.string
};

Pane.defaultProps = {
  bg: 'background.white',
  boxShadow: 'elevation0',
  innerRef: undefined,
  overflow: 'hidden',
  width: '100%'
};

export default Pane;
