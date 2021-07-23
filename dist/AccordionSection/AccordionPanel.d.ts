export default AccordionPanel;
declare function AccordionPanel({ isOpen, ...panelProps }: {
    [x: string]: any;
    isOpen: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace AccordionPanel {
    namespace propTypes {
        const isOpen: PropTypes.Validator<boolean>;
    }
}
import PropTypes from "prop-types";
