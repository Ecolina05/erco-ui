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
exports.default = Checkbox;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const colors_1 = require("./props/colors");
require("./styles/index.css");
function Checkbox({ color = 'primary', id, label, checked = false, disabled = false, onChange }) {
    const [isChecked, setIsChecked] = (0, react_1.useState)(checked);
    (0, react_1.useEffect)(() => {
        setIsChecked(checked);
    }, [checked]);
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        onChange === null || onChange === void 0 ? void 0 : onChange(event);
    };
    const checkboxClassName = (0, clsx_1.default)('w-4 h-4 rounded border-2 flex items-center justify-center transition-all', isChecked ? colors_1.bgColors[color] : 'border-gray-400');
    return (react_1.default.createElement("label", { className: 'flex items-center cursor-pointer' },
        react_1.default.createElement("input", { checked: isChecked, disabled: disabled, className: 'hidden', id: id, onChange: handleCheckboxChange, type: 'checkbox' }),
        react_1.default.createElement("div", { className: checkboxClassName }, isChecked && react_1.default.createElement("span", { className: `${colors_1.contentColors[color]} text-xs` }, "\u2713")),
        label && react_1.default.createElement("span", { className: 'ml-2 text-sm text-gray-700' }, label)));
}
