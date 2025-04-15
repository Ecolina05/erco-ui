"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RadioGroup;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const index_1 = require("../index");
function RadioGroup({ options, classNames = '', color = 'primary', label, orientation = 'vertical', onChange }) {
    const [selectedValue, setSelectedValue] = (0, react_1.useState)();
    const handleRadioChange = (value) => {
        setSelectedValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    return (react_1.default.createElement("section", { className: (0, clsx_1.default)('flex flex-col gap-2', classNames) },
        label && react_1.default.createElement("p", { className: 'text-sm' }, label),
        react_1.default.createElement("section", { className: (0, clsx_1.default)('flex gap-2', orientation === 'vertical' && 'flex-col') }, options.map(option => (react_1.default.createElement(index_1.Radio, { color: color, isDisabled: option.isDisabled, isSelected: selectedValue === option.value, key: option.value, onChange: selected => handleRadioChange(selected), text: option.text, value: option.value }))))));
}
