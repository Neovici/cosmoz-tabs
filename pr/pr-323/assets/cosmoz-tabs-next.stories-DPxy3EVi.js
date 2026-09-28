import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,i as n,s as r}from"./iframe-Ds3MNnJ4.js";import{c as i,p as a,s as o}from"./if-defined-D95K_YB7.js";import{a as s,c,i as l,l as u,o as d,s as f,t as p}from"./demo-content-D4X9d_UO.js";import{a as m,i as h,r as g,t as _}from"./next-D7ZvTPPF.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{o(),t(),_(),s(),v={title:`Tabs/cosmoz-tabs-next`,component:`cosmoz-tabs-next`,tags:[`autodocs`],parameters:{docs:{description:{component:"Next, data-driven tabs. A `cosmoz-tab-next` is **only the clickable header** — it does not switch panels by itself. Selection is owned by the consumer: either wire `active` + a click handler yourself (the raw element API, used by most demos below), or use the `useTabs`/`renderTabs`/`renderActivated` hook API (see *Data driven*)."}},controls:{disable:!0}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`,`segmented`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}},size:{control:`select`,options:[``,`sm`],description:`How much box the tabs carry; omit for the default`,table:{defaultValue:{summary:`(default)`}}}}},y={overview:f,rows:u,accounting:p,history:l},b=e=>{let t=e.getAttribute(`variant`)||`underline`,[n,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return r`
        ${c}
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
        <div style="padding-top: 20px">${y[n]()}</div>
    `},customElements.get(`cosmoz-tabs-next-default-demo`)||customElements.define(`cosmoz-tabs-next-default-demo`,i(b,{observedAttributes:[`variant`]})),x={args:{variant:`underline`},parameters:{controls:{disable:!1},docs:{source:{code:`const [active, setActive] = useState('overview');
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
        ></cosmoz-tabs-next-default-demo>`},S=e=>{let t=e.getAttribute(`variant`)||`underline`,i=e.getAttribute(`size`)||n,[o,s]=a(`overview`),l=e=>s(e.currentTarget.dataset.name);return r`
        ${c}
        <cosmoz-tabs-next variant=${t} size=${i}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${o===`overview`}
                @click=${l}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${o===`rows`}
                @click=${l}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${o===`accounting`}
                @click=${l}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${y[o]()}</div>
    `},customElements.get(`cosmoz-tabs-next-variants-bar`)||customElements.define(`cosmoz-tabs-next-variants-bar`,i(S,{observedAttributes:[`variant`,`size`]})),C={parameters:{docs:{source:{code:`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>`},description:{story:'The three Untitled UI looks: `underline` (default), `brand` (solid pill) and `segmented` (Untitled\'s "button border" — a track holding a raised, selected pill). Each bar is independently interactive.'}}},render:()=>r`
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
            <div>
                <div class="story-label">variant="segmented"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="segmented"
                ></cosmoz-tabs-next-variants-bar>
            </div>
        </div>
    `},w={parameters:{docs:{source:{code:`<cosmoz-tabs-next variant="segmented" compact-width>…</cosmoz-tabs-next>
