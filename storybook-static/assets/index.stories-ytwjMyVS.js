import{r as a,R as e}from"./index-D4lIrffr.js";import{c as i}from"./clsx-B-dksMZM.js";/* empty css              */const w={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},R={purple:"!border-purple",default:"!border-gray-900",green:"!border-green",red:"!border-red",yellow:"!border-yellow",blue:"!border-blue"};function _({borderColor:u="purple",description:n,id:m,inputClassNames:b,isRequired:x,label:o,labelClassNames:f,placeholder:C,radius:g="lg",type:N="text",...I}){const[r,l]=a.useState(!1),y=a.useId(),s=m||`erco-input-${y}`,h=i("erco-input",w[g],r&&R[u],b),E=i("block mb-1 text-xs text-gray-900",f),q=()=>{l(!0)},F=()=>{l(!1)};return e.createElement("div",{className:"erco-input-container"},o&&e.createElement("label",{htmlFor:s,className:E},o),e.createElement("input",{className:h,id:s,onBlur:F,onFocus:q,placeholder:C,required:x,type:N,"data-focused":r?"true":"false",...I}),n&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},n))}const T={component:_,title:"Input"},t={args:{borderColor:"purple",description:"",id:"first_name",inputClassNames:"",isRequired:!1,label:"First Name",labelClassNames:"",placeholder:"Ernesto Colina",radius:"lg",type:"text"},argTypes:{borderColor:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Input description"},id:{control:"text",description:"Input id"},inputClassNames:{control:"text",description:"Custom input class name"},isRequired:{control:"boolean",description:"Input required"},label:{control:"text",description:"Input label"},labelClassNames:{control:"text",description:"Custom label class name"},placeholder:{control:"text",description:"Input placeholder"},radius:{control:"select",options:["xs","sm","md","lg","full"]},type:{control:"select",options:["text","email","password","number","time","date","datetime-local"]}}};var c,d,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const k=["Default"];export{t as Default,k as __namedExportsOrder,T as default};
