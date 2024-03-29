import { HTMLAttributes } from 'react';
import { Theme } from '@emotion/react';
import { ColorProps, FontSizeProps, FontWeightProps, LineHeightProps, MaxWidthProps, MinWidthProps, OverflowProps, SpaceProps, TextAlignProps } from 'styled-system';
import { WithColorPropFix } from '../colorPropFix';
import { TextDecorationProps } from '../utils/textDecoration';
import { TextOverflowProps } from '../utils/textOverflow';
import { TextTransformProps } from '../utils/textTransform';
import { WhitespaceProps } from '../utils/whiteSpace';
export declare type Props = Omit<HTMLAttributes<HTMLElement>, 'color'> & ColorProps & FontSizeProps & FontWeightProps & LineHeightProps & MaxWidthProps & MinWidthProps & OverflowProps & SpaceProps & TextAlignProps & TextDecorationProps & TextTransformProps & TextOverflowProps & WhitespaceProps;
declare const Text: import("@emotion/styled").StyledComponent<{
    theme?: Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Omit<HTMLAttributes<HTMLElement>, "color"> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & TextDecorationProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>>, import("react").DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
declare const TextWithColorPropFix: WithColorPropFix<typeof Text>;
export default TextWithColorPropFix;
