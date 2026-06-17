import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-C83dcdKk.js";import{t as r,u as i}from"./untitled-BR1nmzfm.js";import{t as a}from"./cosmoz-tabs-BOcHIpUx.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{r(),n(),a(),{expect:o,fn:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`Tests/Tabs`},u=(e=`underline`)=>t`
    <cosmoz-tabs variant=${e}>
        <cosmoz-tab name="tab0" heading="Tab0" .icon=${i()}
            >1</cosmoz-tab
        >
        <cosmoz-tab name="tab1" heading="Tab1" badge="2">2</cosmoz-tab>
        <cosmoz-tab name="tab2" heading="Tab2" hidden>3</cosmoz-tab>
        <cosmoz-tab name="tab3" heading="Tab3" disabled>4</cosmoz-tab>
    </cosmoz-tabs>
`,d=e=>e.querySelector(`cosmoz-tabs`),f={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await t(`first valid tab is selected by default`,async()=>{await c(()=>o(n.querySelector(`[is-selected]`)?.getAttribute(`name`)).toBe(`tab0`)),await c(()=>o(n.selected).toBe(`tab0`))}),await t(`setting selected switches the active tab`,async()=>{n.selected=`tab1`,await c(()=>o(n.querySelector(`[is-selected]`)?.getAttribute(`name`)).toBe(`tab1`))})}},p={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await t(`tablist mirrors the number of tabs`,async()=>{await c(()=>o(n.shadowRoot.querySelectorAll(`[role=tab]`).length).toBe(n.querySelectorAll(`cosmoz-tab`).length))}),await t(`headings and a badge render in the bar`,()=>{o(Array.from(n.shadowRoot.querySelectorAll(`[role=tab] > span`)).map(e=>e.textContent)).toEqual([`Tab0`,`Tab1`,`Tab2`,`Tab3`]),o(n.shadowRoot.querySelectorAll(`.badge`).length).toBe(1)}),await t(`a cosmoz-icons svg is rendered for the icon`,()=>{let e=n.shadowRoot.querySelectorAll(`[role=tab]`)[0];o(e.querySelector(`svg`)).not.toBeNull()})}},m={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.shadowRoot.querySelectorAll(`[role=tab]`).length).toBe(4));let r=n.shadowRoot.querySelectorAll(`[role=tab]`);await t(`hidden tab is not displayed`,()=>{let e=r[2];o(e.getAttribute(`hidden`)).toBe(``),o(getComputedStyle(e).display).toBe(`none`)}),await t(`disabled tab carries the disabled attribute`,()=>{o(r[3].getAttribute(`disabled`)).toBe(``)})}},h={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.selected).toBe(`tab0`)),await t(`clicking a tab selects it`,async()=>{n.shadowRoot.querySelectorAll(`[role=tab]`)[1].click(),await c(()=>o(n.selected).toBe(`tab1`))}),await t(`ctrl+click does not select`,async()=>{n.shadowRoot.querySelectorAll(`[role=tab]`)[0].dispatchEvent(new MouseEvent(`click`,{ctrlKey:!0,bubbles:!0})),await new Promise(e=>requestAnimationFrame(e)),o(n.selected).toBe(`tab1`)})}},g={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.selected).toBe(`tab0`)),await t(`tab-first-select fires once, before tab-select`,async()=>{let e=n.querySelector(`[name=tab1]`),t=s(),r=s();e.addEventListener(`tab-first-select`,t),e.addEventListener(`tab-select`,r),n.selected=`tab1`,await c(()=>o(r).toHaveBeenCalledTimes(1)),o(t).toHaveBeenCalledTimes(1),t.mockClear?.(),r.mockClear?.(),n.selected=`tab0`,await c(()=>o(n.selected).toBe(`tab0`)),n.selected=`tab1`,await c(()=>o(r).toHaveBeenCalled()),o(t).not.toHaveBeenCalled()})}},_={render:()=>u(`brand`),play:async({canvasElement:e})=>{let t=d(e);await c(()=>o(t.shadowRoot.querySelector(`a[aria-selected=true]`)).not.toBeNull());let n=t.shadowRoot.querySelector(`a[aria-selected=true]`);o(getComputedStyle(n).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`)}},v={render:()=>u(`underline`),play:async({canvasElement:e})=>{let t=d(e);await c(()=>o(t.shadowRoot.querySelector(`a[aria-selected=true]`)).not.toBeNull());let n=t.shadowRoot.querySelector(`a[aria-selected=true]`),r=getComputedStyle(n).boxShadow;o(r).not.toBe(`none`),o(r).toContain(`inset`)}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    await step('first valid tab is selected by default', async () => {
      await waitFor(() => expect(tabs.querySelector('[is-selected]')?.getAttribute('name')).toBe('tab0'));
      await waitFor(() => expect(tabs.selected).toBe('tab0'));
    });
    await step('setting selected switches the active tab', async () => {
      tabs.selected = 'tab1';
      await waitFor(() => expect(tabs.querySelector('[is-selected]')?.getAttribute('name')).toBe('tab1'));
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    await step('tablist mirrors the number of tabs', async () => {
      await waitFor(() => expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(tabs.querySelectorAll('cosmoz-tab').length));
    });
    await step('headings and a badge render in the bar', () => {
      const headings = Array.from(tabs.shadowRoot!.querySelectorAll('[role=tab] > span')).map(el => el.textContent);
      expect(headings).toEqual(['Tab0', 'Tab1', 'Tab2', 'Tab3']);
      expect(tabs.shadowRoot!.querySelectorAll('.badge').length).toBe(1);
    });
    await step('a cosmoz-icons svg is rendered for the icon', () => {
      const firstTab = tabs.shadowRoot!.querySelectorAll('[role=tab]')[0];
      expect(firstTab.querySelector('svg')).not.toBeNull();
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(4));
    const barTabs = tabs.shadowRoot!.querySelectorAll('[role=tab]');
    await step('hidden tab is not displayed', () => {
      const hidden = barTabs[2] as HTMLElement;
      expect(hidden.getAttribute('hidden')).toBe('');
      expect(getComputedStyle(hidden).display).toBe('none');
    });
    await step('disabled tab carries the disabled attribute', () => {
      expect(barTabs[3].getAttribute('disabled')).toBe('');
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.selected).toBe('tab0'));
    await step('clicking a tab selects it', async () => {
      (tabs.shadowRoot!.querySelectorAll('[role=tab]')[1] as HTMLElement).click();
      await waitFor(() => expect(tabs.selected).toBe('tab1'));
    });
    await step('ctrl+click does not select', async () => {
      (tabs.shadowRoot!.querySelectorAll('[role=tab]')[0] as HTMLElement).dispatchEvent(new MouseEvent('click', {
        ctrlKey: true,
        bubbles: true
      }));
      await new Promise(r => requestAnimationFrame(r));
      expect(tabs.selected).toBe('tab1');
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.selected).toBe('tab0'));
    await step('tab-first-select fires once, before tab-select', async () => {
      const tab = tabs.querySelector('[name=tab1]')!;
      const onFirst = fn();
      const onSelect = fn();
      tab.addEventListener('tab-first-select', onFirst);
      tab.addEventListener('tab-select', onSelect);
      tabs.selected = 'tab1';
      await waitFor(() => expect(onSelect).toHaveBeenCalledTimes(1));
      expect(onFirst).toHaveBeenCalledTimes(1);
      onFirst.mockClear?.();
      onSelect.mockClear?.();
      // move away and let it settle, otherwise the two sync sets batch to a no-op
      tabs.selected = 'tab0';
      await waitFor(() => expect(tabs.selected).toBe('tab0'));
      tabs.selected = 'tab1';
      await waitFor(() => expect(onSelect).toHaveBeenCalled());
      // already activated once → no second first-select
      expect(onFirst).not.toHaveBeenCalled();
    });
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => fixture('brand'),
  play: async ({
    canvasElement
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.shadowRoot!.querySelector('a[aria-selected=true]')).not.toBeNull());
    const active = tabs.shadowRoot!.querySelector('a[aria-selected=true]')!;
    // brand active tab has a (non-transparent) brand-tinted background
    expect(getComputedStyle(active).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => fixture('underline'),
  play: async ({
    canvasElement
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.shadowRoot!.querySelector('a[aria-selected=true]')).not.toBeNull());
    const active = tabs.shadowRoot!.querySelector('a[aria-selected=true]')!;
    const shadow = getComputedStyle(active).boxShadow;
    // underline active tab has an inset bottom border via box-shadow
    expect(shadow).not.toBe('none');
    expect(shadow).toContain('inset');
  }
}`,...v.parameters?.docs?.source}}},y=[`SelectsFirstAndSwitches`,`RendersBarFromChildren`,`HiddenAndDisabled`,`ClickSelects`,`FiresSelectEvents`,`VariantBrandActiveStyling`,`VariantUnderlineActiveStyling`]}))();export{h as ClickSelects,g as FiresSelectEvents,m as HiddenAndDisabled,p as RendersBarFromChildren,f as SelectsFirstAndSwitches,_ as VariantBrandActiveStyling,v as VariantUnderlineActiveStyling,y as __namedExportsOrder,l as default};