"use strict";(()=>{var be=Object.defineProperty;var L=(e,t)=>{for(var o in t)be(e,o,{get:t[o],enumerable:!0})};var I={};L(I,{Flux:()=>O,FluxDispatcher:()=>h,React:()=>a,ReactDOM:()=>Te});var R={};L(R,{find:()=>F,findAll:()=>j,findByDisplayName:()=>x,findByDisplayNameAll:()=>ke,findByProps:()=>p,findByPropsAll:()=>Oe,modules:()=>N});var re=window.webpackJsonp([],[(e,t,o)=>{e.exports=o}]);var ne=(e,t=!1)=>o=>{let r=[];for(let s in e)if(e.hasOwnProperty(s)){let n=e[s].exports;if(!n)continue;if(n.default&&n.__esModule&&o(n.default)){if(t)return n.default;r.push(n.default)}if(o(n)){if(t)return n;r.push(n)}}if(!t)return r},N=re.c,F=ne(N,!0),j=ne(N),se=e=>t=>e.every(o=>t[o]!==void 0),ie=(e,t)=>t?o=>o.displayName===e:o=>o?.default?.displayName===e,p=(...e)=>F(se(e)),Oe=(...e)=>j(se(e)),x=(e,t=!0)=>F(ie(e,t)),ke=(e,t=!0)=>j(ie(e,t));var a=p("createElement"),Te=p("render","findDOMNode"),O=p("Store","initialize"),h=p("_isDispatching","dispatch");var B={};L(B,{after:()=>y,before:()=>De,instead:()=>_e,unpatchAll:()=>_});var M=["a","b","i"],m=new Map;function ae(e,t,o,r,s){let n=m.get(t)?.[e];if(!n)return s?Reflect.construct(t[e],o,r):t[e].apply(r,o);for(let c of n.b.values()){let d=c.call(r,o);Array.isArray(d)&&(o=d)}let i=(...c)=>s?Reflect.construct(n.o,c,r):n.o.apply(r,c);for(let c of n.i.values()){let d=i;i=(...f)=>c.call(r,f,d)}let l=i(...o);for(let c of n.a.values())l=c.call(r,o,l)??l;return l}function U(e,t,o,r){let s=m.get(e),n=s?.[t];return n?.[r].has(o)?(n[r].delete(o),M.every(i=>n[i].size===0)&&(Reflect.defineProperty(e,t,{value:n.o,writable:!0,configurable:!0})||(e[t]=n.o),delete s[t]),Object.keys(s).length==0&&m.delete(e),!0):!1}function _(){for(let[e,t]of m.entries())for(let o in t)for(let r of M)for(let s of t[o]?.[r].keys()??[])U(e,o,s,r)}var E=e=>(t,o,r,s=!1)=>{if(typeof o[t]!="function")throw new Error(`${t} is not a function in ${o.constructor.name}`);m.has(o)||m.set(o,{});let n=m.get(o);if(!n[t]){let c=o[t];n[t]={o:c,b:new Map,i:new Map,a:new Map};let d=(u,g,C)=>{let P=ae(t,o,g,u,C);return s&&l(),P},f=new Proxy(c,{apply:(u,g,C)=>d(g,C,!1),construct:(u,g)=>d(c,g,!0),get:(u,g,C)=>g=="toString"?c.toString.bind(c):Reflect.get(u,g,C)});Reflect.defineProperty(o,t,{value:f,configurable:!0,writable:!0})||(o[t]=f)}let i=Symbol(),l=()=>U(o,t,i,e);return n[t][e].set(i,r),l};var De=E("b"),_e=E("i"),y=E("a");var le=new Array;function Ee(e){let t=document.createElement("style");t.id="CORDWOOD_INJECTED_STYLE",t.innerHTML=e,document.head.appendChild(t),le.push(o);function o(){t.remove()}return o}function G(){for(let e of le)e()}var ce={...B,injectCSS:Ee,clearStyles:G};var Ae=p("showChangeLog");function $(){y("showChangeLog",Ae,()=>{h.dispatch({type:"CHANGE_LOG_OPEN"})})}function ve(e,t,o){if(e===t)return!0;let r=Object.keys(e),s=Object.keys(t);if(r.length!==s.length)return!1;for(let n=0;n<r.length;n++){let i=r[n];if(e[i]!==t[i]&&(o==null||o.indexOf(i)===-1))return!1}return!0}function Pe(e){return e.displayName||e.name||"Component"}function H(e,t){return o=>class extends a.Component{static displayName=`FluxContainer(${Pe(o)})`;constructor(r){super(r),this.state=t(r),this._handleStoreChange=this._handleStoreChange.bind(this)}_handleStoreChange(){this.setState(t(this.props))}componentWillMount(){e.forEach(r=>{r.addChangeListener(this._handleStoreChange)})}componentWillReceiveProps(r){ve(this.props,r)||this.setState(t(r))}componentWillUnmount(){e.forEach(r=>r.removeChangeListener(this._handleStoreChange))}render(){return a.createElement(o,{...this.props,...this.state},null)}}}function k(e){return new Promise((t,o)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>o(e.error)})}function Le(e,t){let o=indexedDB.open(e);o.onupgradeneeded=()=>o.result.createObjectStore(t);let r=k(o);return(s,n)=>r.then(i=>n(i.transaction(t,s).objectStore(t)))}var W;function A(){return W||(W=Le("keyval-store","keyval")),W}function de(e,t=A()){return t("readonly",o=>k(o.get(e)))}function pe(e,t,o=A()){return o("readwrite",r=>(r.put(t,e),k(r.transaction)))}function ue(e,t=A()){return t("readwrite",o=>(o.delete(e),k(o.transaction)))}function fe(e=A()){return e("readwrite",t=>(t.clear(),k(t.transaction)))}var z=class{async get(t,o=null){let r=await de(t);return r||(r=o),r}async set(t,o){await pe(t,o)}async remove(t){await ue(t)}async clear(){await fe()}},S=new z;var ge="CordwoodSettingsStore",K={fluxLogger:!1};async function he(e){let t=!1,o={};for(let[r,s]of Object.entries(e))s!=null&&(t=!0,K[r]=s),o[r]=K[r];return t&&await S.set(ge,o),t}var J=class extends O.Store{constructor(t,o){super(t,o)}async initialize(){let t=await S.get(ge);t!=null&&await he(t)}get fluxLogger(){return K.fluxLogger}},T=new J(h,async e=>{switch(e.type){case"CORDWOOD_SETTINGS_UPDATE":return await he(e.settings);default:return!1}});var me={setFlux(e){h.dispatch({type:"CORDWOOD_SETTINGS_UPDATE",settings:{fluxLogger:e}})}};var Ne=x("Scroller"),Fe=x("Checkbox"),V=class extends a.Component{constructor(t={}){super(t)}render(){return a.createElement(Ne,{className:"settings-wrapper settings-panel"},a.createElement("div",{className:"control-groups"},a.createElement("div",{className:"control-group"},a.createElement("label",null,"Debug Settings"),a.createElement("ul",{className:"checkbox-group"},a.createElement("li",null,a.createElement(Fe,{onChange:t=>{me.setFlux(t.target.checked)},defaultChecked:this.props.fluxLogger},"Log everything that passes through the Flux Dispatcher.")),a.createElement("li",null,a.createElement("div",{className:"help-text"},"Note that this will clog up your console."))))))}},Y=H([T],()=>({fluxLogger:T.fluxLogger}))(V);var b=p("defaultRules","parserFor"),we=p("getDefaultRules","parserFor"),je=we.getDefaultRules(),Re=b.defaultRules.lheading,ye=b.defaultRules.link,Ie=b.defaultRules.image,Me=we.parserFor({...je,image:{...Ie},link:{...ye},list:b.defaultRules.list,lheading:{...Re,parse(e,t,o){return{className:/\{(.+?)}/.exec(e[1])[1],level:e[2]==="="?1:2,content:b.parseInline(t,e[1].replace(/\{.+?}/,""),o)}},react(e,t,o){return a.createElement(`h${e.level}`,{key:o.key,className:e.className},t(e.content,o))}},shortlink:{shortlinks:{gh:"github.com",srht:"git.sr.ht"},regex:/^\[(.+?)\]\((.+?):([^\/].+?)\)/,order:ye.order-.5,match(e){return this.regex.exec(e)},parse(e,t,o){return{content:b.parseInline(t,e[1],o),target:`https://${this.shortlinks[e[2]]}/${e[3]}`}},react(e,t,o){return a.createElement("a",{href:e.target},t(e.content,o))}}}),Se=({changelog:e})=>a.createElement("div",null,Me(e.body,!1));var Ue="._cordwood-settings-header_1mzwv_1{paddingbottom:1rem}._cordwood-changelog-button_1mzwv_1{display:block;color:#faa61a;font-size:12px;padding:8px 6px 10px 20px;cursor:pointer;opacity:.7;-webkit-transition:opacity .2s ease;transition:opacity .2s ease}._cordwood-changelog-button_1mzwv_1:hover{opacity:1;color:#faa61a}";document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(Ue));var q={cordwoodSettingsHeader:"_cordwood-settings-header_1mzwv_1",cordwoodChangelogButton:"_cordwood-changelog-button_1mzwv_1"};function Z(){$();let e=p("UserSettingsModalSections");Object.assign(e.UserSettingsModalSections,{CORDWOOD_SETTINGS:"CORDWOOD_SETTINGS",CORDWOOD_PLUGINS:"CORDWOOD_PLUGINS"});let t=p("getUserSettingsModalSections");y("getUserSettingsModalSections",t,(r,s)=>{s.push({section:e.UserSettingsModalSections.CORDWOOD_SETTINGS,label:"Cordwood",element:Y})});let o=p("TabBarItem","TabBarHeader","TabBarSeparator");y("render",t.default.prototype,(r,s)=>{s.props.children[0].props.children.props.children[1].push(a.createElement(o.TabBarHeader,{className:q.cordwoodSettingsHeader},"Cordwood"),a.createElement(o.TabBarItem,{key:"CORDWOOD_SETTINGS"},"Settings"),a.createElement("div",{className:q.cordwoodChangelogButton,onClick:()=>{Be(),h.dispatch({type:"CHANGE_LOG_OPEN"})}},"Cordwood Change Log")),s.props.children[0].props.children.props.selectedItem==="CORDWOOD_SETTINGS"&&(s.props.children[1].props.children[0].props.children=a.createElement(Y,null))})}function Be(){let e=x("MarkdownModal");y("render",e.prototype,(t,o)=>{if(!o.props.className.includes("change-log"))return o;let s=window.cordwood.changelog.replace(/\r/g,"").split(`---changelog---
`).slice(1).map(c=>{let d=!1,f={},w=c.split(`
`).filter(u=>{if(u==="---")return d=!0,!1;if(!d){let g=u.split(": "),C=g.shift(),P=g.join(": ");f[C]=JSON.parse(P)}return d}).join(`
`);return{...f,body:w}})[0],n=o.props.children[0].props.children[0];n[0].props.children="Cordwood Changelog",n[1]=` (${s.date})`;let i=o.props.children[2].props.children;i[1].props.href="https://github.com/Cordwood/Cordwood/blob/master/CHANGELOG.md";let l=o.props.children[1];return l.props.children[0]=null,l.props.children[1]=[a.createElement(Se,{changelog:s})],o},!0)}var Q=(e,t,o)=>{console[o]("%cCordwood%c",`background-color: ${t}; color: black; font-weight: 600; border-radius: 16px; padding: 0px 5px 0px 5px;`,"",e)},v={log:e=>Q(e,"#b6c76c","log"),warn:e=>Q(e,"#e19c3d","warn"),error:e=>Q(e,"#a63d40","error")};function D(e,t,{walkable:o=[],ignore:r=[],maxDepth:s=100}={}){let n=0;function i(l,c,{walkable:d=[],ignore:f=[]}={}){if(n+=1,!(n>s)){if(typeof c=="string"){if(l.hasOwnProperty(c))return l[c]}else if(c(l))return l;if(!!l){if(Array.isArray(l))for(let w of l){let u=i(w,c,{walkable:d,ignore:f});if(u)return u}else if(typeof l=="object"){for(let w of Object.keys(l))if(!(d!=null&&d.includes(w))&&!f.includes(w))try{let u=i(l[w],c,{walkable:d,ignore:f});if(u)return u}catch{}}}}}return i(e,t,{walkable:o,ignore:r})}function X(e,t){D(e,t,{walkable:["props","children","child","sibling"]})}function ee(e){let t=new Array;for(let[o,r]of Object.entries(e)){let s=Object.entries(r).map(([n,i])=>`${n.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}:${i}`).join(";");t.push(`${o}{${s}}`)}return t.join("")}async function te(e){let t={cache:"no-cache"},o=new URL(e.endsWith("/")?e:e+"/"),r=await fetch(o+"manifest.json",t);if(!r.ok)throw new Error(`Could not load manifest for plugin at ${e}`);let s;try{s=await r.json()}catch{throw new Error(`Could not parse manifest for plugin at ${e}`)}let n;try{n=await(await fetch(o+"index.js",t)).text()}catch{throw new Error(`Could not load main file for plugin at ${e}`)}return{manifest:s,url:o,main:n}}var Ge=window.eval;async function oe(e){window.cordwood.plugins.loaded.push(e);let t=Ge(e.main)(window.cordwood);t.onLoad&&t.onLoad()}var Ce=()=>y("dispatch",h,e=>{T.fluxLogger&&console.log(e[0])});if(window.cordwood)throw new Error("Cordwood is already injected...");var xe=!1;try{Z(),O.initialize(),Ce(),window.cordwood={utils:{logger:v,findInTree:D,findInReactTree:X,storage:{get:S.get,set:S.set,remove:S.remove,clear:S.clear},createStyle:ee},patcher:{...ce},webpack:{...R,common:{...I}},plugins:{importPlugin:te,loadPlugin:oe,loaded:new Array},uninject:()=>{_(),G(),delete window.cordwood}},fetch("https://raw.githubusercontent.com/Cordwood/Cordwood/master/CHANGELOG.md",{cache:"no-store"}).then(e=>e.text().then(t=>Object.assign(window.cordwood,{changelog:t})))}catch(e){xe=!0,v.error(`Cordwood failed to initialize... ${e.stack?e.stack:e.toString()}`)}xe||v.log("Loaded successfully!");})();
//# sourceURL=Cordwood