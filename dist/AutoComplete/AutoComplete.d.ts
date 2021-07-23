export default AutoComplete;
declare function AutoComplete({ caption, id, label, labelAside, ...props }: {
    [x: string]: any;
    caption: any;
    id: any;
    label: any;
    labelAside: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace AutoComplete {
    namespace propTypes {
        const caption: PropTypes.Requireable<string>;
        const hideDropdownIndicator: PropTypes.Requireable<boolean>;
        const id: PropTypes.Validator<string>;
        const label: PropTypes.Validator<string>;
        const labelAside: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    }
    namespace defaultProps {
        const caption_1: string;
        export { caption_1 as caption };
        const hideDropdownIndicator_1: boolean;
        export { hideDropdownIndicator_1 as hideDropdownIndicator };
        const labelAside_1: null;
        export { labelAside_1 as labelAside };
    }
}
import PropTypes from "prop-types";
