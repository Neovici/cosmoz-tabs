import{i as e}from"./preload-helper-usAeo7Bx.js";import{C as t,_ as n,a as r,d as i,l as a,y as o}from"./if-defined-C4UZ-NYk.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S=e((()=>{r(),s=t`
	display: flex;
	align-items: stretch;
	gap: calc(var(--cz-spacing) * 3);
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
	padding: 0 calc(var(--cz-spacing) * 0.5) calc(var(--cz-spacing) * 2.5);
	color: var(--cz-color-text-quaternary);
	text-decoration: none;
	white-space: nowrap;
	cursor: pointer;
	transition: color 0.1s linear, background-color 0.1s linear,
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
	color: var(--cz-color-text-brand);
	background-color: var(--cz-color-bg-brand);
	box-shadow: none;
`,_=t`
	flex: 1 1 0;
`,v=t`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	font-size: var(--cz-text-xs);
	font-weight: var(--cz-font-weight-medium);
	line-height: var(--cz-text-xs-line-height);
	border-radius: var(--cz-radius-full);
	padding: 0 calc(var(--cz-spacing) * 2);
	min-width: calc(var(--cz-spacing) * 5);
	max-width: 80px;
	overflow: hidden;
	text-overflow: ellipsis;
	background-color: var(--cz-color-bg-brand);
	color: var(--cz-color-text-brand);
	text-align: center;
`,y=t`
	:host {
		position: relative;
		display: flex;
		flex-direction: column;
		font-family: var(--cz-font-body);
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
	}

	.tab svg {
		${f}
	}

	.tab:hover,
	.tab[aria-selected="true"] {
		${d}
	}

	.tab:hover svg,
	.tab[aria-selected="true"] svg {
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
		${v}
	}

	#content {
		display: flex;
		flex-direction: column;
		flex: auto;
	}

	#content ::slotted(:not(slot):not([is-selected])) {
		display: none !important;
	}

	:host([variant="brand"]) .tabs {
		${m}
	}

	:host([variant="brand"]) .tab {
		${h}
	}

	:host([variant="brand"]) .tab:hover,
	:host([variant="brand"]) .tab[aria-selected="true"] {
		${g}
	}

	:host([full-width]) .tab {
		${_}
	}

	:host([full-width]:not([variant="brand"])) .tabs {
		gap: calc(var(--cz-spacing) * 4);
	}
`,b=t`
	:host {
		${s}
		flex: none;
	}

	:host::-webkit-scrollbar {
		display: none;
	}

	:host([variant="brand"]) {
		${m}
	}

	:host([full-width]:not([variant="brand"])) {
		gap: calc(var(--cz-spacing) * 4);
	}
`,x=t`
	:host {
		${c}
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
		${v}
	}

	:host([data-variant="brand"]) {
		${h}
	}

	:host([data-variant="brand"]:hover),
	:host([data-variant="brand"][active]) {
		${g}
	}

	:host([data-full-width]) {
		${_}
	}
