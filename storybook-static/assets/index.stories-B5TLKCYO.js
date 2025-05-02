import{r as y,R as A}from"./index-D4lIrffr.js";import{c as t}from"./clsx-B-dksMZM.js";/* empty css              */const N={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg"},B={none:"shadow-none",xs:"shadow-xs",sm:"shadow-sm",md:"shadow-md",lg:"shadow-lg"},D=y.forwardRef(({children:m,classNames:p,shadow:h="md",radius:f="md",isBordered:u=!1,isHoverable:b=!1,isClickable:a=!1,isPressable:n=!1,onClick:e,role:g,tabIndex:d,...w},C)=>{const r=a||n||e,x=r&&d===void 0,k=t("erco-card",N[f],B[h],u&&"border border-gray-200",b&&"hover:shadow-lg transition-shadow duration-200",a&&"cursor-pointer",n&&"active:scale-95 transition-transform duration-200"),v=t(k,p);return A.createElement("div",{className:v,onClick:e,ref:C,role:g||(r?"button":void 0),tabIndex:x?0:d,...r&&{onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&e&&(s.preventDefault(),e(s))},"aria-pressed":n?"false":void 0},...w},m)}),T={component:D,title:"Card"},o={args:{children:"Card Content",classNames:"",isBordered:!1,isClickable:!1,isHoverable:!1,isPressable:!1,radius:"md",shadow:"sm",onClick:()=>{}},argTypes:{children:{description:"Card children"},classNames:{control:"text",description:"Custom card class name"},isBordered:{control:"boolean",description:"Add border to the card"},isClickable:{control:"boolean",description:"Make the card clickable (adds cursor pointer)"},isHoverable:{control:"boolean",description:"Add hover effect to the card"},isPressable:{control:"boolean",description:"Add press effect to the card (slight scale animation)"},radius:{control:"select",options:["xs","sm","md","lg"]},shadow:{control:"select",options:["none","xs","sm","md","lg"]},onClick:{action:"clicked",description:"Function called when card is clicked"}}};var c,l,i;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Card Content',
    classNames: '',
    isBordered: false,
    isClickable: false,
    isHoverable: false,
    isPressable: false,
    radius: 'md',
    shadow: 'sm',
    onClick: () => {}
  },
  argTypes: {
    children: {
      description: 'Card children'
    },
    classNames: {
      control: 'text',
      description: 'Custom card class name'
    },
    isBordered: {
      control: 'boolean',
      description: 'Add border to the card'
    },
    isClickable: {
      control: 'boolean',
      description: 'Make the card clickable (adds cursor pointer)'
    },
    isHoverable: {
      control: 'boolean',
      description: 'Add hover effect to the card'
    },
    isPressable: {
      control: 'boolean',
      description: 'Add press effect to the card (slight scale animation)'
    },
    radius: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    },
    shadow: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg']
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when card is clicked'
    }
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const F=["Default"];export{o as Default,F as __namedExportsOrder,T as default};
