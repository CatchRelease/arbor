/// <reference types="react" />
import { Theme } from '@emotion/react';
declare type Props = {
    fontSize?: string;
    lineHeight?: string;
};
declare const Text: import("@emotion/styled").StyledComponent<{
    theme?: Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & Props, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;
export default Text;
