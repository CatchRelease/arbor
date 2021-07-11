export default Popover;
declare class Popover extends Component<any, any, any> {
    constructor(props: any);
    node: import("react").RefObject<any>;
    handleOutsideClick: (e: any) => void;
    handleKeyboard: (e: any) => void;
    toggle: (e: any) => void;
    open(callback: any): void;
    close(): void;
}
declare namespace Popover {
    namespace propTypes {
        const content: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const contentProps: PropTypes.Requireable<object>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const onOpen: PropTypes.Requireable<(...args: any[]) => any>;
        const onClose: PropTypes.Requireable<(...args: any[]) => any>;
        const preferPlace: PropTypes.Requireable<string>;
        const place: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const contentProps_1: {};
        export { contentProps_1 as contentProps };
        const preferPlace_1: string;
        export { preferPlace_1 as preferPlace };
        const place_1: string;
        export { place_1 as place };
        export function onOpen_1(): null;
        export { onOpen_1 as onOpen };
        export function onClose_1(): null;
        export { onClose_1 as onClose };
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
