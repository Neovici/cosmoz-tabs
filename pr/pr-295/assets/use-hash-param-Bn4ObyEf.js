import{i as e}from"./preload-helper-usAeo7Bx.js";import{G as t,J as n,Y as r,n as i,t as a}from"./iframe-T0BedWGr.js";import{A as o,B as s,D as c,H as l,I as u,J as d,M as f,O as p,P as ee,R as m,T as te,W as h,k as ne,m as re,t as g,w as _}from"./untitled-DD2WTsRj.js";var v,y,b=e((()=>{r(),p(),o(),v=new WeakMap,y=ne(class extends c{render(e){return t}update(e,[n]){let r=n!==this.G;return r&&this.rt(void 0),(r||this.lt!==this.ct)&&(this.G=n,this.ht=e.options?.host,this.rt(this.ct=e.element)),t}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=v.get(t);n===void 0&&(n=new WeakMap,v.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?v.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),x,ie=e((()=>{_(),x=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=f(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return h(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),h(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),ae,oe,se,ce=e((()=>{_(),r(),b(),ie(),ae=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},oe=d`
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
`,se=e=>{let{placement:t=`bottom span-right`,disabled:r,passthrough:i,openOnHover:a,openOnFocus:o}=e,c=f(),[l,u]=ee(`opened`,!1),d=s(()=>{r||(u(!0),c.current?.showPopover?.())},[r]),p=s(()=>{u(!1),c.current?.hidePopover?.()},[]),m=s(()=>{r||(c.current?.matches(`:popover-open`)?p():d())},[r]);h(()=>{let e=c.current;e&&(l?e.showPopover?.():e.hidePopover?.())},[l]),h(()=>{e.toggleAttribute(`opened`,!!l)},[l]);let{scheduleClose:te,cancelClose:ne}=x({host:e,popoverRef:c,disabled:r,openOnHover:a,openOnFocus:o,open:d,close:p}),re=o?d:m,g=s(t=>{ae(t),u(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return n`
		<slot name="button" @click=${re}></slot>
		${r&&i?n`<slot></slot>`:n`<div
					popover
					style="position-area: ${t}"
					@toggle=${g}
					@select=${p}
					@focusout=${te}
					@focusin=${ne}
					${y(e=>e&&(c.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,te(se,{styleSheets:[oe],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),S,C,w,T,E,D,O,le=e((()=>{ce(),g(),_(),a(),r(),S=(e,t)=>h(()=>{if(t)return;let n=e.shadowRoot?.querySelector(`.more`);n?.opened&&(n.opened=!1)},[t]),C=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),w=(e,t)=>e[(t+e.length)%e.length]?.focus(),T=e=>{let t=[...e.currentTarget.querySelectorAll(`[role="tab"]`)].filter(e=>!e.hasAttribute(`disabled`));if(t.length===0)return;let n=t.indexOf(e.composedPath().find(e=>t.includes(e)));switch(e.key){case`ArrowDown`:w(t,n+1);break;case`ArrowUp`:w(t,n<0?t.length-1:n-1);break;case`Home`:w(t,0);break;case`End`:w(t,t.length-1);break;case`Enter`:case` `:if(n<0)return;t[n].click();break;default:return}e.preventDefault()},E=(e=document)=>{let t=e.activeElement;return t?.shadowRoot?E(t.shadowRoot):t},D=e=>{let t=e.currentTarget.querySelector(`.more-button`),n=e.newState===`open`;t?.setAttribute(`aria-expanded`,String(n)),!n&&E()===document.body&&t?.focus()},O=({items:e,overflows:t,active:r,label:a,onItemClick:o})=>n`
	<cosmoz-dropdown-next
		class="more"
		part="more"
		placement="bottom span-left"
		?hidden=${!t}
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
			<span>${a??(i(`More`)||`More`)}</span>
			<span class="chevron" aria-hidden="true"
				>${re({width:`16`,height:`16`})}</span
			>
		</button>
		<div
			class="menu"
			part="menu"
			role="tablist"
			aria-orientation="vertical"
			@keydown=${T}
			@click=${o}
		>
			${e}
		</div>
	</cosmoz-dropdown-next>
`})),k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,ue=e((()=>{_(),k=d`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	overflow: clip;
`,A=d`
	display: flex;
	align-items: stretch;
	gap: inherit;
	flex: 1 1 auto;
	min-width: 0;
	overflow: clip;
`,j=d`
	visibility: hidden;
`,M=d`
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
`,N=d`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,P=d`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,F=d`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,I=d`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,L=d`
	color: var(--cz-color-fg-brand-secondary);
`,R=d`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,z=d`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,B=d`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,V=d`
	flex: 1 1 0;
`,H=d`
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
`,U=d`
	${M}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,W=d`
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
`,G=d`
	${M}
	flex: 0 0 auto;
	justify-content: flex-start;
	gap: calc(var(--cz-spacing) * 2);
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
	box-shadow: none;
`,K=d`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary-hover);
	box-shadow: none;
`,q=B,J=d`
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
`})),de,fe,pe,me=e((()=>{_(),ue(),de=d`
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
`,fe=d`
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
`,pe=d`
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
`})),Y,X,he,ge,_e,ve,Z,ye=e((()=>{_(),Y=()=>({visible:new Set,overflowing:new Set,hidden:new Set}),X=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),he=(e,t)=>X(e.visible,t.visible)&&X(e.overflowing,t.overflowing)&&X(e.hidden,t.hidden),ge=({overflowing:e,hidden:t})=>t.forEach(n=>{n.getBoundingClientRect().height!==0&&(t.delete(n),e.add(n))}),_e=1,ve=(e,t,n)=>{let r=Y(),i=new Set,a=new IntersectionObserver(e=>{let{visible:t,overflowing:a,hidden:o}=r;e.forEach(e=>{let n=e.target;i.delete(n),t.delete(n),a.delete(n),o.delete(n);let r=e.boundingClientRect.width-e.intersectionRect.width;e.boundingClientRect.height===0?o.add(n):r<=_e&&e.intersectionRect.height!==0?t.add(n):a.add(n)}),ge(r),i.size===0&&n({visible:new Set(t),overflowing:new Set(a),hidden:new Set(o)})},{root:e,threshold:[0,.25,.5,.75,.9,.95,.99,1]}),o=()=>{a.disconnect(),i.clear();let r=t(e);r.forEach(e=>{i.add(e),a.observe(e)}),r.length===0&&n(Y())},s=0,c=new ResizeObserver(()=>{cancelAnimationFrame(s),s=requestAnimationFrame(o)});return c.observe(e),o(),()=>{cancelAnimationFrame(s),c.disconnect(),a.disconnect()}},Z=(e,t,n)=>{let[r,i]=u(Y);return m(()=>{let n=e.current;if(n)return ve(n,t,e=>i(t=>he(t,e)?t:e))},n),r}})),Q,be,$,xe,Se=e((()=>{_(),Q=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),be=e=>e?()=>new URLSearchParams(Q().hash.replace(`#`,``)).get(e):void 0,$=(e,t)=>{if(!e)return;let n=Q(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},xe=e=>{let t=l(()=>be(e),[e]),[n,r]=u(t),i=f(n);return h(()=>void(i.current=n),[n]),h(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,l(()=>e?t=>{r(t),history.pushState({},``,$(e,t))}:r,[e])]}}));export{Z as a,pe as c,le as d,O as f,y as h,ye as i,fe as l,b as m,$ as n,me as o,S as p,xe as r,de as s,Se as t,C as u};