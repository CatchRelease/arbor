import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Flex from '../Flex';
import palette from '../theme/colors/palette';

const getBackground = ({ paletteColor, subtle, theme }) => {
  if (paletteColor) {
    return subtle
      ? theme.colors.palette[paletteColor].lighter
      : theme.colors.palette[paletteColor].default;
  }

  return subtle
    ? theme.colors.monochrome.grey20
    : theme.colors.monochrome.grey100;
};

const getBorderColor = ({ paletteColor, theme }) =>
  paletteColor
    ? theme.colors.palette[paletteColor].default
    : theme.colors.monochrome.grey100;

const StyledBadge = styled(Flex)`
  background: ${getBackground};
  border-color: ${getBorderColor};
  border-radius: ${(props) => (props.variant === 'pill' ? '999px' : '2px')};
`;

StyledBadge.propTypes = {
  children: PropTypes.node.isRequired,
  paletteColor: PropTypes.oneOf(['', ...Object.keys(palette)]),
  subtle: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'pill'])
};

StyledBadge.defaultProps = {
  alignItems: 'center',
  border: '1px solid',
  paletteColor: '',
  height: '24px',
  maxWidth: '100%',
  px: 'smaller'
};

export default StyledBadge;
