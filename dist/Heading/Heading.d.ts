import { ElementType, FC } from 'react';
import { Theme } from '@emotion/react';
import { FontSize, FontWeight } from '../theme/typography';
declare type Props = {
    fontSize: FontSize;
    fontWeight?: FontWeight;
    mb: string;
};
declare const _default: import("@emotion/styled").StyledComponent<{
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
} & {
    fontSize?: string | undefined;
    lineHeight?: string | undefined;
} & import("react").ClassAttributes<HTMLParagraphElement> & import("react").HTMLAttributes<HTMLParagraphElement> & {
    children?: import("react").ReactNode;
} & {
    theme?: Theme | undefined;
} & Props, {}, {}> & {
    H1: FC<import("type-fest/source/simplify").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H2: FC<import("type-fest/source/simplify").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H3: FC<import("type-fest/source/simplify").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H4: FC<import("type-fest/source/simplify").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>>>;
    H5: import("@emotion/styled").StyledComponent<import("type-fest/source/simplify").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>> & {
        children?: import("react").ReactNode;
    } & {
        theme?: Theme | undefined;
    }, {}, {}>;
    H6: import("@emotion/styled").StyledComponent<import("type-fest/source/simplify").Simplify<import("type-fest").Except<Props, "fontSize"> & Partial<Pick<Props, "fontSize">>> & {
        children?: import("react").ReactNode;
    } & {
        theme?: Theme | undefined;
    }, {}, {}>;
};
export default _default;
