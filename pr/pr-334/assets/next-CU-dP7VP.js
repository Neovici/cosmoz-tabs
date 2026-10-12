import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,l as n,n as r,o as i,r as a,u as o}from"./iframe-BKrKWFYT.js";import{C as s,D as c,T as l,_ as u,a as d,c as f,d as p,f as m,h,i as g,j as _,n as v,o as y,p as b,s as x,t as S,u as C,x as ee,y as w}from"./if-defined-yLBIHD02.js";import{m as te,t as ne}from"./untitled-FLXNr0YN.js";import{r as re,t as ie}from"./use-hash-param-k7IG3ofo.js";var T;function E(){return(E=e((()=>{x(),T=_`
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
`})))()}var D,ae;function oe(){return(oe=e((()=>{d(),x(),o(),S(),E(),D=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},ae=e=>{let{active:t,badge:r,href:a}=e;return ee(()=>{e.setAttribute(`aria-selected`,t?`true`:`false`)},[t]),c(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),e.click()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&e.click()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),n`
		<a part="link" href=${v(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?n`<span class="badge" part="badge">${r}</span>`:i}
		</a>
	`},customElements.define(`cosmoz-tab-next`,f(ae,{baseElement:D,observedAttributes:[`active`,`badge`,`href`],styleSheets:[y,T]}))})))()}var se,O;function k(){return(k=e((()=>{o(),p(),se=class extends C{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return t}},O=m(se)})))()}var A;function j(){return(j=e((()=>{A=(e,...t)=>typeof e==`function`?e(...t):e})))()}var M,N,P,F;function I(){return(I=e((()=>{o(),p(),j(),M=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},N=(e,t)=>{for(let[n,r]of Object.entries(e))M(t,n,A(r,t))},P=class extends C{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)N(this._attrs,t)};#t=()=>this.#e();render(e){return t}update(e,[n]){this._attrs=n;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=r,r.addEventListener(`slotchange`,this.#t)),this.#e(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},F=m(P)})))()}var L,R,z,B;function V(){return(V=e((()=>{o(),p(),L=(e,t)=>e.assignedElements({flatten:!0}).filter(t),R=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),z=class extends C{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=L(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));R(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(this.#n&&this._slot&&this._is){for(let e of L(this._slot,this._is))this.#i(e);this.#a()}};render(e){return t}update(e,[n]){this._is=n.is,this._onOverflow=n.onOverflow;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=r,r.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},B=m(z)})))()}var H,U;function W(){return(W=e((()=>{o(),p(),b(),H=new WeakMap,U=m(class extends C{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=H.get(t);n===void 0&&(n=new WeakMap,H.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?H.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var G;function K(){return(K=e((()=>{x(),G=e=>{let t=l(()=>({}),[]);return l(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var q,ce;function le(){return(le=e((()=>{K(),x(),q=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},ce=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=h(),[l,d]=u(`opened`,!1),f=h(),p=h(),m=G({disabled:n,openOnHover:i}),g=s(()=>{let e=f.current?.[0];return e instanceof HTMLElement?e:void 0},[]),_=s(()=>{m.disabled||(d(!0),o.current?.showPopover?.())},[]),v=s(()=>{d(!1),o.current?.hidePopover?.()},[]),y=s(()=>{o.current?.matches(`:popover-open`)?v():_()},[]),b=s(()=>{clearTimeout(m.closeTimeout)},[]),x=s(e=>{m.disabled||e.target===g()&&(b(),_())},[]),S=s(()=>{m.disabled||(b(),_())},[]),C=s(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||v()},100)},[]),ee=s(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=g();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),w=s(t=>{let n=t.newState===`open`;d(n),n?q(p):ee(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return c(()=>{let e=o.current;e&&(l?e.showPopover?.():e.hidePopover?.())},[l]),c(()=>{e.toggleAttribute(`opened`,!!l)},[l]),c(()=>{if(a&&!n)return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),c(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:l,triggers:f,content:p,popoverRef:o,handleClick:a?_:y,onToggle:w,close:v,scheduleClose:C,cancelClose:b}}})))()}var ue,de,fe;function pe(){return(pe=e((()=>{k(),I(),x(),o(),W(),le(),ue=_`
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
`,de=({placement:e,disabled:t,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>n`
		<slot
			name="button"
			${O(a)}
			${F({"aria-expanded":r?null:String(i),disabled:t&&!r?``:null})}
			@click=${c}
		></slot>
		${t&&r?n`<slot></slot>`:n`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${U(e=>e&&(s.current=e))}
				>
					<slot ${O(o)}></slot>
				</div>`}
	`,fe=e=>de(ce(e)),customElements.define(`cosmoz-dropdown-next`,f(fe,{styleSheets:[ue],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var me,he,ge,_e;function J(){return(J=e((()=>{pe(),ne(),r(),o(),me=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,he=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),ge=e=>typeof e==`string`&&e?e:a(`More`)||`More`,_e=({items:e,overflows:t,active:r,label:i,onItemClick:a})=>n`
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
			<span>${ge(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${te({width:`16`,height:`16`})}</span
			>
		</button>
		<div
			id="more-menu"
			class="menu"
			part="menu"
			role="tablist"
			aria-orientation="vertical"
			@click=${a}
		>
			${e}
		</div>
	</cosmoz-dropdown-next>
`})))()}var Y,ve,ye,be,xe,Se,Ce;function we(){return(we=e((()=>{J(),Y=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},ve=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>Y(t,n,e.getAttribute(n))),Y(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),Y(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},ye=e=>{e.forEach(([,e])=>{!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.setAttribute(`tabindex`,`0`)})},be=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},xe=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),ve(e,t)},Se=e=>new MouseEvent(`click`,e),Ce=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;if(t.stopPropagation(),i.dispatchEvent(Se(t))||t.preventDefault(),me(t)){if(i.focus(),i.hasAttribute(`overflowing`)){let e=i.getRootNode()?.querySelector?.(`[tabindex="0"]`);e&&e!==i&&e.focus()}he(a)}}})))()}var Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We;function Ge(){return(Ge=e((()=>{x(),Te=_`
	display: flex;
	align-items: flex-start;
	gap: var(--_gap);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	min-width: 0;
`,Ee=_`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: var(--_gap);
	flex: 1 1 auto;
	min-width: 0;
	overflow: clip;
	/* The band is one row's box, exact per size/variant: the item's box is
	   fully token-derived (fixed line-height, paddings, 16px icon), so
	   the clip is a constant the observer's intersections read against. */
	max-height: 41px; /* underline */
`,De=_`
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
`,Oe=_`
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
`,ke=_`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,Ae=_`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,je=_`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,Me=_`
	color: var(--cz-color-fg-brand-secondary);
`,Ne=_`
	--_gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,Pe=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,Fe=_`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,Ie=_`
	--_gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,Le=_`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,Re=_`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,ze=_`
	color: var(--cz-color-fg-secondary-hover);
`,Be=_`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,Ve=_`
	padding-inline: calc(var(--cz-spacing) * 2);
`,He=_`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,Ue=_`
	${Oe}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,We=_`
	:host {
		${Te}
		flex: 0 1 auto;
		min-width: 0;
		--_gap: calc(var(--cz-spacing) * 4);
	}

	:host([variant='brand']) {
		${Ne}
	}

	:host([variant='segmented']) {
		${Ie}
	}

	/* The wrapping, clipping track is the default slot: band per size/variant.
	   brand and segmented item boxes sit a touch shorter: 37px; sm trims
	   all variants to 33px */
	slot:not([name]) {
		${Ee}
	}

	:host([variant='brand']) slot:not([name]),
	:host([variant='segmented']) slot:not([name]) {
		max-height: 37px;
	}

	:host([size='sm']) slot:not([name]) {
		max-height: 33px;
	}

	/* The track hugs its tabs when they are not spread, staying within
	   the container's width. */
	:host([variant='segmented'][compact-width]) {
		box-sizing: border-box;
		width: max-content;
		max-width: 100%;
	}

	:host([variant='segmented'][size='sm']) {
		${He}
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
		${Ue}
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		${je}
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		${Ae}
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		${Me}
	}

	.more-button:focus-visible {
		${ke}
	}

	:host([variant='brand']) .more-button {
		${Pe}
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		${Fe}
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		${Le}
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		${Re}
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		${ze}
	}

	:host([size='sm']) .more-button {
		${Be}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		${Ve}
	}

	.menu {
		${De}
	}
`})))()}var Ke,X,qe,Je,Ye,Xe,Z,Ze,Qe,$e;function et(){return(et=e((()=>{d(),k(),I(),x(),V(),J(),we(),Ge(),Ke=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tablist`)}},X=`cosmoz-tab-next`,qe={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},Je=(e,t)=>{let[n,r]=w(0);return c(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,qe)),()=>t.disconnect()},[t]),n},Ye=(e,t,n)=>{let r=Je(e,n),i=h();return i.current??=new Map,l(()=>{let n=i.current,r=e().filter(e=>t.has(e)).map(e=>{let t=n.get(e)??be(e);return n.set(e,t),xe(e,t),[e,t]}),a=new Set(r.map(([e])=>e));return n.forEach((e,t)=>{a.has(t)||n.delete(t)}),ye(r),r},[t,n,r])},Xe=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.setAttribute(`role`,`tablist`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,tabindex:e=>e.hasAttribute(`active`)?`0`:`-1`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),Z=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),Ze=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),Qe=(e,t,n)=>{let r=e.filter(Ze);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},$e=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[t,r]=w(0),[i,a]=w(()=>new Set),o=h(),l=s(()=>(o.current??[]).filter(e=>e.matches(X)),[]),u=()=>r(e=>e+1),d=Ye(l,i,t);return c(()=>{let t=e=>{if(!Z.has(e.key))return;let t=l(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=Qe(t,n,e.key);r&&r!==n&&(r.click(),r.focus())};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),n`
		<slot name="tabs"></slot>
		<slot
			${O(o)}
			${F(Xe(e))}
			${B({is:e=>e.matches(X),onOverflow:a})}
			@slotchange=${u}
		></slot>
		${_e({items:d.map(([,e])=>e),overflows:d.length>0,active:d.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:Ce(d)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,f($e,{baseElement:Ke,observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[y,We]}))})))()}var Q,tt,nt,rt,it,at;function $(){return($=e((()=>{ie(),j(),x(),S(),Q=e=>!e.hidden&&!e.disabled,tt=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Q),nt=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Q(n)?n:tt(e)},rt=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=re(t),a=h([]),o=l(()=>nt(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:l(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:s(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},it=({tabs:e,active:t,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=A(e.title),l=e.content??c,u=e.badge||void 0;return n`<cosmoz-tab-next
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
		>`}),at=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function ot(){return(ot=e((()=>{oe(),et(),$()})))()}export{rt as a,it as i,$ as n,at as r,ot as t};