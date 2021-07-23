export function StyledAvatarText({ baseColor, size, subtle, theme: { avatarFontSizes }, ...props }: {
    [x: string]: any;
    baseColor: any;
    size: any;
    subtle: any;
    theme: {
        avatarFontSizes: any;
    };
}): import("@emotion/react/jsx-runtime").JSX.Element;
export namespace StyledAvatarText {
    namespace propTypes {
        const baseColor: PropTypes.Validator<string>;
        const size: PropTypes.Validator<string>;
        const subtle: PropTypes.Validator<boolean>;
    }
}
declare var _default: import("react").FC<Pick<{
    [x: string]: any;
    baseColor: any;
    size: any;
    subtle: any;
    theme: {
        avatarFontSizes: any;
    };
}, string | number> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
import PropTypes from "prop-types";
