"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Button;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const colors_1 = require("./props/colors");
const sizes_1 = require("./props/sizes");
const index_1 = __importDefault(require("../../spinner/src/index"));
require("./styles/index.css");
function Button(_a) {
    var { ariaLabel, color = 'purple', className = '', children, isLoading = false, size = 'xs', onClick = () => { } } = _a, rest = __rest(_a, ["ariaLabel", "color", "className", "children", "isLoading", "size", "onClick"]);
    const buttonClassName = (0, clsx_1.default)('button', colors_1.colors[color], sizes_1.sizes[size], className);
    const spinnerColor = ['purple', 'green', 'red', 'yellow', 'blue'].includes(color)
        ? 'white'
        : color;
    return (react_1.default.createElement("button", Object.assign({ "aria-label": ariaLabel, className: buttonClassName, disabled: isLoading, onClick: onClick }, rest), isLoading ? (react_1.default.createElement("div", { className: 'flex items-center gap-2' },
        react_1.default.createElement(index_1.default, { color: spinnerColor, size: size }),
        children)) : (children)));
}
