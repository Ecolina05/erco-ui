import{R as l}from"./index-D4lIrffr.js";/* empty css                */const p={purple:"text-purple",default:"text-gray-900",green:"text-green",red:"text-red",yellow:"text-yellow",blue:"text-blue"},c={xs:"w-[16px] h-[16px]",sm:"w-[20px] h-[20px]",md:"w-[25px] h-[25px]",lg:"w-[30px] h-[30px]"};function a({color:s="purple",size:n="sm"}){return l.createElement("figure",{className:`erco-spinner ${p[s]} ${c[n]}`})}const i={component:a,title:"Spinner"},e={args:{color:"purple",size:"sm"},argTypes:{color:{control:"select",options:["purple","default","green","red","yellow","blue"]},size:{control:"select",options:["xs","sm","md","lg"]}}};var r,t,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    color: 'purple',
    size: 'sm'
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
}`,...(o=(t=e.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};const x=["Default"];export{e as Default,x as __namedExportsOrder,i as default};
