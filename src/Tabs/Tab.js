import React from 'react';
import PropTypes from 'prop-types';

import StyledTab from './StyledTab';

const Tab = props => <StyledTab {...props} />;

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  id: PropTypes.string.isRequired,
  tabIndex: PropTypes.string
};

Tab.defaultProps = {
  active: false,
  tabIndex: '0'
};

export default Tab;
