import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-CKiHJFd3.js";import{c as r,s as i}from"./if-defined-BEauzBAC.js";import{l as a,r as o,t as s}from"./untitled-GATzo-X-.js";import{a as c,i as l,n as u,r as d,t as f}from"./next-owEVcXu7.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{s(),i(),n(),f(),u(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Tests/Tabs (next)`},g=(e=`brand`)=>t`
    <cosmoz-tabs-next variant=${e}>
        <cosmoz-tab-next active>Overview</cosmoz-tab-next>
        <cosmoz-tab-next badge="2">Activity</cosmoz-tab-next>
        <cosmoz-tab-next disabled>Settings</cosmoz-tab-next>
    </cosmoz-tabs-next>
`,_=e=>e.querySelector(`cosmoz-tabs-next`),v={render:()=>g(),play:async({canvasElement:e,step:t})=>{let n=_(e);await t(`the selected tab is the one tab stop`,()=>{p(n.querySelector(`cosmoz-tab-next[active]`).getAttribute(`tabindex`)).toBe(`0`),n.querySelectorAll(`cosmoz-tab-next:not([active])`).forEach(e=>p(e.getAttribute(`tabindex`)).toBe(`-1`))}),await t(`the stop follows selection`,async()=>{n.querySelector(`cosmoz-tab-next[active]`).removeAttribute(`active`);let e=n.querySelector(`cosmoz-tab-next:not([disabled])`);e.setAttribute(`active`,``),await m(()=>p(e.getAttribute(`tabindex`)).toBe(`0`)),p(n.querySelectorAll(`cosmoz-tab-next[tabindex="0"]`).length).toBe(1)})}},y={render:()=>g(),play:async({canvasElement:e,step:t})=>{let n=_(e);await t(`the host is the tablist`,async()=>{await m(()=>p(n.getAttribute(`role`)).toBe(`tablist`))}),await t(`active tab gets role=tab and aria-selected`,async()=>{let e=n.querySelector(`cosmoz-tab-next[active]`);await m(()=>p(e.getAttribute(`role`)).toBe(`tab`)),await m(()=>p(e.getAttribute(`aria-selected`)).toBe(`true`))}),await t(`inactive tab has aria-selected=false`,async()=>{let e=n.querySelector(`cosmoz-tab-next:not([active])`);await m(()=>p(e.getAttribute(`aria-selected`)).toBe(`false`))}),await t(`badge is rendered in the tab shadow root`,async()=>{let e=n.querySelectorAll(`cosmoz-tab-next`)[1];await m(()=>p(e.shadowRoot.querySelector(`.badge`)?.textContent).toBe(`2`))})}},b={render:()=>t`
        <cosmoz-tabs-next variant="segmented" compact-width role="radiogroup">
            <cosmoz-tab-next active>Today</cosmoz-tab-next>
            <cosmoz-tab-next>7 days</cosmoz-tab-next>
            <cosmoz-tab-next>30 days</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let n=_(e);await t(`the family is a tablist regardless of authored role: a value picker is the input package's radiogroup`,async()=>{await m(()=>p(n.getAttribute(`role`)).toBe(`tablist`))}),await t(`each item is a tab reporting aria-selected`,async()=>{await m(()=>{let e=n.querySelectorAll(`cosmoz-tab-next`);p(e.length).toBe(3),e.forEach(e=>p(e.getAttribute(`role`)).toBe(`tab`))});let e=n.querySelector(`cosmoz-tab-next[active]`);p(e.getAttribute(`aria-selected`)).toBe(`true`),p(e.hasAttribute(`aria-checked`)).toBe(!1)})}},x={render:()=>g(`brand`),play:async({canvasElement:e,step:t})=>{let n=_(e);await t(`each child receives variant="brand"`,async()=>{await m(()=>{let e=n.querySelectorAll(`cosmoz-tab-next`);p(e.length).toBe(3),e.forEach(e=>p(e.getAttribute(`variant`)).toBe(`brand`))})}),await t(`changing the container variant updates children`,async()=>{n.setAttribute(`variant`,`underline`),await m(()=>n.querySelectorAll(`cosmoz-tab-next`).forEach(e=>p(e.getAttribute(`variant`)).toBe(`underline`)))})}},S={render:()=>g(`brand`),play:async({canvasElement:e})=>{let t=_(e),n;await m(()=>{n=t.querySelector(`cosmoz-tab-next[active]`),p(n).not.toBeNull()}),await m(()=>p(n.getAttribute(`variant`)).toBe(`brand`)),await m(()=>p(getComputedStyle(n).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`))}},C={render:()=>g(`segmented`),play:async({canvasElement:e,step:t})=>{let n=_(e),r;await t(`the variant reaches the children`,async()=>{await m(()=>{r=n.querySelector(`cosmoz-tab-next[active]`),p(r?.getAttribute(`variant`)).toBe(`segmented`)})}),await t(`the track is filled and the active tab is raised`,async()=>{await m(()=>{p(getComputedStyle(n).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),p(getComputedStyle(r).backgroundColor).not.toBe(`rgba(0, 0, 0, 0)`),p(getComputedStyle(r).boxShadow).not.toBe(`none`)})})}},w={render:()=>g(),play:async({canvasElement:e})=>{let t=_(e).querySelector(`cosmoz-tab-next`);await m(()=>p(getComputedStyle(t).flexGrow).toBe(`1`)),p(t.hasAttribute(`compact-width`)).toBe(!1)}},T={render:()=>t`
        <cosmoz-tabs-next variant="brand" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let n=_(e).querySelector(`cosmoz-tab-next`);await t(`container reflects compact-width`,async()=>{await m(()=>p(n.hasAttribute(`compact-width`)).toBe(!0))}),await t(`child opts out of spreading (flex: 0 1 auto)`,async()=>{await m(()=>p(getComputedStyle(n).flexGrow).toBe(`0`))})}},E={render:()=>t`
        <cosmoz-tabs-next variant="segmented" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="segmented" compact-width size="sm">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="underline" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="underline" compact-width size="sm">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let[n,r,i,a]=[...e.querySelectorAll(`cosmoz-tabs-next`)],o=e=>e.querySelector(`cosmoz-tab-next`);await t(`the size reaches the children`,async()=>{await m(()=>p(o(r).getAttribute(`size`)).toBe(`sm`)),p(o(n).hasAttribute(`size`)).toBe(!1)}),await t(`sm is shorter and narrower than the default`,async()=>{await m(()=>{p(r.offsetHeight).toBeLessThan(n.offsetHeight),p(r.offsetWidth).toBeLessThan(n.offsetWidth)})}),await t(`sm underline is shorter without getting wider`,async()=>{await m(()=>{p(a.offsetHeight).toBeLessThan(i.offsetHeight),p(a.offsetWidth).toBe(i.offsetWidth)})})}},D=[{name:`overview`,title:`Overview`,icon:o,render:()=>t`<div>overview panel</div>`},{name:`rows`,title:`Invoice rows`,badge:`5`,icon:a,render:()=>t`<div>rows panel</div>`},{name:`plain`,title:`No icon`,render:()=>t`<div>plain panel</div>`}],O=()=>{let e=c(D);return t`
        <cosmoz-tabs-next id="icon-tabs">${l(e)}</cosmoz-tabs-next>
        ${d(e,e=>e.isActive?t`<div id="panel">${e.render()}</div>`:null)}
    `},customElements.get(`cosmoz-tabs-next-icon-tabs-test`)||customElements.define(`cosmoz-tabs-next-icon-tabs-test`,r(O)),k={render:()=>t`<cosmoz-tabs-next-icon-tabs-test></cosmoz-tabs-next-icon-tabs-test>`,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-next-icon-tabs-test`);await t(`the icon lands in the icon slot before the label`,async()=>{let e=n.shadowRoot.querySelector(`cosmoz-tabs-next#icon-tabs`);await m(()=>{let[t,n,r]=[...e.querySelectorAll(`cosmoz-tab-next`)];p(t.shadowRoot.querySelector(`#iconSlot`).assignedElements()[0]?.tagName).toBe(`svg`),p(n.shadowRoot.querySelector(`#iconSlot`).assignedElements()[0]?.tagName).toBe(`svg`),p(r.shadowRoot.querySelector(`#iconSlot`).assignedElements()).toEqual([])})}),await t(`the label still renders alongside the icon`,async()=>{let e=n.shadowRoot.querySelector(`cosmoz-tab-next[name="overview"]`);await m(()=>p(e.textContent).toContain(`Overview`))}),await t(`selection and panels keep working`,async()=>{let e=n.shadowRoot.querySelector(`cosmoz-tabs-next#icon-tabs`);e.querySelector(`cosmoz-tab-next[name="rows"]`).click(),await m(()=>p(e.querySelector(`cosmoz-tab-next[name="rows"]`).hasAttribute(`active`)).toBe(!0)),await m(()=>p(n.shadowRoot.querySelector(`#panel`).textContent).toContain(`rows panel`))})}},A=[`RovingTabindex`,`RolesAndActive`,`RadiogroupIsATablist`,`ReflectsVariantToChildren`,`BrandActiveStyling`,`SegmentedActiveStyling`,`SpreadByDefault`,`CompactWidthSizesToContent`,`SizeReachesChildrenAndShrinksTheBox`,`RenderTabsRendersTheIconIntoTheIconSlot`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    await step('the selected tab is the one tab stop', () => {
      expect(container.querySelector('cosmoz-tab-next[active]')!.getAttribute('tabindex')).toBe('0');
      container.querySelectorAll('cosmoz-tab-next:not([active])').forEach(tab => expect(tab.getAttribute('tabindex')).toBe('-1'));
    });
    await step('the stop follows selection', async () => {
      container.querySelector('cosmoz-tab-next[active]')!.removeAttribute('active');
      const next = container.querySelector('cosmoz-tab-next:not([disabled])') as HTMLElement;
      next.setAttribute('active', '');
      await waitFor(() => expect(next.getAttribute('tabindex')).toBe('0'));
      expect(container.querySelectorAll('cosmoz-tab-next[tabindex="0"]').length).toBe(1);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement,
    step
  }) => {
    const container = getContainer(canvasElement);
    await step('the host is the tablist', async () => {
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    await step('the family is a tablist regardless of authored role: a value picker is the input package\\'s radiogroup', async () => {
      await waitFor(() => expect(container.getAttribute('role')).toBe('tablist'));
    });
    await step('each item is a tab reporting aria-selected', async () => {
      await waitFor(() => {
        const items = container.querySelectorAll('cosmoz-tab-next');
        expect(items.length).toBe(3);
        items.forEach(item => expect(item.getAttribute('role')).toBe('tab'));
      });
      const active = container.querySelector('cosmoz-tab-next[active]')!;
      expect(active.getAttribute('aria-selected')).toBe('true');
      expect(active.hasAttribute('aria-checked')).toBe(false);
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    const container = getContainer(canvasElement);
    const tab = container.querySelector('cosmoz-tab-next') as HTMLElement;
    await waitFor(() => expect(getComputedStyle(tab).flexGrow).toBe('1'));
    expect(tab.hasAttribute('compact-width')).toBe(false);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs-next variant="segmented" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="segmented" compact-width size="sm">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="underline" compact-width>
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
        <cosmoz-tabs-next variant="underline" compact-width size="sm">
            <cosmoz-tab-next active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next>Activity</cosmoz-tab-next>
        </cosmoz-tabs-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const [base, small, underlineBase, underlineSmall] = [...canvasElement.querySelectorAll('cosmoz-tabs-next')] as HTMLElement[];
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
    await step('sm underline is shorter without getting wider', async () => {
      await waitFor(() => {
        expect(underlineSmall.offsetHeight).toBeLessThan(underlineBase.offsetHeight);
        expect(underlineSmall.offsetWidth).toBe(underlineBase.offsetWidth);
      });
    });
  }
}`,...E.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => html\`<cosmoz-tabs-next-icon-tabs-test></cosmoz-tabs-next-icon-tabs-test>\`,
  play: async ({
    canvasElement,
    step
  }) => {
    const container = canvasElement.querySelector('cosmoz-tabs-next-icon-tabs-test') as HTMLElement & {
      shadowRoot: ShadowRoot;
    };
    await step('the icon lands in the icon slot before the label', async () => {
      const bar = container.shadowRoot.querySelector('cosmoz-tabs-next#icon-tabs')! as HTMLElement;
      await waitFor(() => {
        const [overview, rows, plain] = [...bar.querySelectorAll('cosmoz-tab-next')] as Array<HTMLElement & {
          shadowRoot: ShadowRoot;
        }>;
        expect(overview.shadowRoot.querySelector('#iconSlot')!.assignedElements()[0]?.tagName).toBe('svg');
        expect(rows.shadowRoot.querySelector('#iconSlot')!.assignedElements()[0]?.tagName).toBe('svg');
        // A tab without an icon stays icon-less.
        expect(plain.shadowRoot.querySelector('#iconSlot')!.assignedElements()).toEqual([]);
      });
    });
    await step('the label still renders alongside the icon', async () => {
      const overview = container.shadowRoot.querySelector('cosmoz-tab-next[name="overview"]') as HTMLElement & {
        textContent: string;
      };
      await waitFor(() => expect(overview.textContent).toContain('Overview'));
    });
    await step('selection and panels keep working', async () => {
      const bar = container.shadowRoot.querySelector('cosmoz-tabs-next#icon-tabs')!;
      const rowsTab = bar.querySelector('cosmoz-tab-next[name="rows"]')!;
      (rowsTab as HTMLElement).click();
      await waitFor(() => expect((bar.querySelector('cosmoz-tab-next[name="rows"]') as HTMLElement).hasAttribute('active')).toBe(true));
      await waitFor(() => expect((container.shadowRoot.querySelector('#panel') as HTMLElement).textContent).toContain('rows panel'));
    });
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{S as BrandActiveStyling,T as CompactWidthSizesToContent,b as RadiogroupIsATablist,x as ReflectsVariantToChildren,k as RenderTabsRendersTheIconIntoTheIconSlot,y as RolesAndActive,v as RovingTabindex,C as SegmentedActiveStyling,E as SizeReachesChildrenAndShrinksTheBox,w as SpreadByDefault,A as __namedExportsOrder,h as default};