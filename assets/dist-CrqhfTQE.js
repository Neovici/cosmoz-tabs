import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,_ as n,a as r,d as i,l as a,y as o}from"./if-defined-BIUUrV0x.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{r(),s=t`
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
`,c=t`
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
`,l=t`
	outline: 2px solid var(--cz-color-fg-brand);
	outline-offset: -2px;
`,u=t`
	opacity: 0.5;
	cursor: not-allowed;
	pointer-events: none;
`,d=t`
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 -2px 0 0 var(--cz-color-fg-brand);
`,f=t`
	width: 16px;
	height: 16px;
	flex-shrink: 0;
	color: var(--cz-color-fg-quaternary);
`,p=t`
	color: var(--cz-color-fg-brand-secondary);
`,m=t`
	gap: calc(var(--cz-spacing) * 1);
	box-shadow: none;
`,h=t`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-md);
`,g=t`
	color: var(--cz-color-text-on-brand);
	background-color: var(--cz-color-bg-brand-solid);
	box-shadow: none;
`,_=t`
	gap: calc(var(--cz-spacing) * 1);
	padding: calc(var(--cz-spacing) * 1);
	border-radius: var(--cz-radius-lg);
	background-color: var(--cz-color-bg-secondary);
	box-shadow: inset 0 0 0 1px var(--cz-color-border-secondary);
`,v=t`
	padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
	border-radius: var(--cz-radius-sm);
`,y=t`
	color: var(--cz-color-text-secondary);
	background-color: var(--cz-color-bg-primary);
	box-shadow: var(--cz-shadow-sm);
`,b=t`
	color: var(--cz-color-fg-secondary-hover);
`,x=t`
	padding-block: calc(var(--cz-spacing) * 1.5);
`,S=t`
	padding-inline: calc(var(--cz-spacing) * 2);
`,C=t`
	padding: calc(var(--cz-spacing) * 0.75);
	border-radius: var(--cz-radius-md);
`,w=t`
	flex: 1 1 0;
`,T=t`
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
`,E=t`
	background-color: color-mix(
		in oklab,
		var(--cz-color-bg-brand-solid) 12%,
		var(--cz-color-bg-primary)
	);
	color: var(--cz-color-text-brand);
	box-shadow: inset 0 0 0 1px
		color-mix(
			in oklab,
			var(--cz-color-bg-brand-solid) 30%,
			var(--cz-color-bg-primary)
		);
`,D=t`
	background-color: color-mix(
		in oklab,
		var(--cz-color-bg-brand-solid) 12%,
		var(--cz-color-text-on-brand)
	);
	box-shadow: inset 0 0 0 1px
		color-mix(
			in oklab,
			var(--cz-color-bg-brand-solid) 30%,
			var(--cz-color-text-on-brand)
		);
`,O=t`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`,k=t`
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
		${s}
		flex: none;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tab {
		${c}
		${w}
	}

	.tab svg {
		${f}
	}

	.tab:hover,
	.tab[aria-selected='true'] {
		${d}
	}

	.tab:hover svg,
	.tab[aria-selected='true'] svg {
		${p}
	}

	.tab:focus-visible {
		${l}
	}

	.tab[disabled] {
		${u}
	}

	.tab[hidden] {
		display: none !important;
	}

	.badge {
		${T}
	}

	:host(:not([variant='segmented'])) .tab:hover .badge,
	:host(:not([variant='segmented'])) .tab[aria-selected='true'] .badge {
		${E}
	}

	:host([variant='segmented']) .badge {
		${O}
	}

	:host([variant='brand']) .tab:hover .badge,
	:host([variant='brand']) .tab[aria-selected='true'] .badge {
		${D}
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
		${m}
	}

	:host([variant='brand']) .tab {
		${h}
	}

	:host([variant='brand']) .tab:hover,
	:host([variant='brand']) .tab[aria-selected='true'] {
		${g}
	}

	:host([variant='brand']) .tab:hover svg,
	:host([variant='brand']) .tab[aria-selected='true'] svg {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) .tabs {
		${_}
	}

	/* The track hugs its tabs when they are not spread. */
	:host([variant='segmented'][compact-width]) .tabs {
		width: max-content;
	}

	:host([variant='segmented']) .tab {
		${v}
	}

	:host([variant='segmented']) .tab:hover,
	:host([variant='segmented']) .tab[aria-selected='true'] {
		${y}
	}

	:host([variant='segmented']) .tab:hover svg,
	:host([variant='segmented']) .tab[aria-selected='true'] svg {
		${b}
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
		${x}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) .tab {
		${S}
	}

	:host([variant='segmented'][size='sm']) .tabs {
		${C}
	}
`,A=t`
	:host {
		${s}
		flex: none;
	}

	:host::-webkit-scrollbar {
		display: none;
	}

	:host([variant='brand']) {
		${m}
	}

	:host([variant='segmented']) {
		${_}
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
		${C}
	}
