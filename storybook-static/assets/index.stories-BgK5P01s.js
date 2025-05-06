import{r as u,R as e}from"./index-D4lIrffr.js";import{c as m}from"./clsx-B-dksMZM.js";/* empty css              */const k={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},v={purple:"border-purple",default:"border-gray-900",green:"border-green",red:"border-red",yellow:"border-yellow",blue:"border-blue"};function s({color:y="purple",description:a,id:n,className:C,isRequired:I,label:o,labelClassName:E,placeholder:R,radius:q="lg",type:F="text",onFocus:i,onBlur:c,..._}){const[d,p]=u.useState(!1),S=u.useRef(null),w=m("erco-input",k[q],d?v[y]:"border-gray-300",C),D=m("block mb-1 text-xs text-gray-900",E),J=r=>{p(!0),i&&i(r)},T=r=>{p(!1),c&&c(r)};return e.createElement("div",{className:"erco-input-container"},o&&e.createElement("label",{htmlFor:n,className:D},o),e.createElement("input",{ref:S,className:w,"data-focused":d?"true":"false",id:n,onBlur:T,onFocus:J,placeholder:R,required:I,type:F,..._}),a&&e.createElement("p",{className:"text-xs font-light text-gray-500 mt-1 italic"},a))}const z={component:s,title:"Input"},t={args:{color:"purple",description:"",id:"first_name",className:"",isRequired:!1,label:"First Name",labelClassName:"",placeholder:"Ernesto Colina",radius:"lg",type:"text"},argTypes:{color:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Input description"},id:{control:"text",description:"Input id"},className:{control:"text",description:"Custom input class name"},isRequired:{control:"boolean",description:"Input required"},label:{control:"text",description:"Input label"},labelClassName:{control:"text",description:"Custom label class name"},placeholder:{control:"text",description:"Input placeholder"},radius:{control:"select",options:["xs","sm","md","lg","full"]},type:{control:"select",options:["text","email","password","number","time","date","datetime-local"]}}},l={render:()=>e.createElement("form",{className:"flex flex-col gap-3"},e.createElement(s,{description:"",id:"first_name",className:"",isRequired:!1,label:"First Name",labelClassName:"",placeholder:"Ernesto",radius:"lg",type:"text"}),e.createElement(s,{description:"",id:"first_name",className:"",isRequired:!1,label:"Second Name",labelClassName:"",placeholder:"Colina",radius:"lg",type:"text"}),e.createElement(s,{color:"purple",description:"Should be at least 8 characters long",id:"first_name",className:"",isRequired:!1,labelClassName:"",placeholder:"John",radius:"lg",type:"text"}))};var f,b,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    color: 'purple',
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
    color: {
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
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var N,g,h;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <form className='flex flex-col gap-3'>
      <Input description='' id='first_name' className='' isRequired={false} label='First Name' labelClassName='' placeholder='Ernesto' radius='lg' type='text' />

      <Input description='' id='first_name' className='' isRequired={false} label='Second Name' labelClassName='' placeholder='Colina' radius='lg' type='text' />

      <Input color='purple' description='Should be at least 8 characters long' id='first_name' className='' isRequired={false} labelClassName='' placeholder='John' radius='lg' type='text' />
    </form>
}`,...(h=(g=l.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const A=["Default","FormInput"];export{t as Default,l as FormInput,A as __namedExportsOrder,z as default};
