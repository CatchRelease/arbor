/// <reference types="react" />
import { BoxProps } from '../Box';
import { Variant } from './variants';
export declare type Props = BoxProps & {
    variant?: Variant;
};
declare const StyledAccordionPanel: import("@emotion/styled").StyledComponent<{
    as?: import("react").ElementType<any> | undefined;
} & Omit<any, "as"> & Omit<import("react").HTMLAttributes<HTMLElement>, "color"> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textDecoration").TextDecorationProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textTransform").TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textOverflow").TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/whiteSpace").WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").BordersProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").BoxShadowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").DisplayProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").HeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Height<import("styled-system").TLengthStyledSystem>> & import("styled-system").GridAreaProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").PositionProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").WidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.Width<import("styled-system").TLengthStyledSystem>> & {
    theme?: import("@emotion/react").Theme | undefined;
} & {
    variant?: "default" | "minimal" | undefined;
}, {}, {}>;
export default StyledAccordionPanel;
