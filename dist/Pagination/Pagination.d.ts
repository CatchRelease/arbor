export default Pagination;
declare class Pagination extends Component<any, any, any> {
    constructor(props: any);
    constructor(props: any, context: any);
    getPaginationOptions: () => (string | number)[];
    paginate: (newPage: any) => void;
    renderPaginationItem: (item: any, index: any) => import("@emotion/react/jsx-runtime").JSX.Element;
    renderPreviousItem: () => import("@emotion/react/jsx-runtime").JSX.Element;
    renderNextItem: () => import("@emotion/react/jsx-runtime").JSX.Element;
}
declare namespace Pagination {
    namespace propTypes {
        const currentPage: PropTypes.Requireable<number>;
        const nextText: PropTypes.Requireable<string>;
        const paginate: PropTypes.Validator<(...args: any[]) => any>;
        const previousText: PropTypes.Requireable<string>;
        const size: PropTypes.Requireable<string>;
        const totalPages: PropTypes.Requireable<number>;
    }
    namespace defaultProps {
        const currentPage_1: number;
        export { currentPage_1 as currentPage };
        const nextText_1: string;
        export { nextText_1 as nextText };
        const previousText_1: string;
        export { previousText_1 as previousText };
        const size_1: string;
        export { size_1 as size };
        const totalPages_1: number;
        export { totalPages_1 as totalPages };
    }
}
import { Component } from "react";
import PropTypes from "prop-types";
