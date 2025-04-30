import{R as o}from"./index-D4lIrffr.js";import{c as w}from"./clsx-B-dksMZM.js";/* empty css                */const h={sm:"px-3 py-2 text-xs",md:"px-3 py-2 text-sm",lg:"px-4 py-2 text-base"},t={purple:{flat:{bg:"bg-purple/10",text:"text-purple",border:"border-purple"},outline:{bg:"bg-transparent",text:"text-purple",border:"border-purple"},solid:{bg:"bg-purple",text:"text-white"}},default:{flat:{bg:"bg-gray-200",text:"text-gray-900",border:"border-gray-200"},outline:{bg:"bg-transparent",text:"text-gray-900",border:"border-gray-200"},solid:{bg:"bg-gray-200",text:"text-gray-900"}},green:{flat:{bg:"bg-green/10",text:"text-green",border:"border-green"},outline:{bg:"bg-transparent",text:"text-green",border:"border-green"},solid:{bg:"bg-green",text:"text-black"}},red:{flat:{bg:"bg-red/10",text:"text-red",border:"border-red"},outline:{bg:"bg-transparent",text:"text-red",border:"border-red"},solid:{bg:"bg-red",text:"text-white"}},yellow:{flat:{bg:"bg-yellow/10",text:"text-yellow",border:"border-yellow"},outline:{bg:"bg-transparent",text:"text-yellow",border:"border-yellow"},solid:{bg:"bg-yellow",text:"text-black"}},blue:{flat:{bg:"bg-blue/10",text:"text-blue",border:"border-blue"},outline:{bg:"bg-transparent",text:"text-blue",border:"border-blue"},solid:{bg:"bg-blue",text:"text-white"}}},k={flat:e=>`
      ${t[e].flat.bg} 
      ${t[e].flat.text}
      border-transparent
    `,outline:e=>`
      bg-transparent 
      ${t[e].outline.text} 
      border-2
      ${t[e].outline.border}
    `,solid:e=>`
      ${t[e].solid.bg} 
      ${t[e].solid.text} 
      border-transparent
    `},v={purple:"text-purple",default:"text-gray-900",green:"text-green",red:"text-red",yellow:"text-yellow",blue:"text-blue"},$={xs:"w-[16px] h-[16px]",sm:"w-[20px] h-[20px]",md:"w-[25px] h-[25px]",lg:"w-[30px] h-[30px]"};function p({color:e="purple",size:r="sm"}){return o.createElement("figure",{className:`erco-spinner ${v[e]} ${$[r]}`})}p.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'purple'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};function z({ariaLabel:e,className:r="",color:l="purple",children:a,isDisabled:g=!1,isIconOnly:s=!1,isLoading:i=!1,size:d="sm",onClick:x=()=>{},variant:m="solid",...f}){const y=w("erco-button",h[d],r,k[m](l),{"erco-button--icon":s}),B=["purple","green","red","yellow","blue"].includes(l)?"white":l;return o.createElement("button",{"aria-label":e,className:y,disabled:i||g,onClick:x,...f},i?o.createElement("div",{className:"flex items-center gap-2"},o.createElement(p,{color:B,size:s?"sm":d}),a):a)}const L={component:z,title:"Button"},n={args:{ariaLabel:"Button",children:"Button",className:"",color:"purple",isDisabled:!1,isIconOnly:!1,isLoading:!1,size:"sm",variant:"solid",onClick:()=>{}},argTypes:{ariaLabel:{control:"text",description:"Aria label for the button"},color:{control:"select",defaultValue:"purple",description:"Button color",options:["purple","default","green","red","yellow","blue"]},children:{description:"Button children"},className:{control:"text",description:"Custom button class name"},size:{control:"select",defaultValue:"sm",description:"Button size",options:["sm","md","lg"]},isDisabled:{control:"boolean",description:"Button disabled state"},isIconOnly:{control:"boolean",description:"Button icon only state"},isLoading:{control:"boolean",description:"Button loading state"},variant:{control:"radio",defaultValue:"solid",description:"Button variant",options:["flat","outline","solid"]},onClick:{action:"clicked",description:"Button click handler"}}};var c,u,b;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      control: 'radio',
      defaultValue: 'solid',
      description: 'Button variant',
      options: ['flat', 'outline', 'solid']
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler'
    }
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,L as default};
