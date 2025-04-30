import{r as p,R as r}from"./index-D4lIrffr.js";import{c as b}from"./clsx-B-dksMZM.js";/* empty css                */const w={purple:"bg-purple",default:"bg-gray-900",green:"bg-green",red:"bg-red",yellow:"bg-yellow",blue:"!bg-blue"};function y({color:d="purple",id:x,label:o,checked:a=!1,disabled:e=!1,onChange:l,...m}){const[s,c]=p.useState(a);p.useEffect(()=>{c(a)},[a]);const g=n=>{c(n.target.checked),l==null||l(n)},h=b('relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all',{[w[d]]:s,"opacity-20 cursor-not-allowed":e,"cursor-pointer":!e});return r.createElement("label",{className:"inline-flex items-center"},r.createElement("input",{type:"checkbox",value:"",className:"sr-only peer",checked:s,onChange:g,disabled:e,...m}),r.createElement("div",{className:h}),o&&r.createElement("span",{className:`ms-3 text-xs font-normal text-gray-900 ${e?"opacity-20 cursor-not-allowed":"cursor-pointer"}`},o))}const N={component:y,title:"Switch"},t={args:{checked:!1,color:"purple",disabled:!1,id:"switch-1",label:"Switch",onChange:()=>{}},argTypes:{color:{control:"select",options:["purple","default","green","red","yellow","blue"]}}};var f,u,i;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: false,
    color: 'purple',
    disabled: false,
    id: 'switch-1',
    label: 'Switch',
    onChange: () => {}
  },
  argTypes: {
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    }
  }
}`,...(i=(u=t.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};const C=["Default"];export{t as Default,C as __namedExportsOrder,N as default};
