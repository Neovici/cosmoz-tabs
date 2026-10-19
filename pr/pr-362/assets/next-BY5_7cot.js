import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,l as n,o as r,u as i}from"./iframe-B492NPTe.js";import{B as a,C as o,D as s,H as c,I as l,J as u,M as d,O as f,R as p,S as m,T as h,W as ee,k as te,v as g,w as _,x as ne,y as v}from"./untitled-rlp6-76X.js";import{_ as re,a as ie,c as y,d as ae,f as oe,g as se,h as ce,i as le,l as ue,m as de,o as fe,p as pe,r as me,s as he,t as ge,u as _e,v as ve}from"./use-hash-param-DWEYutUa.js";var b;function x(){return(x=e((()=>{_(),b=u`
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
`})))()}var S,C;function w(){return(w=e((()=>{m(),_(),i(),g(),re(),x(),S=class extends HTMLElement{connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tab`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,`-1`)}},C=e=>{let{active:t,badge:i,href:a}=e,o=d();return p(()=>{e.setAttribute(`aria-selected`,t?`true`:`false`)},[t]),p(()=>{let t=()=>(o.current??e).click(),n=n=>{n.target!==e||e.hasAttribute(`disabled`)||(n.key===`Enter`&&!n.repeat&&(n.preventDefault(),t()),n.key===` `&&n.preventDefault())},r=n=>{n.target!==e||e.hasAttribute(`disabled`)||n.key===` `&&t()};return e.addEventListener(`keydown`,n),e.addEventListener(`keyup`,r),()=>{e.removeEventListener(`keydown`,n),e.removeEventListener(`keyup`,r)}},[]),n`
		<a ${ve(o)} part="link" href=${v(a)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${i?n`<span class="badge" part="badge">${i}</span>`:r}
		</a>
	`},customElements.define(`cosmoz-tab-next`,h(C,{baseElement:S,observedAttributes:[`active`,`badge`,`href`],styleSheets:[o,b]}))})))()}var T,E,D,ye;function O(){return(O=e((()=>{i(),f(),T=(e,t)=>e.assignedElements({flatten:!0}).filter(t),E=(e,t)=>e!=null&&t!=null&&e.size===t.size&&[...t].every(t=>e.has(t)),D=class extends s{_slot;_is;_onOverflow;#e=new Map;#t;#n;#r=e=>{e.forEach(e=>{let t=e.target;this.#e.set(t,e.boundingClientRect.height>0&&e.intersectionRect.height===0)}),this.#a()};#i=e=>{this.#n?.unobserve(e),this.#n?.observe(e)};#a=()=>{if(!this._slot||!this._is)return;let e=T(this._slot,this._is);e.forEach(e=>{let t=this.#e.get(e)===!0;t!==e.hasAttribute(`overflowing`)&&(t?e.setAttribute(`overflowing`,``):e.removeAttribute(`overflowing`))}),this.#e.forEach((t,n)=>{e.includes(n)||(this.#e.delete(n),this.#n?.unobserve(n),n.hasAttribute(`overflowing`)&&n.removeAttribute(`overflowing`))});let t=new Set(e.filter(e=>this.#e.get(e)===!0));E(this.#t,t)||(this.#t=t,this._onOverflow?.(t))};#o=()=>this.#s();#s=()=>{if(this.#n&&this._slot&&this._is){for(let e of T(this._slot,this._is))this.#i(e);this.#a()}};render(e){return t}update(e,[n]){this._is=n.is,this._onOverflow=n.onOverflow;let r=e.element;return this._slot!==r&&(this._slot?.removeEventListener(`slotchange`,this.#o),this.#n?.disconnect(),this.#n=void 0,this._slot=r,r.addEventListener(`slotchange`,this.#o)),this.#n??=new IntersectionObserver(this.#r,{root:this._slot,threshold:[0,1]}),this.#s(),t}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#o),this._slot=void 0,this.#n?.disconnect(),this.#n=void 0,this.#e.clear(),this.#t=void 0}},ye=te(D)})))()}var k,A,j,M,N,P,F,I,L;function R(){return(R=e((()=>{y(),k=e=>!e.hasAttribute(`disabled`)&&!e.hasAttribute(`hidden`)&&!e.hasAttribute(`overflowing`),A=(e,t,n)=>{e.getAttribute(t)!==n&&(n==null?e.removeAttribute(t):e.setAttribute(t,n))},j=(e,t)=>{[`active`,`disabled`,`hidden`,`href`,`name`,`badge`,`title`,`role`].forEach(n=>A(t,n,e.getAttribute(n))),A(t,`aria-selected`,t.hasAttribute(`active`)?`true`:`false`),A(t,`aria-disabled`,e.hasAttribute(`disabled`)?`true`:null),t.setAttribute(`tabindex`,`-1`)},M=e=>{e.forEach(([,e])=>{k(e)&&e.setAttribute(`tabindex`,`0`)})},N=e=>{let t=e.find(e=>e.hasAttribute(`active`));return t==null?null:k(t)?t:[...e.slice(0,e.indexOf(t))].reverse().find(k)??null},P=e=>{let t=e.cloneNode(!0);return[`variant`,`size`,`compact-width`,`overflowing`,`style`].forEach(e=>t.removeAttribute(e)),t.setAttribute(`menu`,``),t},F=(e,t)=>{t.innerHTML!==e.innerHTML&&t.replaceChildren(...[...e.childNodes].map(e=>e.cloneNode(!0))),j(e,t)},I=e=>new MouseEvent(`click`,e),L=e=>t=>{let n=t.composedPath(),r=e.find(([,e])=>n.includes(e));if(!r)return;let[i,a]=r;t.stopPropagation(),i.dispatchEvent(I(t))||t.preventDefault(),ue(t)&&he(a)}})))()}var z,B,V,H,U,W,G,K;function q(){return(q=e((()=>{m(),se(),oe(),_(),O(),y(),R(),le(),z=`cosmoz-tab-next`,B={attributes:!0,attributeFilter:[`active`,`disabled`,`hidden`,`badge`,`href`,`name`,`title`],childList:!0,subtree:!0,characterData:!0},V=(e,t)=>{let[n,r]=l(0);return ee(()=>{let t=new MutationObserver(()=>r(e=>e+1));return e().forEach(e=>t.observe(e,B)),()=>t.disconnect()},[t]),n},H=(e,t,n)=>{let r=V(e,n),i=d();return i.current??=new Map,c(()=>{let n=i.current,r=e(),a=r.filter(e=>t.has(e)).map(e=>{let t=n.get(e)??P(e);return n.set(e,t),F(e,t),[e,t]}),o=new Set(a.map(([e])=>e));n.forEach((e,t)=>{o.has(t)||n.delete(t)}),M(a);let s=N(r);return r.forEach(e=>A(e,`tabindex`,e===s?`0`:`-1`)),a},[t,n,r])},U=e=>(e.getAttribute(`role`)===`radiogroup`&&(e.removeAttribute(`role`),e.dispatchEvent(new CustomEvent(`deprecation-warning`,{detail:{message:`role=radiogroup is no longer supported: a value picker belongs in cosmoz-toggle-group (@neovici/cosmoz-input); the items are tabs.`}}))),{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`),"compact-width":e.hasAttribute(`compact-width`)?``:null,role:`tab`,"aria-selected":e=>e.hasAttribute(`active`)?`true`:`false`,"aria-disabled":e=>e.hasAttribute(`disabled`)?`true`:null}),W=new Set([`ArrowLeft`,`ArrowRight`,`Home`,`End`]),G=(e,t,n)=>{let r=e.filter(k);if(r.length===0)return null;if(n===`Home`)return r[0];if(n===`End`)return r[r.length-1];let i=r.indexOf(t);return i<0?null:r[Math.max(0,Math.min(r.length-1,i+(n===`ArrowLeft`?-1:1)))]},K=e=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let[t,r]=l(0),[i,o]=l(()=>new Set),s=d(),c=a(()=>(s.current??[]).filter(e=>e.matches(z)),[]),u=()=>r(e=>e+1),f=H(c,i,t);return p(()=>{let t=e=>{if(!W.has(e.key))return;let t=c(),n=e.target;if(!t.includes(n))return;e.preventDefault();let r=G(t,n,e.key);r&&r!==n&&r.focus()};return e.addEventListener(`keydown`,t),()=>e.removeEventListener(`keydown`,t)},[]),n`
		<slot name="tabs"></slot>
		<div class="group" role="tablist">
			<slot
				${ce(s)}
				${ae(U(e))}
				${ye({is:e=>e.matches(z),onOverflow:o})}
				@slotchange=${u}
			></slot>
		</div>
		${_e({items:f.map(([,e])=>e),overflows:f.length>0,active:f.some(([e])=>e.hasAttribute(`active`)&&!e.hidden),label:e.moreLabel,onItemClick:L(f)})}
		<slot name="stats"></slot>
	`},customElements.define(`cosmoz-tabs-next`,h(K,{observedAttributes:[`variant`,`size`,`compact-width`,`more-label`],styleSheets:[o,ie,fe]}))})))()}var J,Y,X,Z,Q,be;function $(){return($=e((()=>{ge(),pe(),_(),g(),J=e=>!e.hidden&&!e.disabled,Y=e=>e.slice().sort((e,t)=>Number(t.fallback??!1)-Number(e.fallback??!1)).find(J),X=(e,t)=>{let n=t?e.find(e=>e.name===t):void 0;return n&&J(n)?n:Y(e)},Z=(e,{hashParam:t,onActivate:n}={})=>{let[r,i]=me(t),o=d([]),s=c(()=>X(e,r??void 0),[e,r]);return{tabs:e,active:s,activated:c(()=>{let e=s?.name;return o.current=[...(o.current??[]).filter(t=>t!==e),e].filter(Boolean)},[s]),activate:i,onActivate:a(e=>{let t=e;if(t.button!==0||t.metaKey||t.ctrlKey)return;let r=e.currentTarget?.getAttribute(`name`);r&&(n?.(r),i(r))},[i,n])}},Q=({tabs:e,active:t,onActivate:r,className:i,variant:a,size:o,compactWidth:s})=>e.map(e=>{let c=de(e.title),l=e.content??c,u=e.badge||void 0;return n`<cosmoz-tab-next
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
			>${ne(e.icon,e=>e({slot:`icon`}))}${l}</cosmoz-tab-next
		>`}),be=({tabs:e,active:t,activated:n},r)=>e.filter(e=>n.includes(e.name)).map(e=>r({...e,isActive:t?.name===e.name}))})))()}function xe(){return(xe=e((()=>{w(),q(),$()})))()}export{Z as a,Q as i,$ as n,be as r,xe as t};