import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,l as n,n as r,o as i,r as a,s as o,u as s}from"./iframe-2hAI2dUc.js";import{C as c,D as l,N as u,T as d,_ as f,a as p,c as m,d as h,f as g,h as _,i as v,j as y,n as b,o as x,p as S,s as C,t as w,u as T,x as E,y as D}from"./if-defined-8hjRRL7n.js";import{m as ee,t as te}from"./untitled-DPwGscbJ.js";import{r as ne,t as re}from"./use-hash-param-DxOezzgF.js";var O,k;function A(){return(A=e((()=>{s(),h(),S(),O=new WeakMap,k=g(class extends T{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=O.get(t);n===void 0&&(n=new WeakMap,O.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?O.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var ie;function ae(){return(ae=e((()=>{C(),ie=y`
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
		--_hover-color: var(--cz-color-text-secondary);
		--_hover-background: transparent;
		--_hover-shadow: inset 0 -2px 0 0 var(--cz-color-border-primary);
		--_hover-icon-color: var(--cz-color-fg-secondary);
		--_active-color: var(--cz-color-text-primary);
		--_active-background: transparent;
		--_active-shadow: inset 0 -2px 0 0 var(--cz-color-fg-primary);
		--_active-icon-color: var(--cz-color-fg-secondary);
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
		outline: 2px solid var(--cz-color-focus-ring, var(--cz-color-fg-brand));
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
		--_active-color: var(
			--cz-color-text-on-action,
			var(--cz-color-text-on-brand)
		);
		--_active-background: var(
			--cz-color-bg-action-solid,
			var(--cz-color-bg-brand-solid)
		);
		--_active-shadow: none;
		--_active-icon-color: var(
			--cz-color-text-on-action,
			var(--cz-color-text-on-brand)
		);
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
		--_hover-color: var(
			--cz-color-text-on-action,
			var(--cz-color-text-on-brand)
		);
		--_hover-background: var(
			--cz-color-bg-action-solid,
			var(--cz-color-bg-brand-solid)
		);
		--_hover-shadow: none;
		--_hover-icon-color: var(
			--cz-color-text-on-action,
			var(--cz-color-text-on-brand)
		);
		--_active-color: var(
			--cz-color-text-on-action,
			var(--cz-color-text-on-brand)
		);
		--_active-background: var(
			--cz-color-bg-action-solid,
			var(--cz-color-bg-brand-solid)
		);
		--_active-shadow: none;
		--_active-icon-color: var(
			--cz-color-text-on-action,
			var(--cz-color-text-on-brand)
		);
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

	:host([size='sm'][variant='segmented']) {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		padding-block: var(--cz-spacing);
	}

	:host([size='sm'][variant='segmented']) .badge {
		padding-block: 0;
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		padding-inline: calc(var(--cz-spacing) * 2);
	}
`})))()}var j,oe;function se(){return(se=e((()=>{p(),C(),s(),w(),A(),ae(),j=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},oe=e=>{let{active:t,badge:r,href:a}=e,o=_();return E(()=>{e.setAttribute(`aria-selected`,t?`true`:`false`)},[t]),E(()=>{let t=()=>(o.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),n`
		<a ${k(o)} part="link" href=${b(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${r?n`<span class="badge" part="badge">${r}</span>`:i}
		</a>
	`},customElements.define(`cosmoz-tab-next`,m(oe,{baseElement:j,observedAttributes:[`active`,`badge`,`href`],styleSheets:[x,ie]}))})))()}var ce,M;function N(){return(N=e((()=>{s(),h(),ce=class extends T{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return t}},M=g(ce)})))()}var P;function F(){return(F=e((()=>{P=(e,...t)=>typeof e==`function`?e(...t):e})))()}var le,ue,de,I;function L(){return(L=e((()=>{s(),h(),F(),le=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},ue=(e,t)=>{for(let[n,r]of Object.entries(e))le(t,n,P(r,t))},de=class extends T{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)ue(this._attrs,t)};#t=()=>this.#e();render(e){return t}update(e,[n]){this._attrs=n;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=r,r.addEventListener(`slotchange`,this.#t)),this.#e(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},I=g(de)})))()}var R,z,B,V;function H(){return(H=e((()=>{s(),h(),R=(e,t)=>e.assignedElements({flatten:!0}).filter(t),z=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),B=class extends T{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=R(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));z(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(this.#n&&this._slot&&this._is){for(let e of R(this._slot,this._is))this.#i(e);this.#a()}};render(e){return t}update(e,[n]){this._is=n.is,this._onOverflow=n.onOverflow;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=r,r.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},V=g(B)})))()}var fe;function U(){return(U=e((()=>{p(),C(),s(),fe=y`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,m(()=>n`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[x,fe]}))})))()}var W;function G(){return(G=e((()=>{C(),W=u(y`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`)})))()}var K,pe;function me(){return(me=e((()=>{C(),s(),U(),G(),K=(e,t,r)=>o(n`<cosmoz-tooltip-content>
			${v(t,()=>n`<strong slot="heading">${t}</strong>`)}
			${v(r,()=>n`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),pe=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=_(),u=!!(r||i)&&!s;l(()=>{if(!n||!u)return;let t=e.getRootNode(),l=t.adoptedStyleSheets??[];l.includes(W)||(t.adoptedStyleSheets=[...l,W]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,K(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,u]),l(()=>{n&&c.current&&K(c.current,r,i)},[r,i,n]),l(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var he;function ge(){return(ge=e((()=>{C(),he=e=>{let[t,n]=D(!1);return l(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var _e,ve;function ye(){return(ye=e((()=>{p(),C(),s(),A(),U(),G(),me(),ge(),_e=y`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,ve=e=>{let{heading:t,description:r,for:a,placement:o=`top`,delay:s=300,disabled:u=!1}=e,d=_(),f=_(),p=_(),m=he(p),h=!!(t||r||m)&&!u,g=c(()=>{h&&(clearTimeout(f.current),f.current=window.setTimeout(()=>{d.current?.showPopover()},s))},[s,h]);l(()=>{u&&(clearTimeout(f.current),d.current?.hidePopover())},[u]);let y=c(()=>{clearTimeout(f.current),d.current?.hidePopover()},[]);return l(()=>{if(a)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||y()};return e.addEventListener(`pointerover`,g),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,g),e.removeEventListener(`pointerout`,t)}},[a,g,y]),pe(e,{for:a,heading:t,description:r,placement:o,delay:s,disabled:u}),a?i:h?n`
		<slot @focusin=${g} @focusout=${y}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${o}"
			${k(d)}
		>
			<cosmoz-tooltip-content>
				${v(t,()=>n`<strong slot="heading">${t}</strong>`)}
				${v(r,()=>n`<p slot="description">${r}</p>`)}
				<slot name="content" ${k(p)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:n`
			<slot></slot>
			<slot name="content" ${k(p)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,m(ve,{styleSheets:[x,W,_e],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function be(){return(be=e((()=>{ye()})))()}var xe;function Se(){return(Se=e((()=>{C(),xe=y`
	:host {
		display: inline-flex;

		--_wash: light-dark(rgb(10 13 18 / 0.05), rgb(255 255 255 / 0.07));
		--_wash-strong: light-dark(rgb(10 13 18 / 0.08), rgb(255 255 255 / 0.11));
		--_hairline: light-dark(rgb(10 13 18 / 0.12), rgb(255 255 255 / 0.1));
		--_sheen: linear-gradient(rgb(255 255 255 / 0.12), rgb(255 255 255 / 0));
		--_lift: 0 1px 2px light-dark(rgb(10 13 18 / 0.08), rgb(0 0 0 / 0.4));
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 12px;
		border: none;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: 0.8125rem;
		font-weight: var(--cz-font-weight-medium);
		line-height: 1;
		letter-spacing: -0.006em;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out,
			transform 80ms ease-out;

		background: var(--cz-action-sheen, none), var(--cz-color-bg-action-solid);
		color: var(--cz-color-text-on-action);
		box-shadow: var(--cz-shadow-action);

		&:hover {
			background-color: var(--cz-color-bg-action-solid-hover);
		}

		&:active {
			transform: scale(0.97);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 10px;
		border-radius: var(--cz-radius-sm);
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 14px;
		height: 14px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 14px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 16px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		padding: 0;
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		background: light-dark(var(--cz-color-white), var(--cz-color-gray-900));
		color: var(--cz-color-text-primary);
		box-shadow:
			inset 0 0 0 1px var(--_hairline),
			inset 0 -1px 0 light-dark(rgb(10 13 18 / 0.04), transparent),
			inset 0 1px 0 light-dark(transparent, rgb(255 255 255 / 0.04)),
			var(--_lift);

		&:hover {
			background: light-dark(var(--cz-color-gray-50), var(--cz-color-gray-800));
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--_wash);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='destructive']) .button {
		background: var(--_sheen), var(--cz-color-error-600);
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.16),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: light-dark(
				var(--cz-color-error-700),
				var(--cz-color-error-500)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}

		&:active {
			transform: none;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: inset 0 0 0 1px var(--_hairline);
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: inset 0 1px 3px rgb(0 0 0 / 0.35);
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button {
		opacity: 0.45;
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		box-shadow: inset 0 0 0 1px var(--_hairline);
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}

		.button:active {
			transform: none;
		}
	}
`})))()}var Ce,we;function Te(){return(Te=e((()=>{p(),be(),C(),s(),w(),Se(),Ce=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`,`aria-expanded`,`aria-label`,`aria-pressed`],we=e=>{let{disabled:t=!1,tooltip:r,tooltipPlacement:a,type:o=`button`,href:s,target:c,rel:u,download:d}=e,f=!!t;l(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let p=n`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,m=v(s!=null,()=>n`
			<a
				href=${s}
				class="button"
				part="button"
				aria-disabled=${f?`true`:i}
				aria-expanded=${b(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${b(e.getAttribute(`aria-label`)??void 0)}
				target=${b(c)}
				rel=${b(u)}
				download=${b(d)}
				>${p}</a
			>
		`,()=>n`
			<button
				type=${o}
				class="button"
				part="button"
				?disabled=${f}
				aria-expanded=${b(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${b(e.getAttribute(`aria-label`)??void 0)}
				aria-pressed=${b(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${p}
			</button>
		`);return n`<cosmoz-tooltip
		heading=${b(r??void 0)}
		placement=${b(a??void 0)}
		?disabled=${f}
	>
		${m}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,m(we,{observedAttributes:Ce,styleSheets:[x,xe],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function Ee(){return(Ee=e((()=>{Te()})))()}var De;function Oe(){return(Oe=e((()=>{C(),De=e=>{let t=d(()=>({}),[]);return d(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var ke,Ae;function je(){return(je=e((()=>{Oe(),C(),ke=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},Ae=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=_(),[s,u]=f(`opened`,!1),d=_(),p=_(),m=De({disabled:n,openOnHover:i}),h=c(()=>{let e=d.current?.[0];return e instanceof HTMLElement?e:void 0},[]),g=c(()=>{m.disabled||(u(!0),o.current?.showPopover?.())},[]),v=c(()=>{u(!1),o.current?.hidePopover?.()},[]),y=c(()=>{o.current?.matches(`:popover-open`)?v():g()},[]),b=c(()=>{clearTimeout(m.closeTimeout)},[]),x=c(e=>{m.disabled||e.target===h()&&(b(),g())},[]),S=c(()=>{m.disabled||(b(),g())},[]),C=c(()=>{clearTimeout(m.closeTimeout),m.closeTimeout=setTimeout(()=>{let t=o.current;m.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||v()},100)},[]),w=c(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=h();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=c(t=>{let n=t.newState===`open`;u(n),n?ke(p):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return l(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),l(()=>{e.toggleAttribute(`opened`,!!s)},[s]),l(()=>{if(a&&!n)return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),l(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:d,content:p,popoverRef:o,handleClick:a?g:y,onToggle:T,close:v,scheduleClose:C,cancelClose:b}}})))()}var Me,Ne,Pe;function Fe(){return(Fe=e((()=>{N(),L(),C(),s(),A(),je(),Me=y`
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
`,Ne=({placement:e,disabled:t,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>n`
		<slot
			name="button"
			${M(a)}
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
					${k(e=>e&&(s.current=e))}
				>
					<slot ${M(o)}></slot>
				</div>`}
	`,Pe=e=>Ne(Ae(e)),customElements.define(`cosmoz-dropdown-next`,m(Pe,{styleSheets:[Me],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var Ie,Le,Re,ze;function q(){return(q=e((()=>{Ee(),Fe(),te(),r(),s(),Ie=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,Le=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),Re=e=>typeof e==`string`&&e?e:a(`More`)||`More`,ze=({items:e,overflows:t,active:r,label:i,onItemClick:a})=>n`
	<cosmoz-dropdown-next
		class="more"
		part="more"
		placement="bottom span-left"
		?hidden=${!t}
		?data-active=${r}
	>
		<cosmoz-button
			variant="tertiary"
			class="more-button"
			exportparts="button:more-button"
			slot="button"
			type="button"
			aria-expanded="false"
			aria-haspopup="true"
			aria-controls="more-menu"
		>
			<span>${Re(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${ee({width:`16`,height:`16`})}</span
			>
		</cosmoz-button>
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
`})))()}var J,Y,Be,Ve,He,Ue,We,Ge,Ke;function qe(){return(qe=e((()=>{q(),J=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),Y=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},Be=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>Y(t,n,e.getAttribute(n))),Y(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),Y(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},Ve=e=>{e.forEach(([,e])=>{J(e)&&e.setAttribute(`tabindex`,`0`)})},He=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:J(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(J)??null},Ue=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},We=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),Be(e,t)},Ge=e=>new MouseEvent(`click`,e),Ke=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(Ge(t))||t.preventDefault(),Ie(t)&&Le(a)}})))()}var Je;function Ye(){return(Ye=e((()=>{C(),Je=y`
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
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		padding: calc(var(--cz-spacing) * 0.75);
		border-radius: var(--cz-radius-md);
	}

	:host([variant='segmented'][size='sm']) slot:not([name]) {
		max-height: calc(var(--cz-control-height-md) - var(--cz-spacing) * 1.5);
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
	cosmoz-button.more-button::part(button),
	.more-button:not(cosmoz-button) {
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

		height: auto;
	}
	cosmoz-button.more-button {
		position: relative;
		display: inline-flex;
		flex: 0 0 auto;
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

	cosmoz-button.more-button::part(button):hover,
	.more-button:hover:not(cosmoz-button) {
		color: var(--cz-color-text-secondary);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-border-primary);
	}

	.more[data-active] cosmoz-button.more-button::part(button),
	.more[data-active] .more-button:not(cosmoz-button) {
		color: var(--cz-color-text-primary);
		box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-primary);
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary);
	}

	cosmoz-button.more-button::part(button):focus-visible,
	.more-button:focus-visible:not(cosmoz-button) {
		outline: 2px solid var(--cz-color-focus-ring, var(--cz-color-fg-brand));
		outline-offset: -2px;
	}

	:host([variant='brand']) cosmoz-button.more-button::part(button),
	:host([variant='brand']) .more-button:not(cosmoz-button) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-md);

		height: auto;
	}

	:host([variant='brand']) cosmoz-button.more-button::part(button):hover,
	:host([variant='brand']) .more-button:hover:not(cosmoz-button),
	:host([variant='brand'])
		.more[data-active]
		cosmoz-button.more-button::part(button),
	:host([variant='brand']) .more[data-active] .more-button:not(cosmoz-button) {
		color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
		background-color: var(
			--cz-color-bg-action-solid,
			var(--cz-color-bg-brand-solid)
		);
		box-shadow: none;
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
	}

	:host([variant='segmented']) cosmoz-button.more-button::part(button),
	:host([variant='segmented']) .more-button:not(cosmoz-button) {
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);

		height: auto;
	}

	:host([variant='segmented']) cosmoz-button.more-button::part(button):hover,
	:host([variant='segmented']) .more-button:hover:not(cosmoz-button),
	:host([variant='segmented'])
		.more[data-active]
		cosmoz-button.more-button::part(button),
	:host([variant='segmented'])
		.more[data-active]
		.more-button:not(cosmoz-button) {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-sm);
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		color: var(--cz-color-fg-secondary-hover);
	}

	:host([size='sm']) cosmoz-button.more-button::part(button),
	:host([size='sm']) .more-button:not(cosmoz-button) {
		padding-block: calc(var(--cz-spacing) * 1.5);

		height: auto;
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented']))
		cosmoz-button.more-button::part(button),
	:host([size='sm']:is([variant='brand'], [variant='segmented']))
		.more-button:not(cosmoz-button) {
		padding-inline: calc(var(--cz-spacing) * 2);

		height: auto;
	}

	:host([variant='segmented'][size='sm'])
		cosmoz-button.more-button::part(button),
	:host([variant='segmented'][size='sm']) .more-button:not(cosmoz-button) {
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		padding-block: var(--cz-spacing);
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
`})))()}var X,Xe,Z,Ze,Qe,$e,et,tt;function nt(){return(nt=e((()=>{p(),N(),L(),C(),H(),q(),qe(),Ye(),X=`cosmoz-tab-next`,Xe={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},Z=(e,t)=>{let[n,r]=D(0);return l(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,Xe)),()=>t.disconnect()},[t]),n},Ze=(e,t,n)=>{let r=Z(e,n),i=_();return i.current??=new Map,d(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??Ue(e);return n.set(e,t),We(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),Ve(a);let s=He(r);return r.forEach(e=>Y(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},Qe=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),$e=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),et=(e,t,n)=>{let r=e.filter(J);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},tt=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[t,r]=D(0),[i,a]=D(()=>new Set),o=_(),s=c(()=>(o.current??[]).filter(e=>e.matches(X)),[]),l=()=>r(e=>e+1),u=Ze(s,i,t);return E(()=>{let t=e=>{if(!$e.has(e.key))return;let t=s(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=et(t,n,e.key);r&&r!==n&&r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),n`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${M(o)}
				${I(Qe(e))}
				${V({is:e=>e.matches(X),onOverflow:a})}
				@slotchange=${l}
			></slot>
		</div>
		${ze({items:u.map(([,e])=>e),overflows:u.length>0,active:u.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:Ke(u)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,m(tt,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[x,Je]}))})))()}var Q,rt,it,at,ot,st;function $(){return($=e((()=>{re(),F(),C(),w(),Q=e=>!e.hidden&&!e.disabled,rt=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Q),it=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Q(n)?n:rt(e)},at=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=ne(t),a=_([]),o=d(()=>it(e,r??void 0),[e,r]);return{tabs:e,active:o,activated:d(()=>{let e=o?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[o]),activate:i,onActivate:c(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},ot=({tabs:e,active:t,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=P(e.title),l=e.content??c,u=e.badge||void 0;return n`<cosmoz-tab-next
			name=${e.name}
			class=${b(i)}
			variant=${b(a)}
			size=${b(o)}
			?compact-width=${b(s)}
			title=${b(c)}
			?active=${t?.name===e.name}
			?hidden=${e.hidden}
			?disabled=${e.disabled}
			badge=${b(u)}
			@click=${r}
			>${v(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`}),st=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function ct(){return(ct=e((()=>{se(),nt(),$()})))()}export{at as a,ot as i,$ as n,st as r,ct as t};