`,j=t`
	:host {
		${c}
		${w}
	}

	:host(:hover),
	:host([active]) {
		${d}
	}

	:host(:focus-visible) {
		${l}
	}

	:host([disabled]) {
		${u}
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
		${f}
	}

	:host(:hover) #iconSlot::slotted(svg),
	:host([active]) #iconSlot::slotted(svg) {
		${p}
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		${T}
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		${E}
	}

	:host([variant='segmented']) .badge {
		${O}
	}

	:host([variant='brand']:hover) .badge,
	:host([variant='brand'][active]) .badge {
		${D}
	}

	:host([variant='brand']) {
		${h}
	}

	:host([variant='brand']:hover),
	:host([variant='brand'][active]) {
		${g}
	}

	:host([variant='brand']:hover) #iconSlot::slotted(svg),
	:host([variant='brand'][active]) #iconSlot::slotted(svg) {
		color: var(--cz-color-text-on-brand);
	}

	:host([variant='segmented']) {
		${v}
	}

	:host([variant='segmented']:hover),
	:host([variant='segmented'][active]) {
		${y}
	}

	:host([variant='segmented']:hover) #iconSlot::slotted(svg),
	:host([variant='segmented'][active]) #iconSlot::slotted(svg) {
		${b}
	}

	:host([compact-width]) {
		flex: 0 1 auto;
	}

	/* Last, so the size wins over whichever variant set the box above. */
	:host([size='sm']) {
		${x}
	}

	:host([size='sm']:is([variant='brand'], [variant='segmented'])) {
		${S}
	}
`})))()}var N,P,F,I;function L(){return(L=e((()=>{r(),N=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),P=e=>e?()=>new URLSearchParams(N().hash.replace(`#`,``)).get(e):void 0,F=(e,t)=>{if(!e)return;let n=N(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},I=e=>{let t=n(()=>P(e),[e]),[r,s]=i(t),c=a(r);return o(()=>void(c.current=r),[r]),o(()=>{if(t==null)return;let e=()=>{let e=t();c.current!==e&&s(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[r,n(()=>e?t=>{s(t),history.pushState({},``,F(e,t))}:s,[e])]}})))()}var R,z,B,V,H,U;function W(){return(W=e((()=>{R=e=>typeof e==`object`&&!!e&&e.nodeType===1,z=(e,t)=>(!t||e!==`hidden`)&&e!==`visible`&&e!==`clip`,B=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return z(n.overflowY,t)||z(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},V=(e,t,n,r,i,a,o,s)=>a<e&&o>t||a>e&&o<t?0:a<=e&&s<=n||o>=t&&s>=n?a-e-r:o>t&&s<n||a<e&&s>n?o-t+i:0,H=e=>e.parentElement??(e.getRootNode().host||null),U=(e,t)=>{if(typeof document>`u`)return[];let{scrollMode:n,block:r,inline:i,boundary:a,skipOverflowHiddenElements:o}=t,s=typeof a==`function`?a:e=>e!==a;if(!R(e))throw TypeError(`Invalid target`);let c=document.scrollingElement||document.documentElement,l=[],u=e;for(;R(u)&&s(u);){if(u=H(u),u===c){l.push(u);break}u!=null&&u===document.body&&B(u)&&!B(document.documentElement)||u!=null&&B(u,o)&&l.push(u)}let d=window.visualViewport?.width??innerWidth,f=window.visualViewport?.height??innerHeight,{scrollX:p,scrollY:m}=window,{height:h,width:g,top:_,right:v,bottom:y,left:b}=e.getBoundingClientRect(),{top:x,right:S,bottom:C,left:w}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),T=r===`start`||r===`nearest`?_-x:r===`end`?y+C:_+h/2-x+C,E=i===`center`?b+g/2-w+S:i===`end`?v+S:b-w,D=[];for(let e=0;e<l.length;e++){let t=l[e],{height:a,width:o,top:s,right:u,bottom:x,left:S}=t.getBoundingClientRect();if(n===`if-needed`&&_>=0&&b>=0&&y<=f&&v<=d&&(t===c&&!B(t)||_>=s&&y<=x&&b>=S&&v<=u))return D;let C=getComputedStyle(t),w=parseInt(C.borderLeftWidth,10),O=parseInt(C.borderTopWidth,10),k=parseInt(C.borderRightWidth,10),A=parseInt(C.borderBottomWidth,10),j=0,M=0,N=`offsetWidth`in t?t.offsetWidth-t.clientWidth-w-k:0,P=`offsetHeight`in t?t.offsetHeight-t.clientHeight-O-A:0,F=`offsetWidth`in t?t.offsetWidth===0?0:o/t.offsetWidth:0,I=`offsetHeight`in t?t.offsetHeight===0?0:a/t.offsetHeight:0;if(c===t)j=r===`start`?T:r===`end`?T-f:r===`nearest`?V(m,m+f,f,O,A,m+T,m+T+h,h):T-f/2,M=i===`start`?E:i===`center`?E-d/2:i===`end`?E-d:V(p,p+d,d,w,k,p+E,p+E+g,g),j=Math.max(0,j+m),M=Math.max(0,M+p);else{j=r===`start`?T-s-O:r===`end`?T-x+A+P:r===`nearest`?V(s,x,a,O,A+P,T,T+h,h):T-(s+a/2)+P/2,M=i===`start`?E-S-w:i===`center`?E-(S+o/2)+N/2:i===`end`?E-u+k+N:V(S,u,o,w,k+N,E,E+g,g);let{scrollLeft:e,scrollTop:n}=t;j=I===0?0:Math.max(0,Math.min(n+j/I,t.scrollHeight-a/I+P)),M=F===0?0:Math.max(0,Math.min(e+M/F,t.scrollWidth-o/F+N)),T+=n-j,E+=e-M}D.push({el:t,top:j,left:M})}return D}})))()}export{I as a,j as c,F as i,A as l,U as n,M as o,L as r,k as s,W as t};