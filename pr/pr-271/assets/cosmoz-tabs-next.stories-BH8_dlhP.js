import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-Dy5XTPV_.js";import{a as i,d as a,h as o,o as s}from"./if-defined-C4UZ-NYk.js";import{n as c,r as l,t as u}from"./demo-content-BGErsS6q.js";import{a as d,i as f,r as p,t as m}from"./next-CW5nuQzJ.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{i(),r(),m(),u(),h={title:`Tabs/cosmoz-tabs-next`,component:`cosmoz-tabs-next`,tags:[`autodocs`],parameters:{docs:{description:{component:"Next, data-driven tabs. A `cosmoz-tab-next` is **only the clickable header** — it does not switch panels by itself. Selection is owned by the consumer: either wire `active` + a click handler yourself, or use the `useTabs`/`renderTabs`/`renderActivated` hook API (see *Data driven*). The demos below are wired, so clicking switches tabs."}}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}}}},g=e=>{let r=e.getAttribute(`variant`)||`underline`,i=e.hasAttribute(`full-width`),s=e.hasAttribute(`with-icons`),u=e.hasAttribute(`with-states`),[d,f]=a(`overview`),p=o(e=>{let t=e.currentTarget;t.hasAttribute(`disabled`)||f(t.dataset.name)},[]),m=e=>({disabled:u&&e===`accounting`,hidden:u&&e===`history`}),h=c.find(e=>e.name===d)??c[0];return t`
        ${l}
        <cosmoz-tabs-next variant=${r} ?full-width=${i}>
            ${c.map(e=>{let{disabled:r,hidden:i}=m(e.name);return t`
                    <cosmoz-tab-next
                        data-name=${e.name}
                        ?active=${e.name===d}
                        ?disabled=${r}
                        ?hidden=${i}
                        .badge=${e.badge}
                        @click=${p}
                    >
                        ${s?e.icon({slot:`icon`}):n} ${e.title}
                    </cosmoz-tab-next>
                `})}
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${h.render()}</div>
    `},customElements.get(`cosmoz-tabs-next-demo`)||customElements.define(`cosmoz-tabs-next-demo`,s(g,{observedAttributes:[`variant`]})),_={args:{variant:`underline`},render:({variant:e})=>t`<cosmoz-tabs-next-demo variant=${e}></cosmoz-tabs-next-demo>`},v={parameters:{docs:{description:{story:"The two Untitled UI looks: `underline` (default) and `brand` (pill)."}}},render:()=>t`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                <cosmoz-tabs-next-demo variant="underline"></cosmoz-tabs-next-demo>
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                <cosmoz-tabs-next-demo variant="brand"></cosmoz-tabs-next-demo>
            </div>
        </div>
    `},y={parameters:{docs:{description:{story:'Leading icons via the `icon` slot — slot an icon template into `<span slot="icon">`.'}}},render:()=>t`<cosmoz-tabs-next-demo
            variant="brand"
            with-icons
        ></cosmoz-tabs-next-demo>`},b={parameters:{docs:{description:{story:`A disabled tab cannot be activated; a hidden tab is removed from the bar.`}}},render:()=>t`<cosmoz-tabs-next-demo
            variant="underline"
            with-icons
            with-states
        ></cosmoz-tabs-next-demo>`},x={parameters:{docs:{description:{story:"Tabs are content-width by default. The `full-width` attribute spreads them evenly across the available width."}}},render:()=>t`
        <div class="story-stack story-stack-100">
            <div>
                <div class="story-label">default (content-width)</div>
                <cosmoz-tabs-next-demo variant="underline"></cosmoz-tabs-next-demo>
            </div>
            <div>
                <div class="story-label">full-width</div>
                <cosmoz-tabs-next-demo
                    variant="underline"
                    full-width
                ></cosmoz-tabs-next-demo>
            </div>
        </div>
    `},S=()=>{let e=d(c);return t`
        ${l}
        <cosmoz-tabs-next variant="brand">
            ${f({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${p(e,e=>e.isActive?t`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-data-demo`)||customElements.define(`cosmoz-tabs-next-data-demo`,s(S)),C={parameters:{docs:{description:{story:"Driven entirely from a data array with `useTabs(tabs)` → `renderTabs(model)` for the bar and `renderActivated(model, …)` for the panels (which keeps already-visited panels mounted). Pass `{ hashParam }` to `useTabs` to bind selection to the URL."}}},render:()=>t`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  },
  render: ({
    variant
  }) => html\`<cosmoz-tabs-next-demo variant=\${variant}></cosmoz-tabs-next-demo>\`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The two Untitled UI looks: \`underline\` (default) and \`brand\` (pill).'
      }
    }
  },
  render: () => html\`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                <cosmoz-tabs-next-demo variant="underline"></cosmoz-tabs-next-demo>
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                <cosmoz-tabs-next-demo variant="brand"></cosmoz-tabs-next-demo>
            </div>
        </div>
    \`
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Leading icons via the \`icon\` slot — slot an icon template into ' + '\`<span slot="icon">\`.'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-demo
            variant="brand"
            with-icons
        ></cosmoz-tabs-next-demo>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A disabled tab cannot be activated; a hidden tab is removed from the ' + 'bar.'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-demo
            variant="underline"
            with-icons
            with-states
        ></cosmoz-tabs-next-demo>\`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tabs are content-width by default. The \`full-width\` attribute spreads ' + 'them evenly across the available width.'
      }
    }
  },
  render: () => html\`
        <div class="story-stack story-stack-100">
            <div>
                <div class="story-label">default (content-width)</div>
                <cosmoz-tabs-next-demo variant="underline"></cosmoz-tabs-next-demo>
            </div>
            <div>
                <div class="story-label">full-width</div>
                <cosmoz-tabs-next-demo
                    variant="underline"
                    full-width
                ></cosmoz-tabs-next-demo>
            </div>
        </div>
    \`
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Driven entirely from a data array with `useTabs(tabs)` → ' + '`renderTabs(model)` for the bar and `renderActivated(model, …)` for ' + 'the panels (which keeps already-visited panels mounted). Pass ' + '`{ hashParam }` to `useTabs` to bind selection to the URL.'\n      }\n    }\n  },\n  render: () => html`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`\n}",...C.parameters?.docs?.source}}},w=[`Default`,`Variants`,`WithIcons`,`DisabledAndHidden`,`FullWidth`,`DataDriven`]}))();export{C as DataDriven,_ as Default,b as DisabledAndHidden,x as FullWidth,v as Variants,y as WithIcons,w as __namedExportsOrder,h as default};