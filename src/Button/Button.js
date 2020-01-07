import React from 'react';
import PropTypes from 'prop-types';

import ButtonContent from './ButtonContent';
import ButtonSpinner from './ButtonSpinner';
import SIZES from './sizes';
import StyledButton from './StyledButton';
import Text from '../Text';
import VARIANTS from './variants';
import intent from '../theme/colors/intent';

const INTENTS = Object.keys(intent);

const Button = React.forwardRef(
  ({ children, iconStart, iconEnd, spin, variant, type, ...props }, ref) => (
    <StyledButton
      {...{
        className: `button--${variant}`,
        iconEnd,
        iconStart,
        ref,
        type,
        variant,
        ...props
      }}
    >
      {spin && <ButtonSpinner {...{ variant, ...props }} />}
      <ButtonContent {...{ hasText: !!children, iconStart, iconEnd, spin }}>
        {iconStart}
        {children && (
          <Text color="inherit" fontSize="inherit">
            {children}
          </Text>
        )}
        {iconEnd}
      </ButtonContent>
    </StyledButton>
  )
);

Button.propTypes = {
  /**
   * Content to render inside the button.
   */
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),

  /**
   * Disabled state of button
   * */
  disabled: PropTypes.bool,

  /**
   * Property to set for a button to take the full width of it's parent
   * container.
   * */
  fullWidth: PropTypes.bool,

  /**
   * Icon to render after the button text.
   */
  iconEnd: PropTypes.element,

  /**
   * Icon to render before the button text.
   */
  iconStart: PropTypes.element,

  /**
   * Intent color to use in conjunction with variant
   * */
  intent: PropTypes.oneOf(INTENTS),

  /**
   * Indicate if the spinner should display.
   */
  spin: PropTypes.bool,

  /**
   * Button size
   * */
  size: PropTypes.oneOf(SIZES),

  /**
   * Button type.
   */
  type: PropTypes.string,

  /**
   * Button variant.
   * */
  variant: PropTypes.oneOf(VARIANTS)
};

Button.defaultProps = {
  children: undefined,
  disabled: false,
  fullWidth: false,
  intent: 'brand',
  iconEnd: undefined,
  iconStart: undefined,
  spin: false,
  size: 'large',
  type: undefined,
  variant: 'primary'
};

export default Button;
