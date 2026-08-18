import{i as e}from"./preload-helper-usAeo7Bx.js";import{G as t,J as n,Y as r}from"./iframe-DOneIXTJ.js";import{t as i}from"./cosmoz-tab-card-Bp1XE1Ru.js";import{B as a,C as o,G as s,H as c,I as l,J as u,K as d,M as f,S as p,T as m,W as h,v as ee,w as g,y as _}from"./untitled-tiq9wtpx.js";import{a as v,d as y,f as b,h as x,i as S,m as C,n as w,o as te,p as ne,r as T,s as E,t as D,u as O}from"./use-hash-param-miDuiaAZ.js";var k,A=e((()=>{g(),k=d(class extends s{update(){return this.state.host}})})),j,M,N,P=e((()=>{g(),A(),j=/([A-Z])/gu,M=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(j,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},N=(e,t,n=[t])=>{let r=k();h(()=>{M(r,e,t)},n)}})),F,I=e((()=>{P(),g(),F=e=>(h(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-tab-alter`,{bubbles:!0,composed:!0}))},[e.hidden,e.disabled,e.heading,e.badge,e.icon]),N(`isSelected`,e.isSelected),{onSlot:a(({target:t})=>e.toggleAttribute(`has-cards`,t.assignedElements().some(e=>e.matches(`cosmoz-tab-card, [has-cards]`))),[])})})),L,R,z=e((()=>{p(),g(),i(),I(),L=u`
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
`,R=e=>{let{onSlot:t}=F(e);return n`<slot @slotchange=${t}></slot>`},customElements.define(`cosmoz-tab`,class extends m(R,{observedAttributes:[`hidden`,`disabled`,`heading`,`badge`,`is-selected`],styleSheets:[o,L]}){set hidden(e){super.hidden=e,this._scheduler.update()}get hidden(){return super.hidden}})})),B,V,H,U=e((()=>{r(),ee(),y(),B=e=>n`
	${e.icon??t}
	<span>${e.heading}</span>
	${e.badge?n`<div class="badge" part="badge" title=${e.badge}>
				${e.badge}
		  </div>`:t}
`,V=({selectedTab:e,onSelect:t,href:r,overflowing:i})=>(a,o,s)=>{let c=e===a;return n`<a
			class="tab"
			tabindex=${c?`0`:`-1`}
			role="tab"
			part=${[`tab`,o===0&&`first-tab`,o===s.length-1&&`last-tab`,c&&`selected-tab`].filter(Boolean).join(` `)}
			?hidden=${a.hidden}
			?disabled=${a.disabled}
			?overflowing=${i?.has(a)}
			aria-selected=${c?`true`:`false`}
			@click=${t}
			.tab=${a}
			href=${_(r(a))}
		>
			${B(a)}
		</a>`},H=({selectedTab:e,onSelect:t,href:r})=>i=>{let a=e===i;return n`<a
			class="menu-item"
			tabindex=${i.disabled?`-1`:`0`}
			role="tab"
			part=${a?`menu-item selected-menu-item`:`menu-item`}
			?disabled=${i.disabled}
			aria-disabled=${_(i.disabled?`true`:void 0)}
			aria-selected=${a?`true`:`false`}
			@click=${e=>{t(e),O(e.currentTarget)}}
			.tab=${i}
			href=${_(r(i))}
		>
			${B(i)}
		</a>`}})),W,G,K,q,J,Y=e((()=>{W=e=>!e.hidden&&!e.disabled,G=e=>e.getAttribute(`name`),K=e=>e.find(W),q=(e,t)=>{if(t==null)return K(e);let n=e.find(e=>G(e)===t);if(n==null)return K(e);if(W(n))return n;let r=K(e);return r&&(r._fallbackFor=n),r},J=e=>e.assignedElements().flatMap(e=>e.matches(`cosmoz-tab`)?[e]:e.matches(`slot`)?J(e):[])})),X,Z,re=e((()=>{D(),P(),g(),Y(),X=(e,t)=>{h(()=>{if(M(e,`selectedItem`,t),t==null)return;let n=G(t);n!==e.selected&&requestAnimationFrame(()=>M(e,`selected`,n??void 0)),t.toggleAttribute(`is-selected`,!0);let r={composed:!0};return t._active||=(t.dispatchEvent(new CustomEvent(`tab-first-select`,r)),!0),t.dispatchEvent(new CustomEvent(`tab-select`,r)),e.noResize||requestAnimationFrame(()=>window.dispatchEvent(new Event(`resize`))),()=>{t.toggleAttribute(`is-selected`,!1),t._fallbackFor=void 0}},[t])},Z=e=>{let{selected:t,hashParam:n}=e,[r,i]=l([]),[o]=T(n),s=n==null||o==null&&t!=null?t:o,u=c(()=>q(r,s),[r,s]);X(e,u),h(()=>{let t=t=>{t.stopPropagation();let n=t.target;u!=null&&u._fallbackFor===n&&W(n)&&(u._fallbackFor=void 0,e.selected=G(n)??void 0),i(e=>e.slice())};return e.addEventListener(`cosmoz-tab-alter`,t),()=>e.removeEventListener(`cosmoz-tab-alter`,t)},[u]);let d=a(e=>W(e)&&n!=null?w(n,G(e)):void 0,[n]);return{tabs:r,selectedTab:u,onSlot:a(({target:e})=>requestAnimationFrame(()=>i(J(e))),[]),onSelect:a(t=>{if(t.button!==0||t.metaKey||t.ctrlKey)return;let{tab:r}=t.currentTarget;M(e,`selected`,G(r)??void 0),n!=null&&(t.preventDefault(),window.history.pushState({},``,d(r)),requestAnimationFrame(()=>window.dispatchEvent(new CustomEvent(`hashchange`))))},[n,d]),href:d}}})),Q,$,ie=e((()=>{p(),g(),C(),z(),y(),U(),te(),S(),re(),Q=e=>[...e.querySelectorAll(`.tab`)],$=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let{tabs:t,onSlot:r,...i}=Z(e),{selectedTab:o}=i,s=f(),l=a(e=>{s.current=e},[]),{overflowing:u}=v(s,Q,[t]),d=c(()=>{let e=new Set([...u].map(e=>e.tab));return t.filter(t=>e.has(t))},[u,t]),p=c(()=>new Set(d),[d]);return ne(e,d.length>0),n`
		<div class="tabs" part="tabs">
			<slot name="tabs"></slot>
			<div class="items" part="items" role="tablist" ${x(l)}>
				${t.map(V({...i,overflowing:p}))}
			</div>
			${b({items:d.map(H(i)),overflows:d.length>0,active:o!=null&&p.has(o),label:e.moreLabel})}
			<slot name="stats"></slot>
		</div>

		<div id="content" part="content">
			<slot @slotchange=${r}></slot>
		</div>
	`},customElements.define(`cosmoz-tabs`,m($,{observedAttributes:[`selected`,`hash-param`,`no-resize`,`variant`,`compact-width`,`more-label`],styleSheets:[o,E]}))}));export{ie as t};