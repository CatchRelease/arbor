"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prop_types_1 = __importDefault(require("prop-types"));
const styled_1 = __importDefault(require("@emotion/styled"));
const react_1 = require("@emotion/react");
const Grid_1 = __importDefault(require("../Grid"));
const intents_1 = __importDefault(require("./intents"));
const gridTemplateColumns = ({ intent, onClose }) => {
    let columns;
    if (intent && onClose) {
        columns = '0fr 1fr 0fr';
    }
    else if (intent) {
        columns = '0fr 1fr';
    }
    else if (onClose) {
        columns = '1fr 0fr';
    }
    return (0, react_1.css) `
    grid-template-columns: ${columns};
  `;
};
const StyledAlertContent = (0, styled_1.default)(Grid_1.default) `
  ${gridTemplateColumns};
`;
StyledAlertContent.propTypes = {
    details: prop_types_1.default.oneOfType([
        prop_types_1.default.node,
        prop_types_1.default.arrayOf(prop_types_1.default.node)
    ]),
    intent: prop_types_1.default.oneOf(intents_1.default),
    onClose: prop_types_1.default.func
};
StyledAlertContent.defaultProps = Object.assign(Object.assign({}, Grid_1.default.defaultProps), { alignItems: 'center', details: undefined, gridColumnGap: 'regular', gridRowGap: 'smaller', intent: undefined, onClose: undefined, p: 'regular' });
exports.default = StyledAlertContent;
