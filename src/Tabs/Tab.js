import PropTypes from 'prop-types';

import StyledTab from './StyledTab';

const Tab = ({ children, ...props }) => (
  <StyledTab {...props}>{children}</StyledTab>
);

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  id: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tabIndex: PropTypes.string
};

Tab.defaultProps = {
  active: false,
  onClick: null,
  tabIndex: '0'
};

export default Tab;
