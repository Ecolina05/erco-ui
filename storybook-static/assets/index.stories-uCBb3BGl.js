import{R as n}from"./index-D4lIrffr.js";import{c as w}from"./clsx-B-dksMZM.js";/* empty css              */const $={sm:"px-3 py-2 text-xs",md:"px-3 py-2 text-sm",lg:"px-4 py-2 text-base"},t={purple:{flat:{bg:"bg-purple/10",text:"text-purple",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-purple/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-purple",border:"border-purple"},solid:{bg:"bg-purple",text:"text-white"}},default:{flat:{bg:"bg-gray-200",text:"text-gray-900",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-gray-200",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-gray-900",border:"border-gray-200"},solid:{bg:"bg-gray-200",text:"text-gray-900"}},green:{flat:{bg:"bg-green/10",text:"text-green",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-green/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-green",border:"border-green"},solid:{bg:"bg-green",text:"text-black"}},red:{flat:{bg:"bg-red/10",text:"text-red",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-red/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-red",border:"border-red"},solid:{bg:"bg-red",text:"text-white"}},yellow:{flat:{bg:"bg-yellow/10",text:"text-yellow",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-yellow/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-yellow",border:"border-yellow"},solid:{bg:"bg-yellow",text:"text-black"}},blue:{flat:{bg:"bg-blue/10",text:"text-blue",border:"border-transparent"},light:{bg:"bg-transparent",hover:"hover:bg-blue/20",text:"text-gray-900",border:"border-transparent"},outline:{bg:"bg-transparent",text:"text-blue",border:"border-blue"},solid:{bg:"bg-blue",text:"text-white"}}},z={flat:e=>`
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
    `},N={purple:"text-purple",default:"text-gray-900",green:"text-green",red:"text-red",yellow:"text-yellow",blue:"text-blue"},k={xs:"w-[16px] h-[16px]",sm:"w-[20px] h-[20px]",md:"w-[25px] h-[25px]",lg:"w-[30px] h-[30px]"};function x({color:e="purple",size:o="sm"}){return n.createElement("figure",{className:`erco-spinner ${N[e]} ${k[o]}`})}x.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{color:{defaultValue:{value:"'purple'",computed:!1},required:!1},size:{defaultValue:{value:"'sm'",computed:!1},required:!1}}};function V({ariaLabel:e,className:o="",color:l="purple",children:i,isDisabled:d=!1,isIconOnly:b=!1,isLoading:a=!1,size:p="sm",variant:f="solid",onClick:s,...m}){const h=w("erco-button",$[p],o,z[f](l),{"erco-button--icon":b}),y=["purple","green","red","yellow","blue"].includes(l)?"white":l,v=B=>{a||d||(B.preventDefault(),s==null||s())};return n.createElement("button",{"aria-label":e,className:h,disabled:a||d,onClick:v,...m},a?n.createElement("div",{className:"flex items-center gap-2"},n.createElement(x,{color:y,size:b?"sm":p}),i):i)}const E={component:V,title:"Button"},r={args:{ariaLabel:"Button",children:"Button",className:"",color:"purple",isDisabled:!1,isIconOnly:!1,isLoading:!1,size:"sm",variant:"solid",onClick:()=>{}},argTypes:{ariaLabel:{control:"text",description:"Aria label for the button"},color:{control:"select",defaultValue:"purple",description:"Button color",options:["purple","default","green","red","yellow","blue"]},children:{description:"Button children"},className:{control:"text",description:"Custom button class name"},size:{control:"select",defaultValue:"sm",description:"Button size",options:["sm","md","lg"]},isDisabled:{control:"boolean",description:"Button disabled state"},isIconOnly:{control:"boolean",description:"Button icon only state"},isLoading:{control:"boolean",description:"Button loading state"},variant:{control:"select",defaultValue:"solid",description:"Button variant",options:["flat","light","outline","solid"]},onClick:{action:"clicked",description:"Button click handler"}}};var u,c,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(c=r.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,E as default};
