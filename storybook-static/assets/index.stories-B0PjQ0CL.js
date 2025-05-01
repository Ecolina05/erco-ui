import{r as b,R as t}from"./index-D4lIrffr.js";import{c as l}from"./clsx-B-dksMZM.js";/* empty css              */const C={purple:"bg-purple/20",default:"bg-gray-900/20",green:"bg-green/20",red:"bg-red/20",yellow:"bg-yellow/20",blue:"bg-blue/20"},E={purple:"!text-purple",default:"!text-gray-900",green:"!text-green",red:"!text-red",yellow:"!text-gray-900",blue:"!text-blue"};function h({tabs:n,content:d,className:g,color:u,defaultValue:T,orientation:v="horizontal",value:a,onChange:s}){const o=b.useId(),[r,p]=b.useState(a||T||(n.length>0?n[0].value:""));b.useEffect(()=>{a!==void 0&&p(a)},[a]);const k=e=>{a===void 0&&p(e),s==null||s(e)},i=v==="vertical";return t.createElement("div",{className:l("erco-tabs-container",i?"flex flex-row":"flex flex-col",g)},t.createElement("div",{"aria-orientation":v,className:l("erco-tabs",i?"flex-col border-r":"flex-row border-b"),role:"tablist"},n.map(e=>t.createElement("button",{"aria-controls":`${o}-panel-${e.value}`,"aria-selected":r===e.value,className:l("erco-tab px-4 py-2 focus:outline-none",r===e.value?["active",C[u],E[u]]:null,e.disabled&&"opacity-50 cursor-not-allowed"),disabled:e.disabled,id:`${o}-tab-${e.value}`,key:e.value,role:"tab",onClick:()=>!e.disabled&&k(e.value)},e.icon&&t.createElement("span",{className:"mr-2"},e.icon),e.label))),t.createElement("div",{className:l("flex-1",i?"pl-1 pt-1":"pt-2")},n.map((e,m)=>d[m]?t.createElement("div",{"aria-labelledby":`${o}-tab-${e.value}`,className:l("text-xs px-1",r===e.value?"block":"hidden"),hidden:r!==e.value,id:`${o}-panel-${e.value}`,key:e.value,role:"tabpanel"},d[m]):null)))}const z={component:h,title:"Tabs"},c={args:{tabs:[{label:"Tab 1",value:"tab1"},{label:"Tab 2",value:"tab2"},{label:"Tab 3",value:"tab3"}],content:[t.createElement("div",{key:"tab1"},"Content 1"),t.createElement("div",{key:"tab2"},"Content 2"),t.createElement("div",{key:"tab3"},"Content 3")],className:"",color:"purple",defaultValue:"tab1",orientation:"horizontal",value:void 0,onChange:void 0},argTypes:{tabs:{control:"select",options:[{label:"Tab 1",value:"tab1"},{label:"Tab 2",value:"tab2"},{label:"Tab 3",value:"tab3"}]},content:{control:"select",options:[t.createElement("div",{key:"tab1"},"Content 1"),t.createElement("div",{key:"tab2"},"Content 2"),t.createElement("div",{key:"tab3"},"Content 3")]},className:{control:"text"},color:{control:"select",options:["purple","default","green","red","yellow","blue"]},defaultValue:{control:"text"},orientation:{control:"radio",options:["horizontal","vertical"]},value:{control:"text"},onChange:{}}};var f,x,y;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    tabs: [{
      label: 'Tab 1',
      value: 'tab1'
    }, {
      label: 'Tab 2',
      value: 'tab2'
    }, {
      label: 'Tab 3',
      value: 'tab3'
    }],
    content: [<div key='tab1'>Content 1</div>, <div key='tab2'>Content 2</div>, <div key='tab3'>Content 3</div>],
    className: '',
    color: 'purple',
    defaultValue: 'tab1',
    orientation: 'horizontal',
    value: undefined,
    onChange: undefined
  },
  argTypes: {
    tabs: {
      control: 'select',
      options: [{
        label: 'Tab 1',
        value: 'tab1'
      }, {
        label: 'Tab 2',
        value: 'tab2'
      }, {
        label: 'Tab 3',
        value: 'tab3'
      }]
    },
    content: {
      control: 'select',
      options: [<div key='tab1'>Content 1</div>, <div key='tab2'>Content 2</div>, <div key='tab3'>Content 3</div>]
    },
    className: {
      control: 'text'
    },
    color: {
      control: 'select',
      options: ['purple', 'default', 'green', 'red', 'yellow', 'blue']
    },
    defaultValue: {
      control: 'text'
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical']
    },
    value: {
      control: 'text'
    },
    onChange: {}
  }
}`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const S=["Default"];export{c as Default,S as __namedExportsOrder,z as default};
