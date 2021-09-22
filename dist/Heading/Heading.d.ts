import { ElementType, FC } from 'react';
import { Theme } from '@emotion/react';
import { FontSize, FontWeight } from '../theme/typography';
import { TextProps } from '../Text';
export declare type Props = TextProps & {
    fontSize: FontSize;
    fontWeight?: FontWeight;
    mb?: string;
};
declare const _default: import("@emotion/styled").StyledComponent<Omit<{
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
} & Omit<import("react").HTMLAttributes<HTMLElement>, "color"> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textDecoration").TextDecorationProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textTransform").TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textOverflow").TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/whiteSpace").WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
    children?: import("react").ReactNode;
}, "color"> & import("styled-system").TextColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
    children?: import("react").ReactNode;
} & {
    theme?: Theme | undefined;
} & Omit<import("react").HTMLAttributes<HTMLElement>, "color"> & import("styled-system").ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textDecoration").TextDecorationProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textTransform").TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textOverflow").TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/whiteSpace").WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & {
    fontSize: "size4" | "size1" | "size2" | "size3" | "size5" | "size6" | "size7" | "size8" | "size9";
    fontWeight?: "bold" | "medium" | "regular" | undefined;
    mb?: string | undefined;
}, {}, {}> & {
    H1: FC<import("type-fest").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H2: FC<import("type-fest").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H3: FC<import("type-fest").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H4: FC<import("type-fest").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H5: import("@emotion/styled").StyledComponent<import("type-fest").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>> & {
        children?: import("react").ReactNode;
    } & {
        theme?: Theme | undefined;
    }, {}, {}>;
    H6: import("@emotion/styled").StyledComponent<import("type-fest").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>> & {
        children?: import("react").ReactNode;
    } & {
        theme?: Theme | undefined;
    }, {}, {}>;
};
export default _default;
