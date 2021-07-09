export function Modal({ children, modalCss, overlayCss, theme, ...props }: {
    [x: string]: any;
    children: any;
    modalCss: any;
    overlayCss: any;
    theme: any;
}): JSX.Element;
export namespace Modal {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const modalCss: PropTypes.Requireable<object>;
        const overlayCss: PropTypes.Requireable<object>;
    }
    namespace defaultProps {
        const modalCss_1: {};
        export { modalCss_1 as modalCss };
        const overlayCss_1: {};
        export { overlayCss_1 as overlayCss };
    }
}
declare var _default: import("react").FC<Pick<{
    [x: string]: any;
    children: any;
    modalCss: any;
    overlayCss: any;
    theme: any;
}, string | number> & {
    theme?: import("@emotion/react").Theme | undefined;
}>;
export default _default;
import PropTypes from "prop-types";
