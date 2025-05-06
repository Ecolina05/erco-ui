import{R as f}from"./index-D4lIrffr.js";import{c as k}from"./clsx-B-dksMZM.js";/* empty css              */const b={purple:"text-purple",default:"text-gray-900",green:"text-green",red:"text-red",yellow:"text-yellow",blue:"text-blue"},h={xs:"text-xs",sm:"text-sm",md:"text-md",lg:"text-lg",xl:"text-xl"};function y({children:s,className:o,color:a="default",href:c="#",size:p="sm",target:m="_blank",underline:i=!1,onClick:t,...u}){const d=k("erco-link",`${b[a]} ${h[p]} ${i?"underline":""}`,o),x=g=>{t==null||t(g)};return f.createElement("a",{href:c,target:m,className:d,onClick:x,...u},s)}const L={component:y,title:"Link"},e={args:{children:"Link",color:"purple",href:"https://example.com",size:"sm",underline:!0,target:"_blank",onClick:()=>{}},argTypes:{color:{control:"select",options:["purple","default","green","red","yellow","blue"]},size:{control:"select",options:["xs","sm","md","lg"]}}};var l,n,r;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Link',
    color: 'purple',
    href: 'https://example.com',
    size: 'sm',
    underline: true,
    target: '_blank',
    onClick: () => {}
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg']
    }
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,L as default};
