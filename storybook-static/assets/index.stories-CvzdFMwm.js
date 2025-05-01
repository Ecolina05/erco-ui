import{R as e}from"./index-D4lIrffr.js";import{c as f}from"./clsx-B-dksMZM.js";/* empty css              */const C={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},v={purple:"!border-purple",default:"!border-gray-300",green:"!border-green",red:"!border-red",yellow:"!border-yellow",blue:"!border-blue"};function y({options:i,classNames:p,borderColor:u="default",description:n,id:r,label:s,placeholder:m,radius:b="lg",onChange:l}){const x=o=>{l==null||l(o)},g=f("erco-select",C[b],v[u],p);return e.createElement("div",{className:"w-full"},s&&e.createElement("label",{htmlFor:r,className:"block mb-1 text-xs text-gray-900"},s),e.createElement("select",{className:g,id:r,onChange:x},e.createElement("option",{disabled:!0,selected:!0},m),i.map(o=>e.createElement("option",{key:o.value,value:o.value},o.label))),n&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},n))}const E={component:y,title:"Select"},t={args:{borderColor:"default",classNames:"",description:"",label:"",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option",radius:"md",onChange:()=>{}},argTypes:{options:{description:"Select options"},classNames:{control:"text",description:"Custom card class name"},borderColor:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Custom card description"},label:{control:"text",description:"Custom card label"},placeholder:{control:"text",description:"Custom card placeholder"},radius:{control:"select",options:["xs","sm","md","lg"]}}};var a,c,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    borderColor: 'default',
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
    placeholder: 'Select an option',
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
    placeholder: {
      control: 'text',
      description: 'Custom card placeholder'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const O=["Default"];export{t as Default,O as __namedExportsOrder,E as default};
