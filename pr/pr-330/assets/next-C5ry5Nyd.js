import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,n,o as r,r as i,u as a}from"./iframe-CRjgmSSE.js";import{C as o,D as s,T as c,_ as l,a as u,c as d,d as f,f as p,h as m,i as h,j as g,n as _,o as v,p as y,s as b,t as ee,u as te,x as ne,y as x}from"./if-defined-DC9qu91T.js";import{m as re,t as ie}from"./untitled-CrCIv7dU.js";import{r as ae,t as oe}from"./use-hash-param-SzEslXgi.js";var S,C;function w(){return(w=e((()=>{S=e=>e.getAttribute(`role`)===`radio`?`aria-checked`:`aria-selected`,C=e=>S(e)===`aria-checked`?`aria-selected`:`aria-checked`})))()}var T;function E(){return(E=e((()=>{b(),T=g`
	:host {
		position: relative;
		display: inline-flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		gap: calc(var(--cz-spacing) * 1);
		padding-block: calc(var(--cz-spacing) * 2.5);
		padding-inline: calc(var(--cz-spacing) * 0.5);
		border-radius: var(--cz-radius-md);
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

		/* the faces: the hover rule and the active rule bind their own
		   wording; the variants set their own */
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

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([overflowing]) {
		visibility: hidden;
	}

	/* The menu copy: the same box with the menu's face - left-set content
	   and the menu row's own paint. */
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

	/* Untitled UI badge, size sm: a counter pill; hot on hovered/active
	   tabs, the segmented variant's square-ish modern one. The badge's
	   face flips with the item's state the same way. */
	.badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		font-size: var(--cz-text-xs);
		font-weight: var(--cz-font-weight-medium);
		line-height: var(--cz-text-xs-line-height);
		padding: 2px calc(var(--cz-spacing) * 2.5);
		max-width: 80px;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: center;
		border-radius: var(--cz-radius-full);
		background-color: var(--cz-color-bg-secondary);
		color: var(--cz-color-text-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);

		--_badge-background: var(--cz-color-bg-tertiary);
		--_badge-color: var(--cz-color-text-primary);
		--_badge-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
	}

	/* the sm box: the item's block padding trims to match a control that
	   sits beside a heading; the size rules come last - the size wins
	   over whichever variant set its box above */
	:host([size='sm']) {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	:host([variant='brand']) {
		padding-inline: calc(var(--cz-spacing) * 2.5);
		--_active-color: var(--cz-color-text-on-brand);
		--_active-background: var(--cz-color-bg-brand-solid);
		--_active-shadow: none;
		--_active-icon-color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		padding-inline: calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
		background-color: var(--cz-color-bg-primary);

		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: var(--cz-color-bg-primary-hover);
		--_hover-shadow: var(--cz-shadow-sm);
		--_hover-icon-color: var(--cz-color-fg-secondary-hover);
		--_active-color: var(--cz-color-text-secondary);
		--_active-background: var(--cz-color-bg-primary);
		--_active-shadow: var(--cz-shadow-sm);
		--_active-icon-color: var(--cz-color-fg-secondary-hover);
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		padding-inline: calc(var(--cz-spacing) * 2);
	}
`})))()}var D,O;function k(){return(k=e((()=>{u(),b(),a(),ee(),w(),E(),D=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},O=e=>{let{active:n,badge:i,href:a}=e;return ne(()=>{e.setAttribute(S(e),n?`true`:`false`)},[n]),s(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),e.click()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&e.click()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),t`
		<a part="link" href=${_(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?t`<span class="badge" part="badge">${i}</span>`:r}
		</a>
	`},customElements.define(`cosmoz-tab-next`,d(O,{baseElement:D,observedAttributes:[`active`,`badge`,`href`],styleSheets:[v,T]}))})))()}var A,j;function M(){return(M=e((()=>{a(),f(),y(),A=new WeakMap,j=p(class extends te{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=A.get(t);n===void 0&&(n=new WeakMap,A.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?A.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var N;function P(){return(P=e((()=>{b(),N=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let c=m(),l=()=>clearTimeout(c.current),u=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},d=()=>{n||(l(),a())};return s(()=>{if(r&&!n)return e.addEventListener(`pointerenter`,d),e.addEventListener(`pointerleave`,u),()=>{l(),e.removeEventListener(`pointerenter`,d),e.removeEventListener(`pointerleave`,u)}},[r,n,e]),s(()=>{if(i&&!n)return e.addEventListener(`focusin`,d),e.addEventListener(`focusout`,u),()=>{l(),e.removeEventListener(`focusin`,d),e.removeEventListener(`focusout`,u)}},[i,n,e]),{scheduleClose:u,cancelClose:l}}})))()}var F,I,L,R,z;function B(){return(B=e((()=>{b(),a(),M(),P(),F=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},I=g`
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
`,L=(e=document)=>{let t=e.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;return t},R=(e,t)=>{let n=(e?.shadowRoot?.querySelector(`slot[name=button]`))?.assignedElements({flatten:!0})[0];if(!n||(n.setAttribute(`aria-expanded`,String(t)),t))return;let r=()=>{let e=L();(e==null||e===document.body)&&n.focus()};setTimeout(r,50),setTimeout(r,250)},z=e=>{let{placement:n=`bottom span-right`,disabled:r,passthrough:i,openOnHover:a,openOnFocus:c}=e,u=m(),[d,f]=l(`opened`,!1),p=o(()=>{r||(f(!0),u.current?.showPopover?.())},[r]),h=o(()=>{f(!1),u.current?.hidePopover?.()},[]),g=o(()=>{r||(u.current?.matches(`:popover-open`)?h():p())},[r]);s(()=>{let e=u.current;e&&(d?e.showPopover?.():e.hidePopover?.())},[d]),s(()=>{e.toggleAttribute(`opened`,!!d)},[d]);let{scheduleClose:_,cancelClose:v}=N({host:e,popoverRef:u,disabled:r,openOnHover:a,openOnFocus:c,open:p,close:h}),y=c?p:g,b=o(t=>{F(t);let n=t.newState===`open`;f(n),R(e,n),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return t`
		<slot name="button" @click=${y}></slot>
		${r&&i?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${n}"
					@toggle=${b}
					@select=${h}
					@focusout=${_}
					@focusin=${v}
					${j(e=>e&&(u.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,d(z,{styleSheets:[I],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var V,H,U,W;function G(){return(G=e((()=>{B(),ie(),n(),a(),V=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,H=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),U=e=>typeof e==`string`&&e?e:i(`More`)||`More`,W=({items:e,overflows:n,active:r,label:i,role:a=`tablist`,onItemClick:o})=>t`
	<cosmoz-dropdown-next
		class="more"
		part="more"
		placement="bottom span-left"
		?hidden=${!n}
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
			<span>${U(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${re({width:`16`,height:`16`})}</span
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
`})))()}var K,q,J,Y,se,ce,le;function ue(){return(ue=e((()=>{w(),G(),K=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},q=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>K(t,n,e.getAttribute(n))),K(t,C(t),null),K(t,S(t),t.hasAttribute(`active`)?`true`:`false`),K(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},J=e=>{e.forEach(([,e])=>{!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.setAttribute(`tabindex`,`0`)})},Y=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},se=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),q(e,t)},ce=e=>new MouseEvent(`click`,e),le=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;if(t.stopPropagation(),i.dispatchEvent(ce(t))||t.preventDefault(),V(t)){if(i.focus(),i.hasAttribute(`overflowing`)){let e=i.getRootNode()?.querySelector?.(`[tabindex="0"]`);e&&e!==i&&e.focus()}H(a)}}})))()}var de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke;function Ae(){return(Ae=e((()=>{b(),de=g`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: calc(var(--cz-spacing) * 3);
	min-width: 0;
	overflow: clip;
	/* The band is one row's box, exact per size/variant: the item's box is
	   fully token-derived (fixed line-height, paddings, 16px icon), so
	   the clip is a constant the observer's intersections read against. */
	max-height: 41px; /* underline */
`,fe=g`
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
`,pe=g`
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
`,me=g`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,he=g`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,ge=g`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,_e=g`
	color: var(--cz-color-fg-brand-secondary);
`,ve=g`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,ye=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,be=g`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,xe=g`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,Se=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,Ce=g`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,we=g`
	color: var(--cz-color-fg-secondary-hover);
`,Te=g`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,Ee=g`
	padding-inline: calc(var(--cz-spacing) * 2);
`,De=g`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,Oe=g`
	${pe}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,ke=g`
	:host {
		${de}
		flex: 0 1 auto;
		min-width: 0;
	}

	:host([variant='brand']) {
		${ve}
	}

	:host([variant='segmented']) {
		${xe}
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
		${De}
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
		${Oe}
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		${ge}
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		${he}
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		${_e}
	}

	.more-button:focus-visible {
		${me}
	}

	:host([variant='brand']) .more-button {
		${ye}
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		${be}
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		${Se}
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		${Ce}
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		${we}
	}

	:host([size='sm']) .more-button {
		${Te}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		${Ee}
	}

	.menu {
		${fe}
	}
`})))()}var je;function Me(){return(Me=e((()=>{b(),je=(e,t,n)=>{let[r,i]=x(()=>new Set);return ne(()=>{let n=e,r=t();if(!n||r.length===0)return;let a=new Map,o=()=>{let e=new Set(r.filter(e=>a.get(e)===!0));r.forEach(t=>{let n=e.has(t);n!==t.hasAttribute(`overflowing`)&&(n?t.setAttribute(`overflowing`,``):t.removeAttribute(`overflowing`))}),i(t=>t.size===e.size&&[...e].every(e=>t.has(e))?t:e)},s=new IntersectionObserver(e=>{e.forEach(e=>{let t=e.target;a.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),o()},{root:n,threshold:[0,1]}),c=n.shadowRoot?.querySelector(`slot:not([name])`),l=()=>{let e=new Set(c?.assignedElements({flatten:!0}));a.forEach((t,n)=>{e.has(n)||a.set(n,!1)}),o()};return c?.addEventListener(`slotchange`,l),r.forEach(e=>{a.set(e,!1),s.observe(e)}),()=>{s.disconnect(),c?.removeEventListener(`slotchange`,l)}},n),r}})))()}var Ne,X,Pe,Fe,Ie,Le,Re,ze,Be,Ve;function He(){return(He=e((()=>{u(),b(),w(),G(),ue(),Ae(),Me(),Ne=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tablist`)}},X=`cosmoz-tab-next`,Pe=e=>e.map(e=>+!e.hidden).join(``),Fe=e=>((e.shadowRoot?.querySelector(`slot:not([name])`))?.assignedElements({flatten:!0})??[]).filter(e=>e.matches(X)),Ie={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`,`role`],childList:!0,subtree:!0,characterData:!0},Le=(e,t)=>{let[n,r]=x(0);return s(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,Ie)),()=>t.disconnect()},[t]),n},Re=(e,t,n)=>{let r=Le(e,n),i=m();return i.current??=new Map,c(()=>{let n=i.current,r=e().filter(e=>t.has(e)).map(e=>{let t=n.get(e)??Y(e);return n.set(e,t),se(e,t),[e,t]}),a=new Set(r.map(([e])=>e));return n.forEach((e,t)=>{a.has(t)||n.delete(t)}),J(r),r},[t,n,r])},ze=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.setAttribute(`role`,`tablist`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),compactWidth:e.hasAttribute(`compact-width`)?``:null,role:`tablist`,itemRole:`tab`}),Be=(e,{variant:t,size:n,compactWidth:r,itemRole:i})=>{K(e,`variant`,t),K(e,`size`,n),K(e,`compact-width`,r),K(e,`role`,i),K(e,`tabindex`,e.hasAttribute(`active`)?`0`:`-1`),K(e,C(e),null),K(e,S(e),e.hasAttribute(`active`)?`true`:`false`)},Ve=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let n=ze(e),{role:r}=n,[i,a]=x(0),c=o(()=>Fe(e),[]),l=()=>{new Set([...e.querySelectorAll(X),...c()]).forEach(e=>Be(e,n))},u=()=>{l(),a(e=>e+1)};s(l);let d=je(e,c,[c().map(e=>e.getAttribute(`name`)).join(`,`),Pe(c())]),f=Re(c,d,i);return t`
		<slot name="tabs"></slot>
		<slot @slotchange=${u} style="display: contents"></slot>
		${W({items:f.map(([,e])=>e),overflows:f.length>0,active:f.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,role:r,onItemClick:le(f)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,d(Ve,{baseElement:Ne,observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[v,ke]}))})))()}var Ue;function Z(){return(Z=e((()=>{Ue=(e,...t)=>typeof e==`function`?e(...t):e})))()}var Q,We,Ge,Ke,qe,Je;function $(){return($=e((()=>{oe(),Z(),b(),ee(),Q=e=>!e.hidden&&!e.disabled,We=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Q),Ge=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Q(n)?n:We(e)},Ke=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=ae(t),a=m([]),s=c(()=>Ge(e,r??void 0),[e,r]);return{tabs:e,active:s,activated:c(()=>{let e=s?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[s]),activate:i,onActivate:o(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},qe=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=Ue(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
			name=${e.name}
			class=${_(i)}
			variant=${_(a)}
			size=${_(o)}
			?compact-width=${_(s)}
			title=${_(c)}
			?active=${n?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${_(u)}
			@click=${r}
			>${h(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`}),Je=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function Ye(){return(Ye=e((()=>{k(),He(),$()})))()}export{Ke as a,qe as i,$ as n,Je as r,Ye as t};