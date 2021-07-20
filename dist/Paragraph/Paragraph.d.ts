/// <reference types="react" />
import { Theme } from '@emotion/react';
import { LiteralUnion } from 'type-fest';
import { FontSize } from '../theme/typography';
declare type Variant = 'ui' | 'longForm' | 'tiny';
declare type Props = {
    fontSize?: LiteralUnion<FontSize, string>;
    variant: Variant;
};
declare const Paragraph: import("@emotion/styled").StyledComponent<{
    theme?: Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textTransform").TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textOverflow").TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/whiteSpace").WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
    children?: import("react").ReactNode;
} & {
    theme?: Theme | undefined;
} & Props, {}, {}>;
export default Paragraph;
