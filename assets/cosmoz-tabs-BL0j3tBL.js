import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,i as n,s as r}from"./iframe-DiecIUpn.js";import{t as i}from"./cosmoz-tab-card-Bo6N2SKB.js";import{C as a,S as o,T as s,_ as c,a as l,c as u,h as d,n as f,o as p,p as m,s as h,t as g,x as _,y as v}from"./if-defined-CcaVh5bt.js";import{a as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./dist-DaJEquFp.js";var E;function D(){return(D=e((()=>{h(),E=a(class extends o{update(){return this.state.host}})})))()}var O,k,A;function j(){return(j=e((()=>{h(),D(),O=/([A-Z])/gu,k=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(O,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},A=(e,t,n=[t])=>{let r=E();_(()=>{k(r,e,t)},n)}})))()}var M;function N(){return(N=e((()=>{j(),h(),M=e=>(_(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-tab-alter`,{bubbles:!0,composed:!0}))},[e.hidden,e.disabled,e.heading,e.badge,e.icon]),A(`isSelected`,e.isSelected),{onSlot:c(({target:t})=>e.toggleAttribute(`has-cards`,t.assignedElements().some(e=>e.matches(`cosmoz-tab-card, [has-cards]`))),[])})})))()}var P,F;function I(){return(I=e((()=>{l(),h(),i(),N(),P=s`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		flex: 1 1 auto;
		padding-inline: calc(var(--cz-spacing) * 3);
		max-height: 100%;
	}

	:host([disabled]),
	:host([hidden]) {
		display: none !important;
	}

	:host([has-cards]) {
		flex-flow: row wrap;
	}
`,F=e=>{let{onSlot:t}=M(e);return r`<slot @slotchange=${t}></slot>`},customElements.define(`cosmoz-tab`,class extends u(F,{observedAttributes:[`hidden`,`disabled`,`heading`,`badge`,`is-selected`],styleSheets:[p,P]}){set hidden(e){super.hidden=e,this._scheduler.update()}get hidden(){return super.hidden}})})))()}var L;function R(){return(R=e((()=>{t(),g(),L=({selectedTab:e,onSelect:t,href:i})=>(a,o,s)=>{let c=e===a;return r`<a
			class="tab"
			tabindex=${c?`0`:`-1`}
			role="tab"
			part=${[`tab`,o===0&&`first-tab`,o===s.length-1&&`last-tab`,c&&`selected-tab`].filter(Boolean).join(` `)}
			?hidden=${a.hidden}
			?disabled=${a.disabled}
			aria-selected=${c?`true`:`false`}
			@click=${t}
			.tab=${a}
			href=${f(i(a))}
		>
			${a.icon??n}
			<span>${a.heading}</span>
			${a.badge?r`<div class="badge" part="badge" title=${a.badge}>
						${a.badge}
				  </div>`:n}
		</a>`}})))()}var z,B,V,H,U;function W(){return(W=e((()=>{z=e=>!e.hidden&&!e.disabled,B=e=>e.getAttribute(`name`),V=e=>e.find(z),H=(e,t)=>{if(t==null)return V(e);let n=e.find(e=>B(e)===t);if(n==null)return V(e);if(z(n))return n;let r=V(e);return r&&(r._fallbackFor=n),r},U=e=>e.assignedElements().flatMap(e=>e.matches(`cosmoz-tab`)?[e]:e.matches(`slot`)?U(e):[])})))()}var G,K,q;function J(){return(J=e((()=>{C(),j(),h(),T(),W(),G=(e,t)=>{_(()=>{if(k(e,`selectedItem`,t),t==null)return;let n=B(t);n!==e.selected&&requestAnimationFrame(()=>k(e,`selected`,n??void 0)),t.toggleAttribute(`is-selected`,!0);let r={composed:!0};return t._active||=(t.dispatchEvent(new CustomEvent(`tab-first-select`,r)),!0),t.dispatchEvent(new CustomEvent(`tab-select`,r)),e.noResize||requestAnimationFrame(()=>window.dispatchEvent(new Event(`resize`))),()=>{t.toggleAttribute(`is-selected`,!1),t._fallbackFor=void 0}},[t])},K=(e,t,n)=>{d(()=>{let t=e.shadowRoot?.querySelector(`a[aria-selected=true]`);if(!t)return;let n=requestAnimationFrame(()=>x(t,{block:`nearest`,inline:`center`,boundary:t.parentElement,scrollMode:`if-needed`}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`})));return()=>cancelAnimationFrame(n)},[t,n])},q=e=>{let{selected:t,hashParam:n}=e,[r,i]=m([]),[a]=y(n),o=n==null||a==null&&t!=null?t:a,s=v(()=>H(r,o),[r,o]);G(e,s),_(()=>{let t=t=>{t.stopPropagation();let n=t.target;s!=null&&s._fallbackFor===n&&z(n)&&(s._fallbackFor=void 0,e.selected=B(n)??void 0),i(e=>e.slice())};return e.addEventListener(`cosmoz-tab-alter`,t),()=>e.removeEventListener(`cosmoz-tab-alter`,t)},[s]),K(e,s,r);let l=c(e=>z(e)&&n!=null?b(n,B(e)):void 0,[n]);return{tabs:r,selectedTab:s,onSlot:c(({target:e})=>requestAnimationFrame(()=>i(U(e))),[]),onSelect:c(t=>{if(t.button!==0||t.metaKey||t.ctrlKey)return;let{tab:r}=t.currentTarget;k(e,`selected`,B(r)??void 0),n!=null&&(t.preventDefault(),window.history.pushState({},``,l(r)),requestAnimationFrame(()=>window.dispatchEvent(new CustomEvent(`hashchange`))))},[n,l]),href:l}}})))()}var Y;function X(){return(X=e((()=>{l(),h(),I(),R(),S(),J(),Y=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let{tabs:t,onSlot:n,...i}=q(e);return r`
		<div class="tabs" part="tabs" role="tablist">
			<slot name="tabs"></slot>
			${t.map(L(i))}
			<slot name="stats"></slot>
		</div>

		<div id="content" part="content">
			<slot @slotchange=${n}></slot>
		</div>
	`},customElements.define(`cosmoz-tabs`,u(Y,{observedAttributes:[`selected`,`hash-param`,`no-resize`,`variant`,`compact-width`],styleSheets:[p,w]}))})))()}export{X as t};