import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Flex from '../Flex';
import palette from '../theme/colors/palette';

const getBackground = ({ color, subtle, theme }) => {
  if (color) {
    return subtle
      ? theme.colors.palette[color].lighter
      : theme.colors.palette[color].default;
  }

  return subtle
    ? theme.colors.monochrome.grey20
    : theme.colors.monochrome.grey100;
};

const getBorderColor = ({ color, theme }) =>
  color ? theme.colors.palette[color].default : theme.colors.monochrome.grey100;

const StyledBadge = styled(Flex)`
  background: ${getBackground};
  border-color: ${getBorderColor};
  border-radius: ${props => (props.variant === 'pill' ? '999px' : '2px')};
`;

StyledBadge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['', ...Object.keys(palette)]),
  subtle: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'pill'])
};

StyledBadge.defaultProps = {
  alignItems: 'center',
  border: '1px solid',
  color: '',
  height: '24px',
  px: 'smaller'
};

export default StyledBadge;
