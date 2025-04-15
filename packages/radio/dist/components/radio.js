"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Radio;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const colors_1 = require("../props/colors");
require("../styles/index.css");
function Radio({ value, color = 'primary', isDisabled = false, isSelected, text, onChange }) {
    const handleChange = () => {
        if (isDisabled)
            return;
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    const radioCircleClassName = (0, clsx_1.default)('w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all', isSelected ? colors_1.bgColors[color] : 'border-gray-400 bg-transparent');
    const radioSelectedClassName = (0, clsx_1.default)('w-2 h-2 rounded-full', color === 'yellow' ? 'bg-gray-600' : 'bg-white');
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)('flex items-center', isDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'), onClick: handleChange, role: 'button' },
        react_1.default.createElement("div", { className: radioCircleClassName }, isSelected && react_1.default.createElement("div", { className: radioSelectedClassName })),
        text && react_1.default.createElement("span", { className: 'ml-2 text-sm text-gray-700' }, text)));
}
