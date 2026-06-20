import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-DH29BBEx.js";import{t as r,u as i}from"./untitled-Cv7hnqSj.js";import{t as a}from"./cosmoz-tabs-CUX5klhY.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{r(),n(),a(),{expect:o,fn:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`Tests/Tabs`},u=(e=`underline`)=>t`
    <cosmoz-tabs variant=${e}>
        <cosmoz-tab name="tab0" heading="Tab0" .icon=${i()}
            >1</cosmoz-tab
        >
        <cosmoz-tab name="tab1" heading="Tab1" badge="2">2</cosmoz-tab>
        <cosmoz-tab name="tab2" heading="Tab2" hidden>3</cosmoz-tab>
        <cosmoz-tab name="tab3" heading="Tab3" disabled>4</cosmoz-tab>
    </cosmoz-tabs>
`,d=e=>e.querySelector(`cosmoz-tabs`),f={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await t(`first valid tab is selected by default`,async()=>{await c(()=>o(n.querySelector(`[is-selected]`)?.getAttribute(`name`)).toBe(`tab0`)),await c(()=>o(n.selected).toBe(`tab0`))}),await t(`setting selected switches the active tab`,async()=>{n.selected=`tab1`,await c(()=>o(n.querySelector(`[is-selected]`)?.getAttribute(`name`)).toBe(`tab1`))})}},p={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await t(`tablist mirrors the number of tabs`,async()=>{await c(()=>o(n.shadowRoot.querySelectorAll(`[role=tab]`).length).toBe(n.querySelectorAll(`cosmoz-tab`).length))}),await t(`headings and a badge render in the bar`,()=>{o(Array.from(n.shadowRoot.querySelectorAll(`[role=tab] > span`)).map(e=>e.textContent)).toEqual([`Tab0`,`Tab1`,`Tab2`,`Tab3`]),o(n.shadowRoot.querySelectorAll(`.badge`).length).toBe(1)}),await t(`a cosmoz-icons svg is rendered for the icon`,()=>{let e=n.shadowRoot.querySelectorAll(`[role=tab]`)[0];o(e.querySelector(`svg`)).not.toBeNull()})}},m={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.shadowRoot.querySelectorAll(`[role=tab]`).length).toBe(4));let r=n.shadowRoot.querySelectorAll(`[role=tab]`);await t(`hidden tab is not displayed`,()=>{let e=r[2];o(e.getAttribute(`hidden`)).toBe(``),o(getComputedStyle(e).display).toBe(`none`)}),await t(`disabled tab carries the disabled attribute`,()=>{o(r[3].getAttribute(`disabled`)).toBe(``)})}},h={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.selected).toBe(`tab0`)),await t(`clicking a tab selects it`,async()=>{n.shadowRoot.querySelectorAll(`[role=tab]`)[1].click(),await c(()=>o(n.selected).toBe(`tab1`))}),await t(`ctrl+click does not select`,async()=>{n.shadowRoot.querySelectorAll(`[role=tab]`)[0].dispatchEvent(new MouseEvent(`click`,{ctrlKey:!0,bubbles:!0})),await new Promise(e=>requestAnimationFrame(e)),o(n.selected).toBe(`tab1`)})}},g={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.selected).toBe(`tab0`)),await t(`tab-first-select fires once, before tab-select`,async()=>{let e=n.querySelector(`[name=tab1]`),t=s(),r=s();e.addEventListener(`tab-first-select`,t),e.addEventListener(`tab-select`,r),n.selected=`tab1`,await c(()=>o(r).toHaveBeenCalledTimes(1)),o(t).toHaveBeenCalledTimes(1),t.mockClear?.(),r.mockClear?.(),n.selected=`tab0`,await c(()=>o(n.selected).toBe(`tab0`)),n.selected=`tab1`,await c(()=>o(r).toHaveBeenCalled()),o(t).not.toHaveBeenCalled()})}},_={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.selected).toBe(`tab0`)),await t(`selecting a tab dispatches a window resize`,async()=>{let e=s();window.addEventListener(`resize`,e),n.selected=`tab1`,await c(()=>o(e).toHaveBeenCalled()),window.removeEventListener(`resize`,e)})}},v={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e);await c(()=>o(n.selected).toBe(`tab0`)),await t(`no-resize suppresses the window resize`,async()=>{n.noResize=!0;let e=s();window.addEventListener(`resize`,e),n.selected=`tab1`,await c(()=>o(n.querySelector(`[is-selected]`)?.getAttribute(`name`)).toBe(`tab1`)),await new Promise(e=>requestAnimationFrame(()=>requestAnimationFrame(e))),o(e).not.toHaveBeenCalled(),window.removeEventListener(`resize`,e)})}},y={render:()=>u(`brand`),play:async({canvasElement:e})=>{let t=d(e);await c(()=>o(t.shadowRoot.querySelector(`a[aria-selected=true]`)).not.toBeNull());let n=t.shadowRoot.querySelector(`a[aria-selected=true]`);o(getComputedStyle(n).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`)}},b={render:()=>u(`underline`),play:async({canvasElement:e})=>{let t=d(e);await c(()=>o(t.shadowRoot.querySelector(`a[aria-selected=true]`)).not.toBeNull());let n=t.shadowRoot.querySelector(`a[aria-selected=true]`),r=getComputedStyle(n).boxShadow;o(r).not.toBe(`none`),o(r).toContain(`inset`)}},x={render:()=>u(),play:async({canvasElement:e,step:t})=>{let n=d(e),r=n.shadowRoot;await c(()=>o(r.querySelector(`a[aria-selected=true]`)).not.toBeNull()),await t(`selected tab is focusable (0), the rest are -1`,()=>{o(r.querySelector(`a[aria-selected=true]`).getAttribute(`tabindex`)).toBe(`0`),r.querySelectorAll(`a[aria-selected=false]`).forEach(e=>o(e.getAttribute(`tabindex`)).toBe(`-1`))}),await t(`focusable tab follows selection`,async()=>{n.selected=`tab1`,await c(()=>o(r.querySelector(`a[aria-selected=true]`)?.getAttribute(`tabindex`)).toBe(`0`)),o(r.querySelectorAll(`a[tabindex="0"]`).length).toBe(1)})}},S={render:()=>u(),play:async({canvasElement:e})=>{let t=d(e);await c(()=>o(t.shadowRoot.querySelector(`.tab`)).not.toBeNull());let n=t.shadowRoot.querySelector(`.tab:not([hidden])`);o(getComputedStyle(n).flexGrow).toBe(`1`)}},C={render:()=>t`
        <cosmoz-tabs variant="underline" full-width="false">
            <cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
            <cosmoz-tab name="tab1" heading="Tab1">2</cosmoz-tab>
        </cosmoz-tabs>
    `,play:async({canvasElement:e})=>{let t=d(e);await c(()=>o(t.shadowRoot.querySelector(`.tab`)).not.toBeNull());let n=t.shadowRoot.querySelector(`.tab:not([hidden])`);o(getComputedStyle(n).flexGrow).toBe(`0`)}},w={render:()=>t`
        <style>
            cosmoz-tabs.sized::part(content) {
                overflow-y: auto;
            }
        </style>
        <cosmoz-tabs class="sized" style="height: 400px;">
            <cosmoz-tab name="a" heading="A">
                <div style="height: 2000px"></div>
            </cosmoz-tab>
            <cosmoz-tab name="b" heading="B">
                <div style="height: 3000px"></div>
            </cosmoz-tab>
        </cosmoz-tabs>
    `,play:async({canvasElement:e,step:t})=>{let n=d(e),r=()=>n.shadowRoot.querySelector(`#content`);await t(`a height-constrained host bounds its content panel to the host height`,async()=>{await c(()=>o(n.selected).toBe(`a`)),await c(()=>{let e=r();o(e.clientHeight).toBeGreaterThan(300),o(e.clientHeight).toBeLessThan(420)})}),await t(`stays bounded after switching tabs`,async()=>{n.selected=`b`,await c(()=>o(n.querySelector(`[is-selected]`)?.getAttribute(`name`)).toBe(`b`)),o(r().clientHeight).toBeLessThan(420)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.selected).toBe('tab0'));
    await step('selecting a tab dispatches a window resize', async () => {
      const onResize = fn();
      window.addEventListener('resize', onResize);
      tabs.selected = 'tab1';
      await waitFor(() => expect(onResize).toHaveBeenCalled());
      window.removeEventListener('resize', onResize);
    });
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement) as HTMLElement & {
      selected?: string;
      noResize?: boolean;
    };
    await waitFor(() => expect(tabs.selected).toBe('tab0'));
    await step('no-resize suppresses the window resize', async () => {
      tabs.noResize = true;
      const onResize = fn();
      window.addEventListener('resize', onResize);
      tabs.selected = 'tab1';
      await waitFor(() => expect(tabs.querySelector('[is-selected]')?.getAttribute('name')).toBe('tab1'));
      // let the (suppressed) resize rAF window pass
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      expect(onResize).not.toHaveBeenCalled();
      window.removeEventListener('resize', onResize);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    const sr = tabs.shadowRoot!;
    await waitFor(() => expect(sr.querySelector('a[aria-selected=true]')).not.toBeNull());
    await step('selected tab is focusable (0), the rest are -1', () => {
      expect(sr.querySelector('a[aria-selected=true]')!.getAttribute('tabindex')).toBe('0');
      sr.querySelectorAll('a[aria-selected=false]').forEach(a => expect(a.getAttribute('tabindex')).toBe('-1'));
    });
    await step('focusable tab follows selection', async () => {
      tabs.selected = 'tab1';
      await waitFor(() => expect(sr.querySelector('a[aria-selected=true]')?.getAttribute('tabindex')).toBe('0'));
      expect(sr.querySelectorAll('a[tabindex="0"]').length).toBe(1);
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.shadowRoot!.querySelector('.tab')).not.toBeNull());
    const tab = tabs.shadowRoot!.querySelector('.tab:not([hidden])') as HTMLElement;
    expect(getComputedStyle(tab).flexGrow).toBe('1');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs variant="underline" full-width="false">
            <cosmoz-tab name="tab0" heading="Tab0">1</cosmoz-tab>
            <cosmoz-tab name="tab1" heading="Tab1">2</cosmoz-tab>
        </cosmoz-tabs>
    \`,
  play: async ({
    canvasElement
  }) => {
    const tabs = getTabs(canvasElement);
    await waitFor(() => expect(tabs.shadowRoot!.querySelector('.tab')).not.toBeNull());
    const tab = tabs.shadowRoot!.querySelector('.tab:not([hidden])') as HTMLElement;
    expect(getComputedStyle(tab).flexGrow).toBe('0');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <style>
            cosmoz-tabs.sized::part(content) {
                overflow-y: auto;
            }
        </style>
        <cosmoz-tabs class="sized" style="height: 400px;">
            <cosmoz-tab name="a" heading="A">
                <div style="height: 2000px"></div>
            </cosmoz-tab>
            <cosmoz-tab name="b" heading="B">
                <div style="height: 3000px"></div>
            </cosmoz-tab>
        </cosmoz-tabs>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = getTabs(canvasElement);
    const content = () => tabs.shadowRoot!.querySelector('#content') as HTMLElement;
    await step('a height-constrained host bounds its content panel to the host height', async () => {
      await waitFor(() => expect(tabs.selected).toBe('a'));
      await waitFor(() => {
        const c = content();
        expect(c.clientHeight).toBeGreaterThan(300);
        expect(c.clientHeight).toBeLessThan(420);
      });
    });
    await step('stays bounded after switching tabs', async () => {
      tabs.selected = 'b';
      await waitFor(() => expect(tabs.querySelector('[is-selected]')?.getAttribute('name')).toBe('b'));
      expect(content().clientHeight).toBeLessThan(420);
    });
  }
}`,...w.parameters?.docs?.source}}},T=[`SelectsFirstAndSwitches`,`RendersBarFromChildren`,`HiddenAndDisabled`,`ClickSelects`,`FiresSelectEvents`,`DispatchesResizeOnSelect`,`NoResizeSuppressesResize`,`VariantBrandActiveStyling`,`VariantUnderlineActiveStyling`,`RovingTabindex`,`SpreadByDefault`,`FullWidthFalseSizesToContent`,`ConstrainsContentHeight`]}))();export{h as ClickSelects,w as ConstrainsContentHeight,_ as DispatchesResizeOnSelect,g as FiresSelectEvents,C as FullWidthFalseSizesToContent,m as HiddenAndDisabled,v as NoResizeSuppressesResize,p as RendersBarFromChildren,x as RovingTabindex,f as SelectsFirstAndSwitches,S as SpreadByDefault,y as VariantBrandActiveStyling,b as VariantUnderlineActiveStyling,T as __namedExportsOrder,l as default};