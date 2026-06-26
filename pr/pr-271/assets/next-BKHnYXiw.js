import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-l1zHrOt5.js";import{_ as i,a,h as o,i as s,l as c,n as l,o as u,p as d,r as f,t as p,y as m}from"./if-defined-CcxirRVb.js";import{a as h,c as g,l as _,n as v,o as y,r as b,t as x}from"./dist-D_ma8Dom.js";var S,C=e((()=>{f(),a(),x(),r(),p(),y(),S=e=>{let{active:r,badge:i,href:a}=e;return m(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.setAttribute(`role`,`tab`)},[]),d(()=>{e.setAttribute(`aria-selected`,r?`true`:`false`),r&&v(e,{block:`nearest`,inline:`center`,boundary:e.parentElement}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`}))},[r]),t`
		<a part="link" href=${l(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?t`<span class="badge" part="badge">${i}</span>`:n}
		</a>
	`},customElements.define(`cosmoz-tab-next`,u(S,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[s,g]}))})),w,T,E=e((()=>{f(),a(),y(),w=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},T=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let n=e.getAttribute(`variant`),r=e.getAttribute(`compact-width`)===`true`?`true`:null,i=()=>e.querySelectorAll(`cosmoz-tab-next`).forEach(e=>{w(e,`data-variant`,n),w(e,`data-compact-width`,r)});return m(()=>{e.setAttribute(`role`,`tablist`)},[]),m(i),t`<slot @slotchange=${i}></slot>`},customElements.define(`cosmoz-tabs-next`,u(T,{observedAttributes:[`variant`,`compact-width`],styleSheets:[s,_]}))})),D,O=e((()=>{D=(e,...t)=>typeof e==`function`?e(...t):e})),k,A,j,M,N,P,F=e((()=>{b(),O(),a(),p(),k=e=>!e.hidden&&!e.disabled,A=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(k),j=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&k(n)?n:A(e)},M=(e,{hashParam:t,onActivate:n}={})=>{let[r,a]=h(t),s=c([]),l=i(()=>j(e,r??void 0),[e,r]);return{tabs:e,active:l,activated:i(()=>{let e=l?.name;return s.current=[...(s.current??[]).filter(t=>t!==e),e].filter(Boolean)},[l]),activate:a,onActivate:o(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),a(r))},[a,n])}},N=({tabs:e,active:n,onActivate:r,className:i,variant:a,compactWidth:o})=>e.map(e=>{let s=D(e.title);return t`<cosmoz-tab-next
			name=${e.name}
			class=${l(i)}
			data-variant=${l(a)}
			data-compact-width=${l(o?`true`:void 0)}
			title=${l(typeof s==`string`?s:void 0)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			.badge=${e.badge}
			@click=${r}
			>${e.content??s}</cosmoz-tab-next
		>`}),P=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})),I=e((()=>{C(),E(),F()}));export{M as a,N as i,F as n,P as r,I as t};