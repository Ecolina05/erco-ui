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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Accordion;
const react_1 = __importStar(require("react"));
require("./styles/index.css");
function Accordion(_a) {
    var { children, title, isOpen = false, id } = _a, rest = __rest(_a, ["children", "title", "isOpen", "id"]);
    const [isExpanded, setIsExpanded] = (0, react_1.useState)(isOpen);
    const uniqueId = (0, react_1.useId)();
    const accordionId = id || uniqueId;
    const headerId = `accordion-header-${accordionId}`;
    const contentId = `accordion-content-${accordionId}`;
    (0, react_1.useEffect)(() => {
        setIsExpanded(isOpen);
    }, [isOpen]);
    const handleExpand = () => {
        setIsExpanded(!isExpanded);
    };
    return (react_1.default.createElement("div", Object.assign({ className: 'accordion' }, rest),
        react_1.default.createElement("h3", null,
            react_1.default.createElement("button", { "aria-controls": contentId, "aria-expanded": isExpanded, className: `accordion-trigger flex items-center justify-between border-b border-gray-300 w-full p-2 text-left cursor-pointer focus:outline-none`, id: headerId, onClick: handleExpand, type: 'button' },
                react_1.default.createElement("span", { className: 'text-xs font-medium mb-0' }, title),
                react_1.default.createElement("span", { className: 'accordion-icon ml-2', "aria-hidden": 'true' }, !isExpanded ? (react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'w-6 h-6 text-gray-800', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                    react_1.default.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'm8 10 4 4 4-4' }))) : (react_1.default.createElement("svg", { "aria-hidden": 'true', className: 'w-6 h-6 text-gray-800', fill: 'none', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
                    react_1.default.createElement("path", { stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2', d: 'm16 14-4-4-4 4' })))))),
        react_1.default.createElement("div", { "aria-labelledby": headerId, className: 'accordion-content', hidden: !isExpanded, id: contentId, role: 'region' }, isExpanded && react_1.default.createElement("div", { className: 'text-xs p-2' }, children))));
}
