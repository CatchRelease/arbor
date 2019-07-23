import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import ButtonText from './ButtonText';

const Button = React.forwardRef(
  ({ iconStart, iconEnd, children, variant, type, ...props }, ref) => (
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
      {iconStart}
      {children && (
        <ButtonText {...{ iconStart, iconEnd }}>{children}</ButtonText>
      )}
      {iconEnd}
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
   * Icon to render after the button text.
   */
  iconEnd: PropTypes.element,

  /**
   * Icon to render before the button text.
   */
  iconStart: PropTypes.element,

  /**
   * Property to set for a button to take the full width of it's parent
   * container.
   * */
  fullWidth: PropTypes.bool,

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
  size: 'large',
  type: undefined,
  variant: 'primary'
};

export default Button;
