import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-D7cYKCLZ.js";import{t as r}from"./cosmoz-tabs-B2etnRRz.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),r(),{expect:i,waitFor:a}=__STORYBOOK_MODULE_TEST__,o={title:`Tests/Tabs hash routing`},s=()=>t`
    <cosmoz-tabs hash-param="tab">
        <cosmoz-tab name="tab0" heading="Tab0">0</cosmoz-tab>
        <cosmoz-tab name="tab1" heading="Tab1">1</cosmoz-tab>
        <cosmoz-tab name="tab2" heading="Tab2">2</cosmoz-tab>
    </cosmoz-tabs>
`,c=e=>e.querySelector(`cosmoz-tabs`),l=e=>e.querySelector(`[is-selected]`)?.getAttribute(`name`),u=(e,t)=>e.shadowRoot.querySelectorAll(`[role=tab]`)[t],d={render:()=>s(),play:async({canvasElement:e})=>{let t=c(e);await a(()=>i(t.shadowRoot.querySelectorAll(`[role=tab]`).length).toBe(3)),[`tab0`,`tab1`,`tab2`].forEach((e,n)=>i(u(t,n).getAttribute(`href`)).toContain(`tab=${e}`))}},f={render:()=>s(),play:async({canvasElement:e})=>{window.location.hash=``;let t=c(e);await a(()=>i(l(t)).toBe(`tab0`)),window.location.hash=u(t,1).getAttribute(`href`),await a(()=>i(l(t)).toBe(`tab1`)),window.location.hash=u(t,2).getAttribute(`href`),await a(()=>i(l(t)).toBe(`tab2`)),window.location.hash=``}},p={render:()=>s(),play:async({canvasElement:e})=>{window.location.hash=``;let t=c(e);await a(()=>i(l(t)).toBe(`tab0`)),u(t,1).click(),await a(()=>i(l(t)).toBe(`tab1`)),i(window.location.hash).toContain(`tab=tab1`),u(t,0).click(),await a(()=>i(l(t)).toBe(`tab0`)),i(window.location.hash).toContain(`tab=tab0`),window.location.hash=``}},m={render:()=>s(),play:async({canvasElement:e})=>{window.location.hash=``;let t=c(e);await a(()=>i(l(t)).toBe(`tab0`)),window.location.hash=u(t,0).getAttribute(`href`).replace(`tab0`,`nope`),await a(()=>i(l(t)).toBe(`tab0`)),window.location.hash=``}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(3));
    ['tab0', 'tab1', 'tab2'].forEach((name, i) => expect(barTab(tabs, i).getAttribute('href')).toContain(\`tab=\${name}\`));
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    window.location.hash = '';
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));
    window.location.hash = barTab(tabs, 1).getAttribute('href')!;
    await waitFor(() => expect(selectedName(tabs)).toBe('tab1'));
    window.location.hash = barTab(tabs, 2).getAttribute('href')!;
    await waitFor(() => expect(selectedName(tabs)).toBe('tab2'));
    window.location.hash = '';
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    window.location.hash = '';
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));
    barTab(tabs, 1).click();
    await waitFor(() => expect(selectedName(tabs)).toBe('tab1'));
    expect(window.location.hash).toContain('tab=tab1');
    barTab(tabs, 0).click();
    await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));
    expect(window.location.hash).toContain('tab=tab0');
    window.location.hash = '';
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    window.location.hash = '';
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));

    // a hash pointing at a non-existent tab → first valid tab stays selected
    window.location.hash = barTab(tabs, 0).getAttribute('href')!.replace('tab0', 'nope');
    await waitFor(() => expect(selectedName(tabs)).toBe('tab0'));
    window.location.hash = '';
  }
}`,...m.parameters?.docs?.source}}},h=[`TabsHaveLinks`,`HashUpdatesSelection`,`SelectionUpdatesHash`,`InvalidHashFallsBack`]}))();export{f as HashUpdatesSelection,m as InvalidHashFallsBack,p as SelectionUpdatesHash,d as TabsHaveLinks,h as __namedExportsOrder,o as default};