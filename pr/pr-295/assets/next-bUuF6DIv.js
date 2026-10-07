import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,l as n,n as r,o as i,r as a,u as o}from"./iframe-Dq8ZPbTf.js";import{C as s,D as c,T as l,_ as u,a as d,c as f,d as p,f as m,h,i as g,j as _,n as v,o as y,p as b,s as x,t as S,u as C,x as w,y as T}from"./if-defined-CCmx7dVS.js";import{m as ee,t as te}from"./untitled-CKmdcHBI.js";import{r as ne,t as re}from"./use-hash-param-DyEmbfYW.js";var E,D;function O(){return(O=e((()=>{E=e=>e.getAttribute(`role`)===`radio`?`aria-checked`:`aria-selected`,D=e=>E(e)===`aria-checked`?`aria-selected`:`aria-checked`})))()}var k,ie,ae,oe,se,ce,le,A,ue,de,j,M,N,P,F,I,L,R,z,B,V,H;function fe(){return(fe=e((()=>{x(),k=_`
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
	transition:
		color 0.1s linear,
		background-color 0.1s linear,
		box-shadow 0.1s linear;
	outline: 0;
`,ie=_`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,ae=_`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,oe=_`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,se=_`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,ce=_`
	color: var(--cz-color-fg-brand-secondary);
`,le=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,A=_`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,ue=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,de=_`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,j=_`
	color: var(--cz-color-fg-secondary-hover);
`,M=_`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,N=_`
	padding-inline: calc(var(--cz-spacing) * 2);
`,P=_`
	flex: 1 1 0;
`,F=_`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: var(--cz-text-xs);
	font-weight: var(--cz-font-weight-medium);
	line-height: var(--cz-text-xs-line-height);
	padding: 2px calc(var(--cz-spacing) * 2);
	max-width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	text-align: center;
	border-radius: var(--cz-radius-full);
	background-color: var(--cz-color-bg-secondary);
	color: var(--cz-color-text-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,I=_`
	background-color: var(--cz-color-bg-tertiary);
	color: var(--cz-color-text-primary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
`,L=_`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`,R=_`
	${k}
	flex: 0 0 auto;
	justify-content: flex-start;
	gap: calc(var(--cz-spacing) * 2);
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
	box-shadow: none;
`,z=_`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary-hover);
	box-shadow: none;
`,B=A,V=_`
	visibility: hidden;
`,H=_`
	:host {
		${k}
		${P}
	}

	:host(:hover),
	:host([active]) {
		${oe}
	}

	:host(:focus-visible) {
		${ie}
	}

	:host([disabled]) {
		${ae}
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([overflowing]) {
		${V}
	}

	:host([menu]) {
		${R}
	}

	:host([menu]:hover) {
		${z}
	}

	:host([menu][active]) {
		${B}
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
		${se}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${ce}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${F}
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		${I}
	}

	:host([variant='segmented']) .badge {
		${L}
	}

	:host([variant='brand']) {
		${le}
	}

	:host([variant='brand']:hover),
	:host([variant='brand'][active]) {
		${A}
	}

	:host([variant='brand']:hover) #iconSlot::slotted(svg),
	:host([variant='brand'][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		${ue}
	}

	:host([variant='segmented']:hover),
	:host([variant='segmented'][active]) {
		${de}
	}

	:host([variant='segmented']:hover) #iconSlot::slotted(svg),
	:host([variant='segmented'][active]) #iconSlot::slotted(svg) {
		${j}
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		${M}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		${N}
	}
`})))()}var pe;function me(){return(me=e((()=>{d(),x(),o(),S(),O(),fe(),pe=e=>{let{active:t,badge:r,href:a}=e;return c(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.getAttribute(`role`)||e.setAttribute(`role`,`tab`)},[]),w(()=>{e.setAttribute(E(e),t?`true`:`false`)},[t]),c(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),e.click()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&e.click()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),n`
		<a part="link" href=${v(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?n`<span class="badge" part="badge">${r}</span>`:i}
		</a>
	`},customElements.define(`cosmoz-tab-next`,f(pe,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[y,H]}))})))()}var U,W;function G(){return(G=e((()=>{o(),p(),b(),U=new WeakMap,W=m(class extends C{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=U.get(t);n===void 0&&(n=new WeakMap,U.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?U.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var he,K;function ge(){return(ge=e((()=>{o(),p(),he=class extends C{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return t}},K=m(he)})))()}var q;function J(){return(J=e((()=>{q=(e,...t)=>typeof e==`function`?e(...t):e})))()}var _e,ve,ye,be;function xe(){return(xe=e((()=>{o(),p(),J(),_e=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},ve=(e,t)=>{for(let[n,r]of Object.entries(e))_e(t,n,q(r,t))},ye=class extends C{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)ve(this._attrs,t)};#t=()=>this.#e();render(e){return t}update(e,[n]){this._attrs=n;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=r,r.addEventListener(`slotchange`,this.#t)),this.#e(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},be=m(ye)})))()}var Se;function Ce(){return(Ce=e((()=>{x(),Se=e=>{let t=l(()=>({}),[]);return l(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var we,Te;function Ee(){return(Ee=e((()=>{Ce(),x(),we=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},Te=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=h(),[l,d]=u(`opened`,!1),f=h(),p=h(),m=Se({disabled:n,openOnHover:i}),g=s(()=>{let e=f.current?.[0];return e instanceof HTMLElement?e:void 0},[]),_=s(()=>{m.disabled||(d(!0),o.current?.showPopover?.())},[]),v=s(()=>{d(!1),o.current?.hidePopover?.()},[]),y=s(()=>{o.current?.matches(`:popover-open`)?v():_()},[]),b=s(()=>{clearTimeout(m.closeTimeout)},[]),x=s(e=>{m.disabled||e.target===g()&&(b(),_())},[]),S=s(()=>{m.disabled||(b(),_())},[]),C=s(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||v()},100)},[]),w=s(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=g();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=s(t=>{let n=t.newState===`open`;d(n),n?we(p):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return c(()=>{let e=o.current;e&&(l?e.showPopover?.():e.hidePopover?.())},[l]),c(()=>{e.toggleAttribute(`opened`,!!l)},[l]),c(()=>{if(a&&!n)return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),c(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:l,triggers:f,content:p,popoverRef:o,handleClick:a?_:y,onToggle:T,close:v,scheduleClose:C,cancelClose:b}}})))()}var De,Oe,ke;function Ae(){return(Ae=e((()=>{ge(),xe(),x(),o(),G(),Ee(),De=_`
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

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,Oe=({placement:e,disabled:t,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>n`
		<slot
			name="button"
			${K(a)}
			${be({"aria-expanded":r?null:String(i),disabled:t&&!r?``:null})}
			@click=${c}
		></slot>
		${t&&r?n`<slot></slot>`:n`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${W(e=>e&&(s.current=e))}
				>
					<slot ${K(o)}></slot>
				</div>`}
	`,ke=e=>Oe(Te(e)),customElements.define(`cosmoz-dropdown-next`,f(ke,{styleSheets:[De],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var je,Me,Ne,Pe;function Fe(){return(Fe=e((()=>{Ae(),te(),r(),o(),je=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,Me=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),Ne=e=>typeof e==`string`&&e?e:a(`More`)||`More`,Pe=({items:e,overflows:t,active:r,label:i,role:a=`tablist`,onItemClick:o})=>n`
	<cosmoz-dropdown-next
		class="more"
		part="more"
		placement="bottom span-left"
		?hidden=${!t}
		?data-active=${r}
	>
		<button
			class="more-button"
			part="more-button"
			slot="button"
			type="button"
			aria-expanded="false"
			aria-haspopup="true"
			aria-controls="more-menu"
		>
			<span>${Ne(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${ee({width:`16`,height:`16`})}</span
			>
		</button>
		<div
			id="more-menu"
			class="menu"
			part="menu"
			role=${a}
			aria-orientation="vertical"
			@click=${o}
		>
			${e}
		</div>
	</cosmoz-dropdown-next>
`})))()}var Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt;function nt(){return(nt=e((()=>{x(),Ie=_`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
`,Le=_`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: inherit;
	flex: 1 1 auto;
	min-width: 0;
	overflow: clip;
	/* The band is one row's box, exact per size/variant: the item's box is
	   fully token-derived (fixed line-height, paddings, 16px icon), so
	   the clip is a constant the observer's intersections read against. */
	max-height: 41px; /* underline */
`,Re=_`
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
`,ze=_`
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
	transition:
		color 0.1s linear,
		background-color 0.1s linear,
		box-shadow 0.1s linear;
	outline: 0;
`,Be=_`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,Ve=_`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,He=_`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,Ue=_`
	color: var(--cz-color-fg-brand-secondary);
`,We=_`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,Ge=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,Ke=_`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,qe=_`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,Je=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,Ye=_`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,Xe=_`
	color: var(--cz-color-fg-secondary-hover);
`,Ze=_`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,Qe=_`
	padding-inline: calc(var(--cz-spacing) * 2);
`,$e=_`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,et=_`
	${ze}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,tt=_`
	:host {
		${Ie}
		flex: 0 1 auto;
		min-width: 0;
	}

	.items {
		${Le}
	}

	:host([variant='brand']) {
		${We}
	}

	:host([variant='segmented']) {
		${qe}
	}

	/* brand and segmented item boxes sit a touch shorter: 37px; sm trims
	   all variants to 33px */
	:host([variant='brand']) .items,
	:host([variant='segmented']) .items {
		max-height: 37px;
	}

	:host([size='sm']) .items {
		max-height: 33px;
	}

	/* The track hugs its tabs when they are not spread, staying within
	   the container's width. */
	:host([variant='segmented'][compact-width]) {
		box-sizing: border-box;
		width: max-content;
		max-width: 100%;
	}

	:host(
		:not([compact-width]):not([variant='brand']):not([variant='segmented'])
	) {
		gap: calc(var(--cz-spacing) * 4);
	}

	:host([variant='segmented'][size='sm']) {
		${$e}
	}

	.more {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: stretch;
	}

	.more[hidden] {
		display: none;
	}

	.more-button {
		${et}
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		${He}
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		${Ve}
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		${Ue}
	}

	.more-button:focus-visible {
		${Be}
	}

	:host([variant='brand']) .more-button {
		${Ge}
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		${Ke}
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		${Je}
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		${Ye}
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		${Xe}
	}

	:host([size='sm']) .more-button {
		${Ze}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		${Qe}
	}

	.menu {
		${Re}
	}
`})))()}var rt;function it(){return(it=e((()=>{x(),rt=(e,t,n)=>{let[r,i]=T(()=>new Set);return w(()=>{let n=e.current,r=t();if(!n||r.length===0)return;let a=new Map,o=()=>{let e=new Set(r.filter(e=>a.get(e)===!0));r.forEach(t=>{let n=e.has(t);n!==t.hasAttribute(`overflowing`)&&(n?t.setAttribute(`overflowing`,``):t.removeAttribute(`overflowing`))}),i(t=>t.size===e.size&&[...e].every(e=>t.has(e))?t:e)},s=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;a.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),o()},{root:n,threshold:[0,1]}),c=n.querySelector(`slot`),l=()=>{let e=new Set(c?.assignedElements({flatten:!0}));a.forEach((t,n)=>{e.has(n)||a.set(n,!1)}),o()};return c?.addEventListener(`slotchange`,l),r.forEach(e=>{a.set(e,!1),s.observe(e)}),()=>{s.disconnect(),c?.removeEventListener(`slotchange`,l)}},n),r}})))()}var Y,X,at,ot,st,ct,lt,ut,dt,ft,pt,mt,Z,ht,gt,_t;function vt(){return(vt=e((()=>{d(),x(),G(),O(),Fe(),nt(),it(),Y=`cosmoz-tab-next`,X=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},at=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>X(t,n,e.getAttribute(n))),X(t,D(t),null),X(t,E(t),t.hasAttribute(`active`)?`true`:`false`),X(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},ot=e=>{e.forEach(([,e])=>{!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.setAttribute(`tabindex`,`0`)})},st=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},ct=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),at(e,t)},lt=e=>new MouseEvent(`click`,e),ut=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;if(t.stopPropagation(),i.dispatchEvent(lt(t))||t.preventDefault(),je(t)){if(i.focus(),i.hasAttribute(`overflowing`)){let e=i.getRootNode()?.querySelector?.(`[tabindex="0"]`);e&&e!==i&&e.focus()}Me(a)}},dt=e=>e.map(e=>+!e.hidden).join(``),ft=e=>(e.querySelector(`slot`)?.assignedElements({flatten:!0})??[]).filter(e=>e.matches(Y)),pt={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`,`role`],childList:!0,subtree:!0,characterData:!0},mt=(e,t)=>{let[n,r]=T(0);return c(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,pt)),()=>t.disconnect()},[t]),n},Z=(e,t,n)=>{let r=mt(e,n),i=h();return i.current??=new Map,l(()=>{let n=i.current,r=e().filter(e=>t.has(e)).map(e=>{let t=n.get(e)??st(e);return n.set(e,t),ct(e,t),[e,t]}),a=new Set(r.map(([e])=>e));return n.forEach((e,t)=>{a.has(t)||n.delete(t)}),ot(r),r},[t,n,r])},ht=e=>{e.getAttribute(`role`)||e.setAttribute(`role`,`tablist`);let t=e.getAttribute(`role`)===`radiogroup`?`radiogroup`:`tablist`;return{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),compactWidth:e.hasAttribute(`compact-width`)?``:null,role:t,itemRole:t===`radiogroup`?`radio`:`tab`}},gt=(e,{variant:t,size:n,compactWidth:r,itemRole:i})=>{X(e,`variant`,t),X(e,`size`,n),X(e,`compact-width`,r),X(e,`role`,i),X(e,`tabindex`,e.hasAttribute(`active`)?`0`:`-1`),X(e,D(e),null),X(e,E(e),e.hasAttribute(`active`)?`true`:`false`)},_t=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let t=ht(e),{role:r}=t,i=h(),a=s(e=>{i.current=e},[]),[o,l]=T(0),u=s(()=>i.current?ft(i.current):[],[]),d=()=>{new Set([...e.querySelectorAll(Y),...u()]).forEach(e=>gt(e,t))},f=()=>{d(),l(e=>e+1)};c(d);let p=rt(i,u,[u().map(e=>e.getAttribute(`name`)).join(`,`),dt(u())]),m=Z(u,p,o);return n`
		<slot name="tabs"></slot>
		<div class="items" part="items" ${W(a)}>
			<slot @slotchange=${f}></slot>
		</div>
		${Pe({items:m.map(([,e])=>e),overflows:m.length>0,active:m.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,role:r,onItemClick:ut(m)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,f(_t,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[y,tt]}))})))()}var Q,yt,bt,xt,St,Ct;function $(){return($=e((()=>{re(),J(),x(),S(),Q=e=>!e.hidden&&!e.disabled,yt=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Q),bt=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Q(n)?n:yt(e)},xt=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=ne(t),a=h([]),o=l(()=>bt(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:l(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:s(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},St=({tabs:e,active:t,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=q(e.title),l=e.content??c,u=e.badge||void 0;return n`<cosmoz-tab-next
			name=${e.name}
			class=${v(i)}
			variant=${v(a)}
			size=${v(o)}
			?compact-width=${v(s)}
			title=${v(c)}
			?active=${t?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${v(u)}
			@click=${r}
			>${g(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`}),Ct=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function wt(){return(wt=e((()=>{me(),vt(),$()})))()}export{xt as a,St as i,$ as n,Ct as r,wt as t};