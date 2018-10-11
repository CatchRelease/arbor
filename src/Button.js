import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { transparentize } from 'polished';
import {
  colors,
  borderRadius,
  fontWeights,
  lineHeights,
  spacings
} from './theme';

import Paragraph from './Paragraph';

const Button = styled(Paragraph.UI.withComponent('button'))`
  border: none;
  color: ${colors.white};
  font-weight: ${fontWeights.medium};
  line-height: ${lineHeights.large};
  margin-bottom: 0;
  outline: none;
  transition: box-shadow 0.3s ease, background 0.2s ease;
`;

Button.CTA = styled(Button.withComponent('button'))`
  background: ${colors.blue};
  border-radius: ${borderRadius.large};
  box-shadow: 0px 1px 3px ${transparentize(0.7, colors.blue)},
    inset 0px -1px 0px ${transparentize(0.9, colors.black)};
  padding: ${spacings.small} 0;
  text-transform: uppercase;
  width: 328px;

  &:hover:enabled {
    background: ${colors.blueLight};
    box-shadow: 0px 2px 6px ${transparentize(0.8, colors.blueLight)};
  }

  &:disabled {
    background: ${colors.grey80};
    box-shadow: none;
  }

  &:active:enabled {
    background: ${colors.blue};
    box-shadow: 0px 0px 0px 1px ${colors.white},
      ${colors.blueDark} 0px 0px 0px 2px;
  }
`;

Button.CTA.displayName = 'Button.CTA';

Button.CTA.propTypes = {
  disabled: PropTypes.bool
};

Button.CTA.defaultProps = {
  disabled: false
};

export default Button;
