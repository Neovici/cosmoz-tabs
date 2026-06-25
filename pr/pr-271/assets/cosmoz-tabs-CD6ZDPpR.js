import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-BMy_I1KC.js";import{t as i}from"./cosmoz-tab-card-oWSjVL5e.js";import{C as a,_ as o,a as s,b as c,d as l,h as u,i as d,n as f,o as p,p as m,r as h,t as g,x as _,y as v}from"./if-defined-PWzNkm1l.js";import{a as y,i as b,n as x,o as S,r as C,s as w,t as T}from"./dist-CNokoSGD.js";var E,D=e((()=>{s(),E=_(class extends c{update(){return this.state.host}})})),O,k,A,j=e((()=>{s(),D(),O=/([A-Z])/gu,k=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(O,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},A=(e,t,n=[t])=>{let r=E();v(()=>{k(r,e,t)},n)}})),M,N=e((()=>{j(),s(),M=e=>(v(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-tab-alter`,{bubbles:!0,composed:!0}))},[e.hidden,e.disabled,e.heading,e.badge,e.icon]),A(`isSelected`,e.isSelected),{onSlot:u(({target:t})=>e.toggleAttribute(`has-cards`,t.assignedElements().some(e=>e.matches(`cosmoz-tab-card, [has-cards]`))),[])})})),P,F,I=e((()=>{h(),s(),i(),N(),P=a`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		flex: 1 1 auto;
		max-height: 100%;
	}

	:host([disabled]),
	:host([hidden]) {
		display: none !important;
	}

	:host([has-cards]) {
		flex-flow: row wrap;
	}
`,F=e=>{let{onSlot:n}=M(e);return t`<slot @slotchange=${n}></slot>`},customElements.define(`cosmoz-tab`,class extends p(F,{observedAttributes:[`hidden`,`disabled`,`heading`,`badge`,`is-selected`],styleSheets:[d,P]}){set hidden(e){super.hidden=e,this._scheduler.update()}get hidden(){return super.hidden}})})),L,R=e((()=>{r(),g(),L=({selectedTab:e,onSelect:r,href:i})=>(a,o,s)=>{let c=e===a;return t`<a
			class="tab"
			tabindex=${c?`0`:`-1`}
			role="tab"
			part=${[`tab`,o===0&&`first-tab`,o===s.length-1&&`last-tab`,c&&`selected-tab`].filter(Boolean).join(` `)}
			?hidden=${a.hidden}
			?disabled=${a.disabled}
			aria-selected=${c?`true`:`false`}
			@click=${r}
			.tab=${a}
			href=${f(i(a))}
		>
			${a.icon??n}
			<span>${a.heading}</span>
			${a.badge?t`<div class="badge" part="badge" title=${a.badge}>
						${a.badge}
				  </div>`:n}
		</a>`}})),z,B,V,H,U,W=e((()=>{z=e=>!e.hidden&&!e.disabled,B=e=>e.getAttribute(`name`),V=e=>e.find(z),H=(e,t)=>{if(t==null)return V(e);let n=e.find(e=>B(e)===t);if(n==null)return V(e);if(z(n))return n;let r=V(e);return r&&(r._fallbackFor=n),r},U=e=>e.assignedElements().flatMap(e=>e.matches(`cosmoz-tab`)?[e]:e.matches(`slot`)?U(e):[])})),G,K,q,J=e((()=>{C(),j(),s(),T(),W(),G=(e,t)=>{v(()=>{if(k(e,`selectedItem`,t),t==null)return;let n=B(t);n!==e.selected&&requestAnimationFrame(()=>k(e,`selected`,n??void 0)),t.toggleAttribute(`is-selected`,!0);let r={composed:!0};return t._active||=(t.dispatchEvent(new CustomEvent(`tab-first-select`,r)),!0),t.dispatchEvent(new CustomEvent(`tab-select`,r)),e.noResize||requestAnimationFrame(()=>window.dispatchEvent(new Event(`resize`))),()=>{t.toggleAttribute(`is-selected`,!1),t._fallbackFor=void 0}},[t])},K=(e,t,n)=>{m(()=>{let t=e.shadowRoot?.querySelector(`a[aria-selected=true]`);if(!t)return;let n=requestAnimationFrame(()=>x(t,{block:`nearest`,inline:`center`,boundary:t.parentElement,scrollMode:`if-needed`}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`})));return()=>cancelAnimationFrame(n)},[t,n])},q=e=>{let{selected:t,hashParam:n}=e,[r,i]=l([]),[a]=y(n),s=n==null||a==null&&t!=null?t:a,c=o(()=>H(r,s),[r,s]);G(e,c),v(()=>{let t=t=>{t.stopPropagation();let n=t.target;c!=null&&c._fallbackFor===n&&z(n)&&(c._fallbackFor=void 0,e.selected=B(n)??void 0),i(e=>e.slice())};return e.addEventListener(`cosmoz-tab-alter`,t),()=>e.removeEventListener(`cosmoz-tab-alter`,t)},[c]),K(e,c,r);let d=u(e=>z(e)&&n!=null?b(n,B(e)):void 0,[n]);return{tabs:r,selectedTab:c,onSlot:u(({target:e})=>requestAnimationFrame(()=>i(U(e))),[]),onSelect:u(t=>{if(t.button!==0||t.metaKey||t.ctrlKey)return;let{tab:r}=t.currentTarget;k(e,`selected`,B(r)??void 0),n!=null&&(t.preventDefault(),window.history.pushState({},``,d(r)),requestAnimationFrame(()=>window.dispatchEvent(new CustomEvent(`hashchange`))))},[n,d]),href:d}}})),Y,X=e((()=>{h(),s(),I(),R(),S(),J(),Y=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let{tabs:n,onSlot:r,...i}=q(e);return t`
		<div class="tabs" part="tabs" role="tablist">
			<slot name="tabs"></slot>
			${n.map(L(i))}
			<slot name="stats"></slot>
		</div>

		<div id="content" part="content">
			<slot @slotchange=${r}></slot>
		</div>
	`},customElements.define(`cosmoz-tabs`,p(Y,{observedAttributes:[`selected`,`hash-param`,`no-resize`,`variant`,`full-width`],styleSheets:[d,w]}))}));export{X as t};