"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Select;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const radius_1 = require("./props/radius");
const border_colors_1 = require("./props/border-colors");
require("./styles/index.css");
function Select({ options, classNames, borderColor = 'purple', description, id, label, radius = 'lg', onChange }) {
    const handleSelectChange = (event) => {
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    const selectClassNames = (0, clsx_1.default)('select', radius_1.radius[radius], border_colors_1.borderColor[borderColor], classNames);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        label && (react_1.default.createElement("label", { htmlFor: id, className: 'block mb-1 text-xs text-gray-900' }, label)),
        react_1.default.createElement("select", { className: selectClassNames, id: id, onChange: handleSelectChange }, options.map(option => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)))),
        description && react_1.default.createElement("p", { className: 'text-xs font-light text-gray-500 mt-1 italic' }, description)));
}
