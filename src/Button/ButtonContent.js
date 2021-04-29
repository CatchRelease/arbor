import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Grid from '../Grid';

const gridTemplateColumns = ({ hasText, iconStart, iconEnd }) => {
  if (hasText) {
    if (iconStart && iconEnd) {
      return '0fr 1fr 0fr';
    }

    if (iconStart) {
      return '0fr 1fr';
    }

    if (iconEnd) {
      return '1fr 0fr';
    }

    return '1fr';
  }

  if (iconStart && iconEnd) {
    return '0fr 0fr';
  }

  return '0fr';
};

const ButtonContent = styled(Grid)`
  grid-template-columns: ${gridTemplateColumns};
  visibility: ${(props) => (props.spin ? 'hidden' : 'inherit')};
`;

ButtonContent.propTypes = {
  hasText: PropTypes.bool,
  iconEnd: PropTypes.element,
  iconStart: PropTypes.element,
  spin: PropTypes.bool.isRequired
};

ButtonContent.defaultProps = {
  ...Grid.defaultProps,
  display: 'inline-grid',
  alignItems: 'center',
  hasText: false,
  iconEnd: undefined,
  iconStart: undefined
};

export default ButtonContent;
