import primary from './primary';
export declare type PaletteColor = 'brand' | keyof typeof primary;
declare type Palette = Record<string, {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}>;
declare const palette: Palette & {
    [x: string]: {
        lighter: string;
        light: string;
        default: string;
        dark: string;
        darker: string;
    };
};
export declare const blue: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, brand: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, cyan: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, green: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, neutral: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, orange: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, pink: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, purple: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, red: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, teal: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
}, yellow: {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
} & {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
};
export default palette;
