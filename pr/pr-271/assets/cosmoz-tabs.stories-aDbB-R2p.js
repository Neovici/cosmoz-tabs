import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,U as n,q as r}from"./iframe-BbtqH6Sy.js";import{n as i,t as a}from"./if-defined-BdnvE9q8.js";import{n as o,r as s,t as c}from"./demo-content-ZALH-5Qa.js";import{t as l}from"./cosmoz-tabs-CeAVPeGD.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{r(),a(),l(),c(),u={title:`Tabs/cosmoz-tabs`,component:`cosmoz-tabs`,tags:[`autodocs`],parameters:{docs:{description:{component:"Legacy, DOM-driven tabs: you author `<cosmoz-tab>` elements and the container renders the bar and switches the panels. Selection works out of the box (no wiring needed)."}},controls:{disable:!0}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}}}},d=({variant:e=`underline`,selected:r=`overview`,icons:a=!0})=>t`
    ${s}
    <cosmoz-tabs variant=${e} .selected=${r}>
        ${o.map(e=>t`
                <cosmoz-tab
                    name=${e.name}
                    heading=${e.title}
                    badge=${i(e.badge)}
                    .icon=${a?e.icon():n}
                >
                    ${e.render()}
                </cosmoz-tab>
            `)}
    </cosmoz-tabs>
