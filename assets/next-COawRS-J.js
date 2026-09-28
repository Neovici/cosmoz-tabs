import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,i as n,s as r}from"./iframe-DW-q1sSs.js";import{_ as i,a,c as o,d as s,h as c,i as l,n as u,o as d,s as f,t as p,x as m,y as h}from"./if-defined-DYBJyvKh.js";import{a as g,c as _,l as v,n as y,o as b,r as x,t as S}from"./dist-BgpUtZY9.js";var C,w;function T(){return(T=e((()=>{C=e=>e.getAttribute(`role`)===`radio`?`aria-checked`:`aria-selected`,w=e=>C(e)===`aria-checked`?`aria-selected`:`aria-checked`})))()}var E;function D(){return(D=e((()=>{a(),f(),S(),t(),p(),b(),T(),E=e=>{let{active:t,badge:i,href:a}=e;return m(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.getAttribute(`role`)||e.setAttribute(`role`,`tab`)},[]),c(()=>{e.setAttribute(C(e),t?`true`:`false`),t&&y(e,{block:`nearest`,inline:`center`,boundary:e.parentElement}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`}))},[t]),r`
		<a part="link" href=${u(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?r`<span class="badge" part="badge">${i}</span>`:n}
		</a>
	`},customElements.define(`cosmoz-tab-next`,o(E,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[d,_]}))})))()}var O,k;function A(){return(A=e((()=>{a(),f(),b(),T(),O=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},k=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`),e.getAttribute(`role`)||e.setAttribute(`role`,`tablist`);let t=e.getAttribute(`variant`),n=e.getAttribute(`size`),i=e.hasAttribute(`compact-width`)?``:null,a=e.getAttribute(`role`)===`radiogroup`?`radio`:`tab`,o=()=>e.querySelectorAll(`cosmoz-tab-next`).forEach(e=>{O(e,`variant`,t),O(e,`size`,n),O(e,`compact-width`,i),O(e,`role`,a),O(e,w(e),null),O(e,C(e),e.hasAttribute(`active`)?`true`:`false`)});return m(o),r`<slot @slotchange=${o}></slot>`},customElements.define(`cosmoz-tabs-next`,o(k,{observedAttributes:[`variant`,`size`,`compact-width`],styleSheets:[d,v]}))})))()}var j;function M(){return(M=e((()=>{j=(e,...t)=>typeof e==`function`?e(...t):e})))()}var N,P,F,I,L,R;function z(){return(z=e((()=>{x(),M(),f(),p(),N=e=>!e.hidden&&!e.disabled,P=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(N),F=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&N(n)?n:P(e)},I=(e,{hashParam:t,onActivate:n}={})=>{let[r,a]=g(t),o=s([]),c=h(()=>F(e,r??void 0),[e,r]);return{tabs:e,active:c,activated:h(()=>{let e=c?.name;return o.current=[...(o.current??[]).filter(t=>t!==e),e].filter(Boolean)},[c]),activate:a,onActivate:i(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),a(r))},[a,n])}},L=({tabs:e,active:t,onActivate:n,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=j(e.title),d=e.content??c;return r`<cosmoz-tab-next
			name=${e.name}
			class=${u(i)}
			variant=${u(a)}
			size=${u(o)}
			?compact-width=${u(s)}
			title=${u(c)}
			?active=${t?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			.badge=${e.badge}
			@click=${n}
			>${l(e.icon,e=>e({slot:`icon`}))}${d}</cosmoz-tab-next
		>`}),R=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function B(){return(B=e((()=>{D(),A(),z()})))()}export{I as a,L as i,z as n,R as r,B as t};