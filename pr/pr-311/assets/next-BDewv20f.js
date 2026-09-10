import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,i as n,s as r}from"./iframe-DtokQ_H1.js";import{_ as i,a,h as o,i as s,l as c,n as l,o as u,p as d,r as f,t as p,y as m}from"./if-defined-DsVjDTBu.js";import{a as h,c as g,l as _,n as v,o as y,r as b,t as x}from"./dist-CpGYePkk.js";var S,C;function w(){return(w=e((()=>{S=e=>e.getAttribute(`role`)===`radio`?`aria-checked`:`aria-selected`,C=e=>S(e)===`aria-checked`?`aria-selected`:`aria-checked`})))()}var T;function E(){return(E=e((()=>{f(),a(),x(),t(),p(),y(),w(),T=e=>{let{active:t,badge:i,href:a}=e;return m(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.getAttribute(`role`)||e.setAttribute(`role`,`tab`)},[]),d(()=>{e.setAttribute(S(e),t?`true`:`false`),t&&v(e,{block:`nearest`,inline:`center`,boundary:e.parentElement}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`}))},[t]),r`
		<a part="link" href=${l(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?r`<span class="badge" part="badge">${i}</span>`:n}
		</a>
	`},customElements.define(`cosmoz-tab-next`,u(T,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[s,g]}))})))()}var D,O;function k(){return(k=e((()=>{f(),a(),y(),w(),D=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},O=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`),e.getAttribute(`role`)||e.setAttribute(`role`,`tablist`);let t=e.getAttribute(`variant`),n=e.hasAttribute(`compact-width`)?``:null,i=e.getAttribute(`role`)===`radiogroup`?`radio`:`tab`,a=()=>e.querySelectorAll(`cosmoz-tab-next`).forEach(e=>{D(e,`variant`,t),D(e,`compact-width`,n),D(e,`role`,i),D(e,C(e),null),D(e,S(e),e.hasAttribute(`active`)?`true`:`false`)});return m(a),r`<slot @slotchange=${a}></slot>`},customElements.define(`cosmoz-tabs-next`,u(O,{observedAttributes:[`variant`,`compact-width`],styleSheets:[s,_]}))})))()}var A;function j(){return(j=e((()=>{A=(e,...t)=>typeof e==`function`?e(...t):e})))()}var M,N,P,F,I,L;function R(){return(R=e((()=>{b(),j(),a(),p(),M=e=>!e.hidden&&!e.disabled,N=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(M),P=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&M(n)?n:N(e)},F=(e,{hashParam:t,onActivate:n}={})=>{let[r,a]=h(t),s=c([]),l=i(()=>P(e,r??void 0),[e,r]);return{tabs:e,active:l,activated:i(()=>{let e=l?.name;return s.current=[...(s.current??[]).filter(t=>t!==e),e].filter(Boolean)},[l]),activate:a,onActivate:o(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),a(r))},[a,n])}},I=({tabs:e,active:t,onActivate:n,className:i,variant:a,compactWidth:o})=>e.map(e=>{let s=A(e.title);return r`<cosmoz-tab-next
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
		>`}),L=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function z(){return(z=e((()=>{E(),k(),R()})))()}export{F as a,I as i,R as n,L as r,z as t};