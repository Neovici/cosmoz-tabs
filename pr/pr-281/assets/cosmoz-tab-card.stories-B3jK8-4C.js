import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-CQ_V4elZ.js";import{t as r}from"./cosmoz-tab-card-BHlXEMbY.js";import{a as i,c as a,n as o,s,t as c}from"./demo-content-crZ115E8.js";var l,u,d,f,p;e((()=>{n(),r(),i(),l={title:`Tabs/cosmoz-tab-card`,component:`cosmoz-tab-card`,tags:[`autodocs`],parameters:{docs:{description:{component:"A collapsible card, typically placed inside a `<cosmoz-tab>`. Its styling now derives from `@neovici/cosmoz-tokens`, so it follows light/dark mode. The `--cosmoz-tab-card-*` custom properties still work as overrides."}}}},u={parameters:{docs:{description:{story:`A static card, a collapsible card, and one that starts collapsed.`}}},render:()=>t`
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
}`,...f.parameters?.docs?.source}}},p=[`Default`,`InsideTabs`,`WithoutHeading`]}))();export{u as Default,d as InsideTabs,f as WithoutHeading,p as __namedExportsOrder,l as default};