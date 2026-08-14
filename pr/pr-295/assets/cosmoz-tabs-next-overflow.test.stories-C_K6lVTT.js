import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-FC_2RQow.js";import{t as r}from"./next-lCD0Z-U9.js";import{d as i,i as a,s as o,t as s,u as c}from"./overflow-helpers-BtzEhtPR.js";var l,u,d,f,p,m,h,g,_;e((()=>{n(),r(),a(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Tests/Tabs overflow (next)`},f={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <div class="heading">Orders</div>
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <div class="stats">1-20 of 87</div>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=o(e),r=n.querySelector(`.heading`),a=n.querySelector(`.stats`);await u(()=>l(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0)),await t(`they are routed out of the clipping container`,async()=>{l(r.getAttribute(`slot`)).toBe(`tabs`),l(a.getAttribute(`slot`)).toBe(`stats`)}),await t(`they are never marked, clipped or copied`,async()=>{l(r.hasAttribute(`overflowing`)).toBe(!1),l(a.hasAttribute(`overflowing`)).toBe(!1),l(i(n).querySelectorAll(`.menu > :not(cosmoz-tab-next)`).length).toBe(0)}),await t(`they stay visible however narrow the bar gets`,async()=>{s(e).style.width=`120px`,await u(()=>l(a.getBoundingClientRect().width).toBeGreaterThan(0)),l(r.getBoundingClientRect().width).toBeGreaterThan(0)})}},p={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=o(e),r=()=>n.querySelectorAll(`cosmoz-tab-next[overflowing]`),a=()=>i(n).querySelectorAll(`.menu > cosmoz-tab-next`);await t(`every overflowing tab gets a copy in the menu`,async()=>{await u(()=>l(r().length).toBeGreaterThan(0)),await u(()=>l(a().length).toBe(r().length))}),await t(`a copy keeps the badge and is a vertical tab`,async()=>{let e=i(n).querySelector(`.menu`);l(e.getAttribute(`role`)).toBe(`tablist`),l(e.getAttribute(`aria-orientation`)).toBe(`vertical`),[...a()].forEach(e=>l(e.getAttribute(`role`)).toBe(`tab`))}),await t(`activating a copy forwards to the original tab`,async()=>{let e=[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1),t=0,r=0;e.addEventListener(`click`,()=>t++),n.parentElement.addEventListener(`click`,()=>r++),[...a()].at(-1).click(),await u(()=>l(t).toBe(1)),l(r).toBe(1)})}},m=`flex: 0 0 90px; width: 90px; overflow: hidden;`,h={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" style=${m} active
                    >Overview</cosmoz-tab-next
                >
                <cosmoz-tab-next name="rows" style=${m}
                    >Invoice rows</cosmoz-tab-next
                >
                <cosmoz-tab-next name="accounting" style=${m}
                    >Accounting</cosmoz-tab-next
                >
                <cosmoz-tab-next name="history" style=${m}
                    >History</cosmoz-tab-next
                >
                <cosmoz-tab-next name="attachments" style=${m}
                    >Attachments</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=o(e),r=()=>i(n).querySelectorAll(`.menu > cosmoz-tab-next`),a=()=>[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1);await u(()=>l(r().length).toBeGreaterThan(0)),await t(`wait for the overflow set to stop moving`,async()=>{let e=-1;await u(async()=>{let t=r().length;await c(),l(r().length).toBe(t),e=t}),l(e).toBeGreaterThan(0)}),await t(`a relabelled tab relabels its copy`,async()=>{a().textContent=`Files`,await u(()=>l([...r()].at(-1)?.textContent?.trim()).toBe(`Files`))}),await t(`a badge added later reaches the copy`,async()=>{a().setAttribute(`badge`,`7`),await u(()=>l([...r()].at(-1)?.getAttribute(`badge`)).toBe(`7`))}),await t(`selecting a tab marks the right copy`,async()=>{a().setAttribute(`active`,``),await u(()=>l([...r()].at(-1)?.hasAttribute(`active`)).toBe(!0))})}},g={render:()=>t`
        <div
            class="box"
            style="width: 420px; display: flex; align-items: center; gap: 8px;"
        >
            <div style="flex: 0 0 auto">Logo</div>
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=o(e),r=s(e);await t(`the bar shrinks into the row instead of spilling`,async()=>{await u(()=>l(n.getBoundingClientRect().right).toBeLessThanOrEqual(r.getBoundingClientRect().right+1))}),await t(`and hands the tabs that no longer fit to the menu`,async()=>{await u(()=>l(i(n).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),l(i(n).querySelector(`.more`)?.hasAttribute(`hidden`)).toBe(!1)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <div class="heading">Orders</div>
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <div class="stats">1-20 of 87</div>
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      heading = bar.querySelector('.heading') as HTMLElement,
      stats = bar.querySelector('.stats') as HTMLElement;
    await waitFor(() => expect(bar.querySelectorAll('cosmoz-tab-next[overflowing]').length).toBeGreaterThan(0));
    await step('they are routed out of the clipping container', async () => {
      expect(heading.getAttribute('slot')).toBe('tabs');
      expect(stats.getAttribute('slot')).toBe('stats');
    });
    await step('they are never marked, clipped or copied', async () => {
      expect(heading.hasAttribute('overflowing')).toBe(false);
      expect(stats.hasAttribute('overflowing')).toBe(false);
      expect(sr(bar).querySelectorAll('.menu > :not(cosmoz-tab-next)').length).toBe(0);
    });
    await step('they stay visible however narrow the bar gets', async () => {
      box(canvasElement).style.width = '120px';
      await waitFor(() => expect(stats.getBoundingClientRect().width).toBeGreaterThan(0));
      expect(heading.getBoundingClientRect().width).toBeGreaterThan(0);
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      overflowing = () => bar.querySelectorAll('cosmoz-tab-next[overflowing]'),
      copies = () => sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next');
    await step('every overflowing tab gets a copy in the menu', async () => {
      await waitFor(() => expect(overflowing().length).toBeGreaterThan(0));
      await waitFor(() => expect(copies().length).toBe(overflowing().length));
    });
    await step('a copy keeps the badge and is a vertical tab', async () => {
      const menu = sr(bar).querySelector('.menu') as HTMLElement;
      expect(menu.getAttribute('role')).toBe('tablist');
      expect(menu.getAttribute('aria-orientation')).toBe('vertical');
      [...copies()].forEach(copy => expect(copy.getAttribute('role')).toBe('tab'));
    });
    await step('activating a copy forwards to the original tab', async () => {
      const last = [...bar.querySelectorAll('cosmoz-tab-next')].at(-1) as HTMLElement;
      let clicks = 0,
        // a consumer delegating on an ancestor must not see the copy's own
        // click on top of the one the original dispatches
        delegated = 0;
      last.addEventListener('click', () => clicks++);
      (bar.parentElement as HTMLElement).addEventListener('click', () => delegated++);
      ([...copies()].at(-1) as HTMLElement).click();
      await waitFor(() => expect(clicks).toBe(1));
      expect(delegated).toBe(1);
    });
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" style=\${pinned} active
                    >Overview</cosmoz-tab-next
                >
                <cosmoz-tab-next name="rows" style=\${pinned}
                    >Invoice rows</cosmoz-tab-next
                >
                <cosmoz-tab-next name="accounting" style=\${pinned}
                    >Accounting</cosmoz-tab-next
                >
                <cosmoz-tab-next name="history" style=\${pinned}
                    >History</cosmoz-tab-next
                >
                <cosmoz-tab-next name="attachments" style=\${pinned}
                    >Attachments</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      copies = () => sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next'),
      last = () => [...bar.querySelectorAll<HTMLElement>('cosmoz-tab-next')].at(-1) as HTMLElement;
    await waitFor(() => expect(copies().length).toBeGreaterThan(0));

    // showing the trigger costs space, so one more tab overflows a beat later.
    // Mutating before that settles would rebuild the copies as a side effect of
    // the reshuffle and the assertions below would prove nothing.
    await step('wait for the overflow set to stop moving', async () => {
      let count = -1;
      await waitFor(async () => {
        const seen = copies().length;
        await settle();
        expect(copies().length).toBe(seen);
        count = seen;
      });
      expect(count).toBeGreaterThan(0);
    });

    // the label lives in the tab's light DOM, so an i18n switch or a live
    // count changes it without any attribute or slot change to notice
    await step('a relabelled tab relabels its copy', async () => {
      last().textContent = 'Files';
      await waitFor(() => expect([...copies()].at(-1)?.textContent?.trim()).toBe('Files'));
    });
    await step('a badge added later reaches the copy', async () => {
      last().setAttribute('badge', '7');
      await waitFor(() => expect([...copies()].at(-1)?.getAttribute('badge')).toBe('7'));
    });
    await step('selecting a tab marks the right copy', async () => {
      last().setAttribute('active', '');
      await waitFor(() => expect([...copies()].at(-1)?.hasAttribute('active')).toBe(true));
    });
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div
            class="box"
            style="width: 420px; display: flex; align-items: center; gap: 8px;"
        >
            <div style="flex: 0 0 auto">Logo</div>
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      row = box(canvasElement);

    // a top bar is the common case: a flex row with a logo and the tabs. The
    // host defaulting to \`flex: none\` / \`min-width: auto\` would keep it at its
    // content width, so it would spill out of the row and never overflow
    await step('the bar shrinks into the row instead of spilling', async () => {
      await waitFor(() => expect(bar.getBoundingClientRect().right).toBeLessThanOrEqual(row.getBoundingClientRect().right + 1));
    });
    await step('and hands the tabs that no longer fit to the menu', async () => {
      await waitFor(() => expect(sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length).toBeGreaterThan(0));
      expect(sr(bar).querySelector('.more')?.hasAttribute('hidden')).toBe(false);
    });
  }
}`,...g.parameters?.docs?.source}}},_=[`NonTabChildrenAreNeverTreatedAsTabs`,`NextCopiesOverflowingTabsIntoTheMenu`,`CopiesFollowTheirOriginals`,`OverflowsWhenTheBarIsAFlexItem`]}))();export{h as CopiesFollowTheirOriginals,p as NextCopiesOverflowingTabsIntoTheMenu,f as NonTabChildrenAreNeverTreatedAsTabs,g as OverflowsWhenTheBarIsAFlexItem,_ as __namedExportsOrder,d as default};