export default Tab;
declare function Tab({ children, ...props }: {
    [x: string]: any;
    children: any;
}): JSX.Element;
declare namespace Tab {
    namespace propTypes {
        const active: PropTypes.Requireable<boolean>;
        const children: PropTypes.Validator<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const id: PropTypes.Validator<string>;
        const onClick: PropTypes.Requireable<(...args: any[]) => any>;
        const tabIndex: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        const active_1: boolean;
        export { active_1 as active };
        const onClick_1: null;
        export { onClick_1 as onClick };
        const tabIndex_1: string;
        export { tabIndex_1 as tabIndex };
    }
}
import PropTypes from "prop-types";
