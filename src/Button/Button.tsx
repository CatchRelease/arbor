import { ButtonHTMLAttributes, FC, forwardRef, ReactNode } from 'react';
import { BackgroundColorProps } from 'styled-system';

import ButtonContent from './ButtonContent';
import ButtonSpinner from './ButtonSpinner';
import { Size } from './sizes';
import StyledButton from './StyledButton';
import Text from '../Text';
import { Variant } from './variants';
import { Intent } from '../theme/colors/intent';
import { PaletteColor } from '../theme/colors/palette';

type Props = ButtonHTMLAttributes<HTMLButtonElement> &
  BackgroundColorProps & {
    fullWidth?: boolean | boolean[];
    iconStart: ReactNode;
    iconEnd: ReactNode;
    intent?: Intent;
    paletteColor?: PaletteColor;
    size?: Size | Size[];
    spin?: boolean;
    variant?: Variant;
  };

const Button: FC<Props> = forwardRef<HTMLButtonElement, Props>(
  (
    {
      bg = null,
      children,
      disabled = false,
      fullWidth = false,
      iconEnd,
      iconStart,
      intent = 'brand',
      paletteColor = '',
      size = 'large',
      spin = false,
      type,
      variant = 'primary',
      ...props
    },
    ref
  ) => (
    <StyledButton
      {...{
        bg,
        className: `button--${variant}`,
        disabled,
        fullWidth,
        iconEnd,
        iconStart,
        intent,
        paletteColor,
        ref,
        size,
        type,
        variant,
        ...props
      }}
    >
      {spin && <ButtonSpinner {...{ disabled, intent, size, variant }} />}
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

export default Button;
