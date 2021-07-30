import { ButtonHTMLAttributes } from 'react';
import { FontWeightProps, FontSizeProps, LineHeightProps, SpaceProps, BordersProps, BorderColorProps, ColorProps, DisplayProps } from 'styled-system';
import { TextTransformProps } from '../utils/textTransform';
import { WhitespaceProps } from '../utils/whiteSpace';
import { Intent } from '../theme/colors/intent';
import { Variant } from './variants';
import { PaletteColor } from '../theme/colors/palette';
export declare type Props = ButtonHTMLAttributes<HTMLButtonElement> & BordersProps & BorderColorProps & ColorProps & DisplayProps & FontWeightProps & FontSizeProps & LineHeightProps & SpaceProps & TextTransformProps & WhitespaceProps & {
    intent?: Intent;
    paletteColor?: PaletteColor;
    variant?: Variant;
};
declare const StyledButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement> & BordersProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & BorderColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & DisplayProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    intent?: "brand" | "danger" | "info" | "success" | "warning" | undefined;
    paletteColor?: PaletteColor | undefined;
    variant?: "minimal" | "primary" | "secondary" | undefined;
}, import("react").DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
export default StyledButton;
