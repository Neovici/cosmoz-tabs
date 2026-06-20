import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-DH29BBEx.js";import{t as r}from"./cosmoz-tab-card-BRZ43Bbq.js";import{n as i,r as a,t as o}from"./demo-content-DGt0ccL8.js";var s,c,l,u,d,f,p,m;e((()=>{n(),r(),o(),s={title:`Tabs/cosmoz-tab-card`,component:`cosmoz-tab-card`,tags:[`autodocs`],parameters:{docs:{description:{component:"A collapsible card, typically placed inside a `<cosmoz-tab>`. Its styling now derives from `@neovici/cosmoz-tokens`, so it follows light/dark mode. The `--cosmoz-tab-card-*` custom properties still work as overrides."}}}},[c,,l,,,u]=i,d={parameters:{docs:{description:{story:`A static card, a collapsible card, and one that starts collapsed.`}}},render:()=>t`
        ${a}
        <div style="display:flex; flex-wrap:wrap; align-items:flex-start;">
            <cosmoz-tab-card heading="Invoice details">
                ${c.render()}
            </cosmoz-tab-card>
            <cosmoz-tab-card heading="Accounting" collapsable>
                ${l.render()}
            </cosmoz-tab-card>
            <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                ${u.render()}
            </cosmoz-tab-card>
        </div>
    `},f={parameters:{docs:{description:{story:"The common pattern: cards tiled inside a tab panel (the tab gets a `has-cards` layout automatically)."}}},render:()=>t`
        ${a}
        <cosmoz-tabs variant="underline" .selected=${`overview`}>
            <cosmoz-tab name="overview" heading="Overview">
                <cosmoz-tab-card heading="Invoice details">
                    ${c.render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Accounting" collapsable>
                    ${l.render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                    ${u.render()}
                </cosmoz-tab-card>
            </cosmoz-tab>
        </cosmoz-tabs>
    `},p={parameters:{docs:{description:{story:"Without a `heading` the card is just a bordered content surface."}}},render:()=>t`
        ${a}
        <cosmoz-tab-card style="--cosmoz-tab-card-width: 420px;">
            ${c.render()}
        </cosmoz-tab-card>
    `},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A static card, a collapsible card, and one that starts collapsed.'
      }
    }
  },
  render: () => html\`
        \${panelStyles}
        <div style="display:flex; flex-wrap:wrap; align-items:flex-start;">
            <cosmoz-tab-card heading="Invoice details">
                \${overview.render()}
            </cosmoz-tab-card>
            <cosmoz-tab-card heading="Accounting" collapsable>
                \${accounting.render()}
            </cosmoz-tab-card>
            <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                \${attachments.render()}
            </cosmoz-tab-card>
        </div>
    \`
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
            <cosmoz-tab name="overview" heading="Overview">
                <cosmoz-tab-card heading="Invoice details">
                    \${overview.render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Accounting" collapsable>
                    \${accounting.render()}
                </cosmoz-tab-card>
                <cosmoz-tab-card heading="Attachments" collapsable collapsed>
                    \${attachments.render()}
                </cosmoz-tab-card>
            </cosmoz-tab>
        </cosmoz-tabs>
    \`
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
            \${overview.render()}
        </cosmoz-tab-card>
    \`
}`,...p.parameters?.docs?.source}}},m=[`Default`,`InsideTabs`,`WithoutHeading`]}))();export{d as Default,f as InsideTabs,p as WithoutHeading,m as __namedExportsOrder,s as default};