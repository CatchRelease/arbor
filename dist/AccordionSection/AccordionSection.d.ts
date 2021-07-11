export default AccordionSection;
declare class AccordionSection extends Component<any, any, any> {
    constructor(props: any);
    get isControlled(): boolean;
    get isOpen(): any;
    onHeaderClick: () => void;
    toggle(): void;
}
declare namespace AccordionSection {
    namespace propTypes {
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const header: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const headerNote: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const isOpen: PropTypes.Requireable<boolean>;
        const onHeaderClick: PropTypes.Requireable<(...args: any[]) => any>;
        const panelId: PropTypes.Validator<string>;
        const variant: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const isOpen_1: undefined;
        export { isOpen_1 as isOpen };
        const headerNote_1: null;
        export { headerNote_1 as headerNote };
        export function onHeaderClick_1(): void;
        export { onHeaderClick_1 as onHeaderClick };
        const variant_1: string;
        export { variant_1 as variant };
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
