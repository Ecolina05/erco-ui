import{r as a,R as e}from"./index-D4lIrffr.js";import{c}from"./clsx-B-dksMZM.js";/* empty css              */const w={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},R={purple:"border-purple",default:"border-gray-900",green:"border-green",red:"border-red",yellow:"border-yellow",blue:"border-blue"};function _({borderColor:u="purple",description:n,id:m,className:b,isRequired:x,label:o,labelClassName:f,placeholder:g,radius:C="lg",type:N="text",...I}){const[r,l]=a.useState(!1),y=a.useId(),s=m||`erco-input-${y}`,h=c("erco-input",w[C],r?R[u]:"border-gray-300",b),E=c("block mb-1 text-xs text-gray-900",f),q=()=>{l(!0)},F=()=>{l(!1)};return e.createElement("div",{className:"erco-input-container"},o&&e.createElement("label",{htmlFor:s,className:E},o),e.createElement("input",{className:h,id:s,onBlur:F,onFocus:q,placeholder:g,required:x,type:N,"data-focused":r?"true":"false",...I}),n&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},n))}const T={component:_,title:"Input"},t={args:{borderColor:"purple",description:"",id:"first_name",className:"",isRequired:!1,label:"First Name",labelClassName:"",placeholder:"Ernesto Colina",radius:"lg",type:"text"},argTypes:{borderColor:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Input description"},id:{control:"text",description:"Input id"},className:{control:"text",description:"Custom input class name"},isRequired:{control:"boolean",description:"Input required"},label:{control:"text",description:"Input label"},labelClassName:{control:"text",description:"Custom label class name"},placeholder:{control:"text",description:"Input placeholder"},radius:{control:"select",options:["xs","sm","md","lg","full"]},type:{control:"select",options:["text","email","password","number","time","date","datetime-local"]}}};var i,d,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    borderColor: 'purple',
    description: '',
    id: 'first_name',
    className: '',
    isRequired: false,
    label: 'First Name',
    labelClassName: '',
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
    className: {
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
    labelClassName: {
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
