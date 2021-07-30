import { Intent } from '../theme/colors/intent';
import { Variant } from './variants';
import { PaletteColor } from '../theme/colors/palette';
declare const variants: ({ intent, variant, paletteColor, ...props }: {
    intent?: "brand" | "danger" | "info" | "success" | "warning" | undefined;
    variant?: "minimal" | "primary" | "secondary" | undefined;
    paletteColor?: PaletteColor | undefined;
}) => import("@emotion/react").SerializedStyles | "";
export default variants;
