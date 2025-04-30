import{r as I,R as e}from"./index-D4lIrffr.js";import{c as s}from"./clsx-B-dksMZM.js";/* empty css                */const y={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},h={purple:"!border-purple",default:"!border-gray-900",green:"!border-green",red:"!border-red",yellow:"!border-yellow",blue:"!border-blue"};function E({borderColor:i="purple",description:t,id:o,textareaClassNames:p,isRequired:u,label:n,labelClassNames:m,placeholder:x,radius:b="lg",...C}){const[g,l]=I.useState(!1),f=s("erco-textarea",y[b],g&&h[i],p),N=s("block mb-1 text-xs text-gray-900",m);return e.createElement("div",null,n&&e.createElement("label",{htmlFor:o,className:N},n),e.createElement("textarea",{className:f,id:o,onBlur:()=>l(!1),onFocus:()=>l(!0),placeholder:x,required:u,...C}),t&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},t))}const w={component:E,title:"Textarea"},r={args:{borderColor:"purple",description:"",id:"first_name",isRequired:!0,label:"First Name",labelClassNames:"",placeholder:"Ernesto Colina",radius:"lg",textareaClassNames:""},argTypes:{borderColor:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Input description"},id:{control:"text",description:"Input id"},isRequired:{control:"boolean",description:"Input required"},label:{control:"text",description:"Input label"},labelClassNames:{control:"text",description:"Custom label class name"},placeholder:{control:"text",description:"Input placeholder"},radius:{control:"select",options:["xs","sm","md","lg","full"]},textareaClassNames:{control:"text",description:"Custom textarea class name"}}};var a,d,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    borderColor: 'purple',
    description: '',
    id: 'first_name',
    isRequired: true,
    label: 'First Name',
    labelClassNames: '',
    placeholder: 'Ernesto Colina',
    radius: 'lg',
    textareaClassNames: ''
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
    textareaClassNames: {
      control: 'text',
      description: 'Custom textarea class name'
    }
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const T=["Default"];export{r as Default,T as __namedExportsOrder,w as default};
