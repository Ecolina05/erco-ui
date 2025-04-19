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
exports.default = Avatar;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const colors_1 = require("./props/colors");
const radius_1 = require("./props/radius");
const sizes_1 = require("./props/sizes");
require("./styles/index.css");
function Avatar(_a) {
    var { alt = 'Avatar', classNames = '', color = 'purple', isBordered = false, name, radius = 'full', size = 'md', src = '', text = '' } = _a, restProps = __rest(_a, ["alt", "classNames", "color", "isBordered", "name", "radius", "size", "src", "text"]);
    const [imgError, setImgError] = (0, react_1.useState)(false);
    const displayText = (text === null || text === void 0 ? void 0 : text.slice(0, 2)) || (name && getInitials(name)) || '';
    function getInitials(name) {
        if (!name)
            return '';
        return name
            .split(' ')
            .map(part => part.charAt(0))
            .join('')
            .slice(0, 2)
            .toUpperCase();
    }
    const handleImageError = () => {
        setImgError(true);
    };
    const showImage = src && !imgError;
    const showText = !showImage && (displayText || name);
    const avatarClassName = (0, clsx_1.default)('avatar', `${classNames} ${colors_1.borderColors[color]} ${radius_1.radius[radius]} ${sizes_1.sizes[size]} text-white font-medium`, isBordered && 'border-2', showText ? `flex items-center justify-center ${colors_1.bgColors[color]}` : '');
    const imageClassName = (0, clsx_1.default)('image', sizes_1.sizes[size]);
    const getAriaLabel = () => {
        if (name) {
            return name;
        }
        if (alt && alt !== 'Avatar') {
            return alt;
        }
        if (text) {
            return `Avatar with text: ${text}`;
        }
        return 'Avatar';
    };
    return (react_1.default.createElement("span", Object.assign({ "aria-label": getAriaLabel(), className: avatarClassName, role: 'img' }, restProps),
        showImage && (react_1.default.createElement("img", { alt: alt || name || 'Avatar image', className: imageClassName, loading: 'lazy', onError: handleImageError, src: src })),
        showText && (react_1.default.createElement("span", { "aria-hidden": 'true', className: 'text-xs uppercase' }, displayText))));
}
