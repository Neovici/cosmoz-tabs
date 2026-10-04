import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t}from"./iframe-DfeUzwQo.js";import{D as n,a as r,c as i,i as a,j as o,o as s,s as c,y as l}from"./if-defined-C0z6o_6e.js";var u,d;function f(){return(f=e((()=>{u={duration:250},d=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...u,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var p,m;function h(){return(h=e((()=>{f(),p=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},m=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=d(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){p(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){if(e===`opened`){let e=n!=null;return this.isConnected?this.toggle(this,e):p(this,e)}}},customElements.define(`cosmoz-collapse`,m)})))()}function g(){return(g=e((()=>{h()})))()}var _,v,y;function b(){return(b=e((()=>{g(),r(),c(),_=()=>t`
	<svg
		class="expand-more-icon"
		viewBox="0 0 24 24"
		preserveAspectRatio="xMidYMid meet"
		focusable="false"
		width="24"
		height="24"
	>
		<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
	</svg>
`,v=e=>{let{heading:r,collapsable:i,collapsed:o}=e,[s,c]=l(!!o),u=()=>{if(i)return c(e=>!e)};return n(()=>{e.toggleAttribute(`collapsed`,s)},[s]),t`${a(r,()=>t`<div class="header" part="header">
					${a(i,()=>t`
							<div
								@click=${u}
								class="collapse-icon"
								part="collapse-icon"
							>
								<slot name="collapse-icon">${_()}</slot>
							</div>
						`)}
					<h1 class="heading" @click=${u} part="heading">
						${r}<slot name="after-title"></slot>
					</h1>
					<slot name="card-actions"></slot>
				</div>`)}

		<cosmoz-collapse class="collapse" ?opened=${!s}>
			<div class="content" part="content">
				<slot></slot>
			</div>
		</cosmoz-collapse>`},y=o`
	:host {
		display: block;
		position: relative;
		box-sizing: border-box;
		align-self: flex-start;
		font-family: var(--cz-font-body, inherit);
		color: var(--cosmoz-tab-card-heading-color, var(--cz-color-text-primary));
		background-color: var(
			--cosmoz-tab-card-bg-color,
			var(--cz-color-bg-primary)
		);
		border: 1px solid
			var(--cosmoz-tab-card-border-color, var(--cz-color-border-secondary));
		border-radius: var(--cosmoz-tab-card-border-radius, var(--cz-radius-xl));
		box-shadow: var(--cosmoz-tab-card-shadow, var(--cz-shadow-xs));
		margin: var(--cosmoz-tab-card-margin, calc(var(--cz-spacing) * 2));
		padding: var(--cosmoz-tab-card-padding, 10px 20px);
		width: var(--cosmoz-tab-card-width, 300px);
		overflow: hidden;
	}

	:host([heading]) h1 {
		display: block;
	}

	h1.heading {
		display: none;
	}

	.collapse {
		display: flex;
		flex-direction: column;
		flex: auto;
		min-width: 0;
	}

	.content {
		line-height: var(
			--cosmoz-tab-card-content-line-height,
			var(--cz-text-sm-line-height)
		);
		flex: auto;
		min-width: 0;
		overflow-wrap: anywhere;
	}

	.header {
		min-height: var(--cosmoz-tab-card-header-min-height, 48px);
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.heading {
		margin: 0;
		font-size: var(
			--cosmoz-tab-card-heading-font-size,
			var(--cz-text-lg, 18px)
		);
		line-height: var(
			--cosmoz-tab-card-heading-line-height,
			var(--cz-text-lg-line-height, 1.4)
		);
		font-weight: var(
			--cosmoz-tab-card-heading-font-weight,
			var(--cz-font-weight-semibold, 600)
		);
		flex: 1;
		color: inherit;
	}

	.collapse-icon {
		order: var(--cosmoz-tab-card-collapse-icon-order);
		display: inline-flex;
		color: var(--cz-color-text-tertiary);
		transition: transform 250ms linear;
		transform: rotate(0deg);
		margin-left: -4px;
	}

	.expand-more-icon {
		fill: currentColor;
	}

	:host([collapsed]) .collapse-icon {
		transform: rotate(-90deg);
	}

	:host([collapsable]) .collapse-icon,
	:host([collapsable]) .heading {
		cursor: pointer;
		user-select: none;
	}
`,customElements.define(`cosmoz-tab-card`,i(v,{observedAttributes:[`heading`,`collapsable`,`collapsed`],styleSheets:[s,y]}))})))()}export{b as t};