export default StyledAutoCompleteInput;
declare function StyledAutoCompleteInput({ cx, getStyles, innerProps, innerRef, isDisabled, isHidden, selectProps, theme, ...props }: {
    [x: string]: any;
    cx: any;
    getStyles: any;
    innerProps: any;
    innerRef: any;
    isDisabled: any;
    isHidden: any;
    selectProps: any;
    theme: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace StyledAutoCompleteInput {
    namespace propTypes {
        const cx: PropTypes.Validator<(...args: any[]) => any>;
        const getStyles: PropTypes.Validator<(...args: any[]) => any>;
        const innerProps: PropTypes.Requireable<object>;
        const innerRef: PropTypes.Validator<(...args: any[]) => any>;
        const isDisabled: PropTypes.Requireable<boolean>;
        const isHidden: PropTypes.Requireable<boolean>;
        const selectProps: PropTypes.Validator<object>;
        const theme: PropTypes.Validator<object>;
    }
    namespace defaultProps {
        const innerProps_1: {};
        export { innerProps_1 as innerProps };
        const isHidden_1: undefined;
        export { isHidden_1 as isHidden };
        const isDisabled_1: undefined;
        export { isDisabled_1 as isDisabled };
    }
}
import PropTypes from "prop-types";
