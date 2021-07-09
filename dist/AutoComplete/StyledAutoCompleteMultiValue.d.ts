export default StyledAutoCompleteMultiValue;
declare function StyledAutoCompleteMultiValue({ data, data: { label }, paletteColor, variant, readOnly, removeProps }: {
    data: {
        label: any;
    };
    paletteColor: any;
    variant: any;
    readOnly: any;
    removeProps: any;
}): JSX.Element;
declare namespace StyledAutoCompleteMultiValue {
    namespace propTypes {
        const data: PropTypes.Validator<PropTypes.InferProps<{
            label: PropTypes.Validator<string>;
        }>>;
        const removeProps: PropTypes.Requireable<PropTypes.InferProps<{
            onClick: PropTypes.Validator<(...args: any[]) => any>;
            onMouseDown: PropTypes.Validator<(...args: any[]) => any>;
            onTouchEnd: PropTypes.Validator<(...args: any[]) => any>;
        }>>;
        const paletteColor: PropTypes.Requireable<string>;
        const readOnly: PropTypes.Requireable<boolean>;
        const variant: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        export namespace removeProps_1 {
            function onClick(): void;
            function onMouseDown(): void;
            function onTouchEnd(): void;
        }
        export { removeProps_1 as removeProps };
        const paletteColor_1: null;
        export { paletteColor_1 as paletteColor };
        const readOnly_1: boolean;
        export { readOnly_1 as readOnly };
        const variant_1: string;
        export { variant_1 as variant };
    }
}
import PropTypes from "prop-types";
