export default Tooltip;
declare function Tooltip({ title, content, children, render, ...props }: {
    [x: string]: any;
    title: any;
    content: any;
    children: any;
    render: any;
}): import("@emotion/react/jsx-runtime").JSX.Element;
declare namespace Tooltip {
    namespace propTypes {
        const children: PropTypes.Validator<PropTypes.ReactElementLike>;
        const content: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const title: PropTypes.Requireable<string | number | boolean | {} | PropTypes.ReactElementLike | PropTypes.ReactNodeArray>;
        const render: PropTypes.Requireable<(...args: any[]) => any>;
    }
    namespace defaultProps {
        const content_1: null;
        export { content_1 as content };
        const title_1: null;
        export { title_1 as title };
        const render_1: null;
        export { render_1 as render };
    }
}
import PropTypes from "prop-types";
