import{r as k,R as v}from"./index-D4lIrffr.js";import{c as y}from"./clsx-B-dksMZM.js";/* empty css              */const A={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg"},N={none:"shadow-none",xs:"shadow-xs",sm:"shadow-sm",md:"shadow-md",lg:"shadow-lg"},B=k.forwardRef(({children:l,classNames:m,shadow:p="md",radius:h="md",isBordered:f=!1,isHoverable:u=!1,isClickable:a=!1,isPressable:n=!1,onClick:e,role:b,tabIndex:d,...g},w)=>{const r=a||n||e,x=r&&d===void 0,C=y("erco-card",A[h],N[p],f&&"border border-gray-200",u&&"hover:shadow-lg transition-shadow duration-200",a&&"cursor-pointer",n&&"active:scale-95 transition-transform duration-200",m);return v.createElement("div",{className:C,onClick:e,ref:w,role:b||(r?"button":void 0),tabIndex:x?0:d,...r&&{onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&e&&(o.preventDefault(),e(o))},"aria-pressed":n?"false":void 0},...g},l)}),R={component:B,title:"Card"},s={args:{children:"Card Content",classNames:"",isBordered:!1,isClickable:!1,isHoverable:!1,isPressable:!1,radius:"md",shadow:"sm",onClick:()=>{}},argTypes:{children:{description:"Card children"},classNames:{control:"text",description:"Custom card class name"},isBordered:{control:"boolean",description:"Add border to the card"},isClickable:{control:"boolean",description:"Make the card clickable (adds cursor pointer)"},isHoverable:{control:"boolean",description:"Add hover effect to the card"},isPressable:{control:"boolean",description:"Add press effect to the card (slight scale animation)"},radius:{control:"select",options:["xs","sm","md","lg"]},shadow:{control:"select",options:["none","xs","sm","md","lg"]},onClick:{action:"clicked",description:"Function called when card is clicked"}}};var t,c,i;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const T=["Default"];export{s as Default,T as __namedExportsOrder,R as default};
