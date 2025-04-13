"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Avatar;
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const colors_1 = require("./props/colors");
const radius_1 = require("./props/radius");
const sizes_1 = require("./props/sizes");
require("./styles/index.css");
function Avatar({ alt = 'Avatar', classNames = '', color = 'purple', isBordered = false, radius = 'sm', size = 'sm', src = '', text = '' }) {
    text = text === null || text === void 0 ? void 0 : text.slice(0, 3);
    const avatarClassName = (0, clsx_1.default)('avatar', `${classNames} ${colors_1.colors[color]} ${radius_1.radius[radius]} ${sizes_1.sizes[size]} text-white text-xs font-normal`, isBordered && 'border-2');
    const imageClassName = (0, clsx_1.default)('image', sizes_1.sizes[size]);
    return (react_1.default.createElement("span", { className: avatarClassName },
        src && !text && (react_1.default.createElement("img", { className: imageClassName, src: src, alt: alt })),
        text && !src && react_1.default.createElement("span", { className: 'text' }, text)));
}
