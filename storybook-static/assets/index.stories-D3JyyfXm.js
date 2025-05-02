import{R as n}from"./index-D4lIrffr.js";import{c as $}from"./clsx-B-dksMZM.js";/* empty css              */const z={sm:"px-3 py-2 text-xs",md:"px-3 py-2 text-sm",lg:"px-4 py-2 text-base"},t={purple:{flat:{bg:"bg-purple/10",text:"text-purple",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-purple/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-purple",border:"border-purple"},solid:{bg:"bg-purple",text:"text-white"}},default:{flat:{bg:"bg-gray-200",text:"text-gray-900",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-gray-200",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-gray-900",border:"border-gray-200"},solid:{bg:"bg-gray-200",text:"text-gray-900"}},green:{flat:{bg:"bg-green/10",text:"text-green",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-green/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-green",border:"border-green"},solid:{bg:"bg-green",text:"text-black"}},red:{flat:{bg:"bg-red/10",text:"text-red",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-red/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-red",border:"border-red"},solid:{bg:"bg-red",text:"text-white"}},yellow:{flat:{bg:"bg-yellow/10",text:"text-yellow",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-yellow/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-yellow",border:"border-yellow"},solid:{bg:"bg-yellow",text:"text-black"}},blue:{flat:{bg:"bg-blue/10",text:"text-blue",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-blue/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-blue",border:"border-blue"},solid:{bg:"bg-blue",text:"text-white"}}},N={flat:e=>`
      ${t[e].flat.bg} 
      ${t[e].flat.text}
      border-transparent
    `,light:e=>`
      ${t[e].light.bg} 
      ${t[e].light.text} 
      ${t[e].light.hover}
      transition-colors duration-200 ease-in-out
    `,outline:e=>`
      bg-transparent 
      ${t[e].outline.text} 
      border-2
      ${t[e].outline.border}
    `,solid:e=>`
      ${t[e].solid.bg} 
      ${t[e].solid.text} 
      border-transparent
    `},k={purple:"text-purple",default:"text-gray-900",green:"text-green",red:"text-red",yellow:"text-yellow",blue:"text-blue"},V={xs:"w-[16px] h-[16px]",sm:"w-[20px] h-[20px]",md:"w-[25px] h-[25px]",lg:"w-[30px] h-[30px]"};function f({color:e="purple",size:o="sm"}){return n.createElement("figure",{className:`erco-spinner ${k[e]} ${V[o]}`})}f.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'purple'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};function C({ariaLabel:e,className:o="",color:l="purple",children:i,isDisabled:d=!1,isIconOnly:b=!1,isLoading:a=!1,size:p="sm",type:u="button",variant:m="solid",onClick:s,...h}){const y=$("erco-button",z[p],o,N[m](l),{"erco-button--icon":b}),v=["purple","green","red","yellow","blue"].includes(l)?"white":l,B=w=>{a||d||(u!=="submit"&&w.preventDefault(),s==null||s())};return n.createElement("button",{"aria-label":e,className:y,disabled:a||d,onClick:B,type:u,...h},a?n.createElement("div",{className:"flex items-center gap-2"},n.createElement(f,{color:v,size:b?"sm":p}),i):i)}const I={component:C,title:"Button"},r={args:{ariaLabel:"Button",children:"Button",className:"",color:"purple",isDisabled:!1,isIconOnly:!1,isLoading:!1,size:"sm",variant:"solid",onClick:()=>{}},argTypes:{ariaLabel:{control:"text",description:"Aria label for the button"},color:{control:"select",defaultValue:"purple",description:"Button color",options:["purple","default","green","red","yellow","blue"]},children:{description:"Button children"},className:{control:"text",description:"Custom button class name"},size:{control:"select",defaultValue:"sm",description:"Button size",options:["sm","md","lg"]},isDisabled:{control:"boolean",description:"Button disabled state"},isIconOnly:{control:"boolean",description:"Button icon only state"},isLoading:{control:"boolean",description:"Button loading state"},variant:{control:"select",defaultValue:"solid",description:"Button variant",options:["flat","light","outline","solid"]},onClick:{action:"clicked",description:"Button click handler"}}};var c,g,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ariaLabel: 'Button',
    children: 'Button',
    className: '',
    color: 'purple',
    isDisabled: false,
    isIconOnly: false,
    isLoading: false,
    size: 'sm',
    variant: 'solid',
    onClick: () => {}
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      description: 'Aria label for the button'
    },
    color: {
      control: 'select',
      defaultValue: 'purple',
      description: 'Button color',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    children: {
      description: 'Button children'
    },
    className: {
      control: 'text',
      description: 'Custom button class name'
    },
    size: {
      control: 'select',
      defaultValue: 'sm',
      description: 'Button size',
      options: ['sm', 'md', 'lg']
    },
    isDisabled: {
      control: 'boolean',
      description: 'Button disabled state'
    },
    isIconOnly: {
      control: 'boolean',
      description: 'Button icon only state'
    },
    isLoading: {
      control: 'boolean',
      description: 'Button loading state'
    },
    variant: {
      control: 'select',
      defaultValue: 'solid',
      description: 'Button variant',
      options: ['flat', 'light', 'outline', 'solid']
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler'
    }
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const O=["Default"];export{r as Default,O as __namedExportsOrder,I as default};
