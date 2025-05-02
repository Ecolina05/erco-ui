import{r as y,R as e}from"./index-D4lIrffr.js";import{c as h}from"./clsx-B-dksMZM.js";/* empty css              */const N={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},S={purple:"!border-purple",default:"!border-gray-300",green:"!border-green",red:"!border-red",yellow:"!border-yellow",blue:"!border-blue"},E=y.forwardRef(function({options:i,className:p,borderColor:u="default",description:r,id:n,label:a,isRequired:m,placeholder:b,radius:x="lg",onChange:l,...f},g){const C=o=>{l==null||l(o)},v=h("erco-select",N[x],S[u],p);return e.createElement("div",{className:"w-full"},a&&e.createElement("label",{htmlFor:n,className:"block mb-1 text-xs text-gray-900"},a),e.createElement("select",{className:v,id:n,onChange:C,required:m,ref:g,...f},e.createElement("option",{disabled:!0,selected:!0,value:""},b),i.map(o=>e.createElement("option",{key:o.value,value:o.value},o.label))),r&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},r))}),D={component:E,title:"Select"},t={args:{borderColor:"default",className:"",description:"",label:"",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],placeholder:"Select an option",radius:"md",onChange:()=>{}},argTypes:{options:{description:"Select options"},className:{control:"text",description:"Custom card class name"},borderColor:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Custom card description"},label:{control:"text",description:"Custom card label"},placeholder:{control:"text",description:"Custom card placeholder"},radius:{control:"select",options:["xs","sm","md","lg"]}}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    borderColor: 'default',
    className: '',
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
    className: {
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
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const T=["Default"];export{t as Default,T as __namedExportsOrder,D as default};
