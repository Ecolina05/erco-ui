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
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const radius_1 = require("./props/radius");
const shadow_1 = require("./props/shadow");
require("./styles/index.css");
const Card = (0, react_1.forwardRef)((_a, ref) => {
    var { children, classNames, shadow = 'md', radius = 'md', isBordered = false, isHoverable = false, isClickable = false, isPressable = false, onClick, role, tabIndex } = _a, rest = __rest(_a, ["children", "classNames", "shadow", "radius", "isBordered", "isHoverable", "isClickable", "isPressable", "onClick", "role", "tabIndex"]);
    const needsInteractiveRole = isClickable || isPressable || onClick;
    const needsTabIndex = needsInteractiveRole && tabIndex === undefined;
    const cardClassNames = (0, clsx_1.default)('card', radius_1.radius[radius], shadow_1.shadow[shadow], isBordered && 'border border-gray-200', isHoverable && 'hover:shadow-lg transition-shadow duration-200', isClickable && 'cursor-pointer', isPressable && 'active:scale-95 transition-transform duration-200', classNames);
    return (react_1.default.createElement("div", Object.assign({ className: cardClassNames, onClick: onClick, ref: ref, role: role || (needsInteractiveRole ? 'button' : undefined), tabIndex: needsTabIndex ? 0 : tabIndex }, (needsInteractiveRole && {
        onKeyDown: (e) => {
            if ((e.key === 'Enter' || e.key === ' ') && onClick) {
                e.preventDefault();
                onClick(e);
            }
        },
        'aria-pressed': isPressable ? 'false' : undefined
    }), rest), children));
});
Card.displayName = 'Card';
exports.default = Card;
