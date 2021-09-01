"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = __importDefault(require("@emotion/styled"));
const Grid_1 = __importDefault(require("../Grid"));
const gridTemplateColumns = ({ hasText, iconStart, iconEnd }) => {
    if (hasText) {
        if (iconStart && iconEnd) {
            return '0fr 1fr 0fr';
        }
        if (iconStart) {
            return '0fr 1fr';
        }
        if (iconEnd) {
            return '1fr 0fr';
        }
        return '1fr';
    }
    if (iconStart && iconEnd) {
        return '0fr 0fr';
    }
    return '0fr';
};
const ButtonContent = (0, styled_1.default)(Grid_1.default) `
  grid-template-columns: ${gridTemplateColumns};
  visibility: ${(props) => (props.spin ? 'hidden' : 'inherit')};
`;
ButtonContent.propTypes = {
    hasText: prop_types_1.default.bool,
    iconEnd: prop_types_1.default.element,
    iconStart: prop_types_1.default.element,
    spin: prop_types_1.default.bool.isRequired
};
ButtonContent.defaultProps = Object.assign(Object.assign({}, Grid_1.default.defaultProps), { display: 'inline-grid', alignItems: 'center', hasText: false, iconEnd: undefined, iconStart: undefined });
exports.default = ButtonContent;
