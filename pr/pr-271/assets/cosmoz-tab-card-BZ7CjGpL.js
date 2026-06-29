import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t}from"./iframe-j6P15zpX.js";import{C as n,a as r,d as i,i as a,o,r as s,y as c}from"./if-defined-dtp5XfF4.js";import{n as l,t as u}from"./when-D4NrPbjm.js";var d,f,p=e((()=>{d={duration:250},f=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...d,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})),m,h,g=e((()=>{p(),m=(e,t)=>{Object.assign(e.style,{display:t?``:`none`})},h=class extends HTMLElement{static get observedAttributes(){return[`opened`]}toggle=f(`height`);constructor(){super();let e=new CSSStyleSheet;e.replaceSync(`
      :host { display: block; }
		`);let t=this.attachShadow({mode:`open`});t.appendChild(document.createElement(`slot`)),t.adoptedStyleSheets=[e]}connectedCallback(){m(this,this.getAttribute(`opened`)!=null)}attributeChangedCallback(e,t,n){switch(e){case`opened`:{let e=n!=null;return this.isConnected?this.toggle(this,e):m(this,e)}}}},customElements.define(`cosmoz-collapse`,h)})),_=e((()=>{g(),p()})),v,y,b,x=e((()=>{_(),s(),r(),u(),v=()=>t`
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
`,y=e=>{let{heading:n,collapsable:r,collapsed:a}=e,[o,s]=i(!!a),u=()=>{if(r)return s(e=>!e)};return c(()=>{e.toggleAttribute(`collapsed`,o)},[o]),t`${l(n,()=>t`<div class="header" part="header">
					${l(r,()=>t`
							<div
								@click=${u}
								class="collapse-icon"
								part="collapse-icon"
							>
								<slot name="collapse-icon">${v()}</slot>
							</div>
						`)}
					<h1 class="heading" @click=${u} part="heading">
						${n}<slot name="after-title"></slot>
					</h1>
					<slot name="card-actions"></slot>
				</div>`)}

		<cosmoz-collapse class="collapse" ?opened=${!o}>
			<div class="content" part="content">
				<slot></slot>
			</div>
		</cosmoz-collapse>`},b=n`
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
		padding: var(--cosmoz-tab-card-padding, 0);
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
		padding: var(
			--cosmoz-tab-card-content-padding,
			calc(var(--cz-spacing) * 4)
		);
		flex: auto;
		min-width: 0;
		overflow-x: auto;
		overflow-wrap: anywhere;
	}

	.header {
		min-height: 48px;
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing) * 2);
		padding: 0 calc(var(--cz-spacing) * 4);
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	.heading {
		margin: 0;
		font-size: var(--cz-text-lg, 18px);
		line-height: var(--cz-text-lg-line-height, 1.4);
		font-weight: var(--cz-font-weight-semibold, 600);
		flex: 1;
		color: inherit;
	}

	.collapse-icon {
		order: var(--cosmoz-tab-card-collapse-icon-order);
		display: inline-flex;
		color: var(--cz-color-text-tertiary, #667085);
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
`,customElements.define(`cosmoz-tab-card`,o(y,{observedAttributes:[`heading`,`collapsable`,`collapsed`],styleSheets:[a,b]}))}));export{x as t};