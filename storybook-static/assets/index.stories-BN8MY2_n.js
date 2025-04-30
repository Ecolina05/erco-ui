import{R as e}from"./index-D4lIrffr.js";import{c as x}from"./clsx-B-dksMZM.js";/* empty css                */const f={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},C={purple:"!border-purple",default:"!border-gray-300",green:"!border-green",red:"!border-red",yellow:"!border-yellow",blue:"!border-blue"};function y({options:i,classNames:p,borderColor:u="default",description:r,id:n,label:s,radius:m="lg",onChange:l}){const b=o=>{l==null||l(o)},g=x("erco-select",f[m],C[u],p);return e.createElement(e.Fragment,null,s&&e.createElement("label",{htmlFor:n,className:"block mb-1 text-xs text-gray-900"},s),e.createElement("select",{className:g,id:n,onChange:b},i.map(o=>e.createElement("option",{key:o.value,value:o.value},o.label))),r&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},r))}const E={component:y,title:"Select"},t={args:{borderColor:"purple",classNames:"",description:"",label:"",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],radius:"md",onChange:()=>{}},argTypes:{options:{description:"Select options"},classNames:{control:"text",description:"Custom card class name"},borderColor:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Custom card description"},label:{control:"text",description:"Custom card label"},radius:{control:"select",options:["xs","sm","md","lg"]}}};var a,c,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    borderColor: 'purple',
    classNames: '',
    description: '',
    label: '',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }],
    radius: 'md',
    onChange: () => {}
  },
  argTypes: {
    options: {
      description: 'Select options'
    },
    classNames: {
      control: 'text',
      description: 'Custom card class name'
    },
    borderColor: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    description: {
      control: 'text',
      description: 'Custom card description'
    },
    label: {
      control: 'text',
      description: 'Custom card label'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const S=["Default"];export{t as Default,S as __namedExportsOrder,E as default};
