export default AccordionHeader;
declare function AccordionHeader({ isOpen, note, onClick, panelId, text, iconRight, ...props }: {
    [x: string]: any;
    isOpen: any;
    note: any;
    onClick: any;
    panelId: any;
    text: any;
    iconRight: any;
}): JSX.Element;
declare namespace AccordionHeader {
    namespace propTypes {
        const isOpen: PropTypes.Validator<boolean>;
        const note: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const panelId: PropTypes.Validator<string>;
        const text: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const variant: PropTypes.Validator<string>;
        const iconRight: PropTypes.Requireable<boolean>;
    }
    namespace defaultProps {
        const note_1: null;
        export { note_1 as note };
        export function onClick_1(): void;
        export { onClick_1 as onClick };
        const iconRight_1: boolean;
        export { iconRight_1 as iconRight };
    }
}
import PropTypes from "prop-types";
