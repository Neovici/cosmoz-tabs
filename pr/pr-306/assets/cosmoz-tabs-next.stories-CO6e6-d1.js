import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,i as n,s as r}from"./iframe-5rgowz92.js";import{a as i,d as a,o}from"./if-defined-bEa3TY1e.js";import{l as s,m as c,r as l,t as u}from"./untitled-CSE_wquV.js";import{a as d,c as f,i as p,l as m,o as h,s as g,t as _}from"./demo-content-D0aPFfl1.js";import{a as v,i as y,r as b,t as x}from"./next-nGEydN3X.js";var S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U;function W(){return(W=e((()=>{u(),i(),t(),x(),d(),S={title:`Tabs/cosmoz-tabs-next`,component:`cosmoz-tabs-next`,tags:[`autodocs`],parameters:{docs:{description:{component:"Next, data-driven tabs. A `cosmoz-tab-next` is **only the clickable header** — it does not switch panels by itself. Selection is owned by the consumer: either wire `active` + a click handler yourself (the raw element API, used by most demos below), or use the `useTabs`/`renderTabs`/`renderActivated` hook API (see *Data driven*)."}},controls:{disable:!0}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}}}},C={overview:g,rows:m,accounting:_,history:p},w=e=>{let t=e.getAttribute(`variant`)||`underline`,[n,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return r`
        ${f}
        <cosmoz-tabs-next variant=${t}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${n===`overview`}
                @click=${o}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${n===`rows`}
                @click=${o}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${n===`accounting`}
                @click=${o}
            >
                Accounting
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="history"
                ?active=${n===`history`}
                @click=${o}
            >
                History
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[n]()}</div>
    `},customElements.get(`cosmoz-tabs-next-default-demo`)||customElements.define(`cosmoz-tabs-next-default-demo`,o(w,{observedAttributes:[`variant`]})),T={args:{variant:`underline`},parameters:{controls:{disable:!1},docs:{source:{code:`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="rows" badge="5"
    ?active=\${active === 'rows'} @click=\${select}>Invoice rows</cosmoz-tab-next>
  <!-- … -->
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>`}}},render:({variant:e})=>r`<cosmoz-tabs-next-default-demo
            variant=${e}
        ></cosmoz-tabs-next-default-demo>`},E=e=>{let t=e.getAttribute(`variant`)||`underline`,[n,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return r`
        ${f}
        <cosmoz-tabs-next variant=${t}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${n===`overview`}
                @click=${o}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${n===`rows`}
                @click=${o}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${n===`accounting`}
                @click=${o}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[n]()}</div>
    `},customElements.get(`cosmoz-tabs-next-variants-bar`)||customElements.define(`cosmoz-tabs-next-variants-bar`,o(E,{observedAttributes:[`variant`]})),D={parameters:{docs:{source:{code:`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>`},description:{story:"The two Untitled UI looks: `underline` (default) and `brand` (pill). Each bar is independently interactive."}}},render:()=>r`
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
    `},O=()=>{let[e,t]=a(`overview`),n=e=>t(e.currentTarget.dataset.name);return r`
        ${f}
        <cosmoz-tabs-next variant="brand">
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${n}
            >
                ${l({slot:`icon`})} Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${n}
            >
                ${s({slot:`icon`})} Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${e===`accounting`}
                @click=${n}
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
</cosmoz-tabs-next>`},description:{story:'Leading icons via the `icon` slot — slot an icon template carrying `slot="icon"` into each `<cosmoz-tab-next>`.'}}},render:()=>r`<cosmoz-tabs-next-icons-demo></cosmoz-tabs-next-icons-demo>`},A=()=>{let[e,t]=a(`overview`),n=e=>{let n=e.currentTarget;n.hasAttribute(`disabled`)||t(n.dataset.name)};return r`
        ${f}
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${n}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${n}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next data-name="accounting" disabled @click=${n}>
                Accounting
            </cosmoz-tab-next>
            <cosmoz-tab-next data-name="history" hidden @click=${n}>
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
</cosmoz-tabs-next>`},description:{story:"A `disabled` tab cannot be activated (the click handler guards it); a `hidden` tab is removed from the bar."}}},render:()=>r`<cosmoz-tabs-next-states-demo></cosmoz-tabs-next-states-demo>`},M=()=>{let[e,t]=a(`overview`),n=e=>t(e.currentTarget.dataset.name);return r`
        ${f}
        <cosmoz-tabs-next compact-width>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${n}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${n}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${e===`accounting`}
                @click=${n}
            >
                Accounting
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="history"
                ?active=${e===`history`}
                @click=${n}
            >
                History
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-compactwidth-demo`)||customElements.define(`cosmoz-tabs-next-compactwidth-demo`,o(M)),N={name:`Compact width`,parameters:{docs:{source:{code:`
<cosmoz-tabs-next variant="underline" compact-width>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"Tabs spread evenly across the available width by default. Add the `compact-width` attribute to size them to their content (they hug their labels and align to the start)."}}},render:()=>r`<cosmoz-tabs-next-compactwidth-demo></cosmoz-tabs-next-compactwidth-demo>`},P=()=>{let e=v(h);return r`
        ${f}
        <cosmoz-tabs-next variant="brand">
            ${y({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${b(e,e=>e.isActive?r`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-data-demo`)||customElements.define(`cosmoz-tabs-next-data-demo`,o(P)),F={parameters:{docs:{source:{code:`const model = useTabs(invoiceTabs);

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`},description:{story:"Driven entirely from a data array with `useTabs(tabs)` -> `renderTabs(model)` for the bar and `renderActivated(model, …)` for the panels (which keeps already-visited panels mounted). Pass `{ hashParam }` to `useTabs` to bind selection to the URL (see *Hash routing*)."}}},render:()=>r`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`},I=()=>{let e=v(h,{hashParam:`ntab`});return r`
        ${f}
        <cosmoz-tabs-next variant="brand">
            ${y({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${b(e,e=>e.isActive?r`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-hash-demo`)||customElements.define(`cosmoz-tabs-next-hash-demo`,o(I)),L={parameters:{docs:{source:{code:`const model = useTabs(invoiceTabs, { hashParam: 'ntab' });

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`},description:{story:'Bind selection to the URL by passing `{ hashParam }` to `useTabs` (here `useTabs(tabs, { hashParam: "ntab" })`) — deep-links and the back button work, just like the legacy family. Note: inside Storybook the visible address bar belongs to the **manager**, while the component binds to the **preview iframe** URL, so the change is not visible here. Open this story in a new tab / isolation mode to see the real URL change and the back button.'}}},render:()=>r`<cosmoz-tabs-next-hash-demo></cosmoz-tabs-next-hash-demo>`},R=e=>{let t=e.getAttribute(`vars`)||``,[n,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return r`
        ${f}
        <cosmoz-tabs-next variant="brand" style=${t}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${n===`overview`}
                @click=${o}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${n===`rows`}
                @click=${o}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${n===`accounting`}
                @click=${o}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[n]()}</div>
    `},customElements.get(`cosmoz-tabs-next-colors-bar`)||customElements.define(`cosmoz-tabs-next-colors-bar`,o(R,{observedAttributes:[`vars`]})),z={parameters:{docs:{source:{code:`
<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"The selected pill **and** the badge are a solid brand fill — `--cz-color-bg-brand-solid` with `--cz-color-text-on-brand` — so the text stays legible in both light and dark themes. Override `--cz-color-bg-brand-solid` on the `<cosmoz-tabs-next>` host to recolor them (e.g. to a success/error solid); the on-brand text follows."}}},render:()=>r`
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                <cosmoz-tabs-next-colors-bar></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">success</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">error</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
        </div>
    `},B=()=>{let[e,t]=a(`overview`),n=e=>t(e.currentTarget.dataset.name);return r`
        ${f}
        <cosmoz-tabs-next
            variant="brand"
            style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);"
        >
            <cosmoz-tab-next
                data-name="overview"
                ?active=${e===`overview`}
                @click=${n}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${e===`rows`}
                @click=${n}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${e===`accounting`}
                @click=${n}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${C[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-minimal-demo`)||customElements.define(`cosmoz-tabs-next-minimal-demo`,o(B)),V={parameters:{docs:{source:{code:`<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary);
         --cz-color-text-on-brand: var(--cz-color-text-primary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"A subtle neutral pill — point `--cz-color-bg-brand-solid` at `--cz-color-bg-tertiary` and `--cz-color-text-on-brand` at `--cz-color-text-primary`. Unlike a brand *tint*, this neutral pair keeps its contrast in both light and dark themes."}}},render:()=>r`<cosmoz-tabs-next-minimal-demo></cosmoz-tabs-next-minimal-demo>`},H={parameters:{docs:{description:{story:"A bench of selected-pill / badge color configurations for checking light **and** dark themes. Each recolors `--cz-color-bg-brand-solid` (the neutral one also overrides `--cz-color-text-on-brand`); the on-brand text follows automatically. Toggle the theme in the toolbar to verify contrast."}}},render:()=>r`
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                <cosmoz-tabs-next-colors-bar></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">success</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">error</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">warning</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-warning-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">neutral</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
        </div>
    `},U=[`Default`,`Variants`,`WithIcons`,`DisabledAndHidden`,`CompactWidth`,`DataDriven`,`HashRouting`,`SelectedColors`,`Minimal`,`Theming`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
  name: 'Compact width',
  parameters: {
    docs: {
      source: {
        code: \`
<cosmoz-tabs-next variant="underline" compact-width>
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'Tabs spread evenly across the available width by default. Add the ' + '\`compact-width\` attribute to size them to their content (they hug ' + 'their labels and align to the start).'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-compactwidth-demo></cosmoz-tabs-next-compactwidth-demo>\`
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
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'The selected pill **and** the badge are a solid brand fill — ' + '\`--cz-color-bg-brand-solid\` with \`--cz-color-text-on-brand\` — so the ' + 'text stays legible in both light and dark themes. Override ' + '\`--cz-color-bg-brand-solid\` on the \`<cosmoz-tabs-next>\` host to ' + 'recolor them (e.g. to a success/error solid); the on-brand text ' + 'follows.'
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
                <div class="story-label">success</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">error</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);"
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
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary);
         --cz-color-text-on-brand: var(--cz-color-text-primary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\\\${active === 'overview'} @click=\\\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>\`
      },
      description: {
        story: 'A subtle neutral pill — point \`--cz-color-bg-brand-solid\` at ' + '\`--cz-color-bg-tertiary\` and \`--cz-color-text-on-brand\` at ' + '\`--cz-color-text-primary\`. Unlike a brand *tint*, this neutral pair ' + 'keeps its contrast in both light and dark themes.'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-minimal-demo></cosmoz-tabs-next-minimal-demo>\`
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A bench of selected-pill / badge color configurations for checking ' + 'light **and** dark themes. Each recolors \`--cz-color-bg-brand-solid\` ' + '(the neutral one also overrides \`--cz-color-text-on-brand\`); the ' + 'on-brand text follows automatically. Toggle the theme in the toolbar ' + 'to verify contrast.'
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
                <div class="story-label">success</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">error</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">warning</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-warning-solid);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
            <div>
                <div class="story-label">neutral</div>
                <cosmoz-tabs-next-colors-bar
                    vars="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);"
                ></cosmoz-tabs-next-colors-bar>
            </div>
        </div>
    \`
}`,...H.parameters?.docs?.source}}}})))()}W();export{N as CompactWidth,F as DataDriven,T as Default,j as DisabledAndHidden,L as HashRouting,V as Minimal,z as SelectedColors,H as Theming,D as Variants,k as WithIcons,U as __namedExportsOrder,S as default};