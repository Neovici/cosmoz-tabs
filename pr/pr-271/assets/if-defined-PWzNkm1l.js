import{i as e}from"./preload-helper-usAeo7Bx.js";import{U as t,V as n,W as r,q as i}from"./iframe-BMy_I1KC.js";function a(e){c=e}function o(){c=null,l=0}function s(){return l++}var c,l,u=e((()=>{l=0})),d,f,p,m,h,g,_,v=e((()=>{d=Symbol(`haunted.phase`),f=Symbol(`haunted.hook`),p=Symbol(`haunted.update`),m=Symbol(`haunted.commit`),h=Symbol(`haunted.effects`),g=Symbol(`haunted.layoutEffects`),_=`haunted.context`})),ee,te=e((()=>{u(),v(),ee=class{update;host;virtual;[f];[h];[g];constructor(e,t){this.update=e,this.host=t,this[f]=new Map,this[h]=[],this[g]=[]}run(e){a(this);let t=e();return o(),t}_runEffects(e){let t=this[e];a(this);for(let e of t)e.call(this);o()}runEffects(){this._runEffects(h)}runLayoutEffects(){this._runEffects(g)}teardown(){this[f].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),ne,re=e((()=>{ne=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function y(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=x(n)}}var b,x,S,C,w,T=e((()=>{te(),v(),re(),b=100,x=Promise.resolve().then.bind(Promise.resolve()),S=y(),C=y(),w=class e{renderer;host;state;[d];_updateQueued;_active;_updateCount;_processing;static maxUpdates=b;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[d]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new ne(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,S(()=>{let e=this.handlePhase(p);C(()=>{this.handlePhase(m,e),C(()=>{this.handlePhase(h),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[d]=e,e){case m:this.commit(t),this.runEffects(g);return;case p:return this.render();case h:return this.runEffects(h)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),E,ie,ae,D,O=e((()=>{E=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},ie=e=>e?.map(e=>typeof e==`string`?E(e):e),ae=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),D=ae}));function oe(e){class t extends w{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=ie(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,k(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var k,se=e((()=>{T(),O(),k=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function ce(e,...t){let n=s(),r=c[f],i=r.get(n);return i||(i=new e(n,c,...t),r.set(n,i)),i.update(...t)}function A(e){return ce.bind(null,e)}var j,M=e((()=>{u(),v(),j=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function N(e){return A(class extends j{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var P=e((()=>{M()}));function F(e,t){e[h].push(t)}var I,L=e((()=>{v(),P(),I=N(F)})),R,z,B=e((()=>{M(),v(),L(),R=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,z=A(class extends j{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,F(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};R(this.state.host).dispatchEvent(new CustomEvent(_,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function le(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(_,this)}disconnectedCallback(){this.removeEventListener(_,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(z(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var ue=e((()=>{v(),B()})),V,H=e((()=>{M(),V=A(class extends j{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),U,W=e((()=>{H(),U=(e,t)=>V(()=>e,t)}));function de(e,t){e[g].push(t)}var G,K=e((()=>{v(),P(),G=N(de)})),q,fe=e((()=>{M(),q=A(class extends j{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),pe=e((()=>{M(),A(class extends j{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),me,he=e((()=>{M(),me=/([A-Z])/gu,A(class extends j{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(me,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e){let[t,n,r]=this.resolve(e);this.notify(n,r).defaultPrevented||Object.is(t,n)||(this.state.host[this.property]=n)}})}));function ge(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function _e(e){return V(()=>ge(e),[])}var ve=e((()=>{H()})),ye=e((()=>{M(),A(class extends j{update(){return this.state.host}})}));function be({render:e}){let t=oe(e);return{component:t,createContext:le(t)}}var J=e((()=>{se(),ue(),W(),L(),K(),fe(),pe(),H(),B(),he(),ve(),ye(),M(),T(),te(),re()})),xe,Se=e((()=>{xe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6}}));function Ce(e){this._$AN===void 0?this._$AM=e:(X(this),this._$AM=e,Te(this))}function we(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Y(r[e],!1),X(r[e]);else r!=null&&(Y(r,!1),X(r));else Y(this,e)}var Y,X,Te,Z,Ee=e((()=>{n(),Se(),Y=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Y(e,t);return!0},X=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Te=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Z(t)}},Z=e=>{e.type==xe.CHILD&&(e._$AP??=we,e._$AQ??=Ce)}}));function De(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(Q.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?De(e,t):e.teardown();break}else if(Q.call(a.addedNodes,n.nextSibling)){i.disconnect(),De(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var Q,Oe=e((()=>{Se(),i(),Ee(),T(),Q=Array.prototype.includes})),ke,Ae,je=e((()=>{i(),J(),Oe(),{component:ke,createContext:Ae}=be({render:r})})),Me=e((()=>{je(),J(),O(),J()})),Ne,Pe=e((()=>{Me(),Ne=E(D`
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
`)})),$,Fe=e((()=>{i(),$=e=>e??t}));export{D as C,M as S,V as _,Me as a,j as b,ve as c,q as d,K as f,H as g,U as h,Ne as i,_e as l,W as m,$ as n,ke as o,G as p,Pe as r,je as s,Fe as t,fe as u,L as v,O as w,A as x,I as y};