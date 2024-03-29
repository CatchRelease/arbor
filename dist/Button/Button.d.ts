import { FC, ReactNode } from 'react';
import { BackgroundColorProps } from 'styled-system';
import { Size } from './sizes';
import { Props as StyledButtonProps } from './StyledButton';
import { Variant } from './variants';
import { Intent } from '../theme/colors/intent';
import { PaletteColor } from '../theme/colors/palette';
export declare type Props = StyledButtonProps & BackgroundColorProps & {
    fullWidth?: boolean | boolean[];
    iconStart?: ReactNode;
    iconEnd?: ReactNode;
    intent?: Intent;
    paletteColor?: PaletteColor;
    size?: Size | Size[];
    spin?: boolean;
    variant?: Variant;
};
declare const Button: FC<Props>;
export default Button;