`})),C,w,T,E,D=e((()=>{r(),C=()=>new URL(location.hash.replace(/^#!?/iu,``).replace(`%23`,`#`),location.origin),w=e=>e?()=>new URLSearchParams(C().hash.replace(`#`,``)).get(e):void 0,T=(e,t)=>{if(!e)return;let n=C(),r=new URLSearchParams(n.hash.replace(`#`,``));return t==null?r.delete(e):r.set(e,t),`#!`+Object.assign(n,{hash:r}).href.replace(location.origin,``)},E=e=>{let t=n(()=>w(e),[e]),[r,s]=i(t),c=a(r);return o(()=>void(c.current=r),[r]),o(()=>{if(t==null)return;let e=()=>{let e=t();c.current!==e&&s(e)};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[t]),[r,n(()=>e?t=>{s(t),history.pushState({},``,T(e,t))}:s,[e])]}})),O,k,A,j,M,N,P=e((()=>{O=e=>typeof e==`object`&&!!e&&e.nodeType===1,k=(e,t)=>(!t||e!==`hidden`)&&e!==`visible`&&e!==`clip`,A=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){let n=getComputedStyle(e,null);return k(n.overflowY,t)||k(n.overflowX,t)||(e=>{let t=(e=>{if(!e.ownerDocument||!e.ownerDocument.defaultView)return null;try{return e.ownerDocument.defaultView.frameElement}catch{return null}})(e);return!!t&&(t.clientHeight<e.scrollHeight||t.clientWidth<e.scrollWidth)})(e)}return!1},j=(e,t,n,r,i,a,o,s)=>a<e&&o>t||a>e&&o<t?0:a<=e&&s<=n||o>=t&&s>=n?a-e-r:o>t&&s<n||a<e&&s>n?o-t+i:0,M=e=>e.parentElement??(e.getRootNode().host||null),N=(e,t)=>{if(typeof document>`u`)return[];let{scrollMode:n,block:r,inline:i,boundary:a,skipOverflowHiddenElements:o}=t,s=typeof a==`function`?a:e=>e!==a;if(!O(e))throw TypeError(`Invalid target`);let c=document.scrollingElement||document.documentElement,l=[],u=e;for(;O(u)&&s(u);){if(u=M(u),u===c){l.push(u);break}u!=null&&u===document.body&&A(u)&&!A(document.documentElement)||u!=null&&A(u,o)&&l.push(u)}let d=window.visualViewport?.width??innerWidth,f=window.visualViewport?.height??innerHeight,{scrollX:p,scrollY:m}=window,{height:h,width:g,top:_,right:v,bottom:y,left:b}=e.getBoundingClientRect(),{top:x,right:S,bottom:C,left:w}=(e=>{let t=window.getComputedStyle(e);return{top:parseFloat(t.scrollMarginTop)||0,right:parseFloat(t.scrollMarginRight)||0,bottom:parseFloat(t.scrollMarginBottom)||0,left:parseFloat(t.scrollMarginLeft)||0}})(e),T=r===`start`||r===`nearest`?_-x:r===`end`?y+C:_+h/2-x+C,E=i===`center`?b+g/2-w+S:i===`end`?v+S:b-w,D=[];for(let e=0;e<l.length;e++){let t=l[e],{height:a,width:o,top:s,right:u,bottom:x,left:S}=t.getBoundingClientRect();if(n===`if-needed`&&_>=0&&b>=0&&y<=f&&v<=d&&(t===c&&!A(t)||_>=s&&y<=x&&b>=S&&v<=u))return D;let C=getComputedStyle(t),w=parseInt(C.borderLeftWidth,10),O=parseInt(C.borderTopWidth,10),k=parseInt(C.borderRightWidth,10),M=parseInt(C.borderBottomWidth,10),N=0,P=0,F=`offsetWidth`in t?t.offsetWidth-t.clientWidth-w-k:0,I=`offsetHeight`in t?t.offsetHeight-t.clientHeight-O-M:0,L=`offsetWidth`in t?t.offsetWidth===0?0:o/t.offsetWidth:0,R=`offsetHeight`in t?t.offsetHeight===0?0:a/t.offsetHeight:0;if(c===t)N=r===`start`?T:r===`end`?T-f:r===`nearest`?j(m,m+f,f,O,M,m+T,m+T+h,h):T-f/2,P=i===`start`?E:i===`center`?E-d/2:i===`end`?E-d:j(p,p+d,d,w,k,p+E,p+E+g,g),N=Math.max(0,N+m),P=Math.max(0,P+p);else{N=r===`start`?T-s-O:r===`end`?T-x+M+I:r===`nearest`?j(s,x,a,O,M+I,T,T+h,h):T-(s+a/2)+I/2,P=i===`start`?E-S-w:i===`center`?E-(S+o/2)+F/2:i===`end`?E-u+k+F:j(S,u,o,w,k+F,E,E+g,g);let{scrollLeft:e,scrollTop:n}=t;N=R===0?0:Math.max(0,Math.min(n+N/R,t.scrollHeight-a/R+I)),P=L===0?0:Math.max(0,Math.min(e+P/L,t.scrollWidth-o/L+F)),T+=n-N,E+=e-P}D.push({el:t,top:N,left:P})}return D}}));export{E as a,x as c,T as i,b as l,N as n,S as o,D as r,y as s,P as t};