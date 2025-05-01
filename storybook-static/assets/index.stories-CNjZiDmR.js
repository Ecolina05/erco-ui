import{r as I,R as n}from"./index-D4lIrffr.js";import{c as m}from"./clsx-B-dksMZM.js";/* empty css              */const T={purple:"border-purple",default:"border-gray-900",green:"border-green",red:"border-red",yellow:"border-yellow",blue:"border-blue"},j={purple:"bg-purple",default:"bg-gray-900",green:"bg-green",red:"bg-red",yellow:"bg-yellow",blue:"bg-blue"},D={nome:"rounded-none",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"},p={sm:"w-6 h-6",md:"w-8 h-8",lg:"w-10 h-10"};function F({alt:t="Avatar",classNames:x="",color:a="purple",isBordered:v=!1,name:e,radius:w="full",size:l="md",src:s="",text:r="",...y}){const[h,A]=I.useState(!1),c=(r==null?void 0:r.slice(0,2))||e&&E(e)||"";function E(u){return u?u.split(" ").map(B=>B.charAt(0)).join("").slice(0,2).toUpperCase():""}const N=()=>{A(!0)},i=s&&!h,d=!i&&(c||e),C=m("erco-avatar",`${x} ${T[a]} ${D[w]} ${p[l]} text-white font-medium`,v&&"border-2",d?`flex items-center justify-center ${j[a]}`:""),$=m("image",p[l]),z=()=>e||(t&&t!=="Avatar"?t:r?`Avatar with text: ${r}`:"Avatar");return n.createElement("span",{"aria-label":z(),className:C,role:"img",...y},i&&n.createElement("img",{alt:t||e||"Avatar image",className:$,loading:"lazy",onError:N,src:s}),d&&n.createElement("span",{"aria-hidden":"true",className:"text-xs uppercase"},c))}const L={component:F,title:"Avatar"},o={args:{alt:"Avatar",classNames:"",color:"purple",isBordered:!1,name:"Ernesto Colina",radius:"full",size:"md",src:"https://i.pravatar.cc/150?u=a04258114e29026708c",text:""},argTypes:{alt:{control:"text"},classNames:{control:"text"},color:{control:"select",options:["purple","default","green","red","yellow","blue"]},isBordered:{control:"boolean"},name:{control:"text",description:"Full name (generates initials if no image/text)"},size:{control:"select",options:["sm","md","lg"]},radius:{control:"select",options:["sm","md","lg","full"]},src:{control:"text"},text:{control:"text"}}};var g,f,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    alt: 'Avatar',
    classNames: '',
    color: 'purple',
    isBordered: false,
    name: 'Ernesto Colina',
    radius: 'full',
    size: 'md',
    src: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
    text: ''
  },
  argTypes: {
    alt: {
      control: 'text'
    },
    classNames: {
      control: 'text'
    },
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    isBordered: {
      control: 'boolean'
    },
    name: {
      control: 'text',
      description: 'Full name (generates initials if no image/text)'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    radius: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'full']
    },
    src: {
      control: 'text'
    },
    text: {
      control: 'text'
    }
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const O=["Default"];export{o as Default,O as __namedExportsOrder,L as default};
