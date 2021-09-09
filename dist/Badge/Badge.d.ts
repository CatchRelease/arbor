import { FC, ReactNode } from 'react';
import { PaletteColor } from '../theme/colors/palette';
import Variant from './variant';
declare type Props = {
    iconEnd?: ReactNode;
    iconStart?: ReactNode;
    paletteColor?: PaletteColor;
    subtle?: boolean;
    variant?: Variant;
};
declare const Badge: FC<Props>;
export default Badge;
