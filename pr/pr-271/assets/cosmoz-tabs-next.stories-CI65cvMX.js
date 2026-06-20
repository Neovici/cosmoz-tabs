import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-DH29BBEx.js";import{a as i,d as a,h as o,n as s,o as c,t as l}from"./if-defined-D5qBSdGa.js";import{n as u,r as d,t as f}from"./demo-content-DGt0ccL8.js";import{a as p,i as m,r as h,t as g}from"./next-D6R-62ix.js";var _,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{i(),r(),l(),g(),f(),_={title:`Tabs/cosmoz-tabs-next`,component:`cosmoz-tabs-next`,tags:[`autodocs`],parameters:{docs:{description:{component:"Next, data-driven tabs. A `cosmoz-tab-next` is **only the clickable header** — it does not switch panels by itself. Selection is owned by the consumer: either wire `active` + a click handler yourself, or use the `useTabs`/`renderTabs`/`renderActivated` hook API (see *Data driven*). The demos below are wired, so clicking switches tabs."}},controls:{disable:!0}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}}}},v=e=>{let r=e.getAttribute(`variant`)||`underline`,i=e.getAttribute(`full-width`),c=e.getAttribute(`vars`)||``,l=e.hasAttribute(`with-icons`),f=e.hasAttribute(`with-states`),[p,m]=a(`overview`),h=o(e=>{let t=e.currentTarget;t.hasAttribute(`disabled`)||m(t.dataset.name)},[]),g=e=>({disabled:f&&e===`accounting`,hidden:f&&e===`history`}),_=u.find(e=>e.name===p)??u[0];return t`
        ${d}
        <cosmoz-tabs-next
            variant=${r}
            full-width=${s(i===`false`?`false`:void 0)}
            style=${c}
        >
            ${u.map(e=>{let{disabled:r,hidden:i}=g(e.name);return t`
                    <cosmoz-tab-next
                        data-name=${e.name}
                        ?active=${e.name===p}
                        ?disabled=${r}
                        ?hidden=${i}
                        .badge=${e.badge}
                        @click=${h}
                    >
                        ${l?e.icon({slot:`icon`}):n} ${e.title}
                    </cosmoz-tab-next>
                `})}
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${_.render()}</div>
    `},customElements.get(`cosmoz-tabs-next-demo`)||customElements.define(`cosmoz-tabs-next-demo`,c(v,{observedAttributes:[`variant`]})),y={args:{variant:`underline`},parameters:{controls:{disable:!1}},render:({variant:e})=>t`<cosmoz-tabs-next-demo variant=${e}></cosmoz-tabs-next-demo>`},b={parameters:{docs:{description:{story:"The two Untitled UI looks: `underline` (default) and `brand` (pill)."}}},render:()=>t`
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
    `},x={parameters:{docs:{description:{story:'Leading icons via the `icon` slot — slot an icon template into `<span slot="icon">`.'}}},render:()=>t`<cosmoz-tabs-next-demo
            variant="brand"
            with-icons
        ></cosmoz-tabs-next-demo>`},S={parameters:{docs:{description:{story:`A disabled tab cannot be activated; a hidden tab is removed from the bar.`}}},render:()=>t`<cosmoz-tabs-next-demo
            variant="underline"
            with-icons
            with-states
        ></cosmoz-tabs-next-demo>`},C={parameters:{docs:{description:{story:'Tabs spread evenly across the available width by default. Set `full-width="false"` to size them to their content.'}}},render:()=>t`
        <div class="story-stack story-stack-100">
            <div>
                <div class="story-label">default (spread)</div>
                <cosmoz-tabs-next-demo variant="underline"></cosmoz-tabs-next-demo>
            </div>
            <div>
                <div class="story-label">default (spread)</div>
                <cosmoz-tabs-next-demo variant="brand"></cosmoz-tabs-next-demo>
            </div>
        </div>
    `},w=()=>{let e=p(u);return t`
        ${d}
        <cosmoz-tabs-next variant="brand">
            ${m({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${h(e,e=>e.isActive?t`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-data-demo`)||customElements.define(`cosmoz-tabs-next-data-demo`,c(w)),T={parameters:{docs:{description:{story:"Driven entirely from a data array with `useTabs(tabs)` → `renderTabs(model)` for the bar and `renderActivated(model, …)` for the panels (which keeps already-visited panels mounted). Pass `{ hashParam }` to `useTabs` to bind selection to the URL."}}},render:()=>t`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`},E=e=>t`<cosmoz-tabs-next-demo
        variant="brand"
        vars=${e}
    ></cosmoz-tabs-next-demo>`,D={parameters:{docs:{description:{story:"The selected pill **and** the badge both read `--cz-color-bg-brand` / `--cz-color-text-brand`. Override just those two tokens on the `<cosmoz-tabs-next>` host to recolor them — no `--cosmoz-tabs-*` knobs needed. They share the same tokens, so the pill and badge always stay in sync (you cannot color them independently without new vars)."}}},render:()=>t`
        ${d}
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                ${E(``)}
            </div>
            <div>
                <div class="story-label">brand solid</div>
                ${E(`--cz-color-bg-brand: var(--cz-color-bg-brand-solid); --cz-color-text-brand: var(--cz-color-text-on-brand);`)}
            </div>
            <div>
                <div class="story-label">gray</div>
                ${E(`--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);`)}
            </div>
        </div>
    `},O={parameters:{docs:{description:{story:"Untitled UI’s *button minimal* look — the `brand` pill recolored to a subtle neutral by pointing `--cz-color-bg-brand` at `--cz-color-bg-secondary` (and `--cz-color-text-brand` at `--cz-color-text-secondary`). Achievable with the existing tokens, no new variant. (Untitled’s *button border* / segmented look is **not** reachable via tokens alone — it needs a bordered container + selected shadow, i.e. a dedicated variant.)"}}},render:()=>t`${d}${E(`--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);`)}`},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  },
  parameters: {
    controls: {
      disable: false
    }
  },
  render: ({
    variant
  }) => html\`<cosmoz-tabs-next-demo variant=\${variant}></cosmoz-tabs-next-demo>\`
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tabs spread evenly across the available width by default. Set ' + '\`full-width="false"\` to size them to their content.'
      }
    }
  },
  render: () => html\`
        <div class="story-stack story-stack-100">
            <div>
                <div class="story-label">default (spread)</div>
                <cosmoz-tabs-next-demo variant="underline"></cosmoz-tabs-next-demo>
            </div>
            <div>
                <div class="story-label">default (spread)</div>
                <cosmoz-tabs-next-demo variant="brand"></cosmoz-tabs-next-demo>
            </div>
        </div>
    \`
}`,...C.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Driven entirely from a data array with `useTabs(tabs)` → ' + '`renderTabs(model)` for the bar and `renderActivated(model, …)` for ' + 'the panels (which keeps already-visited panels mounted). Pass ' + '`{ hashParam }` to `useTabs` to bind selection to the URL.'\n      }\n    }\n  },\n  render: () => html`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`\n}",...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The selected pill **and** the badge both read \`--cz-color-bg-brand\` / ' + '\`--cz-color-text-brand\`. Override just those two tokens on the ' + '\`<cosmoz-tabs-next>\` host to recolor them — no \`--cosmoz-tabs-*\` knobs ' + 'needed. They share the same tokens, so the pill and badge always ' + 'stay in sync (you cannot color them independently without new vars).'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                \${coloredNext('')}
            </div>
            <div>
                <div class="story-label">brand solid</div>
                \${coloredNext('--cz-color-bg-brand: var(--cz-color-bg-brand-solid); --cz-color-text-brand: var(--cz-color-text-on-brand);')}
            </div>
            <div>
                <div class="story-label">gray</div>
                \${coloredNext('--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);')}
            </div>
        </div>
    \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Untitled UI’s *button minimal* look — the `brand` pill recolored to a ' + 'subtle neutral by pointing `--cz-color-bg-brand` at ' + '`--cz-color-bg-secondary` (and `--cz-color-text-brand` at ' + '`--cz-color-text-secondary`). Achievable with the existing tokens, no ' + 'new variant. (Untitled’s *button border* / segmented look is **not** ' + 'reachable via tokens alone — it needs a bordered container + selected ' + 'shadow, i.e. a dedicated variant.)'\n      }\n    }\n  },\n  render: () => html`${panelStyles}${coloredNext('--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);')}`\n}",...O.parameters?.docs?.source}}},k=[`Default`,`Variants`,`WithIcons`,`DisabledAndHidden`,`FullWidth`,`DataDriven`,`SelectedColors`,`Minimal`]}))();export{T as DataDriven,y as Default,S as DisabledAndHidden,C as FullWidth,O as Minimal,D as SelectedColors,b as Variants,x as WithIcons,k as __namedExportsOrder,_ as default};