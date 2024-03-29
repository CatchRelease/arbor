import { shade, tint } from 'polished';

import primary from './primary';
import brandColors from './brand';

export type PaletteColor = 'brand' | keyof typeof primary;

type Palette = Record<
  string,
  {
    lighter: string;
    light: string;
    default: string;
    dark: string;
    darker: string;
  }
>;

const generateColorModifiers = (color: string) => ({
  lighter: tint(0.9, color),
  light: tint(0.7, color),
  default: color,
  dark: shade(0.5, color),
  darker: shade(0.8, color)
});

const paletteReducer = (palette: Palette, [color, value]: [string, string]) =>
  Object.assign(palette, {
    [color]: generateColorModifiers(value)
  });

const palette = Object.entries(primary).reduce(paletteReducer, {});

palette.brand = generateColorModifiers(brandColors.default);

export const {
  blue,
  brand,
  cyan,
  green,
  neutral,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow
} = palette;

export default palette;
