import styled from '@emotion/styled';

import {
  borders,
  borderColor,
  display,
  fontWeight,
  fontSize,
  lineHeight,
  space,
  variant
} from 'styled-system';

import textTransform from '../utils/textTransform';
import variantStyles from './variantStyles';
import whiteSpace from '../utils/whiteSpace';

const fullWidth = variant({
  prop: 'fullWidth',
  variants: {
    true: {
      width: '100%'
    },
    false: {
      width: 'auto'
    }
  }
});

const size = variant({
  prop: 'size',
  scale: 'buttons.sizes',
  variants: {
    small: {},
    medium: {},
    large: {},
    jumbo: {}
  }
});

const StyledButton = styled.button`
  appearance: none;
  outline: none;
  position: relative;
  text-align: center;

  &:disabled {
    background: ${(props) => props.theme.colors.background.disabled};
    border: 1px solid transparent;
    color: ${(props) => props.theme.colors.text.disabled};
    cursor: not-allowed;
  }

  &:enabled {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  i {
    transition: all 0.3s ease;
    vertical-align: middle;
  }

  ${size};
  ${variantStyles};
  ${fontWeight};
  ${fontSize};
  ${fullWidth};
  ${lineHeight};
  ${space};
  ${textTransform};
  ${whiteSpace};
  ${borders};
  ${borderColor};
  ${display};
`;

StyledButton.propTypes = {
  ...borders.propTypes,
  ...borderColor.propTypes,
  ...fontWeight.propTypes,
  ...fontSize.propTypes,
  ...lineHeight.propTypes,
  ...space.propTypes,
  ...textTransform.propTypes,
  ...whiteSpace.propTypes,
  ...display.propTypes
};

StyledButton.defaultProps = {
  border: '1px solid transparent',
  borderRadius: 'small',
  fontWeight: 'medium',
  lineHeight: 'regular'
};

export default StyledButton;
