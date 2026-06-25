import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-BMy_I1KC.js";import{a as i,d as a,o}from"./if-defined-PWzNkm1l.js";import{l as s,m as c,r as l,t as u}from"./untitled-DB7_1gDS.js";import{a as d,c as f,i as p,l as m,o as h,s as g,t as _}from"./demo-content-FCmbJd9-.js";import{a as v,i as y,r as b,t as x}from"./next--foJ-9qi.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{u(),i(),r(),x(),d(),S={title:`Tabs/cosmoz-tabs-next`,component:`cosmoz-tabs-next`,tags:[`autodocs`],parameters:{docs:{description:{component:"Next, data-driven tabs. A `cosmoz-tab-next` is **only the clickable header** — it does not switch panels by itself. Selection is owned by the consumer: either wire `active` + a click handler yourself (the raw element API, used by most demos below), or use the `useTabs`/`renderTabs`/`renderActivated` hook API (see *Data driven*)."}},controls:{disable:!0}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}}}},C={overview:g,rows:m,accounting:_,history:p},w=e=>{let n=e.getAttribute(`variant`)||`underline`,[r,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return t`
        ${f}
        <cosmoz-tabs-next variant=${n}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${r===`overview`}
                @click=${o}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${r===`rows`}
                @click=${o}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${r===`accounting`}
                @click=${o}
            >
                Accounting
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="history"
                ?active=${r===`history`}
                @click=${o}
            >
                History
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[r]()}</div>
    `},customElements.get(`cosmoz-tabs-next-default-demo`)||customElements.define(`cosmoz-tabs-next-default-demo`,o(w,{observedAttributes:[`variant`]})),T={args:{variant:`underline`},parameters:{controls:{disable:!1},docs:{source:{code:`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="rows" badge="5"
    ?active=\${active === 'rows'} @click=\${select}>Invoice rows</cosmoz-tab-next>
  <!-- … -->
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>`}}},render:({variant:e})=>t`<cosmoz-tabs-next-default-demo
            variant=${e}
        ></cosmoz-tabs-next-default-demo>`},E=e=>{let n=e.getAttribute(`variant`)||`underline`,[r,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return t`
        ${f}
        <cosmoz-tabs-next variant=${n}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${r===`overview`}
                @click=${o}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${r===`rows`}
                @click=${o}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${r===`accounting`}
                @click=${o}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[r]()}</div>
    `},customElements.get(`cosmoz-tabs-next-variants-bar`)||customElements.define(`cosmoz-tabs-next-variants-bar`,o(E,{observedAttributes:[`variant`]})),D={parameters:{docs:{source:{code:`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>`},description:{story:"The two Untitled UI looks: `underline` (default) and `brand` (pill). Each bar is independently interactive."}}},render:()=>t`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="underline"
                ></cosmoz-tabs-next-variants-bar>
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="brand"
                ></cosmoz-tabs-next-variants-bar>
            </div>
        </div>
    `},O=()=>{let[e,n]=a(`overview`),r=e=>n(e.currentTarget.dataset.name);return t`
        ${f}
        <cosmoz-tabs-next variant="brand">
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${r}
            >
                ${l({slot:`icon`})} Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${r}
            >
                ${s({slot:`icon`})} Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${e===`accounting`}
                @click=${r}
            >
                ${c({slot:`icon`})} Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-icons-demo`)||customElements.define(`cosmoz-tabs-next-icons-demo`,o(O)),k={parameters:{docs:{source:{code:`<cosmoz-tabs-next variant="brand">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>
    \${receiptIcon({ slot: 'icon' })} Overview
  </cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:'Leading icons via the `icon` slot — slot an icon template carrying `slot="icon"` into each `<cosmoz-tab-next>`.'}}},render:()=>t`<cosmoz-tabs-next-icons-demo></cosmoz-tabs-next-icons-demo>`},A=()=>{let[e,n]=a(`overview`),r=e=>{let t=e.currentTarget;t.hasAttribute(`disabled`)||n(t.dataset.name)};return t`
        ${f}
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${r}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${r}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next data-name="accounting" disabled @click=${r}>
                Accounting
            </cosmoz-tab-next>
            <cosmoz-tab-next data-name="history" hidden @click=${r}>
                History
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-states-demo`)||customElements.define(`cosmoz-tabs-next-states-demo`,o(A)),j={parameters:{docs:{source:{code:`const select = (e) => {
  const el = e.currentTarget;
  if (!el.hasAttribute('disabled')) setActive(el.dataset.name);
};

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="accounting" disabled @click=\${select}>Accounting</cosmoz-tab-next>
  <cosmoz-tab-next data-name="history" hidden @click=\${select}>History</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"A `disabled` tab cannot be activated (the click handler guards it); a `hidden` tab is removed from the bar."}}},render:()=>t`<cosmoz-tabs-next-states-demo></cosmoz-tabs-next-states-demo>`},M=()=>{let[e,n]=a(`overview`),r=e=>n(e.currentTarget.dataset.name);return t`
        ${f}
        <cosmoz-tabs-next full-width="false">
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${r}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${r}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${e===`accounting`}
                @click=${r}
            >
                Accounting
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="history"
                ?active=${e===`history`}
                @click=${r}
            >
                History
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-nonfullwidth-demo`)||customElements.define(`cosmoz-tabs-next-nonfullwidth-demo`,o(M)),N={name:`Non full width`,parameters:{docs:{source:{code:`
<cosmoz-tabs-next variant="underline" full-width="false">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:'Tabs spread evenly across the available width by default. Set `full-width="false"` to size them to their content (they hug their labels and align to the start).'}}},render:()=>t`<cosmoz-tabs-next-nonfullwidth-demo></cosmoz-tabs-next-nonfullwidth-demo>`},P=()=>{let e=v(h);return t`
        ${f}
        <cosmoz-tabs-next variant="brand">
            ${y({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${b(e,e=>e.isActive?t`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-data-demo`)||customElements.define(`cosmoz-tabs-next-data-demo`,o(P)),F={parameters:{docs:{source:{code:`const model = useTabs(invoiceTabs);

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`},description:{story:"Driven entirely from a data array with `useTabs(tabs)` -> `renderTabs(model)` for the bar and `renderActivated(model, …)` for the panels (which keeps already-visited panels mounted). Pass `{ hashParam }` to `useTabs` to bind selection to the URL (see *Hash routing*)."}}},render:()=>t`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`},I=()=>{let e=v(h,{hashParam:`ntab`});return t`
        ${f}
        <cosmoz-tabs-next variant="brand">
            ${y({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${b(e,e=>e.isActive?t`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-hash-demo`)||customElements.define(`cosmoz-tabs-next-hash-demo`,o(I)),L={parameters:{docs:{source:{code:`const model = useTabs(invoiceTabs, { hashParam: 'ntab' });

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`},description:{story:'Bind selection to the URL by passing `{ hashParam }` to `useTabs` (here `useTabs(tabs, { hashParam: "ntab" })`) — deep-links and the back button work, just like the legacy family. Note: inside Storybook the visible address bar belongs to the **manager**, while the component binds to the **preview iframe** URL, so the change is not visible here. Open this story in a new tab / isolation mode to see the real URL change and the back button.'}}},render:()=>t`<cosmoz-tabs-next-hash-demo></cosmoz-tabs-next-hash-demo>`},R=e=>{let n=e.getAttribute(`vars`)||``,[r,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return t`
        ${f}
        <cosmoz-tabs-next variant="brand" style=${n}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${r===`overview`}
                @click=${o}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${r===`rows`}
                @click=${o}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${r===`accounting`}
                @click=${o}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[r]()}</div>
    `},customElements.get(`cosmoz-tabs-next-colors-bar`)||customElements.define(`cosmoz-tabs-next-colors-bar`,o(R,{observedAttributes:[`vars`]})),z={parameters:{docs:{source:{code:`
<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand: var(--cz-color-bg-secondary);
         --cz-color-text-brand: var(--cz-color-text-secondary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"The selected pill **and** the badge both read `--cz-color-bg-brand` / `--cz-color-text-brand`. Override just those two tokens on the `<cosmoz-tabs-next>` host to recolor them — no `--cosmoz-tabs-*` knobs needed. They share the same tokens, so the pill and badge always stay in sync (you cannot color them independently without new vars)."}}},render:()=>t`
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                <cosmoz-tabs-next-colors-bar></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">brand solid</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand: var(--cz-color-bg-brand-solid); --cz-color-text-brand: var(--cz-color-text-on-brand);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">gray</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
        </div>
    `},B=()=>{let[e,n]=a(`overview`),r=e=>n(e.currentTarget.dataset.name);return t`
        ${f}
        <cosmoz-tabs-next
            variant="brand"
            style="--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);"
        >
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${r}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${r}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${e===`accounting`}
                @click=${r}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-minimal-demo`)||customElements.define(`cosmoz-tabs-next-minimal-demo`,o(B)),V={parameters:{docs:{source:{code:`<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand: var(--cz-color-bg-secondary);
         --cz-color-text-brand: var(--cz-color-text-secondary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"Untitled UI’s *button minimal* look — the `brand` pill recolored to a subtle neutral by pointing `--cz-color-bg-brand` at `--cz-color-bg-secondary` (and `--cz-color-text-brand` at `--cz-color-text-secondary`). Achievable with the existing tokens, no new variant. (Untitled’s *button border* / segmented look is **not** reachable via tokens alone — it needs a bordered container + selected shadow, i.e. a dedicated variant.)"}}},render:()=>t`<cosmoz-tabs-next-minimal-demo></cosmoz-tabs-next-minimal-demo>`},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  },
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      source: {
        code: \`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="rows" badge="5"
    ?active=\\\${active === 'rows'} @click=\\\${select}>Invoice rows</cosmoz-tab-next>
  <!-- … -->
</cosmoz-tabs-next>
<div>\\\${panels[active]()}</div>\`
      }
    }
  },
  render: ({
    variant
  }) => html\`<cosmoz-tabs-next-default-demo
            variant=\${variant}
        ></cosmoz-tabs-next-default-demo>\`
}`,...T.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>
<div>\\\${panels[active]()}</div>\`
      },
      description: {
        story: 'The two Untitled UI looks: \`underline\` (default) and \`brand\` (pill). ' + 'Each bar is independently interactive.'
      }
    }
  },
  render: () => html\`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="underline"
                ></cosmoz-tabs-next-variants-bar>
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="brand"
                ></cosmoz-tabs-next-variants-bar>
            </div>
        </div>
    \`
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<cosmoz-tabs-next variant="brand">
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>
    \\\${receiptIcon({ slot: 'icon' })} Overview
  </cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'Leading icons via the \`icon\` slot — slot an icon template carrying ' + '\`slot="icon"\` into each \`<cosmoz-tab-next>\`.'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-icons-demo></cosmoz-tabs-next-icons-demo>\`
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const select = (e) => {
  const el = e.currentTarget;
  if (!el.hasAttribute('disabled')) setActive(el.dataset.name);
};

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="accounting" disabled @click=\\\${select}>Accounting</cosmoz-tab-next>
  <cosmoz-tab-next data-name="history" hidden @click=\\\${select}>History</cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'A \`disabled\` tab cannot be activated (the click handler guards it); a ' + '\`hidden\` tab is removed from the bar.'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-states-demo></cosmoz-tabs-next-states-demo>\`
}`,...j.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Non full width',
  parameters: {
    docs: {
      source: {
        code: \`
<cosmoz-tabs-next variant="underline" full-width="false">
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'Tabs spread evenly across the available width by default. Set ' + '\`full-width="false"\` to size them to their content (they hug their ' + 'labels and align to the start).'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-nonfullwidth-demo></cosmoz-tabs-next-nonfullwidth-demo>\`
}`,...N.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const model = useTabs(invoiceTabs);

<cosmoz-tabs-next variant="brand">
  \\\${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\\\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}\`
      },
      description: {
        story: 'Driven entirely from a data array with \`useTabs(tabs)\` -> ' + '\`renderTabs(model)\` for the bar and \`renderActivated(model, …)\` for ' + 'the panels (which keeps already-visited panels mounted). Pass ' + '\`{ hashParam }\` to \`useTabs\` to bind selection to the URL ' + '(see *Hash routing*).'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>\`
}`,...F.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const model = useTabs(invoiceTabs, { hashParam: 'ntab' });

<cosmoz-tabs-next variant="brand">
  \\\${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\\\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}\`
      },
      description: {
        story: 'Bind selection to the URL by passing \`{ hashParam }\` to \`useTabs\` ' + '(here \`useTabs(tabs, { hashParam: "ntab" })\`) — deep-links and the ' + 'back button work, just like the legacy family. Note: inside Storybook ' + 'the visible address bar belongs to the **manager**, while the component ' + 'binds to the **preview iframe** URL, so the change is not visible here. ' + 'Open this story in a new tab / isolation mode to see the real URL ' + 'change and the back button.'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-hash-demo></cosmoz-tabs-next-hash-demo>\`
}`,...L.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`
<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand: var(--cz-color-bg-secondary);
         --cz-color-text-brand: var(--cz-color-text-secondary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'The selected pill **and** the badge both read \`--cz-color-bg-brand\` / ' + '\`--cz-color-text-brand\`. Override just those two tokens on the ' + '\`<cosmoz-tabs-next>\` host to recolor them — no \`--cosmoz-tabs-*\` knobs ' + 'needed. They share the same tokens, so the pill and badge always ' + 'stay in sync (you cannot color them independently without new vars).'
      }
    }
  },
  render: () => html\`
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                <cosmoz-tabs-next-colors-bar></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">brand solid</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand: var(--cz-color-bg-brand-solid); --cz-color-text-brand: var(--cz-color-text-on-brand);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">gray</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
        </div>
    \`
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand: var(--cz-color-bg-secondary);
         --cz-color-text-brand: var(--cz-color-text-secondary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'Untitled UI’s *button minimal* look — the \`brand\` pill recolored to a ' + 'subtle neutral by pointing \`--cz-color-bg-brand\` at ' + '\`--cz-color-bg-secondary\` (and \`--cz-color-text-brand\` at ' + '\`--cz-color-text-secondary\`). Achievable with the existing tokens, no ' + 'new variant. (Untitled’s *button border* / segmented look is **not** ' + 'reachable via tokens alone — it needs a bordered container + selected ' + 'shadow, i.e. a dedicated variant.)'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-minimal-demo></cosmoz-tabs-next-minimal-demo>\`
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Variants`,`WithIcons`,`DisabledAndHidden`,`NonFullWidth`,`DataDriven`,`HashRouting`,`SelectedColors`,`Minimal`]}))();export{F as DataDriven,T as Default,j as DisabledAndHidden,L as HashRouting,V as Minimal,N as NonFullWidth,z as SelectedColors,D as Variants,k as WithIcons,H as __namedExportsOrder,S as default};