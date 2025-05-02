import{R as t,r as g}from"./index-D4lIrffr.js";import{c as l}from"./clsx-B-dksMZM.js";/* empty css              */const v={purple:"bg-purple border-purple",default:"bg-gray-700 border-gray-700",green:"bg-green border-green-500",red:"bg-red border-red-500",yellow:"bg-yellow border-yellow-500",blue:"bg-blue border-blue-500"};function y({value:c,color:a="purple",isDisabled:n=!1,isSelected:o,text:s,onChange:r}){const d=()=>{n||r==null||r(c)},p=l("w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all",o?v[a]:"border-gray-400 bg-transparent"),u=l("w-2 h-2 rounded-full",a==="yellow"?"bg-gray-600":"bg-white");return t.createElement("div",{className:l("flex items-center",n?"opacity-30 cursor-not-allowed":"cursor-pointer"),onClick:d,role:"button"},t.createElement("div",{className:p},o&&t.createElement("div",{className:u})),s&&t.createElement("span",{className:"ml-2 text-sm text-gray-700"},s))}function R({options:c,className:a="",color:n="purple",label:o,orientation:s="vertical",onChange:r}){const[d,p]=g.useState(),u=e=>{p(e),r==null||r(e)};return t.createElement("section",{className:l("flex flex-col gap-2",a)},o&&t.createElement("p",{className:"text-sm"},o),t.createElement("section",{className:l("flex gap-2",s==="vertical"&&"flex-col")},c.map(e=>t.createElement(y,{color:n,isDisabled:e.isDisabled,isSelected:d===e.value,key:e.value,onChange:x=>u(x),text:e.text,value:e.value}))))}const O={component:R,title:"Radio Group"},i={args:{options:[{value:"1",text:"Option 1"},{value:"2",text:"Option 2"},{value:"3",text:"Option 3",isDisabled:!0}],className:"",color:"purple",label:"Some title",orientation:"vertical"},argTypes:{options:{control:"array",description:"Radio options"},className:{control:"text",description:"Radio className"},color:{control:"select",defaultValue:"purple",description:"Radio color",options:["purple","default","green","red","yellow","blue"]},label:{control:"text",description:"Radio label"},orientation:{control:"radio",defaultValue:"vertical",description:"Radio orientation",options:["vertical","horizontal"]}}};var m,b,f;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    options: [{
      value: '1',
      text: 'Option 1'
    }, {
      value: '2',
      text: 'Option 2'
    }, {
      value: '3',
      text: 'Option 3',
      isDisabled: true
    }],
    className: '',
    color: 'purple',
    label: 'Some title',
    orientation: 'vertical'
  },
  argTypes: {
    options: {
      control: 'array' as any,
      description: 'Radio options'
    },
    className: {
      control: 'text',
      description: 'Radio className'
    },
    color: {
      control: 'select',
      defaultValue: 'purple',
      description: 'Radio color',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    label: {
      control: 'text',
      description: 'Radio label'
    },
    orientation: {
      control: 'radio',
      defaultValue: 'vertical',
      description: 'Radio orientation',
      options: ['vertical', 'horizontal']
    }
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,O as default};
