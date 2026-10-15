import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,l as n,n as r,o as i,r as a,u as o}from"./iframe-9ID8VLza.js";import{C as s,D as c,T as l,_ as u,a as d,c as f,d as p,f as m,h,i as g,j as _,n as v,o as y,p as b,s as x,t as S,u as C,x as w,y as T}from"./if-defined-BGUmTMhi.js";import{m as ee,t as te}from"./untitled-h68EgPJ5.js";import{r as ne,t as re}from"./use-hash-param-m-DgHHWa.js";var E;function D(){return(D=e((()=>{x(),E=_`
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

	:host([menu]) #contentSlot::slotted(*) {
		flex: 0 0 auto;
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
`})))()}var O,k;function ie(){return(ie=e((()=>{d(),x(),o(),S(),D(),O=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},k=e=>{let{active:t,badge:r,href:a}=e;w(()=>{e.setAttribute(`aria-selected`,t?`true`:`false`)},[t]);let o=()=>{if(!a){e.click();return}let t=document.createElement(`a`);t.href=a,t.click()};return w(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),o()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&o()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),w(()=>{let t=t=>{t.defaultPrevented||t.button!==0||e.hasAttribute(`disabled`)||a&&o()};return e.addEventListener(`click`,t),()=>e.removeEventListener(`click`,t)},[]),n`
		<a part="link" href=${v(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?n`<span class="badge" part="badge">${r}</span>`:i}
		</a>
	`},customElements.define(`cosmoz-tab-next`,f(k,{baseElement:O,observedAttributes:[`active`,`badge`,`href`],styleSheets:[y,E]}))})))()}var ae,A;function j(){return(j=e((()=>{o(),p(),ae=class extends C{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return t}},A=m(ae)})))()}var M;function N(){return(N=e((()=>{M=(e,...t)=>typeof e==`function`?e(...t):e})))()}var oe,se,P,F;function I(){return(I=e((()=>{o(),p(),N(),oe=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},se=(e,t)=>{for(let[n,r]of Object.entries(e))oe(t,n,M(r,t))},P=class extends C{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)se(this._attrs,t)};#t=()=>this.#e();render(e){return t}update(e,[n]){this._attrs=n;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=r,r.addEventListener(`slotchange`,this.#t)),this.#e(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},F=m(P)})))()}var L,R,z,B;function V(){return(V=e((()=>{o(),p(),L=(e,t)=>e.assignedElements({flatten:!0}).filter(t),R=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),z=class extends C{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=L(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));R(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(this.#n&&this._slot&&this._is){for(let e of L(this._slot,this._is))this.#i(e);this.#a()}};render(e){return t}update(e,[n]){this._is=n.is,this._onOverflow=n.onOverflow;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=r,r.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},B=m(z)})))()}var H,U;function W(){return(W=e((()=>{o(),p(),b(),H=new WeakMap,U=m(class extends C{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=H.get(t);n===void 0&&(n=new WeakMap,H.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?H.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var G;function K(){return(K=e((()=>{x(),G=e=>{let t=l(()=>({}),[]);return l(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var ce,le;function ue(){return(ue=e((()=>{K(),x(),ce=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},le=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=h(),[l,d]=u(`opened`,!1),f=h(),p=h(),m=G({disabled:n,openOnHover:i}),g=s(()=>{let e=f.current?.[0];return e instanceof HTMLElement?e:void 0},[]),_=s(()=>{m.disabled||(d(!0),o.current?.showPopover?.())},[]),v=s(()=>{d(!1),o.current?.hidePopover?.()},[]),y=s(()=>{o.current?.matches(`:popover-open`)?v():_()},[]),b=s(()=>{clearTimeout(m.closeTimeout)},[]),x=s(e=>{m.disabled||e.target===g()&&(b(),_())},[]),S=s(()=>{m.disabled||(b(),_())},[]),C=s(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||v()},100)},[]),w=s(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=g();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=s(t=>{let n=t.newState===`open`;d(n),n?ce(p):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return c(()=>{let e=o.current;e&&(l?e.showPopover?.():e.hidePopover?.())},[l]),c(()=>{e.toggleAttribute(`opened`,!!l)},[l]),c(()=>{if(a&&!n)return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),c(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:l,triggers:f,content:p,popoverRef:o,handleClick:a?_:y,onToggle:T,close:v,scheduleClose:C,cancelClose:b}}})))()}var de,fe,pe;function me(){return(me=e((()=>{j(),I(),x(),o(),W(),ue(),de=_`
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
`,fe=({placement:e,disabled:t,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>n`
		<slot
			name="button"
			${A(a)}
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
					<slot ${A(o)}></slot>
				</div>`}
	`,pe=e=>fe(le(e)),customElements.define(`cosmoz-dropdown-next`,f(pe,{styleSheets:[de],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var he,ge,_e,ve;function q(){return(q=e((()=>{me(),te(),r(),o(),he=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,ge=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),_e=e=>typeof e==`string`&&e?e:a(`More`)||`More`,ve=({items:e,overflows:t,active:r,label:i,onItemClick:a})=>n`
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
			<span>${_e(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${ee({width:`16`,height:`16`})}</span
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
`})))()}var J,Y,ye,be,xe,Se,Ce,we,Te;function Ee(){return(Ee=e((()=>{q(),J=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),Y=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},ye=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>Y(t,n,e.getAttribute(n))),Y(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),Y(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},be=e=>{e.forEach(([,e])=>{J(e)&&e.setAttribute(`tabindex`,`0`)})},xe=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:J(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(J)??null},Se=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},Ce=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),ye(e,t)},we=e=>new MouseEvent(`click`,e),Te=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(we(t))||t.preventDefault(),he(t)&&ge(a)}})))()}var De;function Oe(){return(Oe=e((()=>{x(),De=_`
	/* The host is the frame: one nowrap row carrying the track, the overflow
	   trigger and the stats; the identity (font stack, paddings, the
	   underline's bottom rule) lives here. */
	:host {
		display: flex;
		align-items: flex-start;
		gap: var(--_gap);
		padding-inline: calc(var(--cz-spacing) * 3);
		font-family: var(--cz-font-body);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		font-weight: var(--cz-font-weight-semibold);
		box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
		flex: 0 1 auto;
		min-width: 0;
		--_gap: calc(var(--cz-spacing) * 4);
	}

	:host([variant='brand']) {
		--_gap: calc(var(--cz-spacing) * 1);
		box-shadow: none;
	}

	/* Untitled UI's "button border" tabs: a track holding a raised, selected pill. */
	:host([variant='segmented']) {
		--_gap: calc(var(--cz-spacing) * 1);
		padding: calc(var(--cz-spacing) * 1);
		border-radius: var(--cz-radius-lg);
		background-color: var(--cz-color-bg-secondary);
		box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
	}

	/* The band: the wrapping, clipping row the members land in and the
	   observer reads against. One row's box is exact per size/variant (the
	   item's box is fully token-derived), so the clip is a constant the
	   intersections read against. The wrapping, clipping track is the
	   default slot: brand and segmented item boxes sit a touch shorter:
	   37px; sm trims all variants to 33px */
	slot:not([name]) {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--_gap);
		overflow: clip;
		max-height: 41px; /* underline */
	}

	/* the group: the tablist around the track's members - the frame's
	   flanks (the headings slot, the overflow trigger, the stats slot)
	   stay outside the group's membership. Frame sizing rides here. */
	.group {
		flex: 1 1 auto;
		min-width: 0;
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

	/* The track's own ring is what stacks onto the item's padding, so the
	   compact size has to thin that too or the height barely moves. */
	:host([variant='segmented'][size='sm']) {
		padding: calc(var(--cz-spacing) * 0.75);
		border-radius: var(--cz-radius-md);
	}

	.more {
		flex: 0 0 auto;
		display: inline-flex;
		align-items: stretch;
	}

	.more[hidden] {
		display: none;
	}

	/* the button borrows the item's face */
	.more-button {
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
		flex: 0 0 auto;
		background: none;
		border: 0;
		font: inherit;
		appearance: none;
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
		color: var(--cz-color-fg-quaternary);
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		color: var(--cz-color-text-brand);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		color: var(--cz-color-fg-brand-secondary);
	}

	.more-button:focus-visible {
		outline: 2px solid var(--cz-color-fg-brand);
		outline-offset: -2px;
	}

	:host([variant='brand']) .more-button {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		color: var(--cz-color-text-on-brand);
		background-color: var(--cz-color-bg-brand-solid);
		box-shadow: none;
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary-hover);
	}

	:host([size='sm']) .more-button {
		padding-block: calc(var(--cz-spacing) * 1.5);
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		padding-inline: calc(var(--cz-spacing) * 2);
	}

	.menu {
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
	}
`})))()}var X,ke,Ae,je,Me,Ne,Pe,Fe;function Ie(){return(Ie=e((()=>{d(),j(),I(),x(),V(),q(),Ee(),Oe(),X=`cosmoz-tab-next`,ke={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},Ae=(e,t)=>{let[n,r]=T(0);return c(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,ke)),()=>t.disconnect()},[t]),n},je=(e,t,n)=>{let r=Ae(e,n),i=h();return i.current??=new Map,l(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??Se(e);return n.set(e,t),Ce(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),be(a);let s=xe(r);return r.forEach(e=>Y(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},Me=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),Ne=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),Pe=(e,t,n)=>{let r=e.filter(J);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},Fe=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[t,r]=T(0),[i,a]=T(()=>new Set),o=h(),c=s(()=>(o.current??[]).filter(e=>e.matches(X)),[]),l=()=>r(e=>e+1),u=je(c,i,t);return w(()=>{let t=e=>{if(!Ne.has(e.key))return;let t=c(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=Pe(t,n,e.key);r&&r!==n&&r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),n`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${A(o)}
				${F(Me(e))}
				${B({is:e=>e.matches(X),onOverflow:a})}
				@slotchange=${l}
			></slot>
		</div>
		${ve({items:u.map(([,e])=>e),overflows:u.length>0,active:u.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:Te(u)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,f(Fe,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[y,De]}))})))()}var Z,Le,Re,Q,ze,Be;function $(){return($=e((()=>{re(),N(),x(),S(),Z=e=>!e.hidden&&!e.disabled,Le=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Z),Re=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Z(n)?n:Le(e)},Q=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=ne(t),a=h([]),o=l(()=>Re(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:l(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:s(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},ze=({tabs:e,active:t,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=M(e.title),l=e.content??c,u=e.badge||void 0;return n`<cosmoz-tab-next
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
		>`}),Be=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function Ve(){return(Ve=e((()=>{ie(),Ie(),$()})))()}export{Q as a,ze as i,$ as n,Be as r,Ve as t};