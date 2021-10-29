/// <reference types="react" />
import { Theme } from '@emotion/react';
import { ColorProps } from 'styled-system';
import { PolyComponent } from '../polyComponent';
declare type Variant = 'default' | 'muted' | 'brandLight' | 'brandDark';
declare type Props = ColorProps & {
    variant?: Variant;
};
declare const _default: PolyComponent<"a", Props> & {
    withComponent: {
        <C extends import("react").ComponentClass<import("react").ComponentProps<C>, any>>(component: C): import("@emotion/styled").StyledComponent<Omit<Omit<{
            theme?: Theme | undefined;
            as?: import("react").ElementType<any> | undefined;
        } & Omit<import("react").HTMLAttributes<HTMLElement>, "color"> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textDecoration").TextDecorationProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textTransform").TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textOverflow").TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/whiteSpace").WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
            children?: import("react").ReactNode;
        }, "color"> & import("styled-system").TextColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            children?: import("react").ReactNode;
        }, "color"> & import("styled-system").TextColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            children?: import("react").ReactNode;
        } & {
            theme?: Theme | undefined;
        } & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            variant?: Variant | undefined;
        } & JSX.LibraryManagedAttributes<C, import("react").ComponentProps<C>>, {}, {
            ref?: import("react").Ref<InstanceType<C>> | undefined;
        }>;
        <C_1 extends import("react").ComponentType<import("react").ComponentProps<C_1>>>(component: C_1): import("@emotion/styled").StyledComponent<Omit<Omit<{
            theme?: Theme | undefined;
            as?: import("react").ElementType<any> | undefined;
        } & Omit<import("react").HTMLAttributes<HTMLElement>, "color"> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textDecoration").TextDecorationProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textTransform").TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textOverflow").TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/whiteSpace").WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
            children?: import("react").ReactNode;
        }, "color"> & import("styled-system").TextColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            children?: import("react").ReactNode;
        }, "color"> & import("styled-system").TextColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            children?: import("react").ReactNode;
        } & {
            theme?: Theme | undefined;
        } & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            variant?: Variant | undefined;
        } & JSX.LibraryManagedAttributes<C_1, import("react").ComponentProps<C_1>>, {}, {}>;
        <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): import("@emotion/styled").StyledComponent<Omit<Omit<{
            theme?: Theme | undefined;
            as?: import("react").ElementType<any> | undefined;
        } & Omit<import("react").HTMLAttributes<HTMLElement>, "color"> & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontSizeProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").FontWeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").LineHeightProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").MaxWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MaxWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").MinWidthProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, import("csstype").Property.MinWidth<import("styled-system").TLengthStyledSystem>> & import("styled-system").OverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("styled-system").SpaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & import("styled-system").TextAlignProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textDecoration").TextDecorationProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textTransform").TextTransformProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/textOverflow").TextOverflowProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("../utils/whiteSpace").WhitespaceProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>> & import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
            children?: import("react").ReactNode;
        }, "color"> & import("styled-system").TextColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            children?: import("react").ReactNode;
        }, "color"> & import("styled-system").TextColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            children?: import("react").ReactNode;
        } & {
            theme?: Theme | undefined;
        } & ColorProps<Required<import("styled-system").Theme<import("styled-system").TLengthStyledSystem>>, string | number | symbol> & {
            variant?: Variant | undefined;
        }, JSX.IntrinsicElements[Tag], {}>;
    };
};
export default _default;
