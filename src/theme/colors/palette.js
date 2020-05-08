import { shade, tint } from 'polished';

import primary from './primary';

const generateColorModifiers = (color) => ({
  lighter: tint(0.9, color),
  light: tint(0.7, color),
  default: color,
  dark: shade(0.5, color),
  darker: shade(0.8, color)
});

const paletteReducer = (palette, [color, value]) =>
  Object.assign(palette, {
    [color]: generateColorModifiers(value)
  });

const palette = Object.entries(primary).reduce(paletteReducer, {});

export const {
  blue,
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
