export default StyledAutoCompleteDropdownIndicator;
declare function StyledAutoCompleteDropdownIndicator({ cx, innerProps, selectProps: { hideDropdownIndicator }, ...props }: {
    [x: string]: any;
    cx: any;
    innerProps: any;
    selectProps: {
        hideDropdownIndicator: any;
    };
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace StyledAutoCompleteDropdownIndicator {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const innerProps: PropTypes.Requireable<object>;
        const selectProps: PropTypes.Validator<PropTypes.InferProps<{
            hideDropdownIndicator: PropTypes.Requireable<boolean>;
        }>>;
    }
    namespace defaultProps {
        const innerProps_1: {};
        export { innerProps_1 as innerProps };
    }
}
import PropTypes from "prop-types";
