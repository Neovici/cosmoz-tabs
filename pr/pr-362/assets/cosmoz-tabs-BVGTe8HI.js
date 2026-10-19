import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,o as n,u as r}from"./iframe-B492NPTe.js";import{t as i}from"./cosmoz-tab-card-C-ja_pKD.js";import{B as a,C as o,G as s,H as c,I as l,J as u,K as d,R as f,S as p,T as m,W as h,v as g,w as _,y as v}from"./untitled-rlp6-76X.js";import{c as y,i as b,l as x,n as S,o as C,r as w,s as T,t as E,u as D}from"./use-hash-param-DWEYutUa.js";var O;function k(){return(k=e((()=>{_(),O=d(class extends s{update(){return this.state.host}})})))()}var A,j,M;function N(){return(N=e((()=>{_(),k(),A=/([A-Z])/gu,j=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(A,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},M=(e,t,n=[t])=>{let r=O();h(()=>{j(r,e,t)},n)}})))()}var P;function F(){return(F=e((()=>{N(),_(),P=e=>(h(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-tab-alter`,{bubbles:!0,composed:!0}))},[e.hidden,e.disabled,e.heading,e.badge,e.icon]),M(`isSelected`,e.isSelected),{onSlot:a(({target:t})=>e.toggleAttribute(`has-cards`,t.assignedElements().some(e=>e.matches(`cosmoz-tab-card, [has-cards]`))),[])})})))()}var I,ee;function te(){return(te=e((()=>{p(),_(),i(),F(),I=u`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		flex: 1 1 auto;
		padding-inline: calc(var(--cz-spacing) * 3);
		max-height: 100%;
	}

	:host([disabled]),
	:host([hidden]) {
		display: none !important;
	}

	:host([has-cards]) {
		flex-flow: row wrap;
	}
`,ee=e=>{let{onSlot:n}=P(e);return t`<slot @slotchange=${n}></slot>`},customElements.define(`cosmoz-tab`,class extends m(ee,{observedAttributes:[`hidden`,`disabled`,`heading`,`badge`,`is-selected`],styleSheets:[o,I]}){set hidden(e){super.hidden=e,this._scheduler.update()}get hidden(){return super.hidden}})})))()}var ne,re,ie,ae;function oe(){return(oe=e((()=>{r(),g(),ne=e=>t`
	${e.icon??n}
	<span>${e.heading}</span>
	${e.badge?t`<div class="badge" part="badge" title=${e.badge}>
				${e.badge}
			</div>`:n}
`,re=({selectedTab:e,onSelect:n,href:r,overflowing:i})=>(a,o,s)=>{let c=e===a;return t`<a
			class="tab"
			tabindex=${c?`0`:`-1`}
			role="tab"
			part=${[`tab`,o===0&&`first-tab`,o===s.length-1&&`last-tab`,c&&`selected-tab`].filter(Boolean).join(` `)}
			?hidden=${a.hidden}
			?disabled=${a.disabled}
			?overflowing=${i?.includes(a)}
			aria-selected=${c?`true`:`false`}
			@click=${n}
			.tab=${a}
			href=${v(r(a))}
		>
			${ne(a)}
		</a>`},ie=e=>{let t=e.currentTarget;e.key!==`Enter`&&e.key!==` `||t.hasAttribute(`disabled`)||(e.preventDefault(),t.click())},ae=({selectedTab:e,onSelect:n,href:r})=>i=>{let a=e===i;return t`<a
			class="menu-tab"
			tabindex="0"
			role="tab"
			part=${a?`menu-tab selected-menu-tab`:`menu-tab`}
			?hidden=${i.hidden}
			?disabled=${i.disabled}
			aria-disabled=${v(i.disabled?`true`:void 0)}
			aria-selected=${a?`true`:`false`}
			@click=${n}
			@keydown=${ie}
			.tab=${i}
			href=${v(r(i))}
		>
			${ne(i)}
		</a>`}})))()}var se,L,R,z,B,V,H,U,W,G,K,q,J,ce,le,ue,de,fe,pe,me,he,ge,_e;function ve(){return(ve=e((()=>{_(),se=u`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
	padding-inline: calc(var(--cz-spacing) * 3);
	font-family: var(--cz-font-body);
	font-size: var(--cz-text-sm);
	line-height: var(--cz-text-sm-line-height);
	font-weight: var(--cz-font-weight-semibold);
	box-shadow: inset 0 -1px 0 0 var(--cz-color-border-secondary);
	overflow-x: auto;
	scrollbar-width: none;
	-webkit-overflow-scrolling: auto;
`,L=u`
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
`,R=u`
	outline: 2px solid var(--cz-color-focus-ring, var(--cz-color-fg-brand));
	outline-offset: -2px;
`,z=u`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,B=u`
	color: var(--cz-color-text-secondary);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-border-primary);
`,V=u`
	color: var(--cz-color-text-primary);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-primary);
`,H=u`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,U=u`
	color: var(--cz-color-fg-secondary);
`,W=u`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,G=u`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,K=u`
	color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
	background-color: var(
		--cz-color-bg-action-solid,
		var(--cz-color-bg-brand-solid)
	);
	box-shadow: none;
`,q=u`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,J=u`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,ce=u`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,le=u`
	color: var(--cz-color-fg-secondary-hover);
`,ue=u`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,de=u`
	padding-inline: calc(var(--cz-spacing) * 2);
`,fe=u`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,pe=u`
	flex: 1 1 0;
`,me=u`
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
`,he=u`
	background-color: var(--cz-color-bg-tertiary);
	color: var(--cz-color-text-primary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
`,ge=u`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`,_e=u`
	:host {
		position: relative;
		display: flex;
		flex-direction: column;
		font-family: var(--cz-font-body);
		gap: calc(var(--cz-spacing) * 3);
	}

	:host([hidden]) {
		display: none;
	}

	.tabs {
		${se}
		flex: none;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	/* The band: a wrapping row clipped to its first line (useOverflow caps it
	   at the tallest tab); the tabs that wrap past it are in the menu. */
	.band {
		display: flex;
		flex: 1 1 0;
		flex-wrap: wrap;
		gap: inherit;
		min-width: 0;
		overflow: clip;
	}

	:host([compact-width]) .band {
		flex: 0 1 auto;
	}

	.tab[overflowing] {
		visibility: hidden;
	}

	.menu-tab {
		${L}
		justify-content: flex-start;
		gap: calc(var(--cz-spacing) * 2);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cz-radius-sm);
	}

	.menu-tab:hover {
		color: var(--cz-color-text-secondary);
		background-color: var(--cz-color-bg-primary-hover);
	}

	.menu-tab[aria-selected='true'] {
		${K}
	}

	.menu-tab svg {
		${H}
	}

	.menu-tab[aria-selected='true'] svg {
		color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
	}

	.menu-tab:focus-visible {
		${R}
	}

	.menu-tab[disabled] {
		${z}
	}

	.menu-tab[hidden] {
		display: none !important;
	}

	.tab {
		${L}
		${pe}
	}

	.tab svg {
		${H}
	}

	.tab:hover {
		${B}
	}

	.tab[aria-selected='true'] {
		${V}
	}

	.tab:hover svg,
	.tab[aria-selected='true'] svg {
		${U}
	}

	.tab:focus-visible {
		${R}
	}

	.tab[disabled] {
		${z}
	}

	.tab[hidden] {
		display: none !important;
	}

	.badge {
		${me}
	}

	:host(:not([variant='segmented'])) .tab:hover .badge,
	:host(:not([variant='segmented'])) .tab[aria-selected='true'] .badge,
	:host(:not([variant='segmented'])) .menu-tab:hover .badge,
	:host(:not([variant='segmented'])) .menu-tab[aria-selected='true'] .badge {
		${he}
	}

	:host([variant='segmented']) .badge {
		${ge}
	}

	#content {
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#content ::slotted(:not(slot):not([is-selected])) {
		display: none !important;
	}

	:host([variant='brand']) .tabs {
		${W}
	}

	:host([variant='brand']) .tab {
		${G}
	}

	:host([variant='brand']) .tab:hover,
	:host([variant='brand']) .tab[aria-selected='true'] {
		${K}
	}

	:host([variant='brand']) .tab:hover svg,
	:host([variant='brand']) .tab[aria-selected='true'] svg {
		color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
	}

	:host([variant='segmented']) .tabs {
		${q}
	}

	/* The track hugs its tabs when they are not spread. */
	:host([variant='segmented'][compact-width]) .tabs {
		box-sizing: border-box;
		width: max-content;
		max-width: 100%;
	}

	:host([variant='segmented']) .tab {
		${J}
	}

	:host([variant='segmented']) .tab:hover,
	:host([variant='segmented']) .tab[aria-selected='true'] {
		${ce}
	}

	:host([variant='segmented']) .tab:hover svg,
	:host([variant='segmented']) .tab[aria-selected='true'] svg {
		${le}
	}

	:host([compact-width]) .tab {
		flex: 0 1 auto;
	}

	:host(:not([compact-width]):not([variant='brand']):not([variant='segmented']))
		.tabs {
		gap: calc(var(--cz-spacing) * 4);
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) .tab {
		${ue}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .tab {
		${de}
	}

	:host([variant='segmented'][size='sm']) .tabs {
		${fe}
	}
`,u`
	:host {
		${se}
		flex: none;
	}

	:host::-webkit-scrollbar {
		display: none;
	}

	:host([variant='brand']) {
		${W}
	}

	:host([variant='segmented']) {
		${q}
	}

	/* The track hugs its tabs when they are not spread. */
	:host([variant='segmented'][compact-width]) {
		width: max-content;
	}

	:host(
		:not([compact-width]):not([variant='brand']):not([variant='segmented'])
	) {
		gap: calc(var(--cz-spacing) * 4);
	}

	:host([variant='segmented'][size='sm']) {
		${fe}
	}
`,u`
	:host {
		${L}
		${pe}
	}

	:host(:hover) {
		${B}
	}

	:host([active]) {
		${V}
	}

	:host(:focus-visible) {
		${R}
	}

	:host([disabled]) {
		${z}
	}

	:host([hidden]) {
		display: none !important;
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
		${H}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${U}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${me}
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		${he}
	}

	:host([variant='segmented']) .badge {
		${ge}
	}

	:host([variant='brand']) {
		${G}
	}

	:host([variant='brand']:hover),
	:host([variant='brand'][active]) {
		${K}
	}

	:host([variant='brand']:hover) #iconSlot::slotted(svg),
	:host([variant='brand'][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-action, var(--cz-color-text-on-brand));
	}

	:host([variant='segmented']) {
		${J}
	}

	:host([variant='segmented']:hover),
	:host([variant='segmented'][active]) {
		${ce}
	}

	:host([variant='segmented']:hover) #iconSlot::slotted(svg),
	:host([variant='segmented'][active]) #iconSlot::slotted(svg) {
		${le}
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		${ue}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		${de}
	}
`})))()}var ye,be;function xe(){return(xe=e((()=>{_(),ye=(e,t)=>e.length===t.length&&e.every((e,n)=>e===t[n]),be=e=>{let[t,n]=l([]),r=c(()=>({clipped:new Map}),[]);return f(()=>{let t=e.shadowRoot?.querySelector(`.band`)??void 0;if(r.band!==t&&(r.observer?.disconnect(),r.clipped.clear(),r.band=t,r.observer=t?new IntersectionObserver(e=>{e.forEach(({target:e,boundingClientRect:t,intersectionRect:n})=>r.clipped.set(e,t.height>0&&n.height===0));let i=[...t.querySelectorAll(`:scope > .tab`)].filter(e=>r.clipped.get(e)).map(e=>e.tab);n(e=>ye(e,i)?e:i)},{root:t,threshold:[0,1]}):void 0),!t||!r.observer){n(e=>e.length?[]:e);return}let i=[...t.querySelectorAll(`:scope > .tab`)];t.style.maxHeight=``,t.style.maxHeight=`${Math.max(0,...i.map(e=>e.offsetHeight))}px`,r.clipped.forEach((e,t)=>{i.includes(t)||(r.clipped.delete(t),r.observer?.unobserve(t))}),i.forEach(e=>{r.observer?.unobserve(e),r.observer?.observe(e)})}),f(()=>()=>{r.observer?.disconnect(),r.band=void 0},[]),t}})))()}var Se,Ce,Y,X,we,Te;function Ee(){return(Ee=e((()=>{Se=e=>typeof e==`object`&&!!e&&e.nodeType===1,Ce=(e,t)=>(!t||e!==`hidden`)&&e!==`visible`&&e!==`clip`,Y=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return Ce(n.overflowY,t)||Ce(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},X=(e,t,n,r,i,a,o,s)=>a<e&&o>t||a>e&&o<t?0:a<=e&&s<=n||o>=t&&s>=n?a-e-r:o>t&&s<n||a<e&&s>n?o-t+i:0,we=e=>e.parentElement??(e.getRootNode().host||null),Te=(e,t)=>{if(typeof document>`u`)return[];let{scrollMode:n,block:r,inline:i,boundary:a,skipOverflowHiddenElements:o}=t,s=typeof a==`function`?a:e=>e!==a;if(!Se(e))throw TypeError(`Invalid target`);let c=document.scrollingElement||document.documentElement,l=[],u=e;for(;Se(u)&&s(u);){if(u=we(u),u===c){l.push(u);break}u!=null&&u===document.body&&Y(u)&&!Y(document.documentElement)||u!=null&&Y(u,o)&&l.push(u)}let d=window.visualViewport?.width??innerWidth,f=window.visualViewport?.height??innerHeight,{scrollX:p,scrollY:m}=window,{height:h,width:g,top:_,right:v,bottom:y,left:b}=e.getBoundingClientRect(),{top:x,right:S,bottom:C,left:w}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),T=r===`start`||r===`nearest`?_-x:r===`end`?y+C:_+h/2-x+C,E=i===`center`?b+g/2-w+S:i===`end`?v+S:b-w,D=[];for(let e=0;e<l.length;e++){let t=l[e],{height:a,width:o,top:s,right:u,bottom:x,left:S}=t.getBoundingClientRect();if(n===`if-needed`&&_>=0&&b>=0&&y<=f&&v<=d&&(t===c&&!Y(t)||_>=s&&y<=x&&b>=S&&v<=u))return D;let C=getComputedStyle(t),w=parseInt(C.borderLeftWidth,10),O=parseInt(C.borderTopWidth,10),k=parseInt(C.borderRightWidth,10),A=parseInt(C.borderBottomWidth,10),j=0,M=0,N=`offsetWidth`in t?t.offsetWidth-t.clientWidth-w-k:0,P=`offsetHeight`in t?t.offsetHeight-t.clientHeight-O-A:0,F=`offsetWidth`in t?t.offsetWidth===0?0:o/t.offsetWidth:0,I=`offsetHeight`in t?t.offsetHeight===0?0:a/t.offsetHeight:0;if(c===t)j=r===`start`?T:r===`end`?T-f:r===`nearest`?X(m,m+f,f,O,A,m+T,m+T+h,h):T-f/2,M=i===`start`?E:i===`center`?E-d/2:i===`end`?E-d:X(p,p+d,d,w,k,p+E,p+E+g,g),j=Math.max(0,j+m),M=Math.max(0,M+p);else{j=r===`start`?T-s-O:r===`end`?T-x+A+P:r===`nearest`?X(s,x,a,O,A+P,T,T+h,h):T-(s+a/2)+P/2,M=i===`start`?E-S-w:i===`center`?E-(S+o/2)+N/2:i===`end`?E-u+k+N:X(S,u,o,w,k+N,E,E+g,g);let{scrollLeft:e,scrollTop:n}=t;j=I===0?0:Math.max(0,Math.min(n+j/I,t.scrollHeight-a/I+P)),M=F===0?0:Math.max(0,Math.min(e+M/F,t.scrollWidth-o/F+N)),T+=n-j,E+=e-M}D.push({el:t,top:j,left:M})}return D}})))()}var Z,Q,$,De,Oe;function ke(){return(ke=e((()=>{Z=e=>!e.hidden&&!e.disabled,Q=e=>e.getAttribute(`name`),$=e=>e.find(Z),De=(e,t)=>{if(t==null)return $(e);let n=e.find(e=>Q(e)===t);if(n==null)return $(e);if(Z(n))return n;let r=$(e);return r&&(r._fallbackFor=n),r},Oe=e=>e.assignedElements().flatMap(e=>e.matches(`cosmoz-tab`)?[e]:e.matches(`slot`)?Oe(e):[])})))()}var Ae,je,Me;function Ne(){return(Ne=e((()=>{E(),N(),_(),Ee(),ke(),Ae=(e,t)=>{h(()=>{if(j(e,`selectedItem`,t),t==null)return;let n=Q(t);n!==e.selected&&requestAnimationFrame(()=>j(e,`selected`,n??void 0)),t.toggleAttribute(`is-selected`,!0);let r={composed:!0};return t._active||=(t.dispatchEvent(new CustomEvent(`tab-first-select`,r)),!0),t.dispatchEvent(new CustomEvent(`tab-select`,r)),e.noResize||requestAnimationFrame(()=>window.dispatchEvent(new Event(`resize`))),()=>{t.toggleAttribute(`is-selected`,!1),t._fallbackFor=void 0}},[t])},je=(e,t,n)=>{f(()=>{let t=e.shadowRoot?.querySelector(`a[aria-selected=true]`);if(!t)return;let n=requestAnimationFrame(()=>Te(t,{block:`nearest`,inline:`center`,boundary:t.parentElement,scrollMode:`if-needed`}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`})));return()=>cancelAnimationFrame(n)},[t,n])},Me=e=>{let{selected:t,hashParam:n}=e,[r,i]=l([]),[o]=w(n),s=n==null||o==null&&t!=null?t:o,u=c(()=>De(r,s),[r,s]);Ae(e,u),h(()=>{let t=t=>{t.stopPropagation();let n=t.target;u!=null&&u._fallbackFor===n&&Z(n)&&(u._fallbackFor=void 0,e.selected=Q(n)??void 0),i(e=>e.slice())};return e.addEventListener(`cosmoz-tab-alter`,t),()=>e.removeEventListener(`cosmoz-tab-alter`,t)},[u]),je(e,u,r);let d=a(e=>Z(e)&&n!=null?S(n,Q(e)):void 0,[n]);return{tabs:r,selectedTab:u,onSlot:a(({target:e})=>requestAnimationFrame(()=>i(Oe(e))),[]),onSelect:a(t=>{if(t.button!==0||t.metaKey||t.ctrlKey)return;let{tab:r}=t.currentTarget;j(e,`selected`,Q(r)??void 0),n!=null&&(t.preventDefault(),window.history.pushState({},``,d(r)),requestAnimationFrame(()=>window.dispatchEvent(new CustomEvent(`hashchange`))))},[n,d]),href:d}}})))()}var Pe;function Fe(){return(Fe=e((()=>{p(),_(),te(),y(),b(),oe(),ve(),xe(),Ne(),Pe=(e,n)=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let{tabs:r,onSlot:i,...a}=Me(e),o=be(e);return t`
		${n?n(t`${r.map(re(a))}`):t`<div class="tabs" part="tabs">
					<slot name="tabs"></slot>
					<div class="band" role="tablist">
						${r.map(re({...a,overflowing:o}))}
					</div>
					${D({items:o.map(ae(a)),overflows:o.length>0,active:a.selectedTab!=null&&o.includes(a.selectedTab),label:e.moreLabel,onItemClick:e=>{x(e)&&e.target.closest(`.menu-tab`)&&T(e.target)}})}
					<slot name="stats"></slot>
				</div>`}

		<div id="content" part="content">
			<slot @slotchange=${i}></slot>
		</div>
	`},customElements.define(`cosmoz-tabs`,m(Pe,{observedAttributes:[`selected`,`hash-param`,`no-resize`,`variant`,`compact-width`,`more-label`],styleSheets:[o,_e,C]}))})))()}export{_e as i,Fe as n,ve as r,Pe as t};