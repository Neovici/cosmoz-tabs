import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{a as t,i as n,o as r,s as i,u as a}from"./iframe-CutESWh9.js";function o(e){l=e}function s(){l=null,u=0}function c(){return u++}var l,u;function d(){return(d=e((()=>{u=0})))()}var f,p,m,h,g,_,v;function y(){return(y=e((()=>{f=Symbol(`haunted.phase`),p=Symbol(`haunted.hook`),m=Symbol(`haunted.update`),h=Symbol(`haunted.commit`),g=Symbol(`haunted.effects`),_=Symbol(`haunted.layoutEffects`),v=`haunted.context`})))()}var b;function x(){return(x=e((()=>{d(),y(),b=class{update;host;virtual;[p];[g];[_];constructor(e,t){this.update=e,this.host=t,this[p]=new Map,this[g]=[],this[_]=[]}run(e){o(this);let t=e();return s(),t}_runEffects(e){let t=this[e];o(this);for(let e of t)e.call(this);s()}runEffects(){this._runEffects(g)}runLayoutEffects(){this._runEffects(_)}teardown(){this[p].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var ee;function te(){return(te=e((()=>{ee=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function ne(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ie(n)}}var re,ie,ae,S,C;function w(){return(w=e((()=>{x(),y(),te(),re=100,ie=Promise.resolve().then.bind(Promise.resolve()),ae=ne(),S=ne(),C=class e{renderer;host;state;[f];_updateQueued;_active;_updateCount;_processing;static maxUpdates=re;constructor(e,t){this.renderer=e,this.host=t,this.state=new b(this.update.bind(this),t),this[f]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ee(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,ae(()=>{let e=this.handlePhase(m);S(()=>{this.handlePhase(h,e),S(()=>{this.handlePhase(g),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[f]=e,e){case h:this.commit(t),this.runEffects(_);return;case m:return this.render();case g:return this.runEffects(g)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var T,oe,se,E;function D(){return(D=e((()=>{T=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},oe=e=>e?.map(e=>typeof e==`string`?T(e):e),se=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),E=se})))()}function ce(e){class t extends C{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=oe(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,le(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var le;function ue(){return(ue=e((()=>{w(),D(),le=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function de(e,...t){let n=c(),r=l[p],i=r.get(n);return i||(i=new e(n,l,...t),r.set(n,i)),i.update(...t)}function O(e){return de.bind(null,e)}var k;function A(){return(A=e((()=>{d(),y(),k=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function fe(e){return O(class extends k{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function j(){return(j=e((()=>{A()})))()}function pe(e,t){e[g].push(t)}var me;function M(){return(M=e((()=>{y(),j(),me=fe(pe)})))()}var N,P;function F(){return(F=e((()=>{A(),y(),M(),N=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,P=O(class extends k{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,pe(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};N(this.state.host).dispatchEvent(new CustomEvent(v,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function he(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(v,this)}disconnectedCallback(){this.removeEventListener(v,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(P(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function I(){return(I=e((()=>{y(),F()})))()}var L;function R(){return(R=e((()=>{A(),L=O(class extends k{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var z;function B(){return(B=e((()=>{R(),z=(e,t)=>L(()=>e,t)})))()}function ge(e,t){e[_].push(t)}var _e;function V(){return(V=e((()=>{y(),j(),_e=fe(ge)})))()}var ve;function H(){return(H=e((()=>{A(),ve=O(class extends k{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function ye(){return(ye=e((()=>{A(),O(class extends k{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var be,xe;function U(){return(U=e((()=>{A(),be=/([A-Z])/gu,xe=O(class extends k{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(be,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function Se(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Ce(e){return L(()=>Se(e),[])}function W(){return(W=e((()=>{R()})))()}function we(){return(we=e((()=>{A(),O(class extends k{update(){return this.state.host}})})))()}function Te({render:e}){let t=ce(e);return{component:t,createContext:he(t)}}function G(){return(G=e((()=>{ue(),I(),B(),M(),V(),H(),ye(),R(),F(),U(),W(),we(),A(),w()})))()}var Ee,De,Oe;function K(){return(K=e((()=>{Ee={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},De=e=>(...t)=>({_$litDirective$:e,values:t}),Oe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function ke(e){this._$AN===void 0?this._$AM=e:(J(this),this._$AM=e,Y(this))}function Ae(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)q(r[e],!1),J(r[e]);else r!=null&&(q(r,!1),J(r))}else q(this,e)}}var q,J,Y,X,je;function Z(){return(Z=e((()=>{n(),K(),q=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),q(e,t);return!0},J=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Y=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),X(t)}},X=e=>{e.type==Ee.CHILD&&(e._$AP??=Ae,e._$AQ??=ke)},je=class extends Oe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Y(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(q(this,e),J(this))}setValue(e){if(t(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function Me(){return(Me=e((()=>{K(),a(),Z(),w(),Array.prototype.includes})))()}var Ne,Pe;function Q(){return(Q=e((()=>{a(),G(),Me(),{component:Ne,createContext:Pe}=Te({render:i})})))()}function $(){return($=e((()=>{Q(),G(),D()})))()}var Fe;function Ie(){return(Ie=e((()=>{$(),Fe=T(E`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)})))()}function Le(e,t,n){return e?t(e):n?.(e)}function Re(){return(Re=e((()=>{})))()}var ze;function Be(){return(Be=e((()=>{a(),ze=e=>e??r})))()}export{A,z as C,me as D,M as E,D as M,k as O,B as S,L as T,xe as _,Ie as a,V as b,Ne as c,Z as d,De as f,U as g,Ce as h,Le as i,E as j,O as k,Q as l,W as m,ze as n,Fe as o,K as p,Re as r,$ as s,Be as t,je as u,H as v,R as w,_e as x,ve as y};