<cosmoz-tabs-next variant="segmented" compact-width size="sm">…</cosmoz-tabs-next>`},description:{story:'`size="sm"` trims the item padding on both axes and thins the segmented track ring, so the control stops out-weighing a heading it sits next to. The type is untouched, so the labels read the same. Shown on `segmented`, where the track makes the difference clearest, but the attribute applies to every variant.'}}},render:()=>r`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="segmented" (default size)</div>
                <cosmoz-tabs-next-variants-bar
                    variant="segmented"
                ></cosmoz-tabs-next-variants-bar>
            </div>
            <div>
                <div class="story-label">variant="segmented" size="sm"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="segmented"
                    size="sm"
                ></cosmoz-tabs-next-variants-bar>
            </div>
        </div>
    `},T=()=>{let[e,t]=a(`overview`),n=e=>{let n=e.currentTarget;n.hasAttribute(`disabled`)||t(n.dataset.name)};return r`
        ${c}
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
        <div style="padding-top: 20px">${y[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-states-demo`)||customElements.define(`cosmoz-tabs-next-states-demo`,i(T)),E={parameters:{docs:{source:{code:`const select = (e) => {
  const el = e.currentTarget;
  if (!el.hasAttribute('disabled')) setActive(el.dataset.name);
};

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="accounting" disabled @click=\${select}>Accounting</cosmoz-tab-next>
  <cosmoz-tab-next data-name="history" hidden @click=\${select}>History</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"A `disabled` tab cannot be activated (the click handler guards it); a `hidden` tab is removed from the bar."}}},render:()=>r`<cosmoz-tabs-next-states-demo></cosmoz-tabs-next-states-demo>`},D=()=>{let[e,t]=a(`overview`),n=e=>t(e.currentTarget.dataset.name);return r`
        ${c}
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
        <div style="padding-top: 20px">${y[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-compactwidth-demo`)||customElements.define(`cosmoz-tabs-next-compactwidth-demo`,i(D)),O={name:`Compact width`,parameters:{docs:{source:{code:`
<cosmoz-tabs-next variant="underline" compact-width>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"Tabs spread evenly across the available width by default. Add the `compact-width` attribute to size them to their content (they hug their labels and align to the start)."}}},render:()=>r`<cosmoz-tabs-next-compactwidth-demo></cosmoz-tabs-next-compactwidth-demo>`},k=()=>{let e=m(d);return r`
        ${c}
        <cosmoz-tabs-next variant="brand">
            ${h({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${g(e,e=>e.isActive?r`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-data-demo`)||customElements.define(`cosmoz-tabs-next-data-demo`,i(k)),A={parameters:{docs:{source:{code:`const tabs = [
  { name: 'overview', title: 'Overview',
    icon: receiptIcon, render: overview },
  { name: 'rows', title: 'Invoice rows', badge: '5',
    icon: listIcon, render: rows },
];

const model = useTabs(tabs);

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`},description:{story:"Driven entirely from a data array with `useTabs(tabs)` -> `renderTabs(model)` for the bar and `renderActivated(model, …)` for the panels (which keeps already-visited panels mounted). Tabs accept an optional `icon` factory from `@neovici/cosmoz-icons`, rendered into the tab's `icon` slot. Pass `{ hashParam }` to `useTabs` to bind selection to the URL (see *Hash routing*)."}}},render:()=>r`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`},j=()=>{let e=m(d,{hashParam:`ntab`});return r`
        ${c}
        <cosmoz-tabs-next variant="brand">
            ${h({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${g(e,e=>e.isActive?r`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-hash-demo`)||customElements.define(`cosmoz-tabs-next-hash-demo`,i(j)),M={parameters:{docs:{source:{code:`const model = useTabs(invoiceTabs, { hashParam: 'ntab' });

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`},description:{story:'Bind selection to the URL by passing `{ hashParam }` to `useTabs` (here `useTabs(tabs, { hashParam: "ntab" })`) — deep-links and the back button work, just like the legacy family. Note: inside Storybook the visible address bar belongs to the **manager**, while the component binds to the **preview iframe** URL, so the change is not visible here. Open this story in a new tab / isolation mode to see the real URL change and the back button.'}}},render:()=>r`<cosmoz-tabs-next-hash-demo></cosmoz-tabs-next-hash-demo>`},N=e=>{let t=e.getAttribute(`vars`)||``,[n,i]=a(`overview`),o=e=>i(e.currentTarget.dataset.name);return r`
        ${c}
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
        <div style="padding-top: 20px">${y[n]()}</div>
    `},customElements.get(`cosmoz-tabs-next-colors-bar`)||customElements.define(`cosmoz-tabs-next-colors-bar`,i(N,{observedAttributes:[`vars`]})),P={parameters:{docs:{source:{code:`
<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"The selected pill is a solid `--cz-color-bg-brand-solid` fill with `--cz-color-text-on-brand` text; the counter is the Untitled UI badge — gray by default, and a tint of the same brand token while the tab is hot. Override `--cz-color-bg-brand-solid` on the host to recolor both (e.g. to a success/error solid)."}}},render:()=>r`
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
    `},F=()=>{let[e,t]=a(`overview`),n=e=>t(e.currentTarget.dataset.name);return r`
        ${c}
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
        <div style="padding-top: 20px">${y[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-minimal-demo`)||customElements.define(`cosmoz-tabs-next-minimal-demo`,i(F)),I={parameters:{docs:{source:{code:`<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary);
         --cz-color-text-on-brand: var(--cz-color-text-primary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"A subtle neutral pill — point `--cz-color-bg-brand-solid` at `--cz-color-bg-tertiary` and `--cz-color-text-on-brand` at `--cz-color-text-primary`. Unlike a brand *tint*, this neutral pair keeps its contrast in both light and dark themes."}}},render:()=>r`<cosmoz-tabs-next-minimal-demo></cosmoz-tabs-next-minimal-demo>`},L={parameters:{docs:{description:{story:"A bench of selected-pill / badge color configurations for checking light **and** dark themes. Each recolors `--cz-color-bg-brand-solid` (the neutral one also overrides `--cz-color-text-on-brand`); the on-brand text follows automatically. Toggle the theme in the toolbar to verify contrast."}}},render:()=>r`
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
    `},R=[`Default`,`Variants`,`Sizes`,`DisabledAndHidden`,`CompactWidth`,`DataDriven`,`HashRouting`,`SelectedColors`,`Minimal`,`Theming`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
        story: 'The three Untitled UI looks: \`underline\` (default), \`brand\` (solid ' + 'pill) and \`segmented\` (Untitled\\'s "button border" — a track holding ' + 'a raised, selected pill). Each bar is independently interactive.'
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
            <div>
                <div class="story-label">variant="segmented"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="segmented"
                ></cosmoz-tabs-next-variants-bar>
            </div>
        </div>
    \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`<cosmoz-tabs-next variant="segmented" compact-width>…</cosmoz-tabs-next>
<cosmoz-tabs-next variant="segmented" compact-width size="sm">…</cosmoz-tabs-next>\`
      },
      description: {
        story: '\`size="sm"\` trims the item padding on both axes and thins the ' + 'segmented track ring, so the control stops out-weighing a heading ' + 'it sits next to. The type is untouched, so the labels read the same. ' + 'Shown on \`segmented\`, where the track makes the difference clearest, ' + 'but the attribute applies to every variant.'
      }
    }
  },
  render: () => html\`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="segmented" (default size)</div>
                <cosmoz-tabs-next-variants-bar
                    variant="segmented"
                ></cosmoz-tabs-next-variants-bar>
            </div>
            <div>
                <div class="story-label">variant="segmented" size="sm"</div>
                <cosmoz-tabs-next-variants-bar
                    variant="segmented"
                    size="sm"
                ></cosmoz-tabs-next-variants-bar>
            </div>
        </div>
    \`
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`const tabs = [
  { name: 'overview', title: 'Overview',
    icon: receiptIcon, render: overview },
  { name: 'rows', title: 'Invoice rows', badge: '5',
    icon: listIcon, render: rows },
];

const model = useTabs(tabs);

<cosmoz-tabs-next variant="brand">
  \\\${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\\\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}\`
      },
      description: {
        story: 'Driven entirely from a data array with \`useTabs(tabs)\` -> ' + '\`renderTabs(model)\` for the bar and \`renderActivated(model, …)\` for ' + 'the panels (which keeps already-visited panels mounted). Tabs accept ' + 'an optional \`icon\` factory from \`@neovici/cosmoz-icons\`, rendered ' + 'into the tab\\'s \`icon\` slot. Pass \`{ hashParam }\` to \`useTabs\` to ' + 'bind selection to the URL (see *Hash routing*).'
      }
    }
  },
  render: () => html\`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>\`
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
        story: 'The selected pill is a solid \`--cz-color-bg-brand-solid\` fill with ' + '\`--cz-color-text-on-brand\` text; the counter is the Untitled UI badge ' + '— gray by default, and a tint of the same brand token while the tab is ' + 'hot. Override \`--cz-color-bg-brand-solid\` on the host to recolor both ' + '(e.g. to a success/error solid).'
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}}})))()}z();export{O as CompactWidth,A as DataDriven,x as Default,E as DisabledAndHidden,M as HashRouting,I as Minimal,P as SelectedColors,w as Sizes,L as Theming,C as Variants,R as __namedExportsOrder,v as default};