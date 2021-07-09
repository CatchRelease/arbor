export default Badge;
declare function Badge({ paletteColor, children, iconEnd, iconStart, subtle, variant, ...props }: {
    [x: string]: any;
    paletteColor: any;
    children: any;
    iconEnd: any;
    iconStart: any;
    subtle: any;
    variant: any;
}): JSX.Element;
declare namespace Badge {
    namespace propTypes {
        const children: PropTypes.Validator<string>;
        const paletteColor: PropTypes.Requireable<string>;
        const iconEnd: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const iconStart: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const subtle: PropTypes.Requireable<boolean>;
        const variant: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const paletteColor_1: string;
        export { paletteColor_1 as paletteColor };
        const subtle_1: boolean;
        export { subtle_1 as subtle };
        const iconEnd_1: undefined;
        export { iconEnd_1 as iconEnd };
        const iconStart_1: undefined;
        export { iconStart_1 as iconStart };
        const variant_1: string;
        export { variant_1 as variant };
    }
}
import PropTypes from "prop-types";
