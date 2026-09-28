import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,i as n,s as r}from"./iframe-DiecIUpn.js";import{c as i,i as a,p as o,s}from"./if-defined-CcaVh5bt.js";import{f as c,l,m as u,r as d,t as f}from"./untitled-BYXnkhTA.js";import{a as p,c as m,i as h,l as g,o as _,s as v,t as y}from"./demo-content-BCE7NevF.js";import{a as b,i as x,r as S,t as C}from"./next-CkbRyp14.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;function G(){return(G=e((()=>{s(),t(),f(),C(),p(),w={title:`Tabs/cosmoz-tabs-next`,component:`cosmoz-tabs-next`,tags:[`autodocs`],parameters:{docs:{description:{component:"Next, data-driven tabs. A `cosmoz-tab-next` is **only the clickable header** — it does not switch panels by itself. Selection is owned by the consumer: either wire `active` + a click handler yourself (the raw element API, used by most demos below), or use the `useTabs`/`renderTabs`/`renderActivated` hook API (see *Data driven*)."}},controls:{disable:!0}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`,`segmented`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}},size:{control:`select`,options:[``,`sm`],description:`How much box the tabs carry; omit for the default`,table:{defaultValue:{summary:`(default)`}}}}},T={overview:v,rows:g,accounting:y,history:h},E=e=>{let t=e.getAttribute(`variant`)||`underline`,n=e.hasAttribute(`with-icons`),[i,s]=o(`overview`),f=e=>s(e.currentTarget.dataset.name);return r`
        ${m}
        <cosmoz-tabs-next variant=${t}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${i===`overview`}
                @click=${f}
            >
                ${a(n,()=>d({slot:`icon`}))} Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${i===`rows`}
                @click=${f}
            >
                ${a(n,()=>l({slot:`icon`}))} Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${i===`accounting`}
                @click=${f}
            >
                ${a(n,()=>u({slot:`icon`}))} Accounting
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="history"
                ?active=${i===`history`}
                @click=${f}
            >
                ${a(n,()=>c({slot:`icon`}))} History
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${T[i]()}</div>
    `},customElements.get(`cosmoz-tabs-next-default-demo`)||customElements.define(`cosmoz-tabs-next-default-demo`,i(E,{observedAttributes:[`variant`,`with-icons`]})),D={args:{variant:`underline`,withIcons:!1},argTypes:{withIcons:{control:`boolean`,description:"Slot a leading icon into each tab via the `icon` slot",table:{defaultValue:{summary:`false`}}}},parameters:{controls:{disable:!1},docs:{source:{code:`const [active, setActive] = useState('overview');
const select = (e) => setActive(e.currentTarget.dataset.name);

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="rows" badge="5"
    ?active=\${active === 'rows'} @click=\${select}>Invoice rows</cosmoz-tab-next>
  <!-- … -->
</cosmoz-tabs-next>
<div>\${panels[active]()}</div>

<!-- with icons: slot an icon template with slot="icon" before the label -->
<cosmoz-tab-next data-name="overview" …>
  \${receiptIcon({ slot: 'icon' })} Overview
