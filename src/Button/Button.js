import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import ButtonContent from './ButtonContent';
import ButtonSpinner from './ButtonSpinner';
import SIZES from './sizes';
import StyledButton from './StyledButton';
import Text from '../Text';
import VARIANTS from './variants';
import intent from '../theme/colors/intent';
import palette from '../theme/colors/palette';

const INTENTS = Object.keys(intent);

const Button = forwardRef(
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
  fullWidth: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.bool),
    PropTypes.bool
  ]),

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
   * Button color as a key of the theme's color palette, for overriding variant styles.
   * */
  paletteColor: PropTypes.oneOf(['', ...Object.keys(palette)]),

  /**
   * Indicate if the spinner should display.
   */
  spin: PropTypes.bool,

  /**
   * Button size
   * */
  size: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOf(SIZES)),
    PropTypes.oneOf(SIZES)
  ]),

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
  iconEnd: undefined,
  iconStart: undefined,
  intent: 'brand',
  paletteColor: '',
  size: 'large',
  spin: false,
  type: undefined,
  variant: 'primary'
};

export default Button;
