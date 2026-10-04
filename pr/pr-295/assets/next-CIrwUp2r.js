import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,n,o as r,r as i,u as a}from"./iframe-BM-LA05i.js";import{C as o,D as s,T as c,_ as l,a as u,c as d,d as f,f as p,h as m,i as h,j as g,n as _,o as v,p as ee,s as y,t as te,u as ne,x as re,y as b}from"./if-defined-DWyKTCAL.js";import{m as ie,t as ae}from"./untitled-DKsSypP0.js";import{r as oe,t as se}from"./use-hash-param-I-BPu5sL.js";var x,S;function C(){return(C=e((()=>{x=e=>e.getAttribute(`role`)===`radio`?`aria-checked`:`aria-selected`,S=e=>x(e)===`aria-checked`?`aria-selected`:`aria-checked`})))()}var w,ce,le,ue,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;function U(){return(U=e((()=>{y(),w=g`
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
`,ce=g`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,le=g`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,ue=g`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,T=g`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,E=g`
	color: var(--cz-color-fg-brand-secondary);
`,D=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,O=g`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,k=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,A=g`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,j=g`
	color: var(--cz-color-fg-secondary-hover);
`,M=g`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,N=g`
	padding-inline: calc(var(--cz-spacing) * 2);
`,P=g`
	flex: 1 1 0;
`,F=g`
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
`,I=g`
	background-color: var(--cz-color-bg-tertiary);
	color: var(--cz-color-text-primary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
`,L=g`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`,R=g`
	${w}
	flex: 0 0 auto;
	justify-content: flex-start;
	gap: calc(var(--cz-spacing) * 2);
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
	box-shadow: none;
`,z=g`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary-hover);
	box-shadow: none;
`,B=O,V=g`
	display: none;
`,H=g`
	:host {
		${w}
		${P}
	}

	:host(:hover),
	:host([active]) {
		${ue}
	}

	:host(:focus-visible) {
		${ce}
	}

	:host([disabled]) {
		${le}
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
		${T}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${E}
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
		${D}
	}

	:host([variant='brand']:hover),
	:host([variant='brand'][active]) {
		${O}
	}

	:host([variant='brand']:hover) #iconSlot::slotted(svg),
	:host([variant='brand'][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		${k}
	}

	:host([variant='segmented']:hover),
	:host([variant='segmented'][active]) {
		${A}
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
`})))()}var W;function de(){return(de=e((()=>{u(),y(),a(),te(),C(),U(),W=e=>{let{active:n,badge:i,href:a}=e;return s(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.getAttribute(`role`)||e.setAttribute(`role`,`tab`)},[]),re(()=>{e.setAttribute(x(e),n?`true`:`false`)},[n]),s(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),e.click()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&e.click()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),t`
		<a part="link" href=${_(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?t`<span class="badge" part="badge">${i}</span>`:r}
		</a>
	`},customElements.define(`cosmoz-tab-next`,d(W,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[v,H]}))})))()}var G,K;function q(){return(q=e((()=>{a(),f(),ee(),G=new WeakMap,K=p(class extends ne{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=G.get(t);n===void 0&&(n=new WeakMap,G.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?G.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var fe;function pe(){return(pe=e((()=>{y(),fe=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let c=m(),l=()=>clearTimeout(c.current),u=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},d=()=>{n||(l(),a())};return s(()=>{if(r&&!n)return e.addEventListener(`pointerenter`,d),e.addEventListener(`pointerleave`,u),()=>{l(),e.removeEventListener(`pointerenter`,d),e.removeEventListener(`pointerleave`,u)}},[r,n,e]),s(()=>{if(i&&!n)return e.addEventListener(`focusin`,d),e.addEventListener(`focusout`,u),()=>{l(),e.removeEventListener(`focusin`,d),e.removeEventListener(`focusout`,u)}},[i,n,e]),{scheduleClose:u,cancelClose:l}}})))()}var me,he,ge,_e,J,ve;function ye(){return(ye=e((()=>{y(),a(),q(),pe(),me=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},he=g`
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
`,ge=(e=document)=>{let t=e.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;return t},_e=(e,t,n)=>{let r=(e?.shadowRoot?.querySelector(`slot[name=button]`))?.assignedElements({flatten:!0})[0];if(!r||(r.setAttribute(`aria-expanded`,String(t)),t||n))return;let i=()=>{let t=ge();(t===document.body||t===e||e.contains(t))&&r.focus()};requestAnimationFrame(()=>requestAnimationFrame(i))},J=new WeakSet,ve=e=>{let{placement:n=`bottom span-right`,disabled:r,passthrough:i,openOnHover:a,openOnFocus:c}=e,u=m(),[d,f]=l(`opened`,!1),p=o(()=>{r||(f(!0),u.current?.showPopover?.())},[r]),h=o(()=>{f(!1),u.current?.hidePopover?.()},[]),g=o(()=>{r||(u.current?.matches(`:popover-open`)?h():p())},[r]);s(()=>{let e=u.current;e&&(d?e.showPopover?.():e.hidePopover?.())},[d]),s(()=>{e.toggleAttribute(`opened`,!!d)},[d]);let{scheduleClose:_,cancelClose:v}=fe({host:e,popoverRef:u,disabled:r,openOnHover:a,openOnFocus:c,open:p,close:h}),ee=c?p:g,y=o(t=>{me(t);let n=t.newState===`open`;f(n),_e(e,n,J.has(t.target)),J.delete(t.target),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return t`
		<slot name="button" @click=${ee}></slot>
		${r&&i?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${n}"
					@toggle=${y}
					@select=${e=>{J.add(e.currentTarget),h()}}
					@focusout=${_}
					@focusin=${v}
					${K(e=>e&&(u.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,d(ve,{styleSheets:[he],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var be,xe,Se,Ce;function we(){return(we=e((()=>{ye(),ae(),n(),a(),be=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,xe=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),Se=e=>typeof e==`string`&&e?e:i(`More`)||`More`,Ce=({items:e,overflows:n,active:r,label:i,role:a=`tablist`,onItemClick:o})=>t`
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
			<span>${Se(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${ie({width:`16`,height:`16`})}</span
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
`})))()}var Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We;function Ge(){return(Ge=e((()=>{y(),Te=g`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
`,Ee=g`
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	gap: inherit;
	flex: 1 1 auto;
	min-width: 0;
`,De=g`
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
`,Oe=g`
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
`,ke=g`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,Ae=g`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,je=g`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,Me=g`
	color: var(--cz-color-fg-brand-secondary);
`,Ne=g`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,Pe=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,Fe=g`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,Ie=g`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,Le=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,Re=g`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,ze=g`
	color: var(--cz-color-fg-secondary-hover);
`,Be=g`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,Ve=g`
	padding-inline: calc(var(--cz-spacing) * 2);
`,He=g`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,Ue=g`
	${Oe}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,We=g`
	:host {
		${Te}
		flex: 0 1 auto;
		min-width: 0;
	}

	.items {
		${Ee}
	}

	:host([variant='brand']) {
		${Ne}
	}

	:host([variant='segmented']) {
		${Ie}
	}

	/* The track hugs its tabs when they are not spread, but stops at the
	   container's width, so tabs past it move into the overflow menu. */
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
`})))()}var Ke;function qe(){return(qe=e((()=>{y(),Ke=(e,t,n)=>{let[r,i]=b(()=>new Set);return re(()=>{let n=e.current,r=t();if(!n||r.length===0)return;let a=e=>{r.forEach(t=>{let n=e.has(t);n!==t.hasAttribute(`overflowing`)&&(n?t.setAttribute(`overflowing`,``):t.removeAttribute(`overflowing`))}),i(t=>t.size===e.size&&[...e].every(e=>t.has(e))?t:e)},o=()=>{r.forEach(e=>{e.hasAttribute(`overflowing`)&&e.removeAttribute(`overflowing`)});let e=r[0].getBoundingClientRect().top,t=new Set(r.filter(t=>!t.hidden&&Math.abs(t.getBoundingClientRect().top-e)>.5));a(t)},s=n.getBoundingClientRect().width,c=new ResizeObserver(()=>{let e=n.getBoundingClientRect().width;e!==s&&(s=e,o())});return c.observe(n),o(),()=>{c.disconnect(),r.forEach(e=>e.removeAttribute(`overflowing`))}},n),r}})))()}var Y,X,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,Z,it,at,ot;function st(){return(st=e((()=>{u(),y(),q(),C(),we(),Ge(),qe(),Y=`cosmoz-tab-next`,X=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},Je=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>X(t,n,e.getAttribute(n))),X(t,S(t),null),X(t,x(t),t.hasAttribute(`active`)?`true`:`false`),X(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},Ye=e=>{e.forEach(([,e])=>{!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&e.setAttribute(`tabindex`,`0`)})},Xe=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},Ze=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),Je(e,t)},Qe=e=>new MouseEvent(`click`,e),$e=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;if(t.stopPropagation(),i.dispatchEvent(Qe(t))||t.preventDefault(),be(t)){if(i.focus(),i.hasAttribute(`overflowing`)){let e=i.getRootNode()?.querySelector?.(`[tabindex="0"]`);e&&e!==i&&e.focus()}xe(a)}},et=e=>e.map(e=>+!e.hidden).join(``),tt=e=>(e.querySelector(`slot`)?.assignedElements({flatten:!0})??[]).filter(e=>e.matches(Y)),nt={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`,`role`],childList:!0,subtree:!0,characterData:!0},rt=(e,t)=>{let[n,r]=b(0);return s(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,nt)),()=>t.disconnect()},[t]),n},Z=(e,t,n)=>{let r=rt(e,n),i=m();return i.current??=new Map,c(()=>{let n=i.current,r=e().filter(e=>t.has(e)).map(e=>{let t=n.get(e)??Xe(e);return n.set(e,t),Ze(e,t),[e,t]}),a=new Set(r.map(([e])=>e));return n.forEach((e,t)=>{a.has(t)||n.delete(t)}),Ye(r),r},[t,n,r])},it=e=>{e.getAttribute(`role`)||e.setAttribute(`role`,`tablist`);let t=e.getAttribute(`role`)===`radiogroup`?`radiogroup`:`tablist`;return{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),compactWidth:e.hasAttribute(`compact-width`)?``:null,role:t,itemRole:t===`radiogroup`?`radio`:`tab`}},at=(e,{variant:t,size:n,compactWidth:r,itemRole:i})=>{X(e,`variant`,t),X(e,`size`,n),X(e,`compact-width`,r),X(e,`role`,i),X(e,`tabindex`,e.hasAttribute(`active`)?`0`:`-1`),X(e,S(e),null),X(e,x(e),e.hasAttribute(`active`)?`true`:`false`)},ot=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let n=it(e),{variant:r,size:i,compactWidth:a,role:c}=n,l=m(),u=o(e=>{l.current=e},[]),[d,f]=b(0),p=o(()=>l.current?tt(l.current):[],[]),h=()=>{new Set([...e.querySelectorAll(Y),...p()]).forEach(e=>at(e,n))},g=()=>{h(),f(e=>e+1)};s(h);let _=Ke(l,p,[d,r,i,a,et(p())]),v=Z(p,_,d);return t`
		<slot name="tabs"></slot>
		<div class="items" part="items" ${K(u)}>
			<slot @slotchange=${g}></slot>
		</div>
		${Ce({items:v.map(([,e])=>e),overflows:v.length>0,active:v.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,role:c,onItemClick:$e(v)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,d(ot,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[v,We]}))})))()}var ct;function lt(){return(lt=e((()=>{ct=(e,...t)=>typeof e==`function`?e(...t):e})))()}var Q,ut,dt,ft,pt,mt;function $(){return($=e((()=>{se(),lt(),y(),te(),Q=e=>!e.hidden&&!e.disabled,ut=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Q),dt=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Q(n)?n:ut(e)},ft=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=oe(t),a=m([]),s=c(()=>dt(e,r??void 0),[e,r]);return{tabs:e,active:s,activated:c(()=>{let e=s?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[s]),activate:i,onActivate:o(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},pt=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=ct(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
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
		>`}),mt=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function ht(){return(ht=e((()=>{de(),st(),$()})))()}export{ft as a,pt as i,$ as n,mt as r,ht as t};