import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,i as n,s as r}from"./iframe-5rgowz92.js";import{_ as i,a,h as o,i as s,l as c,n as l,o as u,p as d,r as f,t as p,y as m}from"./if-defined-bEa3TY1e.js";import{a as h,c as g,l as _,n as v,o as y,r as b,t as x}from"./dist-CVTRmPZx.js";var S;function C(){return(C=e((()=>{f(),a(),x(),t(),p(),y(),S=e=>{let{active:t,badge:i,href:a}=e;return m(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.setAttribute(`role`,`tab`)},[]),d(()=>{e.setAttribute(`aria-selected`,t?`true`:`false`),t&&v(e,{block:`nearest`,inline:`center`,boundary:e.parentElement}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`}))},[t]),r`
		<a part="link" href=${l(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?r`<span class="badge" part="badge">${i}</span>`:n}
		</a>
	`},customElements.define(`cosmoz-tab-next`,u(S,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[s,g]}))})))()}var w,T;function E(){return(E=e((()=>{f(),a(),y(),w=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},T=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let t=e.getAttribute(`variant`),n=e.hasAttribute(`compact-width`)?``:null,i=()=>e.querySelectorAll(`cosmoz-tab-next`).forEach(e=>{w(e,`variant`,t),w(e,`compact-width`,n)});return m(()=>{e.setAttribute(`role`,`tablist`)},[]),m(i),r`<slot @slotchange=${i}></slot>`},customElements.define(`cosmoz-tabs-next`,u(T,{observedAttributes:[`variant`,`compact-width`],styleSheets:[s,_]}))})))()}var D;function O(){return(O=e((()=>{D=(e,...t)=>typeof e==`function`?e(...t):e})))()}var k,A,j,M,N,P;function F(){return(F=e((()=>{b(),O(),a(),p(),k=e=>!e.hidden&&!e.disabled,A=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(k),j=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&k(n)?n:A(e)},M=(e,{hashParam:t,onActivate:n}={})=>{let[r,a]=h(t),s=c([]),l=i(()=>j(e,r??void 0),[e,r]);return{tabs:e,active:l,activated:i(()=>{let e=l?.name;return s.current=[...(s.current??[]).filter(t=>t!==e),e].filter(Boolean)},[l]),activate:a,onActivate:o(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),a(r))},[a,n])}},N=({tabs:e,active:t,onActivate:n,className:i,variant:a,compactWidth:o})=>e.map(e=>{let s=D(e.title);return r`<cosmoz-tab-next
			name=${e.name}
			class=${l(i)}
			variant=${l(a)}
			?compact-width=${l(o)}
			title=${l(s)}
			?active=${t?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			.badge=${e.badge}
			@click=${n}
			>${e.content??s}</cosmoz-tab-next
		>`}),P=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function I(){return(I=e((()=>{C(),E(),F()})))()}export{M as a,N as i,F as n,P as r,I as t};