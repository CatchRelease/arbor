import PropTypes from 'prop-types';
import { propType } from '@styled-system/prop-types';

import Grid from '../Grid';

const Pane = ({ innerRef, ...props }) => <Grid ref={innerRef} {...props} />;

Pane.propTypes = {
  bg: propType,
  boxShadow: propType,
  innerRef: PropTypes.func,
  overflow: propType,
  width: propType
};

Pane.defaultProps = {
  bg: 'background.white',
  boxShadow: 'elevation0',
  innerRef: undefined,
  overflow: 'hidden',
  width: '100%'
};

export default Pane;
