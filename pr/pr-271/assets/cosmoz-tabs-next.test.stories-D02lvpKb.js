import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-Dy5XTPV_.js";import{t as r}from"./next-CW5nuQzJ.js";var i,a,o,s,c,l,u,d,f;e((()=>{n(),r(),{expect:i,waitFor:a}=__STORYBOOK_MODULE_TEST__,o={title:`Tests/Tabs (next)`},s=(e=`brand`)=>t`
    <cosmoz-tabs-next variant=${e}>
        <cosmoz-tab-next active>Overview</cosmoz-tab-next>
        <cosmoz-tab-next badge="2">Activity</cosmoz-tab-next>
        <cosmoz-tab-next disabled>Settings</cosmoz-tab-next>
    </cosmoz-tabs-next>
`,c=e=>e.querySelector(`cosmoz-tabs-next`),l={render:()=>s(),play:async({canvasElement:e,step:t})=>{let n=c(e);await t(`container is a tablist`,async()=>{await a(()=>i(n.getAttribute(`role`)).toBe(`tablist`))}),await t(`active tab gets role=tab and aria-selected`,async()=>{let e=n.querySelector(`cosmoz-tab-next[active]`);await a(()=>i(e.getAttribute(`role`)).toBe(`tab`)),await a(()=>i(e.getAttribute(`aria-selected`)).toBe(`true`))}),await t(`inactive tab has aria-selected=false`,async()=>{let e=n.querySelector(`cosmoz-tab-next:not([active])`);await a(()=>i(e.getAttribute(`aria-selected`)).toBe(`false`))}),await t(`badge is rendered in the tab shadow root`,async()=>{let e=n.querySelectorAll(`cosmoz-tab-next`)[1];await a(()=>i(e.shadowRoot.querySelector(`.badge`)?.textContent).toBe(`2`))})}},u={render:()=>s(`brand`),play:async({canvasElement:e,step:t})=>{let n=c(e);await t(`each child receives data-variant="brand"`,async()=>{await a(()=>{let e=n.querySelectorAll(`cosmoz-tab-next`);i(e.length).toBe(3),e.forEach(e=>i(e.getAttribute(`data-variant`)).toBe(`brand`))})}),await t(`changing the container variant updates children`,async()=>{n.setAttribute(`variant`,`underline`),await a(()=>n.querySelectorAll(`cosmoz-tab-next`).forEach(e=>i(e.getAttribute(`data-variant`)).toBe(`underline`)))})}},d={render:()=>s(`brand`),play:async({canvasElement:e})=>{let t=c(e).querySelector(`cosmoz-tab-next[active]`);await a(()=>i(t.getAttribute(`data-variant`)).toBe(`brand`)),await a(()=>i(getComputedStyle(t).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`))}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    const active = container.querySelector('cosmoz-tab-next[active]') as HTMLElement;
    await waitFor(() => expect(active.getAttribute('data-variant')).toBe('brand'));
    await waitFor(() => expect(getComputedStyle(active).backgroundColor).not.toBe('rgba(0, 0, 0, 0)'));
  }
}`,...d.parameters?.docs?.source}}},f=[`RolesAndActive`,`ReflectsVariantToChildren`,`BrandActiveStyling`]}))();export{d as BrandActiveStyling,u as ReflectsVariantToChildren,l as RolesAndActive,f as __namedExportsOrder,o as default};