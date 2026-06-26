import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-l1zHrOt5.js";import{t as r}from"./next-BKHnYXiw.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),r(),{expect:i,waitFor:a}=__STORYBOOK_MODULE_TEST__,o={title:`Tests/Tabs (next)`},s=(e=`brand`)=>t`
    <cosmoz-tabs-next variant=${e}>
        <cosmoz-tab-next active>Overview</cosmoz-tab-next>
        <cosmoz-tab-next badge="2">Activity</cosmoz-tab-next>
        <cosmoz-tab-next disabled>Settings</cosmoz-tab-next>
    </cosmoz-tabs-next>
`,c=e=>e.querySelector(`cosmoz-tabs-next`),l={render:()=>s(),play:async({canvasElement:e,step:t})=>{let n=c(e);await t(`container is a tablist`,async()=>{await a(()=>i(n.getAttribute(`role`)).toBe(`tablist`))}),await t(`active tab gets role=tab and aria-selected`,async()=>{let e=n.querySelector(`cosmoz-tab-next[active]`);await a(()=>i(e.getAttribute(`role`)).toBe(`tab`)),await a(()=>i(e.getAttribute(`aria-selected`)).toBe(`true`))}),await t(`inactive tab has aria-selected=false`,async()=>{let e=n.querySelector(`cosmoz-tab-next:not([active])`);await a(()=>i(e.getAttribute(`aria-selected`)).toBe(`false`))}),await t(`badge is rendered in the tab shadow root`,async()=>{let e=n.querySelectorAll(`cosmoz-tab-next`)[1];await a(()=>i(e.shadowRoot.querySelector(`.badge`)?.textContent).toBe(`2`))})}},u={render:()=>s(`brand`),play:async({canvasElement:e,step:t})=>{let n=c(e);await t(`each child receives data-variant="brand"`,async()=>{await a(()=>{let e=n.querySelectorAll(`cosmoz-tab-next`);i(e.length).toBe(3),e.forEach(e=>i(e.getAttribute(`data-variant`)).toBe(`brand`))})}),await t(`changing the container variant updates children`,async()=>{n.setAttribute(`variant`,`underline`),await a(()=>n.querySelectorAll(`cosmoz-tab-next`).forEach(e=>i(e.getAttribute(`data-variant`)).toBe(`underline`)))})}},d={render:()=>s(`brand`),play:async({canvasElement:e})=>{let t=c(e),n;await a(()=>{n=t.querySelector(`cosmoz-tab-next[active]`),i(n).not.toBeNull()}),await a(()=>i(n.getAttribute(`data-variant`)).toBe(`brand`)),await a(()=>i(getComputedStyle(n).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`))}},f={render:()=>s(),play:async({canvasElement:e})=>{let t=c(e).querySelector(`cosmoz-tab-next`);await a(()=>i(getComputedStyle(t).flexGrow).toBe(`1`)),i(t.getAttribute(`data-compact-width`)).toBeNull()}},p={render:()=>t`
        <cosmoz-tabs-next variant="brand" compact-width="true">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let n=c(e).querySelector(`cosmoz-tab-next`);await t(`container reflects data-compact-width="true"`,async()=>{await a(()=>i(n.getAttribute(`data-compact-width`)).toBe(`true`))}),await t(`child opts out of spreading (flex: 0 1 auto)`,async()=>{await a(()=>i(getComputedStyle(n).flexGrow).toBe(`0`))})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    await step('container is a tablist', async () => {
      await waitFor(() => expect(container.getAttribute('role')).toBe('tablist'));
    });
    await step('active tab gets role=tab and aria-selected', async () => {
      const active = container.querySelector('cosmoz-tab-next[active]')!;
      await waitFor(() => expect(active.getAttribute('role')).toBe('tab'));
      await waitFor(() => expect(active.getAttribute('aria-selected')).toBe('true'));
    });
    await step('inactive tab has aria-selected=false', async () => {
      const inactive = container.querySelector('cosmoz-tab-next:not([active])')!;
      await waitFor(() => expect(inactive.getAttribute('aria-selected')).toBe('false'));
    });
    await step('badge is rendered in the tab shadow root', async () => {
      const withBadge = container.querySelectorAll('cosmoz-tab-next')[1];
      await waitFor(() => expect(withBadge.shadowRoot!.querySelector('.badge')?.textContent).toBe('2'));
    });
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => fixture('brand'),
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    await step('each child receives data-variant="brand"', async () => {
      await waitFor(() => {
        const children = container.querySelectorAll('cosmoz-tab-next');
        expect(children.length).toBe(3);
        children.forEach(c => expect(c.getAttribute('data-variant')).toBe('brand'));
      });
    });
    await step('changing the container variant updates children', async () => {
      container.setAttribute('variant', 'underline');
      await waitFor(() => container.querySelectorAll('cosmoz-tab-next').forEach(c => expect(c.getAttribute('data-variant')).toBe('underline')));
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => fixture('brand'),
  play: async ({
    canvasElement
  }) => {
    const container = getContainer(canvasElement);
    let active!: HTMLElement;
    await waitFor(() => {
      active = container.querySelector('cosmoz-tab-next[active]') as HTMLElement;
      expect(active).not.toBeNull();
    });
    await waitFor(() => expect(active.getAttribute('data-variant')).toBe('brand'));
    await waitFor(() => expect(getComputedStyle(active).backgroundColor).not.toBe('rgba(0, 0, 0, 0)'));
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    const container = getContainer(canvasElement);
    const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;
    await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('1'));
    expect(tab.getAttribute('data-compact-width')).toBeNull();
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs-next variant="brand" compact-width="true">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;
    await step('container reflects data-compact-width="true"', async () => {
      await waitFor(() => expect(tab.getAttribute('data-compact-width')).toBe('true'));
    });
    await step('child opts out of spreading (flex: 0 1 auto)', async () => {
      await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('0'));
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`RolesAndActive`,`ReflectsVariantToChildren`,`BrandActiveStyling`,`SpreadByDefault`,`CompactWidthSizesToContent`]}))();export{d as BrandActiveStyling,p as CompactWidthSizesToContent,u as ReflectsVariantToChildren,l as RolesAndActive,f as SpreadByDefault,m as __namedExportsOrder,o as default};