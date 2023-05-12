"use strict";(self.webpackChunknetworkx_guide=self.webpackChunknetworkx_guide||[]).push([[333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=d(n),m=r,c=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return n?a.createElement(c,l(l({ref:t},p),{},{components:n})):a.createElement(c,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7462),r=n(7294),o=n(6010),l=n(2466),i=n(6550),s=n(1980),d=n(7392),p=n(12);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function g(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??u(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=g(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,d]=c({queryString:n,groupId:a}),[u,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),k=(()=>{const e=s??u;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var k=n(2389);const f="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),g=e=>{const t=e.currentTarget,n=p.indexOf(t),a=d[n].value;a!==i&&(u(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},d.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:g},l,{className:(0,o.Z)("tabs__item",b,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",f)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,k.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},5136:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const r={ctaButton:"ctaButton_fu4n",ctaBox:"ctaBox_gZT4"};function o(e){const{title:t,url:n}=e;return a.createElement("div",{className:r.ctaBox},a.createElement("a",{href:n,className:r.ctaButton,style:r},t))}},355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>g});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),l=n(5162),i=n(5136);const s={title:"NetworkX basics",sidebar_label:"NetworkX basics",slug:"/basics"},d=void 0,p={unversionedId:"getting-started/basics",id:"getting-started/basics",title:"NetworkX basics",description:"In this guide you'll learn how to:",source:"@site/docs/getting-started/basics.md",sourceDirName:"getting-started",slug:"/basics",permalink:"/memgraph-networkx-guide/basics",draft:!1,editUrl:"https://github.com/memgraph/networkx-guide/edit/main/docs/getting-started/basics.md",tags:[],version:"current",frontMatter:{title:"NetworkX basics",sidebar_label:"NetworkX basics",slug:"/basics"},sidebar:"networkx_guide",previous:{title:"Getting started",permalink:"/memgraph-networkx-guide/getting-started"},next:{title:"Installation",permalink:"/memgraph-networkx-guide/installation"}},u={},g=[{value:"NetworkX graph types",id:"networkx-graph-types",level:2},{value:"Graph creation",id:"graph-creation",level:2},{value:"Graph generators",id:"graph-generators",level:3},{value:"Reading graphs",id:"reading-graphs",level:3},{value:"Adding nodes and edges",id:"adding-nodes-and-edges",level:3},{value:"Removing nodes and edges from the graph",id:"removing-nodes-and-edges-from-the-graph",level:3},{value:"Graph examination",id:"graph-examination",level:2},{value:"Writing graphs",id:"writing-graphs",level:2},{value:"Where to next?",id:"where-to-next",level:2}],m={toc:g};function c(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this guide you'll learn how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"differentiate ",(0,r.kt)("a",{parentName:"li",href:"#networkx-graph-types"},(0,r.kt)("strong",{parentName:"a"},"NetworkX graph types")),", "),(0,r.kt)("li",{parentName:"ul"},"create a graph by ",(0,r.kt)("a",{parentName:"li",href:"#graph-generators"},(0,r.kt)("strong",{parentName:"a"},"generating"))," it, ",(0,r.kt)("a",{parentName:"li",href:"#reading-graphs"},(0,r.kt)("strong",{parentName:"a"},"reading"))," it or ",(0,r.kt)("a",{parentName:"li",href:"#adding-nodes-and-edges"},(0,r.kt)("strong",{parentName:"a"},"adding"))," nodes and edges,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#removing-nodes-and-edges-from-the-graph"},(0,r.kt)("strong",{parentName:"a"},"remove"))," nodes and edges from the graph,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#graph-examination"},(0,r.kt)("strong",{parentName:"a"},"examine"))," a graph,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#writing-graphs"},(0,r.kt)("strong",{parentName:"a"},"write"))," a graph to a file.")),(0,r.kt)("h2",{id:"networkx-graph-types"},"NetworkX graph types"),(0,r.kt)("p",null,"The model of the graph structure in NetworkX is similar to the labeled-property graph. Regarding the naming convention, relationships are called edges, and properties are called attributes in NetworkX. You can use the following NetworkX graph classes:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"networkx-graph-types",src:n(3295).Z,width:"1200",height:"600"})),(0,r.kt)("h2",{id:"graph-creation"},"Graph creation"),(0,r.kt)("p",null,"NetworkX graph objects can be created in three ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using the ",(0,r.kt)("a",{parentName:"li",href:"#graph-generators"},(0,r.kt)("strong",{parentName:"a"},"graph generators"))," - standard algorithms to create network topologies,"),(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"#reading-graphs"},(0,r.kt)("strong",{parentName:"a"},"reading"))," from different formats,"),(0,r.kt)("li",{parentName:"ul"},"by ",(0,r.kt)("a",{parentName:"li",href:"#adding-nodes-and-edges"},(0,r.kt)("strong",{parentName:"a"},"adding nodes and edges"))," explicitly.")),(0,r.kt)("p",null,"It is also possible to ",(0,r.kt)("a",{parentName:"p",href:"#removing-nodes-and-edges-from-the-graph"},(0,r.kt)("strong",{parentName:"a"},"remove nodes and edges"))," from your graph."),(0,r.kt)("h3",{id:"graph-generators"},"Graph generators"),(0,r.kt)("p",null,"There are many types of graph generators inside NetworkX. They create predefined network structures, so that you can continue on exploring it and learning more about graph algorithms. Some of the most often used generators are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"balanced_tree()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"complete_graph()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cycle_graph()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"star_graph()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"karate_club_graph()"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")),(0,r.kt)(o.Z,{groupId:"graph_generators",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's generate and draw Zachary\u2019s Karate Club graph with the following Python code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport matplotlib.pyplot as plt\n\ngenerated_graph = nx.karate_club_graph()\npos = nx.spring_layout(generated_graph, scale=0.5)\nnx.draw(generated_graph, pos)\n\nplt.show()\n"))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"  The output of the previous Python code looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"karate-club-dataset",src:n(8786).Z,width:"1252",height:"918"})))),(0,r.kt)("admonition",{title:"memory issues",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This kind of graph creation is good enough for testing, but be careful, since each time you start your script, the data has to be loaded in-memory. To learn more about it, head over to our ",(0,r.kt)("a",{parentName:"p",href:"/faq#generated-graph"},(0,r.kt)("strong",{parentName:"a"},"FAQ")),".")),(0,r.kt)("h3",{id:"reading-graphs"},"Reading graphs"),(0,r.kt)("p",null,"Data can be imported from many different sources and file formats: Adjacency List, Multiline Adjacency List, Edge List, GEXF, GML, Pickle, GraphML, JSON, LEDA, SparseGraph6, Pajek, GIS Shapefile and Matrix Market."),(0,r.kt)("p",null,"Check out the example below to see how to read a graph from CSV file."),(0,r.kt)(o.Z,{groupId:"reading_graphs",defaultValue:"csv",values:[{label:"CSV file",value:"csv"},{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"csv",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's say we have the following ",(0,r.kt)("inlineCode",{parentName:"p"},"graph.csv")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csv"},"source,target\n1,2\n1,3\n2,3\n1,4\n2,4\n3,4\n1,5\n1,6\n"))),(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("p",null,"Let's import the ",(0,r.kt)("inlineCode",{parentName:"p"},"graph.csv")," file and draw the graph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\nimport matplotlib.pyplot as plt\nimport pandas as pd\n\ngraph_type = nx.Graph()\ndf = pd.read_csv('graph.csv')\nG = nx.from_pandas_edgelist(df, create_using=graph_type)\n\nnx.draw(G)\nplt.show()\n"))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"  The output of the previous Python code looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"draw-csv",src:n(4254).Z,width:"1266",height:"942"})))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This kind of graph creation is great and fast for smaller datasets. If your dataset becomes too large, you can run into memory issues. Read more about it ",(0,r.kt)("a",{parentName:"p",href:"/faq#store-huge-graph"},(0,r.kt)("strong",{parentName:"a"},"here")),".")),(0,r.kt)("h3",{id:"adding-nodes-and-edges"},"Adding nodes and edges"),(0,r.kt)("p",null,"All NetworkX graph classes allow hashable Python objects (except ",(0,r.kt)("inlineCode",{parentName:"p"},"None"),") as nodes. Hashable objects include a text string, an image, an XML object, another Graph, a customized node object, and more. ",(0,r.kt)("strong",{parentName:"p"},"Nodes")," can be added and manipulated by using the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.add_node(node)")," - add a single node to graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.add_nodes_from(nodes)")," - add nodes from container of nodes to graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.remove_node(node)")," - remove node from all adjacent edges from graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.remove_nodes_from(nodes)")," - remove nodes from container of nodes from graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Edges")," often have data associated with them. Any Python object can be assigned as an edge attribute. Edges can be added and manipulated by using the following methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.add_edge(u, v)")," - add edge between nodes ",(0,r.kt)("inlineCode",{parentName:"li"},"u")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"v")," in graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.add_edges_from(ebunch)")," - add edges from the container of edges to graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.add_weighted_edges_from(ebunch)")," - add weighted edges from the container of edges to graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.remove_edge(u, v)")," - remove edge between nodes ",(0,r.kt)("inlineCode",{parentName:"li"},"u")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"v")," from graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G.remove_edges_from(ebunch)")," - remove edges from list or container of edge tuples from graph ",(0,r.kt)("inlineCode",{parentName:"li"},"G"))),(0,r.kt)("p",null,"Check out the usage of the above procedures in the following example."),(0,r.kt)(o.Z,{groupId:"adding_nodes_and_edges",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("p",null,"The following Python code shows how to add one or multiple nodes and edges. It will also draw a graph with Matplotlib library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\n\nimport matplotlib.pyplot as plt\n\ng = nx.Graph()\n\n# Adding one node\ng.add_node("1", label="Person", name="Kevin Bacon", age=64)\n\n# Adding multiple nodes\ng.add_nodes_from(\n    [\n        ("2", {"label": "Person", "name": "Ian McKellen", "age": 83}),\n        ("3", {"label": "Person", "name": "James McAvoy", "age": 43}),\n        ("4", {"label": "Person", "name": "Michael Fassbender", "age": 45}),\n    ]\n)\n\n# Adding one edge\ng.add_edge("1", "3", type="ACTED_WITH")\n\n# Adding multiple edges\ng.add_edges_from([("1", "4"), ("2", "3"), ("2", "4")], type="ACTED_WITH")\n\n# Graph drawing\npos = nx.circular_layout(g)\nnx.draw(g, pos, node_size=10000)\n\nlabels = nx.get_node_attributes(g, "name")\nedge_labels = nx.get_edge_attributes(g, "type")\n\nnx.draw_networkx_labels(g, pos, labels=labels, font_size=10, font_color="white")\nnx.draw_networkx_edge_labels(g, pos, edge_labels=edge_labels, font_size=10)\n\nplt.show()\n'))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"  The output of the previous Python code looks like this:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kevin-bacon",src:n(5576).Z,width:"2164",height:"1718"})))),(0,r.kt)("admonition",{title:"memory issues",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This kind of graph creation is great and fast for smaller datasets. If your dataset becomes too large, you can run into memory issues. Read more about it ",(0,r.kt)("a",{parentName:"p",href:"/faq#load-graph"},(0,r.kt)("strong",{parentName:"a"},"here")),".")),(0,r.kt)("h3",{id:"removing-nodes-and-edges-from-the-graph"},"Removing nodes and edges from the graph"),(0,r.kt)("p",null,"The following methods are used to remove nodes and edges:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Graph.remove_node()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Graph.remove_nodes_from()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Graph.remove_edge()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Graph.remove_edges_from()"))),(0,r.kt)("p",null,"Check out the usage of the above procedures in the following example."),(0,r.kt)(o.Z,{groupId:"removing_nodes_and_edges",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("p",null,"The following Python code shows how to remove one or multiple nodes and edges."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\n\ng = nx.Graph()\ng.add_nodes_from([1, 2, 3, 4, 5, 6])\ng.add_edges_from([(1, 2), (2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)])\nprint(g.nodes)\nprint(g.edges)\n\ng.remove_node(1)\nprint(g.nodes)\nprint(g.edges)\n\ng.remove_nodes_from([2, 3])\nprint(g.nodes)\nprint(g.edges)\n\ng.remove_edges_from([(4, 5), (4, 6)])\nprint(g.nodes)\nprint(g.edges)\n"))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"  The output of the previous Python code looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"[1, 2, 3, 4, 5, 6]\n[(1, 2), (2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)]\n[2, 3, 4, 5, 6]\n[(2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)]\n[4, 5, 6]\n[(4, 5), (4, 6), (5, 6)]\n[4, 5, 6]\n[(5, 6)]\n")),(0,r.kt)("p",null,"Notice how when the node ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," was removed, all edges incident with the removed node were also removed from the graph."))),(0,r.kt)("h2",{id:"graph-examination"},"Graph examination"),(0,r.kt)("p",null,"Let's define a simple graph ",(0,r.kt)("inlineCode",{parentName:"p"},"G"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import networkx as nx\n\ng = nx.Graph()\ng.add_nodes_from([1, 2, 3, 4, 5, 6])\ng.add_edges_from([(1, 2), (2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)])\n")),(0,r.kt)("p",null,"To list the nodes and edges in the graph use the following code:"),(0,r.kt)(o.Z,{groupId:"listing_nodes_and_edges",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(G.nodes)\nprint(G.edges)\n"))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"  The output of the previous Python code looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"[1, 2, 3, 4, 5, 6]\n[(1, 2), (2, 3), (3, 4), (3, 5), (4, 5), (4, 6), (5, 6)]\n")))),(0,r.kt)("p",null,"To check out its number of nodes or edges, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"number_of_nodes()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"number_of_edges()")," methods."),(0,r.kt)(o.Z,{groupId:"listing_number",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(G.number_of_nodes())\nprint(G.number_of_edges())\n"))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"  The output of the previous Python code looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"6\n7\n")))),(0,r.kt)("p",null,"To check degrees of a set of nodes, that is, with how many edges those nodes are incident with, use ",(0,r.kt)("inlineCode",{parentName:"p"},"G.degree()")," method."),(0,r.kt)(o.Z,{groupId:"degree",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Output",value:"output"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(G.degree([4, 5]))\n"))),(0,r.kt)(l.Z,{value:"output",mdxType:"TabItem"},(0,r.kt)("p",null,"  The output of the previous Python code looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"[(4, 3), (5, 3)]\n")))),(0,r.kt)("h2",{id:"writing-graphs"},"Writing graphs"),(0,r.kt)("p",null,"NetworkX graph can be exported from many different sources and file formats: Adjacency List, Multiline Adjacency List, Edge List, GEXF, GML, Pickle, GraphML, JSON, LEDA, SparseGraph6, Pajek, GIS Shapefile and Matrix Market."),(0,r.kt)("p",null,"In the below example you can see how to export graph into three different file formats - Adjacency List and GML."),(0,r.kt)(o.Z,{groupId:"write",defaultValue:"code",values:[{label:"Python code",value:"code"},{label:"Adjacency List",value:"adjlist"},{label:"GML",value:"gml"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"code",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import networkx as nx\n\nG = nx.petersen_graph()\nnx.write_adjlist(G, "graph.adjlist")\nnx.write_gml(G, "graph.gml")\nnx.write_graphml(G, "graph.graphml")\n'))),(0,r.kt)(l.Z,{value:"adjlist",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Petersen Graph\n0 1 4 5\n1 2 6\n2 3 7\n3 4 8\n4 9\n5 7 8\n6 8 9\n7 9\n8\n9\n"))),(0,r.kt)(l.Z,{value:"gml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'graph [\n  name "Petersen Graph"\n  node [\n    id 0\n    label "0"\n  ]\n  node [\n    id 1\n    label "1"\n  ]\n  node [\n    id 2\n    label "2"\n  ]\n  node [\n    id 3\n    label "3"\n  ]\n  node [\n    id 4\n    label "4"\n  ]\n  node [\n    id 5\n    label "5"\n  ]\n  node [\n    id 6\n    label "6"\n  ]\n  node [\n    id 7\n    label "7"\n  ]\n  node [\n    id 8\n    label "8"\n  ]\n  node [\n    id 9\n    label "9"\n  ]\n  edge [\n    source 0\n    target 1\n  ]\n  edge [\n    source 0\n    target 4\n  ]\n  edge [\n    source 0\n    target 5\n  ]\n  edge [\n    source 1\n    target 2\n  ]\n  edge [\n    source 1\n    target 6\n  ]\n  edge [\n    source 2\n    target 3\n  ]\n  edge [\n    source 2\n    target 7\n  ]\n  edge [\n    source 3\n    target 4\n  ]\n  edge [\n    source 3\n    target 8\n  ]\n  edge [\n    source 4\n    target 9\n  ]\n  edge [\n    source 5\n    target 7\n  ]\n  edge [\n    source 5\n    target 8\n  ]\n  edge [\n    source 6\n    target 8\n  ]\n  edge [\n    source 6\n    target 9\n  ]\n  edge [\n    source 7\n    target 9\n  ]\n]\n')))),(0,r.kt)("admonition",{title:"performance loss",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This NetworkX feature is often being used when a lot of time is wasted on the graph loading each time you want to analyze the graph. This happens because NetworkX has to load graph in memory on each run. You can find an answer on what is the best solution to avoid performance loss due to graph loading in our ",(0,r.kt)("a",{parentName:"p",href:"/faq#store-huge-graph"},(0,r.kt)("strong",{parentName:"a"},"FAQ section")),". ")),(0,r.kt)("h2",{id:"where-to-next"},"Where to next?"),(0,r.kt)("p",null,"There are many other ",(0,r.kt)("a",{parentName:"p",href:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=getting%2Bstarted&utm_content=learningresources"},(0,r.kt)("strong",{parentName:"a"},"learning resources")),", such as courses, whitepapers and blog posts. With the help of these valuable resources, you can learn more about the importance of graph analytics and which tools are out there to help you. Also, if you run into a common NetworkX problem, don't forget to check out our ",(0,r.kt)("a",{parentName:"p",href:"/faq"},(0,r.kt)("strong",{parentName:"a"},"FAQ"))," section."),(0,r.kt)(i.Z,{title:"Memgraph for NetworkX developers",url:"https://memgraph.com/memgraph-for-networkx?utm_source=networkx-guide&utm_medium=referral&utm_campaign=networkx_ppp&utm_term=gettingstarted%2Bbasics&utm_content=ctabutton",mdxType:"CtaButton"}))}c.isMDXComponent=!0},4254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/draw-csv-88f3c39c2a7c9614c316ebda5d5ec9f8.png"},8786:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/karate-club-dataset-dacd5c2b9df9f5630fd645644a70b3da.png"},5576:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/kevin-bacon-57306c5f3751193e86ddeb6ffe68826f.png"},3295:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/networkx-graph-types-cf81549883bb93cd4b558d22ceb8a27a.png"}}]);