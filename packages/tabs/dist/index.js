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
exports.default = Tabs;
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
require("./styles/index.css");
function Tabs({ tabs, content, className, defaultValue, orientation = 'horizontal', value: controlledValue, onChange }) {
    const tabsId = (0, react_1.useId)();
    const [selectedTab, setSelectedTab] = (0, react_1.useState)(controlledValue || defaultValue || (tabs.length > 0 ? tabs[0].value : ''));
    (0, react_1.useEffect)(() => {
        if (controlledValue !== undefined) {
            setSelectedTab(controlledValue);
        }
    }, [controlledValue]);
    const handleTabChange = (value) => {
        if (controlledValue === undefined) {
            setSelectedTab(value);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    const isVertical = orientation === 'vertical';
    return (react_1.default.createElement("div", { className: (0, clsx_1.default)('tabs-container', isVertical ? 'flex flex-row' : 'flex flex-col', className) },
        react_1.default.createElement("div", { "aria-orientation": orientation, className: (0, clsx_1.default)('tabs', isVertical ? 'flex-col border-r' : 'flex-row border-b'), role: 'tablist' }, tabs.map(tab => (react_1.default.createElement("button", { "aria-controls": `${tabsId}-panel-${tab.value}`, "aria-selected": selectedTab === tab.value, className: (0, clsx_1.default)('tab px-4 py-2 focus:outline-none', selectedTab === tab.value && 'active', tab.disabled && 'opacity-50 cursor-not-allowed'), disabled: tab.disabled, id: `${tabsId}-tab-${tab.value}`, key: tab.value, role: 'tab', onClick: () => !tab.disabled && handleTabChange(tab.value) },
            tab.icon && react_1.default.createElement("span", { className: 'mr-2' }, tab.icon),
            tab.label)))),
        react_1.default.createElement("div", { className: (0, clsx_1.default)('tab-content-container flex-1', isVertical ? 'pl-2' : 'pt-2') }, tabs.map((tab, index) => content[index] ? (react_1.default.createElement("div", { "aria-labelledby": `${tabsId}-tab-${tab.value}`, className: (0, clsx_1.default)('text-xs', selectedTab === tab.value ? 'block' : 'hidden'), hidden: selectedTab !== tab.value, id: `${tabsId}-panel-${tab.value}`, key: tab.value, role: 'tabpanel' }, content[index])) : null))));
}
