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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accordion;
const react_1 = __importStar(require("react"));
require("./styles/index.css");
function Accordion({ children, title, isOpen = false }) {
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(false);
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    (0, react_1.useEffect)(() => {
        setIsExpanded(isOpen);
    }, [isOpen]);
    return (react_1.default.createElement("section", null,
        react_1.default.createElement("header", { className: 'flex items-center justify-between border-b border-gray-300 cursor-pointer w-full p-2', onClick: handleExpand, role: 'button' },
            react_1.default.createElement("h2", { className: 'text-xs font-medium mb-0' }, title),
            !isExpanded ? (react_1.default.createElement("svg", { className: 'w-6 h-6 text-gray-800', "aria-hidden": 'true', xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                react_1.default.createElement("path", { stroke: 'currentColor', "stroke-linecap": 'round', "stroke-linejoin": 'round', "stroke-width": '2', d: 'm8 10 4 4 4-4' }))) : (react_1.default.createElement("svg", { className: 'w-6 h-6 text-gray-800', "aria-hidden": 'true', xmlns: 'http://www.w3.org/2000/svg', width: '24', height: '24', fill: 'none', viewBox: '0 0 24 24' },
                react_1.default.createElement("path", { stroke: 'currentColor', "stroke-linecap": 'round', "stroke-linejoin": 'round', "stroke-width": '2', d: 'm16 14-4-4-4 4' })))),
        isExpanded && react_1.default.createElement("div", { className: 'text-xs p-2' }, children)));
}
