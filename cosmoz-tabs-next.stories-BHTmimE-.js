import { b, A } from './lit-html-CVa9zdN4.js';
import { t as tagged, c as component, u as useEffect, a as useLayoutEffect, r, o } from './if-defined-UpH3jwEw.js';

var style$1 = tagged`
	:host {
		background-color: var(--cosmoz-tabs-bg-color, #fff);
		color: var(--cosmoz-tabs-text-color, #606c7e);
		font-family: var(--cosmoz-tabs-font-family, inherit);
		font-size: var(--cosmoz-tabs-font-size, 13px);
		line-height: var(--cosmoz-tabs-line-height, 19px);
		box-shadow: var(--cosmoz-tabs-shadow, inset 0 -1px 0 0 #e5e6eb);
		flex: none;
		display: flex;
		align-items: center;
		overflow-x: auto;
		-webkit-overflow-scrolling: auto;
		scrollbar-width: none;
		padding-bottom: 1px;
	}
	:host::-webkit-scrollbar {
		display: none;
	}
`;

const Tabs = (host) => {
  useEffect(() => {
    host.setAttribute("role", "tablist");
  }, []);
  return b`
		<style>
			${style$1}
		</style>
		<slot></slot>
	`;
};
customElements.define("cosmoz-tabs-next", component(Tabs));

var style = tagged`
	:host {
		position: relative;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 11px 24px;
		color: inherit;
		text-decoration: none;
		text-align: center;
		letter-spacing: 0.3px;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: pointer;
		/* TODO(accessibility): focused tab should be outlined */
		outline: 0;
	}

	:host([active]) {
		color: var(--cosmoz-tabs-accent-color, #508aef);
		box-shadow: inset 0 -3px 0px 0px var(--cosmoz-tabs-accent-color, #508aef);
		font-weight: 700;
		letter-spacing: 0;
	}

	:host([disabled]) {
		opacity: 0.4;
		pointer-events: none;
	}

	#iconSlot::slotted(*) {
		flex-shrink: 0;
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		font-family: var(--cosmoz-font-base, 'Verdana, Arial, sans-serif');
		font-weight: normal;
		font-size: 11px;
		line-height: 1;
		border-radius: 0.90909em;
		box-sizing: border-box;

		transform: translateY(-50%);
		vertical-align: top;
		min-width: 1.81818em;
		padding: 0.40909em 0.36363em;

		max-width: 80px;
		text-overflow: ellipsis;
		overflow: hidden;

		background-color: var(--accent-color, #ff4081);
		color: #ffffff;
		text-align: center;
	}

	a {
		display: contents;
	}
`;

const Tab = (host) => {
  const { active, badge, href } = host;
  useEffect(() => {
    if (!host.getAttribute("tabindex")) {
      host.setAttribute("tabindex", "-1");
    }
    host.setAttribute("role", "tab");
  }, []);
  useLayoutEffect(() => {
    const el = host;
    el.toggleAttribute("aria-selected", !!active);
    if (!active) {
      return;
    }
    r(el, {
      block: "nearest",
      inline: "center",
      boundary: el.parentElement
    }).forEach(
      ({ el: el2, top, left }) => el2.scroll({ top, left, behavior: "smooth" })
    );
  }, [active]);
  return b`
		<style>
			${style}
		</style>
		<a part="link" href=${o(href)}>
			<slot id="iconSlot" name="icon"></slot>
			<slot id="contentSlot"></slot>
			${badge ? b`<span class="badge" part="badge">${badge}</span>` : A}
		</a>
	`;
};
customElements.define(
  "cosmoz-tab-next",
  component(Tab, {
    observedAttributes: ["active", "badge", "href"]
  })
);

var cosmozTabsNext_stories = {
  title: "Tabs (next)",
  component: "cosmoz-tabs-next"
};
const basics = () => b`
	<cosmoz-tabs-next>
		<cosmoz-tab-next disabled>Tab1</cosmoz-tab-next>
		<cosmoz-tab-next disabled badge="2">Tab2</cosmoz-tab-next>
		<cosmoz-tab-next hidden badge="3">Tab3</cosmoz-tab-next>
		<cosmoz-tab-next badge="4" active href="#123">Tab4</cosmoz-tab-next>
		${Array(6).fill().map((_, i) => b`<cosmoz-tab-next>Tab ${5 + i}</cosmoz-tab-next>`)}
	</cosmoz-tabs-next>
`;
const __namedExportsOrder = ["basics"];

export { __namedExportsOrder, basics, cosmozTabsNext_stories as default };
