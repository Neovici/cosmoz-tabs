import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,l as n,n as r,o as i,r as a,s as o,u as s}from"./iframe-B492NPTe.js";import{A as c,B as l,C as u,D as d,H as f,I as p,J as m,M as h,O as g,P as _,S as v,T as y,W as b,X as x,k as S,m as C,t as w,v as T,w as E,x as D,y as O}from"./untitled-rlp6-76X.js";var k,A;function j(){return(j=e((()=>{s(),g(),c(),k=new WeakMap,A=S(class extends d{render(e){return i}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),i}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=k.get(t);n===void 0&&(n=new WeakMap,k.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?k.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var M;function N(){return(N=e((()=>{v(),E(),s(),M=m`
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
`,customElements.define(`cosmoz-tooltip-content`,y(()=>n`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[u,M]}))})))()}var P;function F(){return(F=e((()=>{E(),P=x(m`
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
`)})))()}var I,ee;function te(){return(te=e((()=>{E(),s(),N(),F(),I=(e,t,r)=>o(n`<cosmoz-tooltip-content>
			${D(t,()=>n`<strong slot="heading">${t}</strong>`)}
			${D(r,()=>n`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),ee=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=h(),l=!!(r||i)&&!s;b(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(P)||(t.adoptedStyleSheets=[...u,P]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,I(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),b(()=>{n&&c.current&&I(c.current,r,i)},[r,i,n]),b(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var ne;function re(){return(re=e((()=>{E(),ne=e=>{let[t,n]=p(!1);return b(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var ie,ae;function oe(){return(oe=e((()=>{v(),E(),s(),j(),N(),F(),te(),re(),ie=m`
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
`,ae=e=>{let{heading:t,description:r,for:a,placement:o=`top`,delay:s=300,disabled:c=!1}=e,u=h(),d=h(),f=h(),p=ne(f),m=!!(t||r||p)&&!c,g=l(()=>{m&&(clearTimeout(d.current),d.current=window.setTimeout(()=>{u.current?.showPopover()},s))},[s,m]);b(()=>{c&&(clearTimeout(d.current),u.current?.hidePopover())},[c]);let _=l(()=>{clearTimeout(d.current),u.current?.hidePopover()},[]);return b(()=>{if(a)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||_()};return e.addEventListener(`pointerover`,g),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,g),e.removeEventListener(`pointerout`,t)}},[a,g,_]),ee(e,{for:a,heading:t,description:r,placement:o,delay:s,disabled:c}),a?i:m?n`
		<slot @focusin=${g} @focusout=${_}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${o}"
			${A(u)}
		>
			<cosmoz-tooltip-content>
				${D(t,()=>n`<strong slot="heading">${t}</strong>`)}
				${D(r,()=>n`<p slot="description">${r}</p>`)}
				<slot name="content" ${A(f)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:n`
			<slot></slot>
			<slot name="content" ${A(f)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,y(ae,{styleSheets:[u,P,ie],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function L(){return(L=e((()=>{oe()})))()}var R;function z(){return(z=e((()=>{E(),R=m`
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
`})))()}var B,V;function H(){return(H=e((()=>{v(),L(),E(),s(),T(),z(),B=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`,`aria-expanded`,`aria-label`,`aria-pressed`],V=e=>{let{disabled:t=!1,tooltip:r,tooltipPlacement:a,type:o=`button`,href:s,target:c,rel:l,download:u}=e,d=!!t;b(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=n`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=D(s!=null,()=>n`
			<a
				href=${s}
				class="button"
				part="button"
				aria-disabled=${d?`true`:i}
				aria-expanded=${O(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${O(e.getAttribute(`aria-label`)??void 0)}
				target=${O(c)}
				rel=${O(l)}
				download=${O(u)}
				>${f}</a
			>
		`,()=>n`
			<button
				type=${o}
				class="button"
				part="button"
				?disabled=${d}
				aria-expanded=${O(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${O(e.getAttribute(`aria-label`)??void 0)}
				aria-pressed=${O(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${f}
			</button>
		`);return n`<cosmoz-tooltip
		heading=${O(r??void 0)}
		placement=${O(a??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,y(V,{observedAttributes:B,styleSheets:[u,R],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function U(){return(U=e((()=>{H()})))()}var W,G;function K(){return(K=e((()=>{s(),g(),W=class extends d{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return t}},G=S(W)})))()}var q;function J(){return(J=e((()=>{q=(e,...t)=>typeof e==`function`?e(...t):e})))()}var se,ce,le,Y;function X(){return(X=e((()=>{s(),g(),J(),se=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},ce=(e,t)=>{for(let[n,r]of Object.entries(e))se(t,n,q(r,t))},le=class extends d{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)ce(this._attrs,t)};#t=()=>this.#e();render(e){return t}update(e,[n]){this._attrs=n;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=r,r.addEventListener(`slotchange`,this.#t)),this.#e(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},Y=S(le)})))()}var ue;function de(){return(de=e((()=>{E(),ue=e=>{let t=f(()=>({}),[]);return f(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var fe,pe;function me(){return(me=e((()=>{de(),E(),fe=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},pe=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=h(),[s,c]=_(`opened`,!1),u=h(),d=h(),f=ue({disabled:n,openOnHover:i}),p=l(()=>{let e=u.current?.[0];return e instanceof HTMLElement?e:void 0},[]),m=l(()=>{f.disabled||(c(!0),o.current?.showPopover?.())},[]),g=l(()=>{c(!1),o.current?.hidePopover?.()},[]),v=l(()=>{o.current?.matches(`:popover-open`)?g():m()},[]),y=l(()=>{clearTimeout(f.closeTimeout)},[]),x=l(e=>{f.disabled||e.target===p()&&(y(),m())},[]),S=l(()=>{f.disabled||(y(),m())},[]),C=l(()=>{clearTimeout(f.closeTimeout),f.closeTimeout=setTimeout(()=>{let t=o.current;f.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||g()},100)},[]),w=l(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=p();n&&(e.removeEventListener(`focusin`,x),n.focus(),e.addEventListener(`focusin`,x))},[]),T=l(t=>{let n=t.newState===`open`;c(n),n?fe(d):w(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return b(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),b(()=>{e.toggleAttribute(`opened`,!!s)},[s]),b(()=>{if(a&&!n)return e.addEventListener(`focusin`,x),e.addEventListener(`focusout`,C),()=>{e.removeEventListener(`focusin`,x),e.removeEventListener(`focusout`,C)}},[a,n]),b(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,S),e.addEventListener(`pointerleave`,C),()=>{e.removeEventListener(`pointerenter`,S),e.removeEventListener(`pointerleave`,C)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:u,content:d,popoverRef:o,handleClick:a?m:v,onToggle:T,close:g,scheduleClose:C,cancelClose:y}}})))()}var he,ge,_e;function ve(){return(ve=e((()=>{K(),X(),E(),s(),j(),me(),he=m`
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
`,ge=({placement:e,disabled:t,passthrough:r,opened:i,triggers:a,content:o,popoverRef:s,handleClick:c,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>n`
		<slot
			name="button"
			${G(a)}
			${Y({"aria-expanded":r?null:String(i),disabled:t&&!r?``:null})}
			@click=${c}
		></slot>
		${t&&r?n`<slot></slot>`:n`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${A(e=>e&&(s.current=e))}
				>
					<slot ${G(o)}></slot>
				</div>`}
	`,_e=e=>ge(pe(e)),customElements.define(`cosmoz-dropdown-next`,y(_e,{styleSheets:[he],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var ye,be,xe,Se;function Z(){return(Z=e((()=>{U(),ve(),w(),r(),s(),ye=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,be=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),xe=e=>typeof e==`string`&&e?e:a(`More`)||`More`,Se=({items:e,overflows:t,active:r,label:i,onItemClick:a})=>n`
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
			<span>${xe(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${C({width:`16`,height:`16`})}</span
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
`})))()}var Ce,we;function Te(){return(Te=e((()=>{E(),Ce=m`
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
`,we=m`
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
`})))()}var Q,Ee,$,De;function Oe(){return(Oe=e((()=>{E(),Q=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),Ee=e=>e?()=>new URLSearchParams(Q().hash.replace(`#`,``)).get(e):void 0,$=(e,t)=>{if(!e)return;let n=Q(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},De=e=>{let t=f(()=>Ee(e),[e]),[n,r]=p(t),i=h(n);return b(()=>void(i.current=n),[n]),b(()=>{if(t==null)return;let e=()=>{let e=t();i.current!==e&&r(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[n,f(()=>e?t=>{r(t),history.pushState({},``,$(e,t))}:r,[e])]}})))()}export{j as _,Ce as a,Z as c,Y as d,X as f,K as g,G as h,Te as i,ye as l,q as m,$ as n,we as o,J as p,De as r,be as s,Oe as t,Se as u,A as v};