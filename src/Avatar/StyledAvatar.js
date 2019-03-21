import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Flex from '../Flex';

import { avatarSizes } from '../theme';

const StyledAvatar = styled(Flex)`
  width: ${props => props.theme.avatarSizes[props.size]};
  height: ${props => props.theme.avatarSizes[props.size]};
`;

StyledAvatar.propTypes = {
  size: PropTypes.oneOf(Object.keys(avatarSizes))
};

StyledAvatar.defaultProps = {
  size: 'default'
};

export default StyledAvatar;
