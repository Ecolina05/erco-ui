import{r,R as e}from"./index-D4lIrffr.js";/* empty css              */function E({children:p,title:u,isOpen:o=!1,id:h,...x}){const[t,a]=r.useState(o),g=r.useId(),c=h||g,i=`accordion-header-${c}`,s=`accordion-content-${c}`;r.useEffect(()=>{a(o)},[o]);const f=()=>{a(!t)};return e.createElement("div",{className:"accordion",...x},e.createElement("h3",null,e.createElement("button",{"aria-controls":s,"aria-expanded":t,className:"accordion-trigger flex items-center justify-between border-b border-gray-300 w-full p-2 text-left cursor-pointer focus:outline-none",id:i,onClick:f,type:"button"},e.createElement("span",{className:"text-xs font-medium mb-0"},u),e.createElement("span",{className:"accordion-icon ml-2","aria-hidden":"true"},t?e.createElement("svg",{"aria-hidden":"true",className:"w-6 h-6 text-gray-800",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m16 14-4-4-4 4"})):e.createElement("svg",{"aria-hidden":"true",className:"w-6 h-6 text-gray-800",fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m8 10 4 4 4-4"}))))),e.createElement("div",{"aria-labelledby":i,className:"accordion-content",hidden:!t,id:s,role:"region"},t&&e.createElement("div",{className:"text-xs p-2"},p)))}const k={component:E,title:"Accordion"},n={args:{title:"Accordion Title",children:e.createElement("p",null,"Accordion Content"),id:"accordion-1",isOpen:!1},argTypes:{title:{control:"text"},children:{control:"text"},id:{control:"text"},isOpen:{control:"boolean"}}};var l,d,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    title: 'Accordion Title',
    children: <p>Accordion Content</p>,
    id: 'accordion-1',
    isOpen: false
  },
  argTypes: {
    title: {
      control: 'text'
    },
    children: {
      control: 'text'
    },
    id: {
      control: 'text'
    },
    isOpen: {
      control: 'boolean'
    }
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const v=["Default"];export{n as Default,v as __namedExportsOrder,k as default};
