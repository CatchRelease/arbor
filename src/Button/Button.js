import React from 'react';
import PropTypes from 'prop-types';

import ButtonContent from './ButtonContent';
import ButtonSpinner from './ButtonSpinner';
import ButtonText from './ButtonText';
import StyledButton from './StyledButton';

const Button = React.forwardRef(
  ({ children, iconStart, iconEnd, spin, variant, type, ...props }, ref) => (
    <StyledButton
      {...{
        ...props,
        iconStart,
        iconEnd,
        ref,
        type,
        variant,
        className: `button--${variant}`
      }}
      text={children}
    >
      <ButtonSpinner {...{ spin, variant, ...props }} />
      <ButtonContent spin={spin}>
        {iconStart}
        {children && (
          <ButtonText {...{ iconStart, iconEnd }}>{children}</ButtonText>
        )}
        {iconEnd}
      </ButtonContent>
    </StyledButton>
  )
);

Button.propTypes = {
  /**
   * Text to render inside the button.
   */
  children: PropTypes.string,

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
   * Indicate if the spinner should display.
   */
  spin: PropTypes.bool,

  /**
   * Button size
   * */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'jumbo']),

  /**
   * Button type.
   */
  type: PropTypes.string,

  /**
   * Button variant.
   * */
  variant: PropTypes.oneOf(['primary', 'secondary', 'minimal'])
};

Button.defaultProps = {
  children: undefined,
  disabled: false,
  fullWidth: false,
  iconEnd: undefined,
  iconStart: undefined,
  spin: false,
  size: 'large',
  type: undefined,
  variant: 'primary'
};

export default Button;
