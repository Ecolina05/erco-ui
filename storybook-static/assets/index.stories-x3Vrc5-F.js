import{r as d,R as e}from"./index-D4lIrffr.js";import{c as k}from"./clsx-B-dksMZM.js";/* empty css              */const m={purple:"bg-purple border-purple hover:bg-purple/90",default:"bg-gray-200 border-gray-200 hover:bg-gray-200/90",green:"bg-green border-green-500 hover:bg-green/90",red:"bg-red border-red-500 hover:bg-red/90",yellow:"bg-yellow border-yellow-500 hover:bg-yellow/90",blue:"bg-blue border-blue-500 hover:bg-blue/90"},f={purple:"text-white",default:"text-gray-900",green:"text-black",red:"text-white",yellow:"text-black",blue:"text-white"};function C({color:n="purple",id:h,label:c,checked:r=!1,disabled:u=!1,onChange:t}){const[l,a]=d.useState(r);d.useEffect(()=>{a(r)},[r]);const x=s=>{a(s.target.checked),t==null||t(s)},g=k("w-4 h-4 rounded border-2 flex items-center justify-center transition-all",l?m[n]:"border-gray-400");return e.createElement("label",{className:"flex items-center cursor-pointer"},e.createElement("input",{checked:l,disabled:u,className:"hidden",id:h,onChange:x,type:"checkbox"}),e.createElement("div",{className:g},l&&e.createElement("span",{className:`${f[n]} text-xs`},"✓")),c&&e.createElement("span",{className:"ml-2 text-sm text-gray-700"},c))}const v={component:C,title:"Checkbox"},o={args:{color:"purple",id:"checkbox-1",label:"Label",checked:!1,disabled:!1,onChange:()=>{}},argTypes:{color:{control:"select",defaultValue:"purple",description:"Checkbox color",options:["purple","default","green","red","yellow","blue"]},id:{control:"text",description:"Checkbox id"},label:{control:"text",description:"Checkbox label"},checked:{control:"boolean",description:"Checkbox state"},disabled:{control:"boolean",description:"Checkbox disabled state"},onChange:{action:"changed",description:"Checkbox change handler"}}};var b,i,p;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: 'purple',
    id: 'checkbox-1',
    label: 'Label',
    checked: false,
    disabled: false,
    onChange: () => {}
  },
  argTypes: {
    color: {
      control: 'select',
      defaultValue: 'purple',
      description: 'Checkbox color',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    id: {
      control: 'text',
      description: 'Checkbox id'
    },
    label: {
      control: 'text',
      description: 'Checkbox label'
    },
    checked: {
      control: 'boolean',
      description: 'Checkbox state'
    },
    disabled: {
      control: 'boolean',
      description: 'Checkbox disabled state'
    },
    onChange: {
      action: 'changed',
      description: 'Checkbox change handler'
    }
  }
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,v as default};