`,f={args:{variant:`underline`},parameters:{controls:{disable:!1}},render:d},p={parameters:{docs:{description:{story:"The two Untitled UI looks side by side: `underline` (default) and `brand` (pill)."}}},render:()=>t`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                ${d({variant:`underline`})}
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                ${d({variant:`brand`})}
            </div>
        </div>
    `},m={parameters:{docs:{description:{story:"Headings only — icons are optional (set via the `.icon` property)."}}},render:()=>d({variant:`underline`,icons:!1})},h={parameters:{docs:{description:{story:`A disabled tab is shown but not selectable; a hidden tab is removed from the bar entirely.`}}},render:()=>t`
        ${s}
        <cosmoz-tabs variant="underline" .selected=${`overview`}>
            <cosmoz-tab name="overview" heading="Overview">
                ${o[0].render()}
            </cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                ${o[1].render()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting" disabled>
                ${o[2].render()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History" hidden>
                ${o[3].render()}
            </cosmoz-tab>
            <cosmoz-tab name="comments" heading="Comments" badge="2">
                ${o[4].render()}
            </cosmoz-tab>
        </cosmoz-tabs>
    `},g={parameters:{docs:{description:{story:"With `hash-param` the active tab is bound to the URL hash (e.g. `#tab=accounting`), so deep-links and the back button work."}}},render:()=>t`
        ${s}
        <cosmoz-tabs variant="underline" hash-param="tab">
            ${o.map(e=>t`
                    <cosmoz-tab
                        name=${e.name}
                        heading=${e.title}
                        badge=${i(e.badge)}
                    >
                        ${e.render()}
                    </cosmoz-tab>
                `)}
        </cosmoz-tabs>
    `},_={parameters:{docs:{description:{story:`When the bar overflows its container it scrolls horizontally and the selected tab is scrolled into view.`}}},render:()=>t`
        ${s}
        <div style="max-width: 460px">
            <cosmoz-tabs variant="brand" .selected=${`overview`}>
                ${o.map(e=>t`
                        <cosmoz-tab
                            name=${e.name}
                            heading=${e.title}
                            badge=${i(e.badge)}
                            .icon=${e.icon()}
                        >
                            ${e.render()}
                        </cosmoz-tab>
                    `)}
                <cosmoz-tab name="ocr" heading="OCR">
                    <div class="panel">
                        <p>Raw OCR interpretation of the scanned document.</p>
                    </div>
                </cosmoz-tab>
                <cosmoz-tab name="matches" heading="Matches">
                    <div class="panel">
                        <p>Order / delivery lines matched to this invoice.</p>
                    </div>
                </cosmoz-tab>
            </cosmoz-tabs>
        </div>
    `},v={parameters:{docs:{description:{story:"A tab panel containing `cosmoz-tab-card` (collapsible cards) — a common cosmoz-frontend pattern. Cards are sized via `--cosmoz-tab-card-width` to fit their content."}}},render:()=>t`
        ${s}
        <cosmoz-tabs variant="underline" .selected=${`overview`}>
            <cosmoz-tab
                name="overview"
                heading="Overview"
                style="--cosmoz-tab-card-width: 480px;"
            >
                <cosmoz-tab-card heading="Invoice details">
                    ${o[0].render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Accounting" collapsable>
                    ${o[2].render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                    ${o[5].render()}
                </cosmoz-tab-card>
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">
                ${o[3].render()}
            </cosmoz-tab>
        </cosmoz-tabs>
    `},y=(e,n)=>t`
    <cosmoz-tabs
        variant=${e}
        .selected=${`overview`}
        full-width=${i(n===!1?`false`:void 0)}
    >
        ${o.slice(0,4).map(e=>t`
                    <cosmoz-tab
                        name=${e.name}
                        heading=${e.title}
                        badge=${i(e.badge)}
                    >
                        ${e.render()}
                    </cosmoz-tab>
                `)}
    </cosmoz-tabs>
`,b={argTypes:{variant:{control:`select`,options:[`brand`,`underline`]}},args:{variant:`underline`},parameters:{controls:{disable:!1},docs:{description:{story:'Tabs spread evenly across the available width by default (the legacy always-spread behavior). Set `full-width="false"` to size them to their content.'}}},render:({variant:e})=>t`
        ${s}
        <div class="story-stack">
            <div>
                <div class="story-label">default (spread)</div>
                ${y(e,!0)}
            </div>
            <div>
                <div class="story-label">variant="brand" (spread)</div>
                ${y(`brand`,!0)}
            </div>
        </div>
    `},x=e=>t`
    <cosmoz-tabs variant="brand" .selected=${`overview`} style=${e}>
        ${o.slice(0,4).map(e=>t`
                    <cosmoz-tab
                        name=${e.name}
                        heading=${e.title}
                        badge=${i(e.badge)}
                    >
                        ${e.render()}
                    </cosmoz-tab>
                `)}
    </cosmoz-tabs>
`,S={parameters:{docs:{description:{story:"The selected pill **and** the badge both read `--cz-color-bg-brand` / `--cz-color-text-brand`. Override just those two tokens on the `<cosmoz-tabs>` host to recolor them — no `--cosmoz-tabs-*` knobs needed. They share the same tokens, so the pill and badge always stay in sync (you cannot color them independently without new vars)."}}},render:()=>t`
        ${s}
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                ${x(``)}
            </div>
            <div>
                <div class="story-label">brand solid</div>
                ${x(`--cz-color-bg-brand: var(--cz-color-bg-brand-solid); --cz-color-text-brand: var(--cz-color-text-on-brand);`)}
            </div>
            <div>
                <div class="story-label">gray</div>
                ${x(`--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);`)}
            </div>
        </div>
    `},C={parameters:{docs:{description:{story:"Untitled UI’s *button minimal* look — the `brand` pill recolored to a subtle neutral by pointing `--cz-color-bg-brand` at `--cz-color-bg-secondary` (and `--cz-color-text-brand` at `--cz-color-text-secondary`). Achievable with the existing tokens, no new variant. (Untitled’s *button border* / segmented look is **not** reachable via tokens alone — it needs a bordered container + selected shadow, i.e. a dedicated variant.)"}}},render:()=>t`${s}${x(`--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);`)}`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'underline'
  },
  parameters: {
    controls: {
      disable: false
    }
  },
  render: invoice
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The two Untitled UI looks side by side: \`underline\` (default) and ' + '\`brand\` (pill).'
      }
    }
  },
  render: () => html\`
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                \${invoice({
    variant: 'underline'
  })}
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                \${invoice({
    variant: 'brand'
  })}
            </div>
        </div>
    \`
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Headings only — icons are optional (set via the \`.icon\` property).'
      }
    }
  },
  render: () => invoice({
    variant: 'underline',
    icons: false
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A disabled tab is shown but not selectable; a hidden tab is removed ' + 'from the bar entirely.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <cosmoz-tabs variant="underline" .selected=\${'overview'}>
            <cosmoz-tab name="overview" heading="Overview">
                \${invoiceTabs[0].render()}
            </cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                \${invoiceTabs[1].render()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting" disabled>
                \${invoiceTabs[2].render()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History" hidden>
                \${invoiceTabs[3].render()}
            </cosmoz-tab>
            <cosmoz-tab name="comments" heading="Comments" badge="2">
                \${invoiceTabs[4].render()}
            </cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'With \`hash-param\` the active tab is bound to the URL hash ' + '(e.g. \`#tab=accounting\`), so deep-links and the back button work.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <cosmoz-tabs variant="underline" hash-param="tab">
            \${invoiceTabs.map(tab => html\`
                    <cosmoz-tab
                        name=\${tab.name}
                        heading=\${tab.title}
                        badge=\${ifDefined(tab.badge)}
                    >
                        \${tab.render()}
                    </cosmoz-tab>
                \`)}
        </cosmoz-tabs>
    \`
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'When the bar overflows its container it scrolls horizontally and the ' + 'selected tab is scrolled into view.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div style="max-width: 460px">
            <cosmoz-tabs variant="brand" .selected=\${'overview'}>
                \${invoiceTabs.map(tab => html\`
                        <cosmoz-tab
                            name=\${tab.name}
                            heading=\${tab.title}
                            badge=\${ifDefined(tab.badge)}
                            .icon=\${tab.icon()}
                        >
                            \${tab.render()}
                        </cosmoz-tab>
                    \`)}
                <cosmoz-tab name="ocr" heading="OCR">
                    <div class="panel">
                        <p>Raw OCR interpretation of the scanned document.</p>
                    </div>
                </cosmoz-tab>
                <cosmoz-tab name="matches" heading="Matches">
                    <div class="panel">
                        <p>Order / delivery lines matched to this invoice.</p>
                    </div>
                </cosmoz-tab>
            </cosmoz-tabs>
        </div>
    \`
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A tab panel containing \`cosmoz-tab-card\` (collapsible cards) — a ' + 'common cosmoz-frontend pattern. Cards are sized via ' + '\`--cosmoz-tab-card-width\` to fit their content.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <cosmoz-tabs variant="underline" .selected=\${'overview'}>
            <cosmoz-tab
                name="overview"
                heading="Overview"
                style="--cosmoz-tab-card-width: 480px;"
            >
                <cosmoz-tab-card heading="Invoice details">
                    \${invoiceTabs[0].render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Accounting" collapsable>
                    \${invoiceTabs[2].render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                    \${invoiceTabs[5].render()}
                </cosmoz-tab-card>
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">
                \${invoiceTabs[3].render()}
            </cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...v.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'underline']
    }
  },
  args: {
    variant: 'underline'
  },
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: 'Tabs spread evenly across the available width by default (the legacy ' + 'always-spread behavior). Set \`full-width="false"\` to size them to ' + 'their content.'
      }
    }
  },
  render: ({
    variant
  }) => html\`
        \${panelStyles}
        <div class="story-stack">
            <div>
                <div class="story-label">default (spread)</div>
                \${spread(variant, true)}
            </div>
            <div>
                <div class="story-label">variant="brand" (spread)</div>
                \${spread('brand', true)}
            </div>
        </div>
    \`
}`,...b.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The selected pill **and** the badge both read \`--cz-color-bg-brand\` / ' + '\`--cz-color-text-brand\`. Override just those two tokens on the ' + '\`<cosmoz-tabs>\` host to recolor them — no \`--cosmoz-tabs-*\` knobs ' + 'needed. They share the same tokens, so the pill and badge always ' + 'stay in sync (you cannot color them independently without new vars).'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                \${colored('')}
            </div>
            <div>
                <div class="story-label">brand solid</div>
                \${colored('--cz-color-bg-brand: var(--cz-color-bg-brand-solid); --cz-color-text-brand: var(--cz-color-text-on-brand);')}
            </div>
            <div>
                <div class="story-label">gray</div>
                \${colored('--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);')}
            </div>
        </div>
    \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    docs: {\n      description: {\n        story: 'Untitled UI’s *button minimal* look — the `brand` pill recolored to a ' + 'subtle neutral by pointing `--cz-color-bg-brand` at ' + '`--cz-color-bg-secondary` (and `--cz-color-text-brand` at ' + '`--cz-color-text-secondary`). Achievable with the existing tokens, no ' + 'new variant. (Untitled’s *button border* / segmented look is **not** ' + 'reachable via tokens alone — it needs a bordered container + selected ' + 'shadow, i.e. a dedicated variant.)'\n      }\n    }\n  },\n  render: () => html`${panelStyles}${colored('--cz-color-bg-brand: var(--cz-color-bg-secondary); --cz-color-text-brand: var(--cz-color-text-secondary);')}`\n}",...C.parameters?.docs?.source}}},w=[`Default`,`Variants`,`WithoutIcons`,`DisabledAndHidden`,`HashRouting`,`ManyTabs`,`WithTabCards`,`FullWidth`,`SelectedColors`,`Minimal`]}))();export{f as Default,h as DisabledAndHidden,b as FullWidth,g as HashRouting,_ as ManyTabs,C as Minimal,S as SelectedColors,p as Variants,v as WithTabCards,m as WithoutIcons,w as __namedExportsOrder,u as default};