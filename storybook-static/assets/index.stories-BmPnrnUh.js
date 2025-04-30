import{R as n}from"./index-D4lIrffr.js";import{c as v}from"./clsx-B-dksMZM.js";/* empty css                */const B={sm:"px-3 py-2 text-xs",md:"px-3 py-2 text-sm",lg:"px-4 py-2 text-base"},t={purple:{flat:{bg:"bg-purple/10",text:"text-purple",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-purple/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-purple",border:"border-purple"},solid:{bg:"bg-purple",text:"text-white"}},default:{flat:{bg:"bg-gray-200",text:"text-gray-900",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-gray-200",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-gray-900",border:"border-gray-200"},solid:{bg:"bg-gray-200",text:"text-gray-900"}},green:{flat:{bg:"bg-green/10",text:"text-green",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-green/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-green",border:"border-green"},solid:{bg:"bg-green",text:"text-black"}},red:{flat:{bg:"bg-red/10",text:"text-red",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-red/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-red",border:"border-red"},solid:{bg:"bg-red",text:"text-white"}},yellow:{flat:{bg:"bg-yellow/10",text:"text-yellow",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-yellow/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-yellow",border:"border-yellow"},solid:{bg:"bg-yellow",text:"text-black"}},blue:{flat:{bg:"bg-blue/10",text:"text-blue",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-blue/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-blue",border:"border-blue"},solid:{bg:"bg-blue",text:"text-white"}}},w={flat:e=>`
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
    `},$={purple:"text-purple",default:"text-gray-900",green:"text-green",red:"text-red",yellow:"text-yellow",blue:"text-blue"},k={xs:"w-[16px] h-[16px]",sm:"w-[20px] h-[20px]",md:"w-[25px] h-[25px]",lg:"w-[30px] h-[30px]"};function c({color:e="purple",size:o="sm"}){return n.createElement("figure",{className:`erco-spinner ${$[e]} ${k[o]}`})}c.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'purple'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};function z({ariaLabel:e,className:o="",color:l="purple",children:a,isDisabled:g=!1,isIconOnly:s=!1,isLoading:i=!1,size:d="sm",variant:x="solid",onClick:m,...f}){const h=v("erco-button",B[d],o,w[x](l),{"erco-button--icon":s}),y=["purple","green","red","yellow","blue"].includes(l)?"white":l;return n.createElement("button",{"aria-label":e,className:h,disabled:i||g,onClick:m,...f},i?n.createElement("div",{className:"flex items-center gap-2"},n.createElement(c,{color:y,size:s?"sm":d}),a):a)}const L={component:z,title:"Button"},r={args:{ariaLabel:"Button",children:"Button",className:"",color:"purple",isDisabled:!1,isIconOnly:!1,isLoading:!1,size:"sm",variant:"solid",onClick:()=>{}},argTypes:{ariaLabel:{control:"text",description:"Aria label for the button"},color:{control:"select",defaultValue:"purple",description:"Button color",options:["purple","default","green","red","yellow","blue"]},children:{description:"Button children"},className:{control:"text",description:"Custom button class name"},size:{control:"select",defaultValue:"sm",description:"Button size",options:["sm","md","lg"]},isDisabled:{control:"boolean",description:"Button disabled state"},isIconOnly:{control:"boolean",description:"Button icon only state"},isLoading:{control:"boolean",description:"Button loading state"},variant:{control:"select",defaultValue:"solid",description:"Button variant",options:["flat","light","outline","solid"]},onClick:{action:"clicked",description:"Button click handler"}}};var b,p,u;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const D=["Default"];export{r as Default,D as __namedExportsOrder,L as default};
