import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-Bk-WGUUu.js";import{B as i,C as a,H as o,I as s,M as c,R as l,S as u,T as d,W as f,v as p,w as m,y as h}from"./untitled-BRe1fzFe.js";import{a as g,c as _,d as v,f as y,g as b,h as x,i as S,l as C,m as w,o as T,p as E,r as D,t as O}from"./use-hash-param-CJs2FNL9.js";var k,A=e((()=>{u(),m(),r(),p(),T(),k=e=>{let{active:r,badge:i,href:a}=e;return f(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.setAttribute(`role`,`tab`)},[]),l(()=>{e.setAttribute(`aria-selected`,r?`true`:`false`)},[r]),t`
		<a part="link" href=${h(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?t`<span class="badge" part="badge">${i}</span>`:n}
		</a>
	`},customElements.define(`cosmoz-tab-next`,d(k,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[a,_]}))})),j,M,N,P,F,I,L,R,z,B=e((()=>{u(),m(),x(),y(),T(),S(),j=`cosmoz-tab-next`,M=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},N=new WeakMap,P=e=>{let t=!1;[...e.children].forEach(e=>{if(e.matches(j)){t=!0;return}let n=e.getAttribute(`slot`);if(n!=null&&N.get(e)!==n)return;let r=t?`stats`:`tabs`;n!==r&&e.setAttribute(`slot`,r),N.set(e,r)})},F=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`].forEach(n=>M(t,n,e.getAttribute(n)));let n=e.badge;n!=null&&!e.hasAttribute(`badge`)&&(t.badge=n)},I=e=>{let t=e.cloneNode(!0);return[`variant`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t.setAttribute(`tabindex`,`0`),F(e,t),t.addEventListener(`click`,n=>{n.stopPropagation(),e.click(),v(t)}),[e,t]},L={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`],childList:!0,subtree:!0,characterData:!0},R=(e,t,n)=>{let[r,i]=s(0);return f(()=>{let t=new MutationObserver(()=>i(e=>e+1));return e().forEach(e=>t.observe(e,L)),()=>t.disconnect()},[n]),o(()=>e().filter(e=>t.has(e)).map(I),[t,n,r])},z=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let n=e.getAttribute(`variant`),r=e.hasAttribute(`compact-width`)?``:null,a=c(),o=i(e=>{a.current=e},[]),[u,d]=s(0),p=i(()=>(a.current?.querySelector(`slot`)?.assignedElements({flatten:!0})??[]).filter(e=>e.matches(j)),[]),m=()=>{P(e),e.querySelectorAll(j).forEach(e=>{M(e,`variant`,n),M(e,`compact-width`,r)})},h=()=>{m(),d(e=>e+1)};f(m);let{overflowing:_}=g(()=>a.current,p,[u,n,r]);l(()=>p().forEach(e=>e.toggleAttribute(`overflowing`,_.has(e))),[_,u]);let v=R(p,_,u);return w(e,v.length>0),t`
		<slot name="tabs"></slot>
		<div class="items" part="items" role="tablist" ${b(o)}>
			<slot @slotchange=${h}></slot>
		</div>
		${E({items:v.map(([,e])=>e),overflows:v.length>0,active:v.some(([e])=>e.hasAttribute(`active`)),label:e.getAttribute(`more-label`)??`More`})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,d(z,{observedAttributes:[`variant`,`compact-width`,`more-label`],styleSheets:[a,C]}))})),V,H=e((()=>{V=(e,...t)=>typeof e==`function`?e(...t):e})),U,W,G,K,q,J,Y=e((()=>{O(),H(),m(),p(),U=e=>!e.hidden&&!e.disabled,W=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(U),G=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&U(n)?n:W(e)},K=(e,{hashParam:t,onActivate:n}={})=>{let[r,a]=D(t),s=c([]),l=o(()=>G(e,r??void 0),[e,r]);return{tabs:e,active:l,activated:o(()=>{let e=l?.name;return s.current=[...(s.current??[]).filter(t=>t!==e),e].filter(Boolean)},[l]),activate:a,onActivate:i(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),a(r))},[a,n])}},q=({tabs:e,active:n,onActivate:r,className:i,variant:a,compactWidth:o})=>e.map(e=>{let s=V(e.title);return t`<cosmoz-tab-next
			name=${e.name}
			class=${h(i)}
			variant=${h(a)}
			?compact-width=${h(o)}
			title=${h(s)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${h(e.badge)}
			@click=${r}
			>${e.content??s}</cosmoz-tab-next
		>`}),J=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})),X=e((()=>{A(),B(),Y()}));export{K as a,q as i,Y as n,J as r,X as t};