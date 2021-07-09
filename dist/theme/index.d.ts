export namespace breakpointsMap {
    const sm: string;
    const md: string;
    const lg: string;
    const xl: string;
}
export const breakpoints: string[];
export namespace blues {
    const blueLighter: string;
    const blueLight: string;
    const blue: string;
    const blueDark: string;
    const blueDarkest: string;
}
export namespace greys {
    const grey10: string;
    const grey20: string;
    const grey30: string;
    const grey40: string;
    const grey50: string;
    const grey60: string;
    const grey70: string;
    const grey80: string;
    const grey90: string;
    const grey100: string;
}
export namespace whites {
    const white: string;
}
export namespace reds {
    const redLighter: string;
    const redLight: string;
    const red: string;
    const redDark: string;
}
export namespace greens {
    const greenLighter: string;
    const greenLight: string;
    const green: string;
    const greenDark: string;
}
export const black: "#000000";
export namespace bronzes {
    const bronzeLight: string;
    const bronze: string;
    const bronzeDark: string;
}
export namespace colors {
    export { background };
    export { border };
    export { brand };
    export { icon };
    export { intent };
    export { monochrome };
    export { palette };
    export { primary };
    export { secondary };
    export { shadow };
    export { text };
    export { black };
}
export namespace icons {
    const annotation: string;
    const calendar: string;
    const caret: string;
    const chatBubbleOutline: string;
    const checkboxChecked: string;
    const checkboxIndeterminate: string;
    const checkboxMarkedCircleOutline: string;
    const chevron: string;
    const crLogo: string;
    const cross: string;
    const download: string;
    const swap: string;
    const symbolCircle: string;
    const thumbDownOutline: string;
    const thumbUpOutline: string;
    const trash: string;
}
export namespace lineHeights {
    const small: number;
    const regular: number;
    const large: number;
}
export namespace spacings {
    export const smallest: string;
    export const smaller: string;
    const small_1: string;
    export { small_1 as small };
    const regular_1: string;
    export { regular_1 as regular };
    const large_1: string;
    export { large_1 as large };
    export const larger: string;
    export const largest: string;
}
export namespace borderRadius {
    const small_2: string;
    export { small_2 as small };
    const large_2: string;
    export { large_2 as large };
    const larger_1: string;
    export { larger_1 as larger };
}
export namespace borderWidth {
    const small_3: string;
    export { small_3 as small };
    export const medium: string;
    const large_3: string;
    export { large_3 as large };
}
export namespace boxShadows {
    const elevation0: string;
    const elevation1: string;
    const elevation2: string;
    const elevation3: string;
    const elevation4: string;
}
declare namespace _default {
    export { avatarSizes };
    export { avatarFontSizes };
    export { borderWidth };
    export { borders };
    export { brandFont };
    export { breakpoints };
    export { breakpointsMap };
    export { buttons };
    export { colors };
    export { fonts };
    export { fontSizes };
    export { fontWeights };
    export { icons };
    export const iconFontPrefix: string;
    export { lineHeights };
    export { borderRadius as radii };
    export { boxShadows as shadows };
    export { spacings as space };
}
export default _default;
import { background } from "./colors";
import { border } from "./colors";
import { brand } from "./colors";
import { icon } from "./colors";
import { intent } from "./colors";
import { monochrome } from "./colors";
import { palette } from "./colors";
import { primary } from "./colors";
import { secondary } from "./colors";
import { shadow } from "./colors";
import { text } from "./colors";
import { sizes as avatarSizes } from "./avatars";
import { fontSizes as avatarFontSizes } from "./avatars";
declare namespace borders {
    const _default: string;
    export { _default as default };
}
import { brandFont } from "./typography";
declare namespace buttons {
    export { buttonSizes as sizes };
}
import { fonts } from "./typography";
import { sizes as fontSizes } from "./typography";
import { fontWeights } from "./typography";
import { sizes as buttonSizes } from "./buttons";
