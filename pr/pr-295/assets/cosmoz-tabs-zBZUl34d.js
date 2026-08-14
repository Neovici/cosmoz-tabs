import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-Bk-WGUUu.js";import{t as i}from"./cosmoz-tab-card-CLoogPKH.js";import{B as a,C as o,G as s,H as c,I as l,J as u,K as d,M as f,S as p,T as m,W as h,v as ee,w as g,y as _}from"./untitled-BRe1fzFe.js";import{a as v,d as y,f as b,g as x,h as S,i as C,m as te,n as w,o as T,p as E,r as D,s as O,t as k}from"./use-hash-param-CJs2FNL9.js";var A,j=e((()=>{g(),A=d(class extends s{update(){return this.state.host}})})),M,N,P,F=e((()=>{g(),j(),M=/([A-Z])/gu,N=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(M,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},P=(e,t,n=[t])=>{let r=A();h(()=>{N(r,e,t)},n)}})),I,L=e((()=>{F(),g(),I=e=>(h(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-tab-alter`,{bubbles:!0,composed:!0}))},[e.hidden,e.disabled,e.heading,e.badge,e.icon]),P(`isSelected`,e.isSelected),{onSlot:a(({target:t})=>e.toggleAttribute(`has-cards`,t.assignedElements().some(e=>e.matches(`cosmoz-tab-card, [has-cards]`))),[])})})),R,z,B=e((()=>{p(),g(),i(),L(),R=u`
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
`,z=e=>{let{onSlot:n}=I(e);return t`<slot @slotchange=${n}></slot>`},customElements.define(`cosmoz-tab`,class extends m(z,{observedAttributes:[`hidden`,`disabled`,`heading`,`badge`,`is-selected`],styleSheets:[o,R]}){set hidden(e){super.hidden=e,this._scheduler.update()}get hidden(){return super.hidden}})})),V,H,U,W=e((()=>{r(),ee(),b(),V=e=>t`
	${e.icon??n}
	<span>${e.heading}</span>
	${e.badge?t`<div class="badge" part="badge" title=${e.badge}>
				${e.badge}
		  </div>`:n}
`,H=({selectedTab:e,onSelect:n,href:r,overflowing:i})=>(a,o,s)=>{let c=e===a;return t`<a
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
			href=${_(r(a))}
		>
			${V(a)}
		</a>`},U=({selectedTab:e,onSelect:n,href:r})=>i=>{let a=e===i;return t`<a
			class="menu-item"
			tabindex="0"
			role="tab"
			part=${a?`menu-item selected-menu-item`:`menu-item`}
			?disabled=${i.disabled}
			aria-selected=${a?`true`:`false`}
			@click=${e=>{n(e),y(e.currentTarget)}}
			.tab=${i}
			href=${_(r(i))}
		>
			${V(i)}
		</a>`}})),G,K,q,J,Y,X=e((()=>{G=e=>!e.hidden&&!e.disabled,K=e=>e.getAttribute(`name`),q=e=>e.find(G),J=(e,t)=>{if(t==null)return q(e);let n=e.find(e=>K(e)===t);if(n==null)return q(e);if(G(n))return n;let r=q(e);return r&&(r._fallbackFor=n),r},Y=e=>e.assignedElements().flatMap(e=>e.matches(`cosmoz-tab`)?[e]:e.matches(`slot`)?Y(e):[])})),Z,Q,ne=e((()=>{k(),F(),g(),X(),Z=(e,t)=>{h(()=>{if(N(e,`selectedItem`,t),t==null)return;let n=K(t);n!==e.selected&&requestAnimationFrame(()=>N(e,`selected`,n??void 0)),t.toggleAttribute(`is-selected`,!0);let r={composed:!0};return t._active||=(t.dispatchEvent(new CustomEvent(`tab-first-select`,r)),!0),t.dispatchEvent(new CustomEvent(`tab-select`,r)),e.noResize||requestAnimationFrame(()=>window.dispatchEvent(new Event(`resize`))),()=>{t.toggleAttribute(`is-selected`,!1),t._fallbackFor=void 0}},[t])},Q=e=>{let{selected:t,hashParam:n}=e,[r,i]=l([]),[o]=D(n),s=n==null||o==null&&t!=null?t:o,u=c(()=>J(r,s),[r,s]);Z(e,u),h(()=>{let t=t=>{t.stopPropagation();let n=t.target;u!=null&&u._fallbackFor===n&&G(n)&&(u._fallbackFor=void 0,e.selected=K(n)??void 0),i(e=>e.slice())};return e.addEventListener(`cosmoz-tab-alter`,t),()=>e.removeEventListener(`cosmoz-tab-alter`,t)},[u]);let d=a(e=>G(e)&&n!=null?w(n,K(e)):void 0,[n]);return{tabs:r,selectedTab:u,onSlot:a(({target:e})=>requestAnimationFrame(()=>i(Y(e))),[]),onSelect:a(t=>{if(t.button!==0||t.metaKey||t.ctrlKey)return;let{tab:r}=t.currentTarget;N(e,`selected`,K(r)??void 0),n!=null&&(t.preventDefault(),window.history.pushState({},``,d(r)),requestAnimationFrame(()=>window.dispatchEvent(new CustomEvent(`hashchange`))))},[n,d]),href:d}}})),$,re=e((()=>{p(),g(),S(),B(),b(),W(),T(),C(),ne(),$=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let{tabs:n,onSlot:r,...i}=Q(e),{selectedTab:o}=i,s=f(),l=a(e=>{s.current=e},[]),{overflowing:u}=v(()=>s.current,()=>[...s.current?.querySelectorAll(`.tab`)??[]],[n]),d=c(()=>{let e=new Set([...u].map(e=>e.tab));return n.filter(t=>e.has(t))},[u,n]),p=c(()=>new Set(d),[d]);return te(e,d.length>0),t`
		<div class="tabs" part="tabs">
			<slot name="tabs"></slot>
			<div class="items" part="items" role="tablist" ${x(l)}>
				${n.map(H({...i,overflowing:p}))}
			</div>
			${E({items:d.map(U(i)),overflows:d.length>0,active:o!=null&&p.has(o),label:e.getAttribute(`more-label`)??`More`})}
			<slot name="stats"></slot>
		</div>

		<div id="content" part="content">
			<slot @slotchange=${r}></slot>
		</div>
	`},customElements.define(`cosmoz-tabs`,m($,{observedAttributes:[`selected`,`hash-param`,`no-resize`,`variant`,`compact-width`,`more-label`],styleSheets:[o,O]}))}));export{re as t};