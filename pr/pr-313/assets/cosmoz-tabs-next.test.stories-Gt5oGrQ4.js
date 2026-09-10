import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,s as n}from"./iframe-DLVdIAOy.js";import{t as r}from"./next-CP9gEAHH.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{t(),r(),{expect:i,waitFor:a}=__STORYBOOK_MODULE_TEST__,o={title:`Tests/Tabs (next)`},s=(e=`brand`)=>n`
    <cosmoz-tabs-next variant=${e}>
        <cosmoz-tab-next active>Overview</cosmoz-tab-next>
        <cosmoz-tab-next badge="2">Activity</cosmoz-tab-next>
        <cosmoz-tab-next disabled>Settings</cosmoz-tab-next>
    </cosmoz-tabs-next>
`,c=e=>e.querySelector(`cosmoz-tabs-next`),l={render:()=>s(),play:async({canvasElement:e,step:t})=>{let n=c(e);await t(`container is a tablist`,async()=>{await a(()=>i(n.getAttribute(`role`)).toBe(`tablist`))}),await t(`active tab gets role=tab and aria-selected`,async()=>{let e=n.querySelector(`cosmoz-tab-next[active]`);await a(()=>i(e.getAttribute(`role`)).toBe(`tab`)),await a(()=>i(e.getAttribute(`aria-selected`)).toBe(`true`))}),await t(`inactive tab has aria-selected=false`,async()=>{let e=n.querySelector(`cosmoz-tab-next:not([active])`);await a(()=>i(e.getAttribute(`aria-selected`)).toBe(`false`))}),await t(`badge is rendered in the tab shadow root`,async()=>{let e=n.querySelectorAll(`cosmoz-tab-next`)[1];await a(()=>i(e.shadowRoot.querySelector(`.badge`)?.textContent).toBe(`2`))})}},u={render:()=>n`
        <cosmoz-tabs-next variant="segmented" compact-width role="radiogroup">
            <cosmoz-tab-next active>Today</cosmoz-tab-next>
            <cosmoz-tab-next>7 days</cosmoz-tab-next>
            <cosmoz-tab-next>30 days</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let n=c(e);await t(`the container keeps the role it was given`,async()=>{await a(()=>i(n.getAttribute(`role`)).toBe(`radiogroup`))}),await t(`each item is a radio, not a tab`,async()=>{await a(()=>{let e=n.querySelectorAll(`cosmoz-tab-next`);i(e.length).toBe(3),e.forEach(e=>i(e.getAttribute(`role`)).toBe(`radio`))})}),await t(`selection is reported as aria-checked only`,async()=>{let e=n.querySelector(`cosmoz-tab-next[active]`),t=n.querySelector(`cosmoz-tab-next:not([active])`);await a(()=>{i(e.getAttribute(`aria-checked`)).toBe(`true`),i(t.getAttribute(`aria-checked`)).toBe(`false`)}),i(e.hasAttribute(`aria-selected`)).toBe(!1),i(t.hasAttribute(`aria-selected`)).toBe(!1)}),await t(`the radio semantics survive a variant change`,async()=>{n.setAttribute(`variant`,`underline`),await a(()=>{let e=n.querySelector(`cosmoz-tab-next[active]`);i(e.getAttribute(`variant`)).toBe(`underline`),i(e.getAttribute(`role`)).toBe(`radio`),i(e.getAttribute(`aria-checked`)).toBe(`true`),i(e.hasAttribute(`aria-selected`)).toBe(!1)})})}},d={render:()=>s(`brand`),play:async({canvasElement:e,step:t})=>{let n=c(e);await t(`each child receives variant="brand"`,async()=>{await a(()=>{let e=n.querySelectorAll(`cosmoz-tab-next`);i(e.length).toBe(3),e.forEach(e=>i(e.getAttribute(`variant`)).toBe(`brand`))})}),await t(`changing the container variant updates children`,async()=>{n.setAttribute(`variant`,`underline`),await a(()=>n.querySelectorAll(`cosmoz-tab-next`).forEach(e=>i(e.getAttribute(`variant`)).toBe(`underline`)))})}},f={render:()=>s(`brand`),play:async({canvasElement:e})=>{let t=c(e),n;await a(()=>{n=t.querySelector(`cosmoz-tab-next[active]`),i(n).not.toBeNull()}),await a(()=>i(n.getAttribute(`variant`)).toBe(`brand`)),await a(()=>i(getComputedStyle(n).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`))}},p={render:()=>s(`segmented`),play:async({canvasElement:e,step:t})=>{let n=c(e),r;await t(`the variant reaches the children`,async()=>{await a(()=>{r=n.querySelector(`cosmoz-tab-next[active]`),i(r?.getAttribute(`variant`)).toBe(`segmented`)})}),await t(`the track is filled and the active tab is raised`,async()=>{await a(()=>{i(getComputedStyle(n).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),i(getComputedStyle(r).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),i(getComputedStyle(r).boxShadow).not.toBe(`none`)})})}},m={render:()=>s(),play:async({canvasElement:e})=>{let t=c(e).querySelector(`cosmoz-tab-next`);await a(()=>i(getComputedStyle(t).flexGrow).toBe(`1`)),i(t.hasAttribute(`compact-width`)).toBe(!1)}},h={render:()=>n`
        <cosmoz-tabs-next variant="brand" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let n=c(e).querySelector(`cosmoz-tab-next`);await t(`container reflects compact-width`,async()=>{await a(()=>i(n.hasAttribute(`compact-width`)).toBe(!0))}),await t(`child opts out of spreading (flex: 0 1 auto)`,async()=>{await a(()=>i(getComputedStyle(n).flexGrow).toBe(`0`))})}},g={render:()=>n`
        <cosmoz-tabs-next variant="segmented" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="segmented" compact-width size="sm">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let[n,r]=[...e.querySelectorAll(`cosmoz-tabs-next`)],o=e=>e.querySelector(`cosmoz-tab-next`);await t(`the size reaches the children`,async()=>{await a(()=>i(o(r).getAttribute(`size`)).toBe(`sm`)),i(o(n).hasAttribute(`size`)).toBe(!1)}),await t(`sm is shorter and narrower than the default`,async()=>{await a(()=>{i(r.offsetHeight).toBeLessThan(n.offsetHeight),i(r.offsetWidth).toBeLessThan(n.offsetWidth)})})}},_=[`RolesAndActive`,`RadiogroupPicksRadioSemantics`,`ReflectsVariantToChildren`,`BrandActiveStyling`,`SegmentedActiveStyling`,`SpreadByDefault`,`CompactWidthSizesToContent`,`SizeReachesChildrenAndShrinksTheBox`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
  render: () => html\`
        <cosmoz-tabs-next variant="segmented" compact-width role="radiogroup">
            <cosmoz-tab-next active>Today</cosmoz-tab-next>
            <cosmoz-tab-next>7 days</cosmoz-tab-next>
            <cosmoz-tab-next>30 days</cosmoz-tab-next>
        </cosmoz-tabs-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    await step('the container keeps the role it was given', async () => {
      await waitFor(() => expect(container.getAttribute('role')).toBe('radiogroup'));
    });
    await step('each item is a radio, not a tab', async () => {
      await waitFor(() => {
        const items = container.querySelectorAll('cosmoz-tab-next');
        expect(items.length).toBe(3);
        items.forEach(item => expect(item.getAttribute('role')).toBe('radio'));
      });
    });
    await step('selection is reported as aria-checked only', async () => {
      const active = container.querySelector('cosmoz-tab-next[active]')!;
      const inactive = container.querySelector('cosmoz-tab-next:not([active])')!;
      await waitFor(() => {
        expect(active.getAttribute('aria-checked')).toBe('true');
        expect(inactive.getAttribute('aria-checked')).toBe('false');
      });
      // A radio that also claims aria-selected describes itself twice.
      expect(active.hasAttribute('aria-selected')).toBe(false);
      expect(inactive.hasAttribute('aria-selected')).toBe(false);
    });
    await step('the radio semantics survive a variant change', async () => {
      container.setAttribute('variant', 'underline');
      await waitFor(() => {
        const active = container.querySelector('cosmoz-tab-next[active]')!;
        expect(active.getAttribute('variant')).toBe('underline');
        expect(active.getAttribute('role')).toBe('radio');
        expect(active.getAttribute('aria-checked')).toBe('true');
        expect(active.hasAttribute('aria-selected')).toBe(false);
      });
    });
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => fixture('brand'),
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    await step('each child receives variant="brand"', async () => {
      await waitFor(() => {
        const children = container.querySelectorAll('cosmoz-tab-next');
        expect(children.length).toBe(3);
        children.forEach(c => expect(c.getAttribute('variant')).toBe('brand'));
      });
    });
    await step('changing the container variant updates children', async () => {
      container.setAttribute('variant', 'underline');
      await waitFor(() => container.querySelectorAll('cosmoz-tab-next').forEach(c => expect(c.getAttribute('variant')).toBe('underline')));
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    await waitFor(() => expect(active.getAttribute('variant')).toBe('brand'));
    await waitFor(() => expect(getComputedStyle(active).backgroundColor).not.toBe('rgba(0, 0, 0, 0)'));
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => fixture('segmented'),
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    let active!: HTMLElement;
    await step('the variant reaches the children', async () => {
      await waitFor(() => {
        active = container.querySelector('cosmoz-tab-next[active]') as HTMLElement;
        expect(active?.getAttribute('variant')).toBe('segmented');
      });
    });
    await step('the track is filled and the active tab is raised', async () => {
      await waitFor(() => {
        expect(getComputedStyle(container).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
        expect(getComputedStyle(active).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
        expect(getComputedStyle(active).boxShadow).not.toBe('none');
      });
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    const container = getContainer(canvasElement);
    const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;
    await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('1'));
    expect(tab.hasAttribute('compact-width')).toBe(false);
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs-next variant="brand" compact-width>
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
    await step('container reflects compact-width', async () => {
      await waitFor(() => expect(tab.hasAttribute('compact-width')).toBe(true));
    });
    await step('child opts out of spreading (flex: 0 1 auto)', async () => {
      await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('0'));
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs-next variant="segmented" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="segmented" compact-width size="sm">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const [base, small] = [...canvasElement.querySelectorAll('cosmoz-tabs-next')] as HTMLElement[];
    const tabOf = (bar: HTMLElement) => bar.querySelector('cosmoz-tab-next') as HTMLElement;
    await step('the size reaches the children', async () => {
      await waitFor(() => expect(tabOf(small).getAttribute('size')).toBe('sm'));
      expect(tabOf(base).hasAttribute('size')).toBe(false);
    });
    await step('sm is shorter and narrower than the default', async () => {
      await waitFor(() => {
        expect(small.offsetHeight).toBeLessThan(base.offsetHeight);
        expect(small.offsetWidth).toBeLessThan(base.offsetWidth);
      });
    });
  }
}`,...g.parameters?.docs?.source}}}})))()}v();export{f as BrandActiveStyling,h as CompactWidthSizesToContent,u as RadiogroupPicksRadioSemantics,d as ReflectsVariantToChildren,l as RolesAndActive,p as SegmentedActiveStyling,g as SizeReachesChildrenAndShrinksTheBox,m as SpreadByDefault,_ as __namedExportsOrder,o as default};