import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,o as n,u as r}from"./iframe-BM-LA05i.js";import{t as i}from"./cosmoz-tab-card-ytxN57ET.js";import{C as a,D as o,O as s,T as c,a as l,c as u,j as d,k as f,n as p,o as m,s as h,t as g,x as _,y as v}from"./if-defined-DWyKTCAL.js";import{n as y,r as b,t as x}from"./use-hash-param-I-BPu5sL.js";var S;function C(){return(C=e((()=>{h(),S=f(class extends s{update(){return this.state.host}})})))()}var w,T,E;function D(){return(D=e((()=>{h(),C(),w=/([A-Z])/gu,T=(e,t,n)=>{e[t]=n,e.dispatchEvent(new CustomEvent(t.replace(w,`-$1`).toLowerCase()+`-changed`,{detail:{value:n}}))},E=(e,t,n=[t])=>{let r=S();o(()=>{T(r,e,t)},n)}})))()}var O;function k(){return(k=e((()=>{D(),h(),O=e=>(o(()=>{e.dispatchEvent(new CustomEvent(`cosmoz-tab-alter`,{bubbles:!0,composed:!0}))},[e.hidden,e.disabled,e.heading,e.badge,e.icon]),E(`isSelected`,e.isSelected),{onSlot:a(({target:t})=>e.toggleAttribute(`has-cards`,t.assignedElements().some(e=>e.matches(`cosmoz-tab-card, [has-cards]`))),[])})})))()}var A,j;function M(){return(M=e((()=>{l(),h(),i(),k(),A=d`
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
`,j=e=>{let{onSlot:n}=O(e);return t`<slot @slotchange=${n}></slot>`},customElements.define(`cosmoz-tab`,class extends u(j,{observedAttributes:[`hidden`,`disabled`,`heading`,`badge`,`is-selected`],styleSheets:[m,A]}){set hidden(e){super.hidden=e,this._scheduler.update()}get hidden(){return super.hidden}})})))()}var N;function P(){return(P=e((()=>{r(),g(),N=({selectedTab:e,onSelect:r,href:i})=>(a,o,s)=>{let c=e===a;return t`<a
			class="tab"
			tabindex=${c?`0`:`-1`}
			role="tab"
			part=${[`tab`,o===0&&`first-tab`,o===s.length-1&&`last-tab`,c&&`selected-tab`].filter(Boolean).join(` `)}
			?hidden=${a.hidden}
			?disabled=${a.disabled}
			aria-selected=${c?`true`:`false`}
			@click=${r}
			.tab=${a}
			href=${p(i(a))}
		>
			${a.icon??n}
			<span>${a.heading}</span>
			${a.badge?t`<div class="badge" part="badge" title=${a.badge}>
						${a.badge}
				  </div>`:n}
		</a>`}})))()}var F,I,ee,te,ne,re,ie,ae,L,R,z,B,V,H,U,W,G,K,q,J,oe,se;function ce(){return(ce=e((()=>{h(),F=d`
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
`,I=d`
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
`,ee=d`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,te=d`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,ne=d`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,re=d`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,ie=d`
	color: var(--cz-color-fg-brand-secondary);
`,ae=d`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,L=d`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,R=d`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,z=d`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,B=d`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,V=d`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,H=d`
	color: var(--cz-color-fg-secondary-hover);
`,U=d`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,W=d`
	padding-inline: calc(var(--cz-spacing) * 2);
`,G=d`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,K=d`
	flex: 1 1 0;
`,q=d`
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
`,J=d`
	background-color: var(--cz-color-bg-tertiary);
	color: var(--cz-color-text-primary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-primary);
`,oe=d`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`,se=d`
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
		${F}
		flex: none;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tab {
		${I}
		${K}
	}

	.tab svg {
		${re}
	}

	.tab:hover,
	.tab[aria-selected='true'] {
		${ne}
	}

	.tab:hover svg,
	.tab[aria-selected='true'] svg {
		${ie}
	}

	.tab:focus-visible {
		${ee}
	}

	.tab[disabled] {
		${te}
	}

	.tab[hidden] {
		display: none !important;
	}

	.badge {
		${q}
	}

	:host(:not([variant='segmented'])) .tab:hover .badge,
	:host(:not([variant='segmented'])) .tab[aria-selected='true'] .badge {
		${J}
	}

	:host([variant='segmented']) .badge {
		${oe}
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
		${ae}
	}

	:host([variant='brand']) .tab {
		${L}
	}

	:host([variant='brand']) .tab:hover,
	:host([variant='brand']) .tab[aria-selected='true'] {
		${R}
	}

	:host([variant='brand']) .tab:hover svg,
	:host([variant='brand']) .tab[aria-selected='true'] svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .tabs {
		${z}
	}

	/* The track hugs its tabs when they are not spread. */
	:host([variant='segmented'][compact-width]) .tabs {
		width: max-content;
	}

	:host([variant='segmented']) .tab {
		${B}
	}

	:host([variant='segmented']) .tab:hover,
	:host([variant='segmented']) .tab[aria-selected='true'] {
		${V}
	}

	:host([variant='segmented']) .tab:hover svg,
	:host([variant='segmented']) .tab[aria-selected='true'] svg {
		${H}
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
		${U}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .tab {
		${W}
	}

	:host([variant='segmented'][size='sm']) .tabs {
		${G}
	}
`,d`
	:host {
		${F}
		flex: none;
	}

	:host::-webkit-scrollbar {
		display: none;
	}

	:host([variant='brand']) {
		${ae}
	}

	:host([variant='segmented']) {
		${z}
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
		${G}
	}
`,d`
	:host {
		${I}
		${K}
	}

	:host(:hover),
	:host([active]) {
		${ne}
	}

	:host(:focus-visible) {
		${ee}
	}

	:host([disabled]) {
		${te}
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
		${re}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${ie}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${q}
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		${J}
	}

	:host([variant='segmented']) .badge {
		${oe}
	}

	:host([variant='brand']) {
		${L}
	}

	:host([variant='brand']:hover),
	:host([variant='brand'][active]) {
		${R}
	}

	:host([variant='brand']:hover) #iconSlot::slotted(svg),
	:host([variant='brand'][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		${B}
	}

	:host([variant='segmented']:hover),
	:host([variant='segmented'][active]) {
		${V}
	}

	:host([variant='segmented']:hover) #iconSlot::slotted(svg),
	:host([variant='segmented'][active]) #iconSlot::slotted(svg) {
		${H}
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		${U}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		${W}
	}
`})))()}var le,ue,Y,X,de,fe;function pe(){return(pe=e((()=>{le=e=>typeof e==`object`&&!!e&&e.nodeType===1,ue=(e,t)=>(!t||e!==`hidden`)&&e!==`visible`&&e!==`clip`,Y=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return ue(n.overflowY,t)||ue(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},X=(e,t,n,r,i,a,o,s)=>a<e&&o>t||a>e&&o<t?0:a<=e&&s<=n||o>=t&&s>=n?a-e-r:o>t&&s<n||a<e&&s>n?o-t+i:0,de=e=>e.parentElement??(e.getRootNode().host||null),fe=(e,t)=>{if(typeof document>`u`)return[];let{scrollMode:n,block:r,inline:i,boundary:a,skipOverflowHiddenElements:o}=t,s=typeof a==`function`?a:e=>e!==a;if(!le(e))throw TypeError(`Invalid target`);let c=document.scrollingElement||document.documentElement,l=[],u=e;for(;le(u)&&s(u);){if(u=de(u),u===c){l.push(u);break}u!=null&&u===document.body&&Y(u)&&!Y(document.documentElement)||u!=null&&Y(u,o)&&l.push(u)}let d=window.visualViewport?.width??innerWidth,f=window.visualViewport?.height??innerHeight,{scrollX:p,scrollY:m}=window,{height:h,width:g,top:_,right:v,bottom:y,left:b}=e.getBoundingClientRect(),{top:x,right:S,bottom:C,left:w}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),T=r===`start`||r===`nearest`?_-x:r===`end`?y+C:_+h/2-x+C,E=i===`center`?b+g/2-w+S:i===`end`?v+S:b-w,D=[];for(let e=0;e<l.length;e++){let t=l[e],{height:a,width:o,top:s,right:u,bottom:x,left:S}=t.getBoundingClientRect();if(n===`if-needed`&&_>=0&&b>=0&&y<=f&&v<=d&&(t===c&&!Y(t)||_>=s&&y<=x&&b>=S&&v<=u))return D;let C=getComputedStyle(t),w=parseInt(C.borderLeftWidth,10),O=parseInt(C.borderTopWidth,10),k=parseInt(C.borderRightWidth,10),A=parseInt(C.borderBottomWidth,10),j=0,M=0,N=`offsetWidth`in t?t.offsetWidth-t.clientWidth-w-k:0,P=`offsetHeight`in t?t.offsetHeight-t.clientHeight-O-A:0,F=`offsetWidth`in t?t.offsetWidth===0?0:o/t.offsetWidth:0,I=`offsetHeight`in t?t.offsetHeight===0?0:a/t.offsetHeight:0;if(c===t)j=r===`start`?T:r===`end`?T-f:r===`nearest`?X(m,m+f,f,O,A,m+T,m+T+h,h):T-f/2,M=i===`start`?E:i===`center`?E-d/2:i===`end`?E-d:X(p,p+d,d,w,k,p+E,p+E+g,g),j=Math.max(0,j+m),M=Math.max(0,M+p);else{j=r===`start`?T-s-O:r===`end`?T-x+A+P:r===`nearest`?X(s,x,a,O,A+P,T,T+h,h):T-(s+a/2)+P/2,M=i===`start`?E-S-w:i===`center`?E-(S+o/2)+N/2:i===`end`?E-u+k+N:X(S,u,o,w,k+N,E,E+g,g);let{scrollLeft:e,scrollTop:n}=t;j=I===0?0:Math.max(0,Math.min(n+j/I,t.scrollHeight-a/I+P)),M=F===0?0:Math.max(0,Math.min(e+M/F,t.scrollWidth-o/F+N)),T+=n-j,E+=e-M}D.push({el:t,top:j,left:M})}return D}})))()}var Z,Q,$,me,he;function ge(){return(ge=e((()=>{Z=e=>!e.hidden&&!e.disabled,Q=e=>e.getAttribute(`name`),$=e=>e.find(Z),me=(e,t)=>{if(t==null)return $(e);let n=e.find(e=>Q(e)===t);if(n==null)return $(e);if(Z(n))return n;let r=$(e);return r&&(r._fallbackFor=n),r},he=e=>e.assignedElements().flatMap(e=>e.matches(`cosmoz-tab`)?[e]:e.matches(`slot`)?he(e):[])})))()}var _e,ve,ye;function be(){return(be=e((()=>{x(),D(),h(),pe(),ge(),_e=(e,t)=>{o(()=>{if(T(e,`selectedItem`,t),t==null)return;let n=Q(t);n!==e.selected&&requestAnimationFrame(()=>T(e,`selected`,n??void 0)),t.toggleAttribute(`is-selected`,!0);let r={composed:!0};return t._active||=(t.dispatchEvent(new CustomEvent(`tab-first-select`,r)),!0),t.dispatchEvent(new CustomEvent(`tab-select`,r)),e.noResize||requestAnimationFrame(()=>window.dispatchEvent(new Event(`resize`))),()=>{t.toggleAttribute(`is-selected`,!1),t._fallbackFor=void 0}},[t])},ve=(e,t,n)=>{_(()=>{let t=e.shadowRoot?.querySelector(`a[aria-selected=true]`);if(!t)return;let n=requestAnimationFrame(()=>fe(t,{block:`nearest`,inline:`center`,boundary:t.parentElement,scrollMode:`if-needed`}).forEach(({el:e,top:t,left:n})=>e.scroll({top:t,left:n,behavior:`smooth`})));return()=>cancelAnimationFrame(n)},[t,n])},ye=e=>{let{selected:t,hashParam:n}=e,[r,i]=v([]),[s]=b(n),l=n==null||s==null&&t!=null?t:s,u=c(()=>me(r,l),[r,l]);_e(e,u),o(()=>{let t=t=>{t.stopPropagation();let n=t.target;u!=null&&u._fallbackFor===n&&Z(n)&&(u._fallbackFor=void 0,e.selected=Q(n)??void 0),i(e=>e.slice())};return e.addEventListener(`cosmoz-tab-alter`,t),()=>e.removeEventListener(`cosmoz-tab-alter`,t)},[u]),ve(e,u,r);let d=a(e=>Z(e)&&n!=null?y(n,Q(e)):void 0,[n]);return{tabs:r,selectedTab:u,onSlot:a(({target:e})=>requestAnimationFrame(()=>i(he(e))),[]),onSelect:a(t=>{if(t.button!==0||t.metaKey||t.ctrlKey)return;let{tab:r}=t.currentTarget;T(e,`selected`,Q(r)??void 0),n!=null&&(t.preventDefault(),window.history.pushState({},``,d(r)),requestAnimationFrame(()=>window.dispatchEvent(new CustomEvent(`hashchange`))))},[n,d]),href:d}}})))()}var xe;function Se(){return(Se=e((()=>{l(),h(),M(),P(),ce(),be(),xe=(e,n)=>{e.getAttribute(`variant`)||e.setAttribute(`variant`,`brand`);let{tabs:r,onSlot:i,...a}=ye(e);return t`
		${n?n(t`${r.map(N(a))}`):t`<div class="tabs" part="tabs" role="tablist">
					<slot name="tabs"></slot>
					${r.map(N(a))}
					<slot name="stats"></slot>
				</div>`}

		<div id="content" part="content">
			<slot @slotchange=${i}></slot>
		</div>
	`},customElements.define(`cosmoz-tabs`,u(xe,{observedAttributes:[`selected`,`hash-param`,`no-resize`,`variant`,`compact-width`],styleSheets:[m,se]}))})))()}export{se as i,Se as n,ce as r,xe as t};