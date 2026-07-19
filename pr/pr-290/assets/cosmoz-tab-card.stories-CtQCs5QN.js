import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-DmJdTOAA.js";import{t as r}from"./cosmoz-tab-card-CQCZh6Yp.js";import{a as i,c as a,n as o,s,t as c}from"./demo-content-BzhSf1hG.js";var l,u,d,f,p,m;e((()=>{n(),r(),i(),l={title:`Tabs/cosmoz-tab-card`,component:`cosmoz-tab-card`,tags:[`autodocs`],parameters:{docs:{description:{component:'A collapsible card, typically placed inside a `<cosmoz-tab>`. Its styling derives from `@neovici/cosmoz-tokens`, so it follows light/dark mode. Surface (`bg`, `border`, `radius`, `shadow`, `padding`, `margin`, `width`) and heading (`color`, `font-size`, `font-weight`, `line-height`) are all overridable via `--cosmoz-tab-card-*` custom properties — see the "Heading typography" story below.'}}}},u={parameters:{docs:{description:{story:`A static card, a collapsible card, and one that starts collapsed.`}}},render:()=>t`
        ${a}
        <div
            style="display:flex; flex-wrap:wrap; align-items:flex-start; --cosmoz-tab-card-width: 480px;"
        >
            <cosmoz-tab-card heading="Invoice details">
                ${s()}
            </cosmoz-tab-card>
            <cosmoz-tab-card heading="Accounting" collapsable>
                ${c()}
            </cosmoz-tab-card>
            <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                ${o()}
            </cosmoz-tab-card>
        </div>
    `},d={parameters:{docs:{description:{story:"The common pattern: cards tiled inside a tab panel (the tab gets a `has-cards` layout automatically)."}}},render:()=>t`
        ${a}
        <cosmoz-tabs variant="underline" .selected=${`overview`}>
            <cosmoz-tab
                name="overview"
                heading="Overview"
                style="--cosmoz-tab-card-width: 480px;"
            >
                <cosmoz-tab-card heading="Invoice details">
                    ${s()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Accounting" collapsable>
                    ${c()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                    ${o()}
                </cosmoz-tab-card>
            </cosmoz-tab>
        </cosmoz-tabs>
    `},f={parameters:{docs:{description:{story:"Without a `heading` the card is just a bordered content surface."}}},render:()=>t`
        ${a}
        <cosmoz-tab-card style="--cosmoz-tab-card-width: 420px;">
            ${s()}
        </cosmoz-tab-card>
    `},p={parameters:{docs:{description:{story:"The heading typography (`font-size`, `font-weight`, `line-height`) and `.header` row height are overridable via `--cosmoz-tab-card-heading-*` and `--cosmoz-tab-card-header-min-height` — on top of the existing `--cosmoz-tab-card-heading-color`. Defaults are unchanged, so this is opt-in. A common case is a compact section header (`--cz-text-sm` / `--cz-font-weight-medium`), shown here next to the default `--cz-text-lg` / semibold heading."}}},render:()=>t`
        ${a}
        <div class="story-stack">
            <div>
                <div class="story-label">default heading</div>
                <cosmoz-tab-card
                    heading="Invoice details"
                    style="--cosmoz-tab-card-width: 480px;"
                >
                    ${s()}
                </cosmoz-tab-card>
            </div>
            <div>
                <div class="story-label">compact section heading (overridden)</div>
                <cosmoz-tab-card
                    heading="Invoice details"
                    style="
                        --cosmoz-tab-card-width: 480px;
                        --cosmoz-tab-card-heading-font-size: var(--cz-text-sm);
                        --cosmoz-tab-card-heading-font-weight: var(--cz-font-weight-medium);
                        --cosmoz-tab-card-heading-line-height: var(--cz-text-sm-line-height);
                        --cosmoz-tab-card-header-min-height: 32px;
                    "
                >
                    ${s()}
                </cosmoz-tab-card>
            </div>
        </div>
    `},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A static card, a collapsible card, and one that starts collapsed.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div
            style="display:flex; flex-wrap:wrap; align-items:flex-start; --cosmoz-tab-card-width: 480px;"
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
        </div>
    \`
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The common pattern: cards tiled inside a tab panel (the tab gets a ' + '\`has-cards\` layout automatically).'
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
        </cosmoz-tabs>
    \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Without a \`heading\` the card is just a bordered content surface.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <cosmoz-tab-card style="--cosmoz-tab-card-width: 420px;">
            \${overview()}
        </cosmoz-tab-card>
    \`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The heading typography (\`font-size\`, \`font-weight\`, \`line-height\`) ' + 'and \`.header\` row height are overridable via ' + '\`--cosmoz-tab-card-heading-*\` and \`--cosmoz-tab-card-header-min-height\` ' + '— on top of the existing \`--cosmoz-tab-card-heading-color\`. Defaults ' + 'are unchanged, so this is opt-in. A common case is a compact section ' + 'header (\`--cz-text-sm\` / \`--cz-font-weight-medium\`), shown here next ' + 'to the default \`--cz-text-lg\` / semibold heading.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div class="story-stack">
            <div>
                <div class="story-label">default heading</div>
                <cosmoz-tab-card
                    heading="Invoice details"
                    style="--cosmoz-tab-card-width: 480px;"
                >
                    \${overview()}
                </cosmoz-tab-card>
            </div>
            <div>
                <div class="story-label">compact section heading (overridden)</div>
                <cosmoz-tab-card
                    heading="Invoice details"
                    style="
                        --cosmoz-tab-card-width: 480px;
                        --cosmoz-tab-card-heading-font-size: var(--cz-text-sm);
                        --cosmoz-tab-card-heading-font-weight: var(--cz-font-weight-medium);
                        --cosmoz-tab-card-heading-line-height: var(--cz-text-sm-line-height);
                        --cosmoz-tab-card-header-min-height: 32px;
                    "
                >
                    \${overview()}
                </cosmoz-tab-card>
            </div>
        </div>
    \`
}`,...p.parameters?.docs?.source}}},m=[`Default`,`InsideTabs`,`WithoutHeading`,`HeadingTypography`]}))();export{u as Default,p as HeadingTypography,d as InsideTabs,f as WithoutHeading,m as __namedExportsOrder,l as default};