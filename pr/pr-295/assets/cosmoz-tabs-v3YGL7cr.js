import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,o as n,u as r}from"./iframe-Cdvi9uWS.js";import{t as i}from"./cosmoz-tab-card-B5rsx_wY.js";import{B as a,C as o,G as s,H as c,I as l,J as u,K as d,M as f,S as p,T as m,W as h,v as g,w as _,y as v}from"./untitled-CLusGqw9.js";import{a as ee,d as y,f as b,g as x,h as S,i as C,m as te,n as ne,o as re,p as ie,r as ae,s as w,t as T,u as oe}from"./use-hash-param-8ocRlX0X.js";var E;function D(){return(D=e((()=>{_(),E=d(class extends s{update(){return this.state.host}})})))()}var O,k,A;function j(){return(j=e((()=>{_(),D(),O=/([A-Z])/gu,k=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(O,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},A=(e,t,n=[t])=>{let r=E();h(()=>{k(r,e,t)},n)}})))()}var M;function N(){return(N=e((()=>{j(),_(),M=e=>(h(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-tab-alter`,{bubbles:!0,composed:!0}))},[e.hidden,e.disabled,e.heading,e.badge,e.icon]),A(`isSelected`,e.isSelected),{onSlot:a(({target:t})=>e.toggleAttribute(`has-cards`,t.assignedElements().some(e=>e.matches(`cosmoz-tab-card, [has-cards]`))),[])})})))()}var P,F;function I(){return(I=e((()=>{p(),_(),i(),N(),P=u`
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
`,F=e=>{let{onSlot:n}=M(e);return t`<slot @slotchange=${n}></slot>`},customElements.define(`cosmoz-tab`,class extends m(F,{observedAttributes:[`hidden`,`disabled`,`heading`,`badge`,`is-selected`],styleSheets:[o,P]}){set hidden(e){super.hidden=e,this._scheduler.update()}get hidden(){return super.hidden}})})))()}var L,R,z,B;function V(){return(V=e((()=>{r(),g(),y(),L=e=>t`
	${e.icon??n}
	<span>${e.heading}</span>
	${e.badge?t`<div class="badge" part="badge" title=${e.badge}>
				${e.badge}
			</div>`:n}
`,R=({selectedTab:e,onSelect:n,href:r,overflowing:i})=>(a,o,s)=>{let c=e===a;return t`<a
			class="tab"
			tabindex=${c?`0`:`-1`}
			role="tab"
			part=${[`tab`,o===0&&`first-tab`,o===s.length-1&&`last-tab`,c&&`selected-tab`].filter(Boolean).join(` `)}
			?hidden=${a.hidden}
			?disabled=${a.disabled}
			?overflowing=${i?.has(a)}
			aria-selected=${c?`true`:`false`}
			@click=${n}
			.tab=${a}
			href=${v(r(a))}
		>
			${L(a)}
		</a>`},z=(e,t)=>{let n=e.findIndex(e=>e===t&&!e.disabled);return n<0?e.findIndex(e=>!e.disabled):n},B=({selectedTab:e,onSelect:n,href:r})=>(i,a,o)=>{let s=e===i;return t`<a
			class="menu-item"
			tabindex=${a===z(o,e)?`0`:`-1`}
			role="tab"
			part=${s?`menu-item selected-menu-item`:`menu-item`}
			?disabled=${i.disabled}
			aria-disabled=${v(i.disabled?`true`:void 0)}
			aria-selected=${s?`true`:`false`}
			@click=${e=>{n(e),b(e)&&oe(e.currentTarget)}}
			.tab=${i}
			href=${v(r(i))}
		>
			${L(i)}
		</a>`}})))()}var H,U,W,G,K;function q(){return(q=e((()=>{H=e=>!e.hidden&&!e.disabled,U=e=>e.getAttribute(`name`),W=e=>e.find(H),G=(e,t)=>{if(t==null)return W(e);let n=e.find(e=>U(e)===t);if(n==null)return W(e);if(H(n))return n;let r=W(e);return r&&(r._fallbackFor=n),r},K=e=>e.assignedElements().flatMap(e=>e.matches(`cosmoz-tab`)?[e]:e.matches(`slot`)?K(e):[])})))()}var J,Y;function X(){return(X=e((()=>{T(),j(),_(),q(),J=(e,t)=>{h(()=>{if(k(e,`selectedItem`,t),t==null)return;let n=U(t);n!==e.selected&&requestAnimationFrame(()=>k(e,`selected`,n??void 0)),t.toggleAttribute(`is-selected`,!0);let r={composed:!0};return t._active||=(t.dispatchEvent(new CustomEvent(`tab-first-select`,r)),!0),t.dispatchEvent(new CustomEvent(`tab-select`,r)),e.noResize||requestAnimationFrame(()=>window.dispatchEvent(new Event(`resize`))),()=>{t.toggleAttribute(`is-selected`,!1),t._fallbackFor=void 0}},[t])},Y=e=>{let{selected:t,hashParam:n}=e,[r,i]=l([]),[o]=ae(n),s=n==null||o==null&&t!=null?t:o,u=c(()=>G(r,s),[r,s]);J(e,u),h(()=>{let t=t=>{t.stopPropagation();let n=t.target;u!=null&&u._fallbackFor===n&&H(n)&&(u._fallbackFor=void 0,e.selected=U(n)??void 0),i(e=>e.slice())};return e.addEventListener(`cosmoz-tab-alter`,t),()=>e.removeEventListener(`cosmoz-tab-alter`,t)},[u]);let d=a(e=>H(e)&&n!=null?ne(n,U(e)):void 0,[n]);return{tabs:r,selectedTab:u,onSlot:a(({target:e})=>requestAnimationFrame(()=>i(K(e))),[]),onSelect:a(t=>{if(t.button!==0||t.metaKey||t.ctrlKey)return;let{tab:r}=t.currentTarget;k(e,`selected`,U(r)??void 0),n!=null&&(t.preventDefault(),window.history.pushState({},``,d(r)),requestAnimationFrame(()=>window.dispatchEvent(new CustomEvent(`hashchange`))))},[n,d]),href:d}}})))()}var Z,Q;function $(){return($=e((()=>{p(),_(),S(),I(),y(),V(),re(),C(),X(),Z=e=>[...e.querySelectorAll(`.tab`)],Q=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let{tabs:n,onSlot:r,...i}=Y(e),{selectedTab:o}=i,s=f(),l=a(e=>{s.current=e},[]),{overflowing:u}=ee(s,Z,[n]),d=c(()=>{let e=new Set([...u].map(e=>e.tab));return n.filter(t=>e.has(t))},[u,n]),p=c(()=>new Set(d),[d]);return te(e,d.length>0),t`
		<div class="tabs" part="tabs">
			<slot name="tabs"></slot>
			<div class="items" part="items" role="tablist" ${x(l)}>
				${n.map(R({...i,overflowing:p}))}
			</div>
			${ie({items:d.map(B(i)),overflows:d.length>0,active:o!=null&&p.has(o),label:e.moreLabel})}
			<slot name="stats"></slot>
		</div>

		<div id="content" part="content">
			<slot @slotchange=${r}></slot>
		</div>
	`},customElements.define(`cosmoz-tabs`,m(Q,{observedAttributes:[`selected`,`hash-param`,`no-resize`,`variant`,`compact-width`,`more-label`],styleSheets:[o,w]}))})))()}export{$ as t};