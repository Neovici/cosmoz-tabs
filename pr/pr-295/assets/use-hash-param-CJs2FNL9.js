import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-Bk-WGUUu.js";import{A as i,B as a,D as o,H as s,I as c,J as l,M as u,O as d,P as ee,R as f,T as p,W as m,k as te,m as ne,t as re,w as h}from"./untitled-BRe1fzFe.js";var g,_,v=e((()=>{r(),d(),i(),g=new WeakMap,_=te(class extends o{render(e){return n}update(e,[t]){let r=t!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),n}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=g.get(t);n===void 0&&(n=new WeakMap,g.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?g.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),y,ie=e((()=>{h(),y=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=u(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},d=()=>{n||(c(),a())};return m(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,d),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,d),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),m(()=>{if(!(!i||n))return e.addEventListener(`focusin`,d),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,d),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),b,ae,oe,se=e((()=>{h(),r(),v(),ie(),b=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},ae=l`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,oe=e=>{let{placement:n=`bottom span-right`,disabled:r,passthrough:i,openOnHover:o,openOnFocus:s}=e,c=u(),[l,d]=ee(`opened`,!1),f=a(()=>{r||(d(!0),c.current?.showPopover?.())},[r]),p=a(()=>{d(!1),c.current?.hidePopover?.()},[]),te=a(()=>{r||(c.current?.matches(`:popover-open`)?p():f())},[r]);m(()=>{let e=c.current;e&&(l?e.showPopover?.():e.hidePopover?.())},[l]),m(()=>{e.toggleAttribute(`opened`,!!l)},[l]);let{scheduleClose:ne,cancelClose:re}=y({host:e,popoverRef:c,disabled:r,openOnHover:o,openOnFocus:s,open:f,close:p}),h=s?f:te,g=a(t=>{b(t),d(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return t`
		<slot name="button" @click=${h}></slot>
		${r&&i?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${n}"
					@toggle=${g}
					@select=${p}
					@focusout=${ne}
					@focusin=${re}
					${_(e=>e&&(c.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,p(oe,{styleSheets:[ae],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),x,S,C,w,T,E,D,O,ce=e((()=>{se(),re(),h(),r(),x=`More`,S=(e,t)=>m(()=>{if(t)return;let n=e.shadowRoot?.querySelector(`.more`);n?.opened&&(n.opened=!1)},[t]),C=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),w=(e,t)=>e[(t+e.length)%e.length]?.focus(),T=e=>{let t=[...e.currentTarget.querySelectorAll(`[role="tab"]`)].filter(e=>!e.hasAttribute(`disabled`));if(t.length===0)return;let n=t.indexOf(e.composedPath().find(e=>t.includes(e)));switch(e.key){case`ArrowDown`:w(t,n+1);break;case`ArrowUp`:w(t,n<0?t.length-1:n-1);break;case`Home`:w(t,0);break;case`End`:w(t,t.length-1);break;case`Enter`:case` `:if(n<0)return;t[n].click();break;default:return}e.preventDefault()},E=(e=document)=>{let t=e.activeElement;return t?.shadowRoot?E(t.shadowRoot):t},D=e=>{let t=e.currentTarget.querySelector(`.more-button`),n=e.newState===`open`;t?.setAttribute(`aria-expanded`,String(n)),!n&&E()===document.body&&t?.focus()},O=({items:e,overflows:n,active:r,label:i})=>t`
	<cosmoz-dropdown-next
		class="more"
		part="more"
		placement="bottom span-left"
		?hidden=${!n}
		?data-active=${r}
		@dropdown-toggle=${D}
	>
		<button
			class="more-button"
			part="more-button"
			slot="button"
			type="button"
			aria-expanded="false"
		>
			<span>${i}</span>
			<span class="chevron" aria-hidden="true"
				>${ne({width:`16`,height:`16`})}</span
			>
		</button>
		<div
			class="menu"
			part="menu"
			role="tablist"
			aria-orientation="vertical"
			@keydown=${T}
		>
			${e}
		</div>
	</cosmoz-dropdown-next>
`})),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,le=e((()=>{h(),k=l`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	overflow: hidden;
`,A=l`
	display: flex;
	align-items: stretch;
	gap: inherit;
	flex: 1 1 auto;
	min-width: 0;
	overflow: hidden;
`,j=l`
	visibility: hidden;
`,M=l`
	position: relative;
	display: inline-flex;
	box-sizing: border-box;
	align-items: center;
	justify-content: center;
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 0.5);
	color: var(--cz-color-text-quaternary);
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	transition: color 0.1s linear, background-color 0.1s linear,
		box-shadow 0.1s linear;
	outline: 0;
`,N=l`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,P=l`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,F=l`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,I=l`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,L=l`
	color: var(--cz-color-fg-brand-secondary);
`,R=l`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,z=l`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,B=l`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,V=l`
	flex: 1 1 0;
`,H=l`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: var(--cz-text-xs);
	font-weight: var(--cz-font-weight-medium);
	line-height: var(--cz-text-xs-line-height);
	border-radius: var(--cz-radius-full);
	padding: 0 calc(var(--cz-spacing) * 2);
	min-width: calc(var(--cz-spacing) * 5);
	max-width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	background-color: var(--cz-color-bg-brand-solid);
	color: var(--cz-color-text-on-brand);
	text-align: center;
`,U=l`
	${M}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,W=l`
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	gap: calc(var(--cz-spacing) * 0.5);
	min-width: 180px;
	max-height: 60vh;
	overflow-y: auto;
	padding: calc(var(--cz-spacing) * 1.5);
	background-color: var(--cz-color-bg-primary);
	border: 1px solid var(--cz-color-border-secondary);
	border-radius: var(--cz-radius-md);
	box-shadow: var(--cz-shadow-lg);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
`,G=l`
	${M}
	flex: 0 0 auto;
	justify-content: flex-start;
	gap: calc(var(--cz-spacing) * 2);
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
	box-shadow: none;
`,K=l`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary-hover);
	box-shadow: none;
`,q=B,J=l`
	.more {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: stretch;
	}

	.more[hidden] {
		display: none;
	}

	.more-button {
		${U}
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		${I}
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		${F}
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		${L}
	}

	.more-button:focus-visible {
		${N}
	}

	:host([variant="brand"]) .more-button {
		${z}
	}

	:host([variant="brand"]) .more-button:hover,
	:host([variant="brand"]) .more[data-active] .more-button {
		${B}
	}

	:host([variant="brand"]) .more-button:hover svg,
	:host([variant="brand"]) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	.menu {
		${W}
	}
`})),ue,de,fe,pe=e((()=>{h(),le(),ue=l`
	:host {
		position: relative;
		display: flex;
		flex-direction: column;
		font-family: var(--cz-font-body);
		gap: calc(var(--cz-spacing) * 3);
		min-width: 0;
	}

	:host([hidden]) {
		display: none;
	}

	.tabs {
		${k}
		flex: none;
	}

	.items {
		${A}
	}

	.tab {
		${M}
		${V}
	}

	.tab[overflowing] {
		${j}
	}

	.tab svg {
		${I}
	}

	.tab:hover,
	.tab[aria-selected="true"] {
		${F}
	}

	.tab:hover svg,
	.tab[aria-selected="true"] svg {
		${L}
	}

	.tab:focus-visible {
		${N}
	}

	.tab[disabled] {
		${P}
	}

	.tab[hidden] {
		display: none !important;
	}

	.badge {
		${H}
	}

	${J}

	.menu-item {
		${G}
	}

	.menu-item svg {
		${I}
	}

	.menu-item:hover {
		${K}
	}

	.menu-item[aria-selected="true"] {
		${q}
	}

	.menu-item[aria-selected="true"] svg {
		color: var(--cz-color-text-on-brand);
	}

	.menu-item:focus-visible {
		${N}
	}

	.menu-item[disabled] {
		${P}
	}

	#content {
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#content ::slotted(:not(slot):not([is-selected])) {
		display: none !important;
	}

	:host([variant="brand"]) .tabs {
		${R}
	}

	:host([variant="brand"]) .tab {
		${z}
	}

	:host([variant="brand"]) .tab:hover,
	:host([variant="brand"]) .tab[aria-selected="true"] {
		${B}
	}

	:host([variant="brand"]) .tab:hover svg,
	:host([variant="brand"]) .tab[aria-selected="true"] svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([compact-width]) .tab {
		flex: 0 1 auto;
	}

	:host(:not([compact-width]):not([variant="brand"])) .tabs {
		gap: calc(var(--cz-spacing) * 4);
	}
`,de=l`
	:host {
		${k}
		flex: 0 1 auto;
		min-width: 0;
	}

	.items {
		${A}
	}

	:host([variant="brand"]) {
		${R}
	}

	:host(:not([compact-width]):not([variant="brand"])) {
		gap: calc(var(--cz-spacing) * 4);
	}

	${J}
`,fe=l`
	:host {
		${M}
		${V}
	}

	:host(:hover),
	:host([active]) {
		${F}
	}

	:host(:focus-visible) {
		${N}
	}

	:host([disabled]) {
		${P}
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([overflowing]) {
		${j}
	}

	:host([menu]) {
		${G}
	}

	:host([menu]:hover) {
		${K}
	}

	:host([menu][active]) {
		${q}
	}

	:host([menu][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	a {
		display: contents;
		color: inherit;
		text-decoration: none;
	}

	#iconSlot::slotted(*) {
		flex-shrink: 0;
	}

	#iconSlot::slotted(svg) {
		${I}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${L}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${H}
	}

	:host([variant="brand"]) {
		${z}
	}

	:host([variant="brand"]:hover),
	:host([variant="brand"][active]) {
		${B}
	}

	:host([variant="brand"]:hover) #iconSlot::slotted(svg),
	:host([variant="brand"][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}
`})),Y,X,me,he,ge,_e,Z,ve=e((()=>{h(),Y=()=>({visible:new Set,overflowing:new Set,hidden:new Set}),X=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),me=(e,t)=>X(e.visible,t.visible)&&X(e.overflowing,t.overflowing)&&X(e.hidden,t.hidden),he=({overflowing:e,hidden:t})=>t.forEach(n=>{n.getBoundingClientRect().height!==0&&(t.delete(n),e.add(n))}),ge=1,_e=(e,t,n)=>{let r=Y(),i=new Set,a=new IntersectionObserver(e=>{let{visible:t,overflowing:a,hidden:o}=r;e.forEach(e=>{let n=e.target;i.delete(n),t.delete(n),a.delete(n),o.delete(n);let r=e.boundingClientRect.width-e.intersectionRect.width;e.boundingClientRect.height===0?o.add(n):r<=ge&&e.intersectionRect.height!==0?t.add(n):a.add(n)}),he(r),i.size===0&&n({visible:new Set(t),overflowing:new Set(a),hidden:new Set(o)})},{root:e,threshold:[0,.25,.5,.75,.9,.95,.99,1]});return t().forEach(e=>{i.add(e),a.observe(e)}),()=>a.disconnect()},Z=(e,t,n)=>{let[r,i]=c(Y);return f(()=>{let n=e();if(n)return _e(n,t,e=>i(t=>me(t,e)?t:e))},n),r}})),Q,ye,$,be,xe=e((()=>{h(),Q=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),ye=e=>e?()=>new URLSearchParams(Q().hash.replace(`#`,``)).get(e):void 0,$=(e,t)=>{if(!e)return;let n=Q(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},be=e=>{let t=s(()=>ye(e),[e]),[n,r]=c(t),i=u(n);return m(()=>void(i.current=n),[n]),m(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,s(()=>e?t=>{r(t),history.pushState({},``,$(e,t))}:r,[e])]}}));export{Z as a,fe as c,C as d,ce as f,_ as g,v as h,ve as i,de as l,S as m,$ as n,pe as o,O as p,be as r,ue as s,xe as t,x as u};