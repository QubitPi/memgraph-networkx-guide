"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),h=n,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(7462),n=r(7294),o=r(6010),l=r(2466),i=r(6550),s=r(1980),u=r(7392),c=r(12);function m(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??m(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=p(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=d({queryString:r,groupId:a}),[m,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=s??m;return h({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,o]),tabValues:o}}var f=r(2389);const y="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:m}=(0,l.o5)(),p=e=>{const t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==i&&(m(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",y)},n.createElement(k,(0,a.Z)({},e,t)),n.createElement(v,(0,a.Z)({},e,t)))}function x(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},5136:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294);const n={ctaButton:"ctaButton_fu4n",ctaBox:"ctaBox_gZT4"};function o(e){const{title:t,url:r}=e;return a.createElement("div",{className:n.ctaBox},a.createElement("a",{href:r,className:n.ctaButton,style:n},t))}},9661:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),l=r(5162),i=r(5136);const s={title:"Katz centrality",sidebar_label:"Katz centrality"},u=void 0,c={unversionedId:"algorithms/centrality-algorithms/katz-centrality",id:"algorithms/centrality-algorithms/katz-centrality",title:"Katz centrality",description:"Katz centrality is a measure of centrality that doesn\u2019t consider only the shortest path. It considers the total number of walks in a graph. A walk in a graph is a sequence of edges which joins a sequence of nodes. (e.g 1\u21922\u21923\u21924\u21922\u21921\u21923). Katz centrality computes the relative influence of a node within a graph by measuring the number of the immediate neighbors and all other nodes in the graph.",source:"@site/docs/algorithms/centrality-algorithms/katz-centrality.md",sourceDirName:"algorithms/centrality-algorithms",slug:"/algorithms/centrality-algorithms/katz-centrality",permalink:"/memgraph-networkx-guide/algorithms/centrality-algorithms/katz-centrality",draft:!1,editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/algorithms/centrality-algorithms/katz-centrality.md",tags:[],version:"current",frontMatter:{title:"Katz centrality",sidebar_label:"Katz centrality"},sidebar:"networkx_guide",previous:{title:"Closeness centrality",permalink:"/memgraph-networkx-guide/algorithms/centrality-algorithms/closeness-centrality"},next:{title:"Community detection algorithms overview",permalink:"/memgraph-networkx-guide/algorithms/community-detection"}},m={},p=[{value:"Usage in NetworkX",id:"usage-in-networkx",level:2},{value:"Example",id:"example",level:3},{value:"Where to next?",id:"where-to-next",level:2}],h={toc:p};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Katz centrality is a measure of centrality that doesn\u2019t consider only the shortest path. It considers the total number of walks in a graph. A walk in a graph is a sequence of edges which joins a sequence of nodes. (e.g 1\u21922\u21923\u21924\u21922\u21921\u21923). Katz centrality computes the relative influence of a node within a graph by measuring the number of the immediate neighbors and all other nodes in the graph. "),(0,n.kt)("h2",{id:"usage-in-networkx"},"Usage in NetworkX"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"katz_centrality(G, alpha=0.1, beta=1.0, max_iter=1000, tol=1e-06, nstart=None, normalized=True, weight=None)[source]\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Not fast enough?")," Find 100x faster algorithms ",(0,n.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bkatz&utm_content=findfasteralgorithms"},(0,n.kt)("strong",{parentName:"a"},"here")),"."),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"First save locally ",(0,n.kt)("a",{parentName:"p",href:"https://public-assets.memgraph.com/networkx-resources/graph.gexf"},(0,n.kt)("inlineCode",{parentName:"a"},"graph.gexf"))," to run the below example."),(0,n.kt)(o.Z,{groupId:"bc",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\nimport matplotlib.pyplot as plt\n\n\nG = nx.read_gexf("graph.gexf")\n\ncentrality = nx.katz_centrality(G)\ncolors = list(centrality.values())\n\nnx.draw_networkx(\n    G,\n    nx.spring_layout(G),\n    node_size=50,\n    node_color=colors,\n    edge_color="g",\n    with_labels=False,\n)\n\nplt.axis("off")\nplt.show()\n\n'))),(0,n.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("img",{alt:"centrality-katz",src:r(9046).Z,width:"1624",height:"1190"})))),(0,n.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,n.kt)("p",null,"There are many graph algorithms libraries out there, with their own implementations of Katz centrality algorithm. NetworkX's algorithms are written in Python, and there are many other libraries that offer faster C++ implementations, such as ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/memgraph/mage"},(0,n.kt)("strong",{parentName:"a"},"MAGE")),", a graph algorithms library developed by Memgraph team."),(0,n.kt)(i.Z,{title:"Memgraph for NetworkX developers",url:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=centralityalgorithms%2Bkatz&utm_content=ctabutton",mdxType:"CtaButton"}))}d.isMDXComponent=!0},9046:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/katz-e0682a8c8009eb655d7482ce48bb4208.png"}}]);