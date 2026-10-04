import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,n,o as r,r as i,u as a}from"./iframe-C81qHdVY.js";import{C as o,D as s,T as c,_ as l,a as u,c as d,d as f,f as p,h as m,i as h,j as g,n as _,o as v,p as y,s as b,t as ee,u as te,x,y as S}from"./if-defined-mAlS1Ni2.js";import{m as ne,t as re}from"./untitled-BOQpYjdo.js";import{r as ie,t as ae}from"./use-hash-param-BdcwvoYp.js";var C,w;function T(){return(T=e((()=>{C=e=>e.getAttribute(`role`)===`radio`?`aria-checked`:`aria-selected`,w=e=>C(e)===`aria-checked`?`aria-selected`:`aria-checked`})))()}var E,oe,se,ce,le,ue,de,D,fe,pe,me,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{b(),E=g`
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
`,oe=g`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,se=g`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,ce=g`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,le=g`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,ue=g`
	color: var(--cz-color-fg-brand-secondary);
`,de=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,D=g`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,fe=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,pe=g`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,me=g`
	color: var(--cz-color-fg-secondary-hover);
`,O=g`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,k=g`
	padding-inline: calc(var(--cz-spacing) * 2);
`,A=g`
	flex: 1 1 0;
`,j=g`
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
`,M=g`
	background-color: var(--cz-color-bg-tertiary);
	color: var(--cz-color-text-primary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
`,N=g`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`,P=g`
	${E}
	flex: 0 0 auto;
	justify-content: flex-start;
	gap: calc(var(--cz-spacing) * 2);
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
	box-shadow: none;
`,F=g`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary-hover);
	box-shadow: none;
`,I=D,L=g`
	visibility: hidden;
`,R=g`
	:host {
		${E}
		${A}
	}

	:host(:hover),
	:host([active]) {
		${ce}
	}

	:host(:focus-visible) {
		${oe}
	}

	:host([disabled]) {
		${se}
	}

	:host([hidden]) {
		display: none !important;
	}

	:host([overflowing]) {
		${L}
	}

	:host([menu]) {
		${P}
	}

	:host([menu]:hover) {
		${F}
	}

	:host([menu][active]) {
		${I}
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
		${le}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${ue}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${j}
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		${M}
	}

	:host([variant='segmented']) .badge {
		${N}
	}

	:host([variant='brand']) {
		${de}
	}

	:host([variant='brand']:hover),
	:host([variant='brand'][active]) {
		${D}
	}

	:host([variant='brand']:hover) #iconSlot::slotted(svg),
	:host([variant='brand'][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		${fe}
	}

	:host([variant='segmented']:hover),
	:host([variant='segmented'][active]) {
		${pe}
	}

	:host([variant='segmented']:hover) #iconSlot::slotted(svg),
	:host([variant='segmented'][active]) #iconSlot::slotted(svg) {
		${me}
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		${O}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		${k}
	}
`})))()}var he;function ge(){return(ge=e((()=>{u(),b(),a(),ee(),T(),z(),he=e=>{let{active:n,badge:i,href:a}=e;return s(()=>{e.getAttribute(`tabindex`)||e.setAttribute(`tabindex`,`-1`),e.getAttribute(`role`)||e.setAttribute(`role`,`tab`)},[]),x(()=>{e.setAttribute(C(e),n?`true`:`false`)},[n]),s(()=>{let t=t=>{t.target!==e||e.hasAttribute(`disabled`)||(t.key===`Enter`&&!t.repeat&&(t.preventDefault(),e.click()),t.key===` `&&t.preventDefault())},n=t=>{t.target!==e||e.hasAttribute(`disabled`)||t.key===` `&&e.click()};return e.addEventListener(`keydown`,t),e.addEventListener(`keyup`,n),()=>{e.removeEventListener(`keydown`,t),e.removeEventListener(`keyup`,n)}},[]),t`
		<a part="link" href=${_(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?t`<span class="badge" part="badge">${i}</span>`:r}
		</a>
	`},customElements.define(`cosmoz-tab-next`,d(he,{observedAttributes:[`active`,`badge`,`href`],styleSheets:[v,R]}))})))()}var B,V;function H(){return(H=e((()=>{a(),f(),y(),B=new WeakMap,V=p(class extends te{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=B.get(t);n===void 0&&(n=new WeakMap,B.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?B.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}var _e;function ve(){return(ve=e((()=>{b(),_e=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let c=m(),l=()=>clearTimeout(c.current),u=()=>{clearTimeout(c.current),c.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},d=()=>{n||(l(),a())};return s(()=>{if(r&&!n)return e.addEventListener(`pointerenter`,d),e.addEventListener(`pointerleave`,u),()=>{l(),e.removeEventListener(`pointerenter`,d),e.removeEventListener(`pointerleave`,u)}},[r,n,e]),s(()=>{if(i&&!n)return e.addEventListener(`focusin`,d),e.addEventListener(`focusout`,u),()=>{l(),e.removeEventListener(`focusin`,d),e.removeEventListener(`focusout`,u)}},[i,n,e]),{scheduleClose:u,cancelClose:l}}})))()}var ye,be,xe,Se,U,Ce;function we(){return(we=e((()=>{b(),a(),H(),ve(),ye=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},be=g`
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
`,xe=(e=document)=>{let t=e.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;return t},Se=(e,t,n)=>{let r=(e?.shadowRoot?.querySelector(`slot[name=button]`))?.assignedElements({flatten:!0})[0];if(!r||(r.setAttribute(`aria-expanded`,String(t)),t||n))return;let i=xe();(i===document.body||i===e||e.shadowRoot?.contains(i))&&r.focus()},U=new WeakSet,Ce=e=>{let{placement:n=`bottom span-right`,disabled:r,passthrough:i,openOnHover:a,openOnFocus:c}=e,u=m(),[d,f]=l(`opened`,!1),p=o(()=>{r||(f(!0),u.current?.showPopover?.())},[r]),h=o(()=>{f(!1),u.current?.hidePopover?.()},[]),g=o(()=>{r||(u.current?.matches(`:popover-open`)?h():p())},[r]);s(()=>{let e=u.current;e&&(d?e.showPopover?.():e.hidePopover?.())},[d]),s(()=>{e.toggleAttribute(`opened`,!!d)},[d]);let{scheduleClose:_,cancelClose:v}=_e({host:e,popoverRef:u,disabled:r,openOnHover:a,openOnFocus:c,open:p,close:h}),y=c?p:g,b=o(t=>{ye(t);let n=t.newState===`open`;f(n),Se(e,n,U.has(t.target)),U.delete(t.target),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return t`
		<slot name="button" @click=${y}></slot>
		${r&&i?t`<slot></slot>`:t`<div
					popover
					style="position-area: ${n}"
					@toggle=${b}
					@select=${e=>{U.add(e.currentTarget),h()}}
					@focusout=${_}
					@focusin=${v}
					${V(e=>e&&(u.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,d(Ce,{styleSheets:[be],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}var Te,Ee,De,Oe;function ke(){return(ke=e((()=>{we(),re(),n(),a(),Te=e=>e.button===0&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey,Ee=e=>e?.dispatchEvent(new Event(`select`,{bubbles:!0})),De=e=>typeof e==`string`&&e?e:i(`More`)||`More`,Oe=({items:e,overflows:n,active:r,label:i,role:a=`tablist`,onItemClick:o})=>t`
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
			<span>${De(i)}</span>
			<span class="chevron" aria-hidden="true"
				>${ne({width:`16`,height:`16`})}</span
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
`})))()}var Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye;function Xe(){return(Xe=e((()=>{b(),Ae=g`
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
`,je=g`
	display: flex;
	align-items: stretch;
	gap: inherit;
	flex: 1 1 auto;
	min-width: 0;
	overflow: clip;
`,Me=g`
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
`,Ne=g`
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
`,Pe=g`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,Fe=g`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,Ie=g`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,Le=g`
	color: var(--cz-color-fg-brand-secondary);
`,Re=g`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,ze=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,Be=g`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,Ve=g`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,He=g`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,Ue=g`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,We=g`
	color: var(--cz-color-fg-secondary-hover);
`,Ge=g`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,Ke=g`
	padding-inline: calc(var(--cz-spacing) * 2);
`,qe=g`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,Je=g`
	${Ne}
	flex: 0 0 auto;
	background: none;
	border: 0;
	font: inherit;
	appearance: none;
`,Ye=g`
	:host {
		${Ae}
		flex: 0 1 auto;
		min-width: 0;
	}

	.items {
		${je}
	}

	:host([variant='brand']) {
		${Re}
	}

	:host([variant='segmented']) {
		${Ve}
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
		${qe}
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
		${Je}
	}

	.more-button .chevron {
		display: contents;
	}

	.more-button svg {
		${Ie}
		transition: transform 0.15s ease;
	}

	.more[opened] .more-button svg {
		transform: rotate(180deg);
	}

	.more-button:hover,
	.more[data-active] .more-button {
		${Fe}
	}

	.more-button:hover svg,
	.more[data-active] .more-button svg {
		${Le}
	}

	.more-button:focus-visible {
		${Pe}
	}

	:host([variant='brand']) .more-button {
		${ze}
	}

	:host([variant='brand']) .more-button:hover,
	:host([variant='brand']) .more[data-active] .more-button {
		${Be}
	}

	:host([variant='brand']) .more-button:hover svg,
	:host([variant='brand']) .more[data-active] .more-button svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .more-button {
		${He}
	}

	:host([variant='segmented']) .more-button:hover,
	:host([variant='segmented']) .more[data-active] .more-button {
		${Ue}
	}

	:host([variant='segmented']) .more-button:hover svg,
	:host([variant='segmented']) .more[data-active] .more-button svg {
		${We}
	}

	:host([size='sm']) .more-button {
		${Ge}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .more-button {
		${Ke}
	}

	.menu {
		${Me}
	}
`})))()}var W,G,Ze,Qe,$e,et,tt;function nt(){return(nt=e((()=>{b(),W=()=>({visible:new Set,overflowing:new Set,hidden:new Set}),G=(e,t)=>e.size===t.size&&[...e].every(e=>t.has(e)),Ze=(e,t)=>G(e.visible,t.visible)&&G(e.overflowing,t.overflowing)&&G(e.hidden,t.hidden),Qe=({overflowing:e,hidden:t})=>t.forEach(n=>{n.getBoundingClientRect().height!==0&&(t.delete(n),e.add(n))}),$e=1,et=(e,t,n)=>{let r=W(),i=new Set,a=new IntersectionObserver(e=>{let{visible:t,overflowing:a,hidden:o}=r;e.forEach(e=>{let n=e.target;i.delete(n),t.delete(n),a.delete(n),o.delete(n);let r=e.boundingClientRect.width-e.intersectionRect.width;e.boundingClientRect.height===0?o.add(n):r<=$e&&e.intersectionRect.height!==0?t.add(n):a.add(n)}),Qe(r),i.size===0&&n({visible:new Set(t),overflowing:new Set(a),hidden:new Set(o)})},{root:e,threshold:[0,.25,.5,.75,.9,.95,.99,1]}),o=()=>{a.disconnect(),i.clear();let r=t(e);r.forEach(e=>{i.add(e),a.observe(e)}),r.length===0&&n(W())},s=0,c=new ResizeObserver(()=>{cancelAnimationFrame(s),s=requestAnimationFrame(o)});return c.observe(e),o(),()=>{cancelAnimationFrame(s),c.disconnect(),a.disconnect()}},tt=(e,t,n)=>{let[r,i]=S(W);return x(()=>{let n=e.current;if(n)return et(n,t,e=>i(t=>Ze(t,e)?t:e))},n),r}})))()}var K,q,J,rt,it,at,ot,st,ct,lt,ut,Y,dt,ft,pt,X,mt,Z,ht,gt;function _t(){return(_t=e((()=>{u(),b(),H(),T(),ke(),Xe(),nt(),K=`cosmoz-tab-next`,q=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},J=new WeakMap,rt=e=>{let t=!1;[...e.children].forEach(e=>{if(e.matches(K)){t=!0;return}if(e.localName===`slot`){t=!0;return}let n=e.getAttribute(`slot`);if(n!=null&&J.get(e)!==n)return;let r=t?`stats`:`tabs`;n!==r&&e.setAttribute(`slot`,r),J.set(e,r)})},it=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>q(t,n,e.getAttribute(n))),q(t,w(t),null),q(t,C(t),t.hasAttribute(`active`)?`true`:`false`),q(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},at=e=>{let t=e.filter(([,e])=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`));(t.find(([e])=>e.hasAttribute(`active`))??t[0])?.[1].setAttribute(`tabindex`,`0`)},ot=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},st=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),it(e,t)},ct=e=>new MouseEvent(`click`,e),lt=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(ct(t))||t.preventDefault(),Te(t)&&(i.focus(),document.activeElement===document.body&&(i.getRootNode().querySelector?.(`[tabindex="0"]`))?.focus(),Ee(a))},ut=e=>e.map(e=>+!e.hidden).join(``),Y=e=>(e.querySelector(`slot`)?.assignedElements({flatten:!0})??[]).filter(e=>e.matches(K)),dt={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`,`role`],childList:!0,subtree:!0,characterData:!0},ft=(e,t)=>{let[n,r]=S(0);return s(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,dt)),()=>t.disconnect()},[t]),n},pt=(e,t,n)=>{let r=ft(e,n),i=m();return i.current??=new Map,c(()=>{let n=i.current,r=e().filter(e=>t.has(e)).map(e=>{let t=n.get(e)??ot(e);return n.set(e,t),st(e,t),[e,t]}),a=new Set(r.map(([e])=>e));return n.forEach((e,t)=>{a.has(t)||n.delete(t)}),at(r),r},[t,n,r])},X=`none`,mt=e=>{let t=m(),[n,r]=S(0);s(()=>{let t=new MutationObserver(()=>r(e=>e+1));return t.observe(e,{attributes:!0,attributeFilter:[`role`]}),()=>t.disconnect()},[]);let i=e.getAttribute(`role`);return n>=0&&i!==X&&(t.current=i??void 0,e.setAttribute(`role`,X)),t.current===`radiogroup`?`radiogroup`:`tablist`},Z=e=>{let t=mt(e);return{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),compactWidth:e.hasAttribute(`compact-width`)?``:null,role:t,itemRole:t===`radiogroup`?`radio`:`tab`}},ht=(e,{variant:t,size:n,compactWidth:r,itemRole:i})=>{q(e,`variant`,t),q(e,`size`,n),q(e,`compact-width`,r),q(e,`role`,i),q(e,w(e),null),q(e,C(e),e.hasAttribute(`active`)?`true`:`false`)},gt=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let n=Z(e),{variant:r,size:i,compactWidth:a,role:c}=n,l=m(),u=o(e=>{l.current=e},[]),[d,f]=S(0),p=o(()=>l.current?Y(l.current):[],[]),h=m();h.current??=new Set;let g=()=>{rt(e),new Set([...e.querySelectorAll(K),...p()]).forEach(e=>ht(e,n))},_=()=>{g(),f(e=>e+1)};s(g);let{overflowing:v}=tt(l,Y,[d,r,i,a,ut(p())]);x(()=>{let e=h.current,t=new Set;p().forEach(e=>{let n=v.has(e);e.toggleAttribute(`overflowing`,n),n&&t.add(e)}),e.forEach(e=>{t.has(e)||e.removeAttribute(`overflowing`)}),h.current=t},[v,d]);let y=pt(p,v,d);return t`
		<slot name="tabs"></slot>
		<div class="items" part="items" role=${c} ${V(u)}>
			<slot @slotchange=${_}></slot>
		</div>
		${Oe({items:y.map(([,e])=>e),overflows:y.length>0,active:y.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,role:c,onItemClick:lt(y)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,d(gt,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[v,Ye]}))})))()}var vt;function yt(){return(yt=e((()=>{vt=(e,...t)=>typeof e==`function`?e(...t):e})))()}var Q,bt,xt,St,Ct,wt;function $(){return($=e((()=>{ae(),yt(),b(),ee(),Q=e=>!e.hidden&&!e.disabled,bt=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(Q),xt=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&Q(n)?n:bt(e)},St=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=ie(t),a=m([]),s=c(()=>xt(e,r??void 0),[e,r]);return{tabs:e,active:s,activated:c(()=>{let e=s?.name;return a.current=[...(a.current??[]).filter(t=>t!==e),e].filter(Boolean)},[s]),activate:i,onActivate:o(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},Ct=({tabs:e,active:n,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=vt(e.title),l=e.content??c,u=e.badge||void 0;return t`<cosmoz-tab-next
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
		>`}),wt=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function Tt(){return(Tt=e((()=>{ge(),_t(),$()})))()}export{St as a,Ct as i,$ as n,wt as r,Tt as t};