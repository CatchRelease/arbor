import React from 'react';
import PropTypes from 'prop-types';

import StyledButton from './StyledButton';
import ButtonText from './ButtonText';

const Button = React.forwardRef(
  ({ iconStart, iconEnd, children, ...props }, ref) => (
    <StyledButton {...{ ...props, iconStart, iconEnd, ref }} text={children}>
      {iconStart}
      {children && (
        <ButtonText {...{ iconStart, iconEnd, ...props }}>
          {children}
        </ButtonText>
      )}
      {iconEnd}
    </StyledButton>
  )
);

Button.propTypes = {
  /**
   * Disabled state of button
   * */
  disabled: PropTypes.bool,

  /**
   * Button size
   * */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'jumbo']),

  /**
   * Button variant.
   * */
  variant: PropTypes.oneOf(['primary', 'secondary', 'minimal']),

  /**
   * Property to set for a button to take the full width of it's parent
   * container.
   * */
  fullWidth: PropTypes.bool,

  iconStart: PropTypes.element,

  iconEnd: PropTypes.element
};

Button.defaultProps = {
  disabled: false,
  size: 'large',
  variant: 'primary',
  fullWidth: false,
  iconStart: undefined,
  iconEnd: undefined
};

export default Button;
