export default FormField;
declare function FormField({ caption, children, label, labelAside, id }: {
    caption: any;
    children: any;
    label: any;
    labelAside: any;
    id: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace FormField {
    namespace propTypes {
        const caption: PropTypes.Requireable<string>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const id: PropTypes.Validator<string>;
        const label: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const labelAside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const caption_1: string;
        export { caption_1 as caption };
        const label_1: string;
        export { label_1 as label };
        const labelAside_1: null;
        export { labelAside_1 as labelAside };
    }
}
import PropTypes from "prop-types";
