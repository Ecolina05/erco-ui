import{r as I,R as e}from"./index-D4lIrffr.js";import{c as s}from"./clsx-B-dksMZM.js";/* empty css              */const h={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},E={purple:"!border-purple",default:"!border-gray-900",green:"!border-green",red:"!border-red",yellow:"!border-yellow",blue:"!border-blue"};function q({borderColor:c="purple",description:n,id:r,inputClassNames:p,isRequired:u,label:o,labelClassNames:m,placeholder:b,radius:x="lg",type:C="text",...f}){const[g,l]=I.useState(!1),N=s("erco-input",h[x],g&&E[c],p),y=s("block mb-1 text-xs text-gray-900",m);return e.createElement("div",null,o&&e.createElement("label",{htmlFor:r,className:y},o),e.createElement("input",{className:N,id:r,onBlur:()=>l(!1),onFocus:()=>l(!0),placeholder:b,required:u,type:C,...f}),n&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},n))}const _={component:q,title:"Input"},t={args:{borderColor:"purple",description:"",id:"first_name",inputClassNames:"",isRequired:!1,label:"First Name",labelClassNames:"",placeholder:"Ernesto Colina",radius:"lg",type:"text"},argTypes:{borderColor:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Input description"},id:{control:"text",description:"Input id"},inputClassNames:{control:"text",description:"Custom input class name"},isRequired:{control:"boolean",description:"Input required"},label:{control:"text",description:"Input label"},labelClassNames:{control:"text",description:"Custom label class name"},placeholder:{control:"text",description:"Input placeholder"},radius:{control:"select",options:["xs","sm","md","lg","full"]},type:{control:"select",options:["text","email","password","number","time","date","datetime-local"]}}};var a,i,d;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    borderColor: 'purple',
    description: '',
    id: 'first_name',
    inputClassNames: '',
    isRequired: false,
    label: 'First Name',
    labelClassNames: '',
    placeholder: 'Ernesto Colina',
    radius: 'lg',
    type: 'text'
  },
  argTypes: {
    borderColor: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    description: {
      control: 'text',
      description: 'Input description'
    },
    id: {
      control: 'text',
      description: 'Input id'
    },
    inputClassNames: {
      control: 'text',
      description: 'Custom input class name'
    },
    isRequired: {
      control: 'boolean',
      description: 'Input required'
    },
    label: {
      control: 'text',
      description: 'Input label'
    },
    labelClassNames: {
      control: 'text',
      description: 'Custom label class name'
    },
    placeholder: {
      control: 'text',
      description: 'Input placeholder'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'full']
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'time', 'date', 'datetime-local']
    }
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,_ as default};
