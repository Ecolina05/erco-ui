import{j as d}from"./jsx-runtime-D_zvdyIk.js";function a(t){var o,n,e="";if(typeof t=="string"||typeof t=="number")e+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(o=0;o<r;o++)t[o]&&(n=a(t[o]))&&(e&&(e+=" "),e+=n)}else for(n in t)t[n]&&(e&&(e+=" "),e+=n);return e}function g(){for(var t,o,n=0,e="",r=arguments.length;n<r;n++)(t=arguments[n])&&(o=a(t))&&(e&&(e+=" "),e+=o);return e}const m={purple:"bg-primary text-white hover:bg-primary/90",default:"bg-gray-200 text-gray-900 hover:bg-gray-200/90",green:"bg-success text-black hover:bg-success/90",red:"bg-error text-white hover:bg-error/90",yellow:"bg-warning text-black hover:bg-warning/90",blue:"bg-info text-white hover:bg-info/90"},x={xs:"px-2 py-1 text-xs",sm:"px-2 py-1 text-sm",md:"px-3 py-1 text-base",lg:"px-4 py-1 text-lg"};function b({color:t="purple",className:o="",children:n,size:e="xs",onClick:r=()=>{},...u}){const p=g("button",m[t],x[e],o);return d.jsx("button",{className:p,onClick:r,...u,children:n})}const h={component:b,title:"Button"},s={args:{className:"",children:"Button",color:"purple",size:"xs",onClick:()=>alert("Button clicked")},argTypes:{color:{control:"select",defaultValue:"purple",description:"Button color",options:["purple","default","green","red","yellow","blue"]},children:{description:"Button children"},className:{control:"text",description:"Custom button class name"},size:{control:"select",defaultValue:"xs",description:"Button size",options:["xs","sm","md","lg"]},onClick:{action:"clicked",description:"Button click handler"}}};var l,c,i;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    className: '',
    children: 'Button',
    color: 'purple',
    size: 'xs',
    onClick: () => alert('Button clicked')
  },
  argTypes: {
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
      defaultValue: 'xs',
      description: 'Button size',
      options: ['xs', 'sm', 'md', 'lg']
    },
    onClick: {
      action: 'clicked',
      description: 'Button click handler'
    }
  }
}`,...(i=(c=s.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const y=["Default"];export{s as Default,y as __namedExportsOrder,h as default};
