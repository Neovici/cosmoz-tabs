import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-j6P15zpX.js";import{a as r,f as i,l as a,m as o,r as s,s as c,t as l}from"./untitled-uQ4zx_NT.js";import{a as u,c as d,i as f,l as p,n as m,r as h,s as g,t as _}from"./demo-content-CPSggqGR.js";import{t as v}from"./cosmoz-tabs-zWiCDhwu.js";var y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{l(),n(),v(),u(),y={title:`Tabs/cosmoz-tabs`,component:`cosmoz-tabs`,tags:[`autodocs`],parameters:{docs:{description:{component:"Legacy, DOM-driven tabs: you author `<cosmoz-tab>` elements and the container renders the bar and switches the panels. Selection works out of the box (no wiring needed)."}},controls:{disable:!0}},argTypes:{variant:{control:`select`,options:[`underline`,`brand`],description:`Untitled UI tab style`,table:{defaultValue:{summary:`underline`}}}}},b={args:{variant:`underline`},parameters:{controls:{disable:!1}},render:({variant:e})=>t`
        ${d}
        <cosmoz-tabs variant=${e} .selected=${`overview`}>
            <cosmoz-tab name="overview" heading="Overview" .icon=${s()}>
                ${g()}
            </cosmoz-tab>
            <cosmoz-tab
                name="rows"
                heading="Invoice rows"
                badge="5"
                .icon=${a()}
            >
                ${p()}
            </cosmoz-tab>
            <cosmoz-tab
                name="accounting"
                heading="Accounting"
                .icon=${o()}
            >
                ${_()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History" .icon=${i()}>
                ${f()}
            </cosmoz-tab>
            <cosmoz-tab
                name="comments"
                heading="Comments"
                badge="2"
                .icon=${c()}
            >
                ${h()}
            </cosmoz-tab>
            <cosmoz-tab
                name="attachments"
                heading="Attachments"
                badge="3"
                .icon=${r()}
            >
                ${m()}
            </cosmoz-tab>
        </cosmoz-tabs>
    `},x={parameters:{docs:{description:{story:"The two Untitled UI looks side by side: `underline` (default) and `brand` (pill)."}}},render:()=>t`
        ${d}
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                <cosmoz-tabs variant="underline" .selected=${`overview`}>
                    <cosmoz-tab name="overview" heading="Overview" .icon=${s()}>
                        ${g()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="rows"
                        heading="Invoice rows"
                        badge="5"
                        .icon=${a()}
                    >
                        ${p()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="accounting"
                        heading="Accounting"
                        .icon=${o()}
                    >
                        ${_()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                <cosmoz-tabs variant="brand" .selected=${`overview`}>
                    <cosmoz-tab name="overview" heading="Overview" .icon=${s()}>
                        ${g()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="rows"
                        heading="Invoice rows"
                        badge="5"
                        .icon=${a()}
                    >
                        ${p()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="accounting"
                        heading="Accounting"
                        .icon=${o()}
                    >
                        ${_()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
        </div>
    `},S={parameters:{docs:{description:{story:"Headings only — icons are optional (set via the `.icon` property)."}}},render:()=>t`
        ${d}
        <cosmoz-tabs variant="underline" .selected=${`overview`}>
            <cosmoz-tab name="overview" heading="Overview">${g()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                ${p()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                ${_()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">${f()}</cosmoz-tab>
        </cosmoz-tabs>
    `},C={parameters:{docs:{description:{story:`A disabled tab is shown but not selectable; a hidden tab is removed from the bar entirely.`}}},render:()=>t`
        ${d}
        <cosmoz-tabs variant="underline" .selected=${`overview`}>
            <cosmoz-tab name="overview" heading="Overview">${g()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                ${p()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting" disabled>
                ${_()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History" hidden>
                ${f()}
            </cosmoz-tab>
            <cosmoz-tab name="comments" heading="Comments" badge="2">
                ${h()}
            </cosmoz-tab>
        </cosmoz-tabs>
    `},w={parameters:{docs:{description:{story:"With `hash-param` the active tab is bound to the URL hash (e.g. `#tab=accounting`), so deep-links and the back button work. Note: inside Storybook the visible address bar belongs to the **manager**, while the component binds to the **preview iframe** URL, so the change is not visible here. Open this story in a new tab / isolation mode to see the real URL change and the back button."}}},render:()=>t`
        ${d}
        <cosmoz-tabs variant="underline" hash-param="tab">
            <cosmoz-tab name="overview" heading="Overview">${g()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                ${p()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                ${_()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">${f()}</cosmoz-tab>
            <cosmoz-tab name="comments" heading="Comments" badge="2">
                ${h()}
            </cosmoz-tab>
        </cosmoz-tabs>
    `},T={parameters:{docs:{description:{story:`When the bar overflows its container it scrolls horizontally and the selected tab is scrolled into view.`}}},render:()=>t`
        ${d}
        <div style="max-width: 460px">
            <cosmoz-tabs variant="brand" .selected=${`overview`}>
                <cosmoz-tab name="overview" heading="Overview" .icon=${s()}>
                    ${g()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="rows"
                    heading="Invoice rows"
                    badge="5"
                    .icon=${a()}
                >
                    ${p()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="accounting"
                    heading="Accounting"
                    .icon=${o()}
                >
                    ${_()}
                </cosmoz-tab>
                <cosmoz-tab name="history" heading="History" .icon=${i()}>
                    ${f()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="comments"
                    heading="Comments"
                    badge="2"
                    .icon=${c()}
                >
                    ${h()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="attachments"
                    heading="Attachments"
                    badge="3"
                    .icon=${r()}
                >
                    ${m()}
                </cosmoz-tab>
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
    `},E={parameters:{docs:{description:{story:"A tab panel containing `cosmoz-tab-card` (collapsible cards) — a common cosmoz-frontend pattern. Cards are sized via `--cosmoz-tab-card-width` to fit their content."}}},render:()=>t`
        ${d}
        <cosmoz-tabs variant="underline" .selected=${`overview`}>
            <cosmoz-tab
                name="overview"
                heading="Overview"
                style="--cosmoz-tab-card-width: 480px;"
            >
                <cosmoz-tab-card heading="Invoice details">
                    ${g()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Accounting" collapsable>
                    ${_()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                    ${m()}
                </cosmoz-tab-card>
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">${f()}</cosmoz-tab>
        </cosmoz-tabs>
    `},D={name:`Compact width`,argTypes:{variant:{control:`select`,options:[`brand`,`underline`]}},args:{variant:`brand`},parameters:{controls:{disable:!1},docs:{description:{story:"Tabs spread evenly across the available width by default (the legacy always-spread behavior). Add the `compact-width` attribute to size them to their content (they hug their labels and align to the start)."}}},render:({variant:e})=>t`
        ${d}
        <cosmoz-tabs variant=${e} .selected=${`overview`} compact-width>
            <cosmoz-tab name="overview" heading="Overview">${g()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                ${p()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                ${_()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">${f()}</cosmoz-tab>
        </cosmoz-tabs>
    `},O={parameters:{docs:{description:{story:"The selected pill **and** the badge are a solid brand fill — `--cz-color-bg-brand-solid` with `--cz-color-text-on-brand` — so the text stays legible in both light and dark themes. Override `--cz-color-bg-brand-solid` on the `<cosmoz-tabs>` host to recolor them (e.g. to a success/error solid); the on-brand text follows."}}},render:()=>t`
        ${d}
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                <cosmoz-tabs variant="brand" .selected=${`overview`}>
                    <cosmoz-tab name="overview" heading="Overview">
                        ${g()}
                    </cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                        ${p()}
                    </cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting">
                        ${_()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
            <div>
                <div class="story-label">success</div>
                <cosmoz-tabs
                    variant="brand"
                    .selected=${`overview`}
                    style="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
                >
                    <cosmoz-tab name="overview" heading="Overview">
                        ${g()}
                    </cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                        ${p()}
                    </cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting">
                        ${_()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
            <div>
                <div class="story-label">error</div>
                <cosmoz-tabs
                    variant="brand"
                    .selected=${`overview`}
                    style="--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);"
                >
                    <cosmoz-tab name="overview" heading="Overview">
                        ${g()}
                    </cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                        ${p()}
                    </cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting">
                        ${_()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
        </div>
    `},k={parameters:{docs:{description:{story:"A subtle neutral pill — point `--cz-color-bg-brand-solid` at `--cz-color-bg-tertiary` and `--cz-color-text-on-brand` at `--cz-color-text-primary`. Unlike a brand *tint*, this neutral pair keeps its contrast in both light and dark themes."}}},render:()=>t`
        ${d}
        <cosmoz-tabs
            variant="brand"
            .selected=${`overview`}
            style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);"
        >
            <cosmoz-tab name="overview" heading="Overview">${g()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                ${p()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                ${_()}
            </cosmoz-tab>
        </cosmoz-tabs>
    `},A=(e,n)=>t`
    <div>
        <div class="story-label">${e}</div>
        <cosmoz-tabs variant="brand" .selected=${`overview`} style=${n}>
            <cosmoz-tab name="overview" heading="Overview">${g()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                ${p()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                ${_()}
            </cosmoz-tab>
        </cosmoz-tabs>
    </div>
`,j={parameters:{docs:{description:{story:"A bench of selected-pill / badge color configurations for checking light **and** dark themes. Each recolors `--cz-color-bg-brand-solid` (the neutral one also overrides `--cz-color-text-on-brand`); the on-brand text follows automatically. Toggle the theme in the toolbar to verify contrast."}}},render:()=>t`
        ${d}
        <div class="story-stack">
            ${A(`brand (default)`,``)}
            ${A(`success`,`--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);`)}
            ${A(`error`,`--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);`)}
            ${A(`warning`,`--cz-color-bg-brand-solid: var(--cz-color-bg-warning-solid);`)}
            ${A(`neutral`,`--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);`)}
        </div>
    `},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  }) => html\`
        \${panelStyles}
        <cosmoz-tabs variant=\${variant} .selected=\${'overview'}>
            <cosmoz-tab name="overview" heading="Overview" .icon=\${receiptIcon()}>
                \${overview()}
            </cosmoz-tab>
            <cosmoz-tab
                name="rows"
                heading="Invoice rows"
                badge="5"
                .icon=\${listIcon()}
            >
                \${rows()}
            </cosmoz-tab>
            <cosmoz-tab
                name="accounting"
                heading="Accounting"
                .icon=\${calculatorIcon()}
            >
                \${accounting()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History" .icon=\${clockRewindIcon()}>
                \${history()}
            </cosmoz-tab>
            <cosmoz-tab
                name="comments"
                heading="Comments"
                badge="2"
                .icon=\${messageChatCircleIcon()}
            >
                \${comments()}
            </cosmoz-tab>
            <cosmoz-tab
                name="attachments"
                heading="Attachments"
                badge="3"
                .icon=\${paperclipIcon()}
            >
                \${attachments()}
            </cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The two Untitled UI looks side by side: \`underline\` (default) and ' + '\`brand\` (pill).'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div class="story-stack">
            <div>
                <div class="story-label">variant="underline"</div>
                <cosmoz-tabs variant="underline" .selected=\${'overview'}>
                    <cosmoz-tab name="overview" heading="Overview" .icon=\${receiptIcon()}>
                        \${overview()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="rows"
                        heading="Invoice rows"
                        badge="5"
                        .icon=\${listIcon()}
                    >
                        \${rows()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="accounting"
                        heading="Accounting"
                        .icon=\${calculatorIcon()}
                    >
                        \${accounting()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
            <div>
                <div class="story-label">variant="brand"</div>
                <cosmoz-tabs variant="brand" .selected=\${'overview'}>
                    <cosmoz-tab name="overview" heading="Overview" .icon=\${receiptIcon()}>
                        \${overview()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="rows"
                        heading="Invoice rows"
                        badge="5"
                        .icon=\${listIcon()}
                    >
                        \${rows()}
                    </cosmoz-tab>
                    <cosmoz-tab
                        name="accounting"
                        heading="Accounting"
                        .icon=\${calculatorIcon()}
                    >
                        \${accounting()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
        </div>
    \`
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Headings only — icons are optional (set via the \`.icon\` property).'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <cosmoz-tabs variant="underline" .selected=\${'overview'}>
            <cosmoz-tab name="overview" heading="Overview">\${overview()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                \${rows()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                \${accounting()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">\${history()}</cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            <cosmoz-tab name="overview" heading="Overview">\${overview()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                \${rows()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting" disabled>
                \${accounting()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History" hidden>
                \${history()}
            </cosmoz-tab>
            <cosmoz-tab name="comments" heading="Comments" badge="2">
                \${comments()}
            </cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'With \`hash-param\` the active tab is bound to the URL hash ' + '(e.g. \`#tab=accounting\`), so deep-links and the back button work. ' + 'Note: inside Storybook the visible address bar belongs to the ' + '**manager**, while the component binds to the **preview iframe** URL, ' + 'so the change is not visible here. Open this story in a new tab / ' + 'isolation mode to see the real URL change and the back button.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <cosmoz-tabs variant="underline" hash-param="tab">
            <cosmoz-tab name="overview" heading="Overview">\${overview()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                \${rows()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                \${accounting()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">\${history()}</cosmoz-tab>
            <cosmoz-tab name="comments" heading="Comments" badge="2">
                \${comments()}
            </cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
                <cosmoz-tab name="overview" heading="Overview" .icon=\${receiptIcon()}>
                    \${overview()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="rows"
                    heading="Invoice rows"
                    badge="5"
                    .icon=\${listIcon()}
                >
                    \${rows()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="accounting"
                    heading="Accounting"
                    .icon=\${calculatorIcon()}
                >
                    \${accounting()}
                </cosmoz-tab>
                <cosmoz-tab name="history" heading="History" .icon=\${clockRewindIcon()}>
                    \${history()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="comments"
                    heading="Comments"
                    badge="2"
                    .icon=\${messageChatCircleIcon()}
                >
                    \${comments()}
                </cosmoz-tab>
                <cosmoz-tab
                    name="attachments"
                    heading="Attachments"
                    badge="3"
                    .icon=\${paperclipIcon()}
                >
                    \${attachments()}
                </cosmoz-tab>
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
                    \${overview()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Accounting" collapsable>
                    \${accounting()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                    \${attachments()}
                </cosmoz-tab-card>
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">\${history()}</cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Compact width',
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'underline']
    }
  },
  args: {
    variant: 'brand'
  },
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: 'Tabs spread evenly across the available width by default (the legacy ' + 'always-spread behavior). Add the \`compact-width\` attribute to size ' + 'them to their content (they hug their labels and align to the start).'
      }
    }
  },
  render: ({
    variant
  }) => html\`
        \${panelStyles}
        <cosmoz-tabs variant=\${variant} .selected=\${'overview'} compact-width>
            <cosmoz-tab name="overview" heading="Overview">\${overview()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                \${rows()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                \${accounting()}
            </cosmoz-tab>
            <cosmoz-tab name="history" heading="History">\${history()}</cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The selected pill **and** the badge are a solid brand fill — ' + '\`--cz-color-bg-brand-solid\` with \`--cz-color-text-on-brand\` — so the ' + 'text stays legible in both light and dark themes. Override ' + '\`--cz-color-bg-brand-solid\` on the \`<cosmoz-tabs>\` host to recolor ' + 'them (e.g. to a success/error solid); the on-brand text follows.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div class="story-stack">
            <div>
                <div class="story-label">brand (default)</div>
                <cosmoz-tabs variant="brand" .selected=\${'overview'}>
                    <cosmoz-tab name="overview" heading="Overview">
                        \${overview()}
                    </cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                        \${rows()}
                    </cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting">
                        \${accounting()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
            <div>
                <div class="story-label">success</div>
                <cosmoz-tabs
                    variant="brand"
                    .selected=\${'overview'}
                    style="--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);"
                >
                    <cosmoz-tab name="overview" heading="Overview">
                        \${overview()}
                    </cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                        \${rows()}
                    </cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting">
                        \${accounting()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
            <div>
                <div class="story-label">error</div>
                <cosmoz-tabs
                    variant="brand"
                    .selected=\${'overview'}
                    style="--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);"
                >
                    <cosmoz-tab name="overview" heading="Overview">
                        \${overview()}
                    </cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                        \${rows()}
                    </cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting">
                        \${accounting()}
                    </cosmoz-tab>
                </cosmoz-tabs>
            </div>
        </div>
    \`
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A subtle neutral pill — point \`--cz-color-bg-brand-solid\` at ' + '\`--cz-color-bg-tertiary\` and \`--cz-color-text-on-brand\` at ' + '\`--cz-color-text-primary\`. Unlike a brand *tint*, this neutral pair ' + 'keeps its contrast in both light and dark themes.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <cosmoz-tabs
            variant="brand"
            .selected=\${'overview'}
            style="--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);"
        >
            <cosmoz-tab name="overview" heading="Overview">\${overview()}</cosmoz-tab>
            <cosmoz-tab name="rows" heading="Invoice rows" badge="5">
                \${rows()}
            </cosmoz-tab>
            <cosmoz-tab name="accounting" heading="Accounting">
                \${accounting()}
            </cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...k.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A bench of selected-pill / badge color configurations for checking ' + 'light **and** dark themes. Each recolors \`--cz-color-bg-brand-solid\` ' + '(the neutral one also overrides \`--cz-color-text-on-brand\`); the ' + 'on-brand text follows automatically. Toggle the theme in the toolbar ' + 'to verify contrast.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div class="story-stack">
            \${themedTabs('brand (default)', '')}
            \${themedTabs('success', '--cz-color-bg-brand-solid: var(--cz-color-bg-success-solid);')}
            \${themedTabs('error', '--cz-color-bg-brand-solid: var(--cz-color-bg-error-solid);')}
            \${themedTabs('warning', '--cz-color-bg-brand-solid: var(--cz-color-bg-warning-solid);')}
            \${themedTabs('neutral', '--cz-color-bg-brand-solid: var(--cz-color-bg-tertiary); --cz-color-text-on-brand: var(--cz-color-text-primary);')}
        </div>
    \`
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Variants`,`WithoutIcons`,`DisabledAndHidden`,`HashRouting`,`ManyTabs`,`WithTabCards`,`CompactWidth`,`SelectedColors`,`Minimal`,`Theming`]}))();export{D as CompactWidth,b as Default,C as DisabledAndHidden,w as HashRouting,T as ManyTabs,k as Minimal,O as SelectedColors,j as Theming,x as Variants,E as WithTabCards,S as WithoutIcons,M as __namedExportsOrder,y as default};