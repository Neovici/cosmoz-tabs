import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,l as n,n as r,o as i,r as a,u as o}from"./iframe-CKiHJFd3.js";import{C as s,D as c,T as l,_ as u,a as d,c as f,d as p,f as m,h,i as g,j as _,n as v,o as y,p as b,s as x,t as S,u as C,x as w,y as T}from"./if-defined-BEauzBAC.js";import{m as ee,t as te}from"./untitled-GATzo-X-.js";import{r as ne,t as re}from"./use-hash-param-BnHj9TJX.js";var E,D;function O(){return(O=e((()=>{E=e=>e.getAttribute(`role`)===`radio`?`aria-checked`:`aria-selected`,D=e=>E(e)===`aria-checked`?`aria-selected`:`aria-checked`})))()}var ie;function ae(){return(ae=e((()=>{x(),ie=_`
	:host {
		position: relative;
		display: inline-flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 0.5);
		color: var(--_color);
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		flex: 1 1 0;
		transition:
			color 0.1s linear,
			background-color 0.1s linear,
			box-shadow 0.1s linear;
		outline: 0;

		/* The item's face: hover and active read these; the variants set
		   their own (for brand and segmented, hover and active share one
		   face, so both stay in sync by construction). */
		--_color: var(--cz-color-text-quaternary);
		--_icon-color: var(--cz-color-fg-quaternary);
		--_hover-color: var(--cz-color-text-brand);
		--_hover-background: transparent;
		--_hover-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
		--_hover-icon-color: var(--cz-color-fg-brand-secondary);
		--_active-color: var(--cz-color-text-brand);
		--_active-background: transparent;
		--_active-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
		--_active-icon-color: var(--cz-color-fg-brand-secondary);
	}

	:host(:hover) {
		color: var(--_hover-color);
		background-color: var(--_hover-background);
		box-shadow: var(--_hover-shadow);
	}

	:host(:hover) #iconSlot::slotted(svg) {
		color: var(--_hover-icon-color);
	}

	:host([active]) {
		color: var(--_active-color);
		background-color: var(--_active-background);
		box-shadow: var(--_active-shadow);
	}

	:host([active]) #iconSlot::slotted(svg) {
		color: var(--_active-icon-color);
	}

	:host(:focus-visible) {
		outline: 2px solid var(--cz-color-fg-brand);
		outline-offset: -2px;
	}

	:host([disabled]) {
		opacity: 0.5;
		cursor: not-allowed;
		pointer-events: none;
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([overflowing]) {
		visibility: hidden;
	}

	/* The menu copy: the same element with the menu row's box and face. */
	:host([menu]) {
		flex: 0 0 auto;
		justify-content: flex-start;
		gap: calc(var(--cz-spacing) * 2);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		box-shadow: none;
		--_color: var(--cz-color-text-quaternary);
		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: var(--cz-color-bg-primary-hover);
		--_hover-shadow: none;
		--_hover-icon-color: var(--cz-color-fg-quaternary);
		--_active-color: var(--cz-color-text-on-brand);
		--_active-background: var(--cz-color-bg-brand-solid);
		--_active-shadow: none;
		--_active-icon-color: var(--cz-color-text-on-brand);
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
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		color: var(--_icon-color);
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	/* Untitled UI badge, size sm: a counter pill that steps up a surface
	   while the tab is hot, and the segmented variant's square-ish one. */
	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		font-size: var(--cz-text-xs);
		font-weight: var(--cz-font-weight-medium);
		line-height: var(--cz-text-xs-line-height);
		padding: 2px var(--_badge-padding-inline);
		max-width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		border-radius: var(--_badge-radius);
		background-color: var(--_badge-background);
		color: var(--_badge-color);
		box-shadow: var(--_badge-shadow);

		--_badge-padding-inline: calc(var(--cz-spacing) * 2);
		--_badge-radius: var(--cz-radius-full);
		--_badge-background: var(--cz-color-bg-secondary);
		--_badge-color: var(--cz-color-text-secondary);
		--_badge-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		--_badge-background: var(--cz-color-bg-tertiary);
		--_badge-color: var(--cz-color-text-primary);
		--_badge-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
	}

	:host([variant='segmented']) .badge {
		--_badge-padding-inline: calc(var(--cz-spacing) * 1.5);
		--_badge-radius: var(--cz-radius-sm);
		--_badge-background: var(--cz-color-bg-primary);
		--_badge-color: var(--cz-color-text-secondary);
		--_badge-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary), var(--cz-shadow-xs);
	}

	:host([variant='brand']) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);
		--_hover-color: var(--cz-color-text-on-brand);
		--_hover-background: var(--cz-color-bg-brand-solid);
		--_hover-shadow: none;
		--_hover-icon-color: var(--cz-color-text-on-brand);
		--_active-color: var(--cz-color-text-on-brand);
		--_active-background: var(--cz-color-bg-brand-solid);
		--_active-shadow: none;
		--_active-icon-color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: var(--cz-color-bg-primary);
		--_hover-shadow: var(--cz-shadow-sm);
		--_hover-icon-color: var(--cz-color-fg-secondary-hover);
		--_active-color: var(--cz-color-text-secondary);
		--_active-background: var(--cz-color-bg-primary);
		--_active-shadow: var(--cz-shadow-sm);
		--_active-icon-color: var(--cz-color-fg-secondary-hover);
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		padding-inline: calc(var(--cz-spacing) * 2);
	}
`})))()}var oe,se;function ce(){return(ce=e((()=>{d(),x(),o(),S(),O(),ae(),oe=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},se=e=>{let{active:t,badge:r,href:a}=e;return w(()=>{e.setAttribute(E(e),t?`true`:`false`)},[t]),c(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),e.click()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&e.click()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),n`
		<a part="link" href=${v(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?n`<span class="badge" part="badge">${r}</span>`:i}
		</a>
	`},customElements.define(`cosmoz-tab-next`,f(se,{baseElement:oe,observedAttributes:[`active`,`badge`,`href`],styleSheets:[y,ie]}))})))()}var le,k;function A(){return(A=e((()=>{o(),p(),le=class extends C{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return t}},k=m(le)})))()}var j;function M(){return(M=e((()=>{j=(e,...t)=>typeof e==`function`?e(...t):e})))()}var N,P,F,I;function L(){return(L=e((()=>{o(),p(),M(),N=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},P=(e,t)=>{for(let[n,r]of Object.entries(e))N(t,n,j(r,t))},F=class extends C{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)P(this._attrs,t)};#t=()=>this.#e();render(e){return t}update(e,[n]){this._attrs=n;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=r,r.addEventListener(`slotchange`,this.#t)),this.#e(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},I=m(F)})))()}var R,z;function B(){return(B=e((()=>{o(),p(),b(),R=new WeakMap,z=m(class extends C{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=R.get(t);n===void 0&&(n=new WeakMap,R.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?R.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var V;function H(){return(H=e((()=>{x(),V=e=>{let t=l(()=>({}),[]);return l(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var U,W;function G(){return(G=e((()=>{H(),x(),U=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},W=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=h(),[l,d]=u(`opened`,!1),f=h(),p=h(),m=V({disabled:n,openOnHover:i}),g=s(()=>{let e=f.current?.[0];return e instanceof HTMLElement?e:void 0},[]),_=s(()=>{m.disabled||(d(!0),o.current?.showPopover?.())},[]),v=s(()=>{d(!1),o.current?.hidePopover?.()},[]),y=s(()=>{o.current?.matches(`:popover-open`)?v():_()},[]),b=s(()=>{clearTimeout(m.closeTimeout)},[]),x=s(e=>{m.disabled||e.target===g()&&(b(),_())},[]),S=s(()=>{m.disabled||(b(),_())},[]),C=s(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||v()},100)},[]),w=s(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=g();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=s(t=>{let n=t.newState===`open`;d(n),n?U(p):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return c(()=>{let e=o.current;e&&(l?e.showPopover?.():e.hidePopover?.())},[l]),c(()=>{e.toggleAttribute(`opened`,!!l)},[l]),c(()=>{if(a&&!n)return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),c(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:l,triggers:f,content:p,popoverRef:o,handleClick:a?_:y,onToggle:T,close:v,scheduleClose:C,cancelClose:b}}})))()}var K,q,ue;function de(){return(de=e((()=>{A(),L(),x(),o(),B(),G(),K=_`
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
`,q=({placement:e,disabled:t,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>n`
		<slot
			name="button"
			${k(a)}
			${I({"aria-expanded":r?null:String(i),disabled:t&&!r?``:null})}
			@click=${c}
		></slot>
		${t&&r?n`<slot></slot>`:n`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${z(e=>e&&(s.current=e))}
				>
					<slot ${k(o)}></slot>
				</div>`}
	`,ue=e=>q(W(e)),customElements.define(`cosmoz-dropdown-next`,f(ue,{styleSheets:[K],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var fe,pe,me,he;function J(){return(J=e((()=>{de(),te(),r(),o(),fe=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,pe=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),me=e=>typeof e==`string`&&e?e:a(`More`)||`More`,he=({items:e,overflows:t,active:r,label:i,role:a=`tablist`,onItemClick:o})=>n`
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
			<span>${me(i)}</span>
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
`})))()}var Y,ge,_e,ve,ye,be,xe;function Se(){return(Se=e((()=>{O(),J(),Y=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},ge=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>Y(t,n,e.getAttribute(n))),Y(t,D(t),null),Y(t,E(t),t.hasAttribute(`active`)?`true`:`false`),Y(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},_e=e=>{e.forEach(([,e])=>{!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.setAttribute(`tabindex`,`0`)})},ve=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},ye=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),ge(e,t)},be=e=>new MouseEvent(`click`,e),xe=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;if(t.stopPropagation(),i.dispatchEvent(be(t))||t.preventDefault(),fe(t)){if(i.focus(),i.hasAttribute(`overflowing`)){let e=i.getRootNode()?.querySelector?.(`[tabindex="0"]`);e&&e!==i&&e.focus()}pe(a)}}})))()}var Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve;function He(){return(He=e((()=>{x(),Ce=_`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	min-width: 0;
	overflow: clip;
	/* The band is one row's box, exact per size/variant: the item's box is
	   fully token-derived (fixed line-height, paddings, 16px icon), so
	   the clip is a constant the observer's intersections read against. */
	max-height: 41px; /* underline */
`,we=_`
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
`,Te=_`
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
`,Ee=_`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,De=_`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,Oe=_`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,ke=_`
	color: var(--cz-color-fg-brand-secondary);
`,Ae=_`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,je=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,Me=_`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,Ne=_`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,Pe=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,Fe=_`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,Ie=_`
	color: var(--cz-color-fg-secondary-hover);
`,Le=_`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,Re=_`
	padding-inline: calc(var(--cz-spacing) * 2);
`,ze=_`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,Be=_`
	${Te}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,Ve=_`
	:host {
		${Ce}
		flex: 0 1 auto;
		min-width: 0;
	}

	:host([variant='brand']) {
		${Ae}
	}

	:host([variant='segmented']) {
		${Ne}
	}

	/* brand and segmented item boxes sit a touch shorter: 37px; sm trims
	   all variants to 33px */
	:host([variant='brand']),
	:host([variant='segmented']) {
		max-height: 37px;
	}

	:host([size='sm']) {
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
		${ze}
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
		${Be}
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		${Oe}
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		${De}
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		${ke}
	}

	.more-button:focus-visible {
		${Ee}
	}

	:host([variant='brand']) .more-button {
		${je}
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		${Me}
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		${Pe}
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		${Fe}
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		${Ie}
	}

	:host([size='sm']) .more-button {
		${Le}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		${Re}
	}

	.menu {
		${we}
	}
`})))()}var Ue;function We(){return(We=e((()=>{x(),Ue=(e,t,n)=>{let[r,i]=T(()=>new Set);return w(()=>{let n=e,r=t();if(!n||r.length===0)return;let a=new Map,o=()=>{let e=new Set(r.filter(e=>a.get(e)===!0));r.forEach(t=>{let n=e.has(t);n!==t.hasAttribute(`overflowing`)&&(n?t.setAttribute(`overflowing`,``):t.removeAttribute(`overflowing`))}),i(t=>t.size===e.size&&[...e].every(e=>t.has(e))?t:e)},s=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;a.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),o()},{root:n,threshold:[0,1]}),c=n.shadowRoot?.querySelector(`slot:not([name])`),l=()=>{let e=new Set(c?.assignedElements({flatten:!0}));a.forEach((t,n)=>{e.has(n)||a.set(n,!1)}),o()};return c?.addEventListener(`slotchange`,l),r.forEach(e=>{a.set(e,!1),s.observe(e)}),()=>{s.disconnect(),c?.removeEventListener(`slotchange`,l)}},n),r}})))()}var Ge,X,Ke,qe,Je,Ye,Xe,Z,Ze,Qe;function $e(){return($e=e((()=>{d(),x(),O(),J(),Se(),He(),We(),Ge=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tablist`)}},X=`cosmoz-tab-next`,Ke=e=>e.map(e=>+!e.hidden).join(``),qe=e=>((e.shadowRoot?.querySelector(`slot:not([name])`))?.assignedElements({flatten:!0})??[]).filter(e=>e.matches(X)),Je={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`,`role`],childList:!0,subtree:!0,characterData:!0},Ye=(e,t)=>{let[n,r]=T(0);return c(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,Je)),()=>t.disconnect()},[t]),n},Xe=(e,t,n)=>{let r=Ye(e,n),i=h();return i.current??=new Map,l(()=>{let n=i.current,r=e().filter(e=>t.has(e)).map(e=>{let t=n.get(e)??ve(e);return n.set(e,t),ye(e,t),[e,t]}),a=new Set(r.map(([e])=>e));return n.forEach((e,t)=>{a.has(t)||n.delete(t)}),_e(r),r},[t,n,r])},Z=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.setAttribute(`role`,`tablist`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),compactWidth:e.hasAttribute(`compact-width`)?``:null,role:`tablist`,itemRole:`tab`}),Ze=(e,{variant:t,size:n,compactWidth:r,itemRole:i})=>{Y(e,`variant`,t),Y(e,`size`,n),Y(e,`compact-width`,r),Y(e,`role`,i),Y(e,`tabindex`,e.hasAttribute(`active`)?`0`:`-1`),Y(e,D(e),null),Y(e,E(e),e.hasAttribute(`active`)?`true`:`false`)},Qe=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let t=Z(e),{role:r}=t,[i,a]=T(0),o=s(()=>qe(e),[]),l=()=>{new Set([...e.querySelectorAll(X),...o()]).forEach(e=>Ze(e,t))},u=()=>{l(),a(e=>e+1)};c(l);let d=Ue(e,o,[o().map(e=>e.getAttribute(`name`)).join(`,`),Ke(o())]),f=Xe(o,d,i);return n`
		<slot name="tabs"></slot>
		<slot @slotchange=${u} style="display: contents"></slot>
		${he({items:f.map(([,e])=>e),overflows:f.length>0,active:f.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,role:r,onItemClick:xe(f)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,f(Qe,{baseElement:Ge,observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[y,Ve]}))})))()}var Q,et,tt,nt,rt,it;function $(){return($=e((()=>{re(),M(),x(),S(),Q=e=>!e.hidden&&!e.disabled,et=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Q),tt=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Q(n)?n:et(e)},nt=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=ne(t),a=h([]),o=l(()=>tt(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:l(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:s(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},rt=({tabs:e,active:t,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=j(e.title),l=e.content??c,u=e.badge||void 0;return n`<cosmoz-tab-next
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
		>`}),it=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function at(){return(at=e((()=>{ce(),$e(),$()})))()}export{nt as a,rt as i,$ as n,it as r,at as t};