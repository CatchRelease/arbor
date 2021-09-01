"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
const react_1 = require("@emotion/react");
const react_2 = require("react");
const prop_types_1 = __importDefault(require("prop-types"));
const Button_1 = __importDefault(require("../Button"));
const DELTA = 2;
const ELLIPSIS = '...';
class Pagination extends react_2.Component {
    constructor() {
        super(...arguments);
        this.getPaginationOptions = () => {
            const { currentPage, totalPages } = this.props;
            const left = currentPage <= 1 + DELTA * 2 ? 1 : currentPage - DELTA;
            const right = currentPage >= totalPages - DELTA * 2
                ? totalPages
                : currentPage + DELTA + 1;
            const items = [];
            for (let i = 1; i <= totalPages; i += 1) {
                if (i === 1 || i === totalPages || (i >= left && i < right)) {
                    items.push(i);
                }
                else if (items[items.length - 1] !== ELLIPSIS) {
                    items.push(ELLIPSIS);
                }
            }
            return items;
        };
        this.paginate = (newPage) => {
            const { paginate } = this.props;
            paginate(newPage);
        };
        this.renderPaginationItem = (item, index) => {
            const { currentPage, size } = this.props;
            let paginationItem;
            if (item === ELLIPSIS) {
                paginationItem = ((0, react_1.createElement)(Button_1.default, Object.assign({}, { size }, { variant: "minimal", mx: "smallest", key: `${item}-${index}`, disabled: true }), item));
            }
            else {
                const variant = currentPage === item ? 'primary' : 'minimal';
                paginationItem = ((0, react_1.createElement)(Button_1.default, Object.assign({}, { size, variant }, { mx: "smallest", key: `${item}-${index}`, onClick: () => this.paginate(item) }), item));
            }
            return paginationItem;
        };
        this.renderPreviousItem = () => {
            const { currentPage, previousText, size } = this.props;
            const previousDisabled = currentPage === 1;
            return ((0, react_1.createElement)(Button_1.default, Object.assign({}, { size }, { variant: "minimal", mr: "small", key: "pagination-previous", disabled: previousDisabled, onClick: () => this.paginate(currentPage - 1) }), previousText));
        };
        this.renderNextItem = () => {
            const { currentPage, totalPages, nextText, size } = this.props;
            const nextDisabled = currentPage === totalPages;
            return ((0, react_1.createElement)(Button_1.default, Object.assign({}, { size }, { variant: "minimal", ml: "small", key: "pagination-next", disabled: nextDisabled, onClick: () => this.paginate(currentPage + 1) }), nextText));
        };
    }
    render() {
        const { currentPage, totalPages } = this.props;
        if (!currentPage || !totalPages || totalPages <= 1) {
            return null;
        }
        return ((0, jsx_runtime_1.jsxs)("div", { children: [this.renderPreviousItem(), this.getPaginationOptions().map(this.renderPaginationItem), this.renderNextItem()] }, void 0));
    }
}
Pagination.propTypes = {
    /**
     * The current page that the user is on.
     */
    currentPage: prop_types_1.default.number,
    /**
     * Text to display in the 'Next' button
     */
    nextText: prop_types_1.default.string,
    /**
     * Callback to perform pagination
     */
    paginate: prop_types_1.default.func.isRequired,
    /**
     * Text to display in the 'Previous' button
     */
    previousText: prop_types_1.default.string,
    /**
     * Size variants for styling. See storybook for examples.
     */
    size: prop_types_1.default.oneOf(['small', 'medium']),
    /**
     * Total number of pages of content that exist.
     */
    totalPages: prop_types_1.default.number
};
Pagination.defaultProps = {
    currentPage: 0,
    nextText: 'next',
    previousText: 'previous',
    size: 'small',
    totalPages: 0
};
exports.default = Pagination;
