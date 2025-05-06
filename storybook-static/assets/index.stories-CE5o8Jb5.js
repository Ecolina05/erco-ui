import{R as o}from"./index-D4lIrffr.js";import{c as u}from"./clsx-B-dksMZM.js";/* empty css              */const x={purple:"bg-purple/10 text-purple border-purple",default:"bg-white text-gray-900 border-gray-200",green:"bg-green/10 text-green border-green",red:"bg-red/10 text-red border-red",yellow:"bg-yellow/10 text-yellow border-yellow",blue:"bg-blue/10 text-blue border-blue"},g={"top-right":"fixed top-4 right-4","top-left":"fixed top-4 left-4","top-center":"fixed top-4 left-1/2 transform -translate-x-1/2","bottom-right":"fixed bottom-4 right-4","bottom-left":"fixed bottom-4 left-4","bottom-center":"fixed bottom-4 left-1/2 transform -translate-x-1/2"},f={none:"shadow-none",xs:"shadow-xs",sm:"shadow-sm",md:"shadow-md",lg:"shadow-lg",xl:"shadow-xl"},b={sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",xl:"rounded-xl","2xl":"rounded-2xl","3xl":"rounded-3xl",full:"rounded-full"};function h({title:n,className:l="",color:a="default",description:i,position:d="bottom-right",shadow:c="sm",radius:p="lg"}){const m=u("erco-toast",x[a],f[c],g[d],b[p],l);return o.createElement("div",{className:m},o.createElement("header",{className:"erco-toast-title"},n),o.createElement("div",{className:"erco-toast-description"},i))}const N={component:h,title:"Toast"},t={args:{title:"Toast Title",className:"",color:"default",description:"Toast Description",position:"bottom-right",shadow:"sm",radius:"lg"},argTypes:{title:{control:"text",description:"Toast title"},className:{control:"text",description:"Toast class name"},color:{control:"select",options:["purple","default","green","red","yellow","blue"]},description:{control:"text",description:"Toast description"},position:{control:"select",options:["top-right","top-left","top-center","bottom-right","bottom-left","bottom-center"]},shadow:{control:"select",options:["none","xs","sm","md","lg","xl"]},radius:{control:"select",options:["sm","md","lg","xl","2xl","3xl","full"]}}};var e,s,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    title: 'Toast Title',
    className: '',
    color: 'default',
    description: 'Toast Description',
    position: 'bottom-right',
    shadow: 'sm',
    radius: 'lg'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Toast title'
    },
    className: {
      control: 'text',
      description: 'Toast class name'
    },
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    description: {
      control: 'text',
      description: 'Toast description'
    },
    position: {
      control: 'select',
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center']
    },
    shadow: {
      control: 'select',
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl']
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']
    }
  }
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,N as default};