</cosmoz-tab-next>`}}},render:({variant:e,withIcons:t})=>r`<cosmoz-tabs-next-default-demo
            variant=${e}
            ?with-icons=${t}
        ></cosmoz-tabs-next-default-demo>`},O=e=>{let t=e.getAttribute(`variant`)||`underline`,i=e.getAttribute(`size`)||n,[a,s]=o(`overview`),c=e=>s(e.currentTarget.dataset.name);return r`
        ${m}
        <cosmoz-tabs-next variant=${t} size=${i}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${a===`overview`}
                @click=${c}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${a===`rows`}
                @click=${c}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${a===`accounting`}
                @click=${c}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${T[a]()}</div>
    `},customElements.get(`cosmoz-tabs-next-variants-bar`)||customElements.define(`cosmoz-tabs-next-variants-bar`,i(O,{observedAttributes:[`variant`,`size`]})),k={parameters:{docs:{source:{code:`const [active, setActive] = useState('overview');
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
    `},A={parameters:{docs:{source:{code:`<cosmoz-tabs-next variant="segmented" compact-width>…</cosmoz-tabs-next>
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
    `},j=()=>{let[e,t]=o(`overview`),n=e=>{let n=e.currentTarget;n.hasAttribute(`disabled`)||t(n.dataset.name)};return r`
        ${m}
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
        <div style="padding-top: 20px">${T[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-states-demo`)||customElements.define(`cosmoz-tabs-next-states-demo`,i(j)),M={parameters:{docs:{source:{code:`const select = (e) => {
  const el = e.currentTarget;
  if (!el.hasAttribute('disabled')) setActive(el.dataset.name);
};

<cosmoz-tabs-next variant="underline">
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
  <cosmoz-tab-next data-name="accounting" disabled @click=\${select}>Accounting</cosmoz-tab-next>
  <cosmoz-tab-next data-name="history" hidden @click=\${select}>History</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"A `disabled` tab cannot be activated (the click handler guards it); a `hidden` tab is removed from the bar."}}},render:()=>r`<cosmoz-tabs-next-states-demo></cosmoz-tabs-next-states-demo>`},N=()=>{let[e,t]=o(`overview`),n=e=>t(e.currentTarget.dataset.name);return r`
        ${m}
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
        <div style="padding-top: 20px">${T[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-compactwidth-demo`)||customElements.define(`cosmoz-tabs-next-compactwidth-demo`,i(N)),P={name:`Compact width`,parameters:{docs:{source:{code:`
<cosmoz-tabs-next variant="underline" compact-width>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"Tabs spread evenly across the available width by default. Add the `compact-width` attribute to size them to their content (they hug their labels and align to the start)."}}},render:()=>r`<cosmoz-tabs-next-compactwidth-demo></cosmoz-tabs-next-compactwidth-demo>`},F=()=>{let e=b(_);return r`
        ${m}
        <cosmoz-tabs-next variant="brand">
            ${x({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${S(e,e=>e.isActive?r`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-data-demo`)||customElements.define(`cosmoz-tabs-next-data-demo`,i(F)),I={parameters:{docs:{source:{code:`const tabs = [
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
  tab.isActive ? tab.render() : nothing)}`},description:{story:"Driven entirely from a data array with `useTabs(tabs)` -> `renderTabs(model)` for the bar and `renderActivated(model, …)` for the panels (which keeps already-visited panels mounted). Tabs accept an optional `icon` factory from `@neovici/cosmoz-icons`, rendered into the tab's `icon` slot. Pass `{ hashParam }` to `useTabs` to bind selection to the URL (see *Hash routing*)."}}},render:()=>r`<cosmoz-tabs-next-data-demo></cosmoz-tabs-next-data-demo>`},L=()=>{let e=b(_,{hashParam:`ntab`});return r`
        ${m}
        <cosmoz-tabs-next variant="brand">
            ${x({...e,variant:`brand`})}
        </cosmoz-tabs-next>
        ${S(e,e=>e.isActive?r`<div style="padding-top: 20px">${e.render()}</div>`:n)}
    `},customElements.get(`cosmoz-tabs-next-hash-demo`)||customElements.define(`cosmoz-tabs-next-hash-demo`,i(L)),R={parameters:{docs:{source:{code:`const model = useTabs(invoiceTabs, { hashParam: 'ntab' });

<cosmoz-tabs-next variant="brand">
  \${renderTabs({ ...model, variant: 'brand' })}
</cosmoz-tabs-next>
\${renderActivated(model, (tab) =>
  tab.isActive ? tab.render() : nothing)}`},description:{story:'Bind selection to the URL by passing `{ hashParam }` to `useTabs` (here `useTabs(tabs, { hashParam: "ntab" })`) — deep-links and the back button work, just like the legacy family. Note: inside Storybook the visible address bar belongs to the **manager**, while the component binds to the **preview iframe** URL, so the change is not visible here. Open this story in a new tab / isolation mode to see the real URL change and the back button.'}}},render:()=>r`<cosmoz-tabs-next-hash-demo></cosmoz-tabs-next-hash-demo>`},z=e=>{let t=e.getAttribute(`vars`)||``,[n,i]=o(`overview`),a=e=>i(e.currentTarget.dataset.name);return r`
        ${m}
        <cosmoz-tabs-next variant="brand" style=${t}>
            <cosmoz-tab-next
                data-name="overview"
                ?active=${n===`overview`}
                @click=${a}
            >
                Overview
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="rows"
                badge="5"
                ?active=${n===`rows`}
                @click=${a}
            >
                Invoice rows
            </cosmoz-tab-next>
            <cosmoz-tab-next
                data-name="accounting"
                ?active=${n===`accounting`}
                @click=${a}
            >
                Accounting
            </cosmoz-tab-next>
        </cosmoz-tabs-next>
        <div style="padding-top: 20px">${T[n]()}</div>
    `},customElements.get(`cosmoz-tabs-next-colors-bar`)||customElements.define(`cosmoz-tabs-next-colors-bar`,i(z,{observedAttributes:[`vars`]})),B={parameters:{docs:{source:{code:`
<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"The selected pill is a solid `--cz-color-bg-brand-solid` fill with `--cz-color-text-on-brand` text; the counter is the Untitled UI badge — gray by default, stepping up to `--cz-color-bg-tertiary` while the tab is hot. Override `--cz-color-bg-brand-solid` on the host to recolor the pill (e.g. to a success/error solid)."}}},render:()=>r`
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
    `},V=()=>{let[e,t]=o(`overview`),n=e=>t(e.currentTarget.dataset.name);return r`
        ${m}
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
        <div style="padding-top: 20px">${T[e]()}</div>
    `},customElements.get(`cosmoz-tabs-next-minimal-demo`)||customElements.define(`cosmoz-tabs-next-minimal-demo`,i(V)),H={parameters:{docs:{source:{code:`<cosmoz-tabs-next
  variant="brand"
  style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary);
         --cz-color-text-on-brand: var(--cz-color-text-primary);"
>
  <cosmoz-tab-next data-name="overview"
    ?active=\${active === 'overview'} @click=\${select}>Overview</cosmoz-tab-next>
</cosmoz-tabs-next>`},description:{story:"A subtle neutral pill — point `--cz-color-bg-brand-solid` at `--cz-color-bg-tertiary` and `--cz-color-text-on-brand` at `--cz-color-text-primary`. Unlike a brand *tint*, this neutral pair keeps its contrast in both light and dark themes."}}},render:()=>r`<cosmoz-tabs-next-minimal-demo></cosmoz-tabs-next-minimal-demo>`},U={parameters:{docs:{description:{story:"A bench of selected-pill / badge color configurations for checking light **and** dark themes. Each recolors `--cz-color-bg-brand-solid` (the neutral one also overrides `--cz-color-text-on-brand`); the on-brand text follows automatically. Toggle the theme in the toolbar to verify contrast."}}},render:()=>r`
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
    `},W=[`Default`,`Variants`,`Sizes`,`DisabledAndHidden`,`CompactWidth`,`DataDriven`,`HashRouting`,`SelectedColors`,`Minimal`,`Theming`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    withIcons: false
  },
  argTypes: {
    withIcons: {
      control: 'boolean',
      description: 'Slot a leading icon into each tab via the \`icon\` slot',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    }
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
<div>\\\${panels[active]()}</div>

<!-- with icons: slot an icon template with slot="icon" before the label -->
<cosmoz-tab-next data-name="overview" …>
  \\\${receiptIcon({ slot: 'icon' })} Overview
</cosmoz-tab-next>\`
      }
    }
  },
  render: ({
    variant,
    withIcons
  }) => html\`<cosmoz-tabs-next-default-demo
            variant=\${variant}
            ?with-icons=\${withIcons}
        ></cosmoz-tabs-next-default-demo>\`
}`,...D.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
        story: 'The selected pill is a solid \`--cz-color-bg-brand-solid\` fill with ' + '\`--cz-color-text-on-brand\` text; the counter is the Untitled UI badge ' + '— gray by default, stepping up to \`--cz-color-bg-tertiary\` while the tab ' + 'is hot. Override \`--cz-color-bg-brand-solid\` on the host to recolor the ' + 'pill (e.g. to a success/error solid).'
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
}`,...B.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}}})))()}G();export{P as CompactWidth,I as DataDriven,D as Default,M as DisabledAndHidden,R as HashRouting,H as Minimal,B as SelectedColors,A as Sizes,U as Theming,k as Variants,W as __namedExportsOrder,w as default};