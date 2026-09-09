import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{C as t,_ as n,a as r,d as i,l as a,y as o}from"./if-defined-CDStYoJI.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=e((()=>{r(),s=t`
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
	flex: 1 1 0;
`,S=t`
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
`,C=t`
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
`,w=t`
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
`,T=t`
	padding: 2px calc(var(--cz-spacing) * 1.5);
	border-radius: var(--cz-radius-sm);
	background-color: var(--cz-color-bg-primary);
	color: var(--cz-color-text-secondary);
	box-shadow:
		inset 0 0 0 1px var(--cz-color-border-primary),
		var(--cz-shadow-xs);
`,E=t`
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
		${x}
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
		${S}
	}

	:host(:not([variant='segmented'])) .tab:hover .badge,
	:host(:not([variant='segmented'])) .tab[aria-selected='true'] .badge {
		${C}
	}

	:host([variant='segmented']) .badge {
		${T}
	}

	:host([variant='brand']) .tab:hover .badge,
	:host([variant='brand']) .tab[aria-selected='true'] .badge {
		${w}
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
`,D=t`
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
`,O=t`
	:host {
		${c}
		${x}
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
		${S}
	}

	:host(:not([variant='segmented']):hover) .badge,
	:host(:not([variant='segmented'])[active]) .badge {
		${C}
	}

	:host([variant='segmented']) .badge {
		${T}
	}

	:host([variant='brand']:hover) .badge,
	:host([variant='brand'][active]) .badge {
		${w}
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
`})))()}var A,j,M,N;function P(){return(P=e((()=>{r(),A=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),j=e=>e?()=>new URLSearchParams(A().hash.replace(`#`,``)).get(e):void 0,M=(e,t)=>{if(!e)return;let n=A(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},N=e=>{let t=n(()=>j(e),[e]),[r,s]=i(t),c=a(r);return o(()=>void(c.current=r),[r]),o(()=>{if(t==null)return;let e=()=>{let e=t();c.current!==e&&s(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[r,n(()=>e?t=>{s(t),history.pushState({},``,M(e,t))}:s,[e])]}})))()}var F,I,L,R,z,B;function V(){return(V=e((()=>{F=e=>typeof e==`object`&&!!e&&e.nodeType===1,I=(e,t)=>(!t||e!==`hidden`)&&e!==`visible`&&e!==`clip`,L=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return I(n.overflowY,t)||I(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},R=(e,t,n,r,i,a,o,s)=>a<e&&o>t||a>e&&o<t?0:a<=e&&s<=n||o>=t&&s>=n?a-e-r:o>t&&s<n||a<e&&s>n?o-t+i:0,z=e=>e.parentElement??(e.getRootNode().host||null),B=(e,t)=>{if(typeof document>`u`)return[];let{scrollMode:n,block:r,inline:i,boundary:a,skipOverflowHiddenElements:o}=t,s=typeof a==`function`?a:e=>e!==a;if(!F(e))throw TypeError(`Invalid target`);let c=document.scrollingElement||document.documentElement,l=[],u=e;for(;F(u)&&s(u);){if(u=z(u),u===c){l.push(u);break}u!=null&&u===document.body&&L(u)&&!L(document.documentElement)||u!=null&&L(u,o)&&l.push(u)}let d=window.visualViewport?.width??innerWidth,f=window.visualViewport?.height??innerHeight,{scrollX:p,scrollY:m}=window,{height:h,width:g,top:_,right:v,bottom:y,left:b}=e.getBoundingClientRect(),{top:x,right:S,bottom:C,left:w}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),T=r===`start`||r===`nearest`?_-x:r===`end`?y+C:_+h/2-x+C,E=i===`center`?b+g/2-w+S:i===`end`?v+S:b-w,D=[];for(let e=0;e<l.length;e++){let t=l[e],{height:a,width:o,top:s,right:u,bottom:x,left:S}=t.getBoundingClientRect();if(n===`if-needed`&&_>=0&&b>=0&&y<=f&&v<=d&&(t===c&&!L(t)||_>=s&&y<=x&&b>=S&&v<=u))return D;let C=getComputedStyle(t),w=parseInt(C.borderLeftWidth,10),O=parseInt(C.borderTopWidth,10),k=parseInt(C.borderRightWidth,10),A=parseInt(C.borderBottomWidth,10),j=0,M=0,N=`offsetWidth`in t?t.offsetWidth-t.clientWidth-w-k:0,P=`offsetHeight`in t?t.offsetHeight-t.clientHeight-O-A:0,F=`offsetWidth`in t?t.offsetWidth===0?0:o/t.offsetWidth:0,I=`offsetHeight`in t?t.offsetHeight===0?0:a/t.offsetHeight:0;if(c===t)j=r===`start`?T:r===`end`?T-f:r===`nearest`?R(m,m+f,f,O,A,m+T,m+T+h,h):T-f/2,M=i===`start`?E:i===`center`?E-d/2:i===`end`?E-d:R(p,p+d,d,w,k,p+E,p+E+g,g),j=Math.max(0,j+m),M=Math.max(0,M+p);else{j=r===`start`?T-s-O:r===`end`?T-x+A+P:r===`nearest`?R(s,x,a,O,A+P,T,T+h,h):T-(s+a/2)+P/2,M=i===`start`?E-S-w:i===`center`?E-(S+o/2)+N/2:i===`end`?E-u+k+N:R(S,u,o,w,k+N,E,E+g,g);let{scrollLeft:e,scrollTop:n}=t;j=I===0?0:Math.max(0,Math.min(n+j/I,t.scrollHeight-a/I+P)),M=F===0?0:Math.max(0,Math.min(e+M/F,t.scrollWidth-o/F+N)),T+=n-j,E+=e-M}D.push({el:t,top:j,left:M})}return D}})))()}export{N as a,O as c,M as i,D as l,B as n,k as o,P as r,E as s,V as t};