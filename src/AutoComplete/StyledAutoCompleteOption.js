import PropTypes from 'prop-types';

import MenuItem from '../MenuItem';
import Text from '../Text';

const StyledAutoCompleteOption = ({ cx, innerProps, children, ...props }) => (
  <MenuItem as="li" {...{ ...innerProps, ...props }}>
    <Text>{children}</Text>
  </MenuItem>
);

StyledAutoCompleteOption.propTypes = {
  cx: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  innerProps: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default StyledAutoCompleteOption;
