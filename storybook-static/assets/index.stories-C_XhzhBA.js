import{r as v,R as y}from"./index-D4lIrffr.js";import{c as A}from"./clsx-B-dksMZM.js";/* empty css              */const N={xs:"rounded-xs",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg"},B={none:"shadow-none",xs:"shadow-xs",sm:"shadow-sm",md:"shadow-md",lg:"shadow-lg"},D={none:"p-0",xs:"p-2",sm:"p-4",md:"p-6",lg:"p-8",xl:"p-10"},E=v.forwardRef(({children:l,className:m,isBordered:p=!1,isClickable:d=!1,isHoverable:h=!1,isPressable:s=!1,padding:f="md",radius:u="md",shadow:g="md",onClick:e,role:b,tabIndex:a,...x},w)=>{const r=d||s||e,C=r&&a===void 0,k=A("erco-card",N[u],B[g],p&&"border border-gray-200",h&&"hover:shadow-lg transition-shadow duration-200",d&&"cursor-pointer",s&&"active:scale-95 transition-transform duration-200",D[f],m);return y.createElement("div",{className:k,onClick:e,ref:w,role:b||(r?"button":void 0),tabIndex:C?0:a,...r&&{onKeyDown:n=>{(n.key==="Enter"||n.key===" ")&&e&&(n.preventDefault(),e(n))},"aria-pressed":s?"false":void 0},...x},l)}),F={component:E,title:"Card"},o={args:{children:"Card Content",className:"",isBordered:!1,isClickable:!1,isHoverable:!1,isPressable:!1,padding:"md",radius:"md",shadow:"sm",onClick:()=>{}},argTypes:{children:{description:"Card children"},className:{control:"text",description:"Custom card class name"},isBordered:{control:"boolean",description:"Add border to the card"},isClickable:{control:"boolean",description:"Make the card clickable (adds cursor pointer)"},isHoverable:{control:"boolean",description:"Add hover effect to the card"},isPressable:{control:"boolean",description:"Add press effect to the card (slight scale animation)"},padding:{control:"select",options:["xs","sm","md","lg"]},radius:{control:"select",options:["xs","sm","md","lg"]},shadow:{control:"select",options:["none","xs","sm","md","lg"]},onClick:{action:"clicked",description:"Function called when card is clicked"}}};var t,c,i;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Card Content',
    className: '',
    isBordered: false,
    isClickable: false,
    isHoverable: false,
    isPressable: false,
    padding: 'md',
    radius: 'md',
    shadow: 'sm',
    onClick: () => {}
  },
  argTypes: {
    children: {
      description: 'Card children'
    },
    className: {
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
    padding: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
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
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const I=["Default"];export{o as Default,I as __namedExportsOrder,F as default};
