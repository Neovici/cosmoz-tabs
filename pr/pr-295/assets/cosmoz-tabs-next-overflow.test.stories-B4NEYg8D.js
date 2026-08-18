import{i as e}from"./preload-helper-usAeo7Bx.js";import{J as t,Y as n}from"./iframe-T0BedWGr.js";import{t as r}from"./next-B0L137RR.js";import{d as i,f as a,i as o,l as s,s as c,t as l}from"./overflow-helpers-CwlYrfFd.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),r(),o(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f={title:`Tests/Tabs overflow (next)`},p={render:()=>t`
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
    `,play:async({canvasElement:e,step:t})=>{let n=c(e),r=n.querySelector(`.heading`),i=n.querySelector(`.stats`);await d(()=>u(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0)),await t(`they are routed out of the clipping container`,async()=>{u(r.getAttribute(`slot`)).toBe(`tabs`),u(i.getAttribute(`slot`)).toBe(`stats`)}),await t(`they are never marked, clipped or copied`,async()=>{u(r.hasAttribute(`overflowing`)).toBe(!1),u(i.hasAttribute(`overflowing`)).toBe(!1),u(a(n).querySelectorAll(`.menu > :not(cosmoz-tab-next)`).length).toBe(0)}),await t(`they stay visible however narrow the bar gets`,async()=>{l(e).style.width=`120px`,await d(()=>u(i.getBoundingClientRect().width).toBeGreaterThan(0)),u(r.getBoundingClientRect().width).toBeGreaterThan(0)})}},m={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <!-- after the first tab, so auto-assignment would say "stats" -->
                <div class="pinned" slot="tabs">Orders</div>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=c(e),r=n.querySelector(`.pinned`);await d(()=>u(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0)),await t(`the consumer keeps the slot they asked for`,async()=>{await i(),u(r.getAttribute(`slot`)).toBe(`tabs`)}),await t(`and keeps it across re-renders`,async()=>{n.setAttribute(`variant`,`brand`),l(e).style.width=`200px`,await i(),u(r.getAttribute(`slot`)).toBe(`tabs`)})}},h={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=c(e),r=()=>n.querySelectorAll(`cosmoz-tab-next[overflowing]`),i=()=>a(n).querySelectorAll(`.menu > cosmoz-tab-next`);await t(`every overflowing tab gets a copy in the menu`,async()=>{await d(()=>u(r().length).toBeGreaterThan(0)),await d(()=>u(i().length).toBe(r().length))}),await t(`a copy keeps the badge and is a vertical tab`,async()=>{let e=a(n).querySelector(`.menu`);u(e.getAttribute(`role`)).toBe(`tablist`),u(e.getAttribute(`aria-orientation`)).toBe(`vertical`),[...i()].forEach(e=>u(e.getAttribute(`role`)).toBe(`tab`)),[...i()].forEach(e=>{let t=n.querySelector(`cosmoz-tab-next[name="${e.getAttribute(`name`)}"]`);u(e.getAttribute(`badge`)).toBe(t?.getAttribute(`badge`)??null)})}),await t(`activating a copy forwards to the original tab`,async()=>{let e=[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1),t=0,r=0;e.addEventListener(`click`,()=>t++),n.parentElement.addEventListener(`click`,()=>r++),[...i()].at(-1).click(),await d(()=>u(t).toBe(1)),u(r).toBe(1)})}},g=`flex: 0 0 90px; width: 90px; overflow: hidden;`,_={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" style=${g} active
                    >Overview</cosmoz-tab-next
                >
                <cosmoz-tab-next name="rows" style=${g}
                    >Invoice rows</cosmoz-tab-next
                >
                <cosmoz-tab-next name="accounting" style=${g}
                    >Accounting</cosmoz-tab-next
                >
                <cosmoz-tab-next name="history" style=${g}
                    >History</cosmoz-tab-next
                >
                <cosmoz-tab-next name="attachments" style=${g}
                    >Attachments</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=c(e),r=()=>a(n).querySelectorAll(`.menu > cosmoz-tab-next`),o=()=>[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1);await d(()=>u(r().length).toBeGreaterThan(0)),await t(`wait for the overflow set to stop moving`,async()=>{let e=-1;await d(async()=>{let t=r().length;await i(),u(r().length).toBe(t),e=t}),u(e).toBeGreaterThan(0)}),await t(`a relabelled tab relabels its copy`,async()=>{o().textContent=`Files`,await d(()=>u([...r()].at(-1)?.textContent?.trim()).toBe(`Files`))}),await t(`a badge added later reaches the copy`,async()=>{o().setAttribute(`badge`,`7`),await d(()=>u([...r()].at(-1)?.getAttribute(`badge`)).toBe(`7`))}),await t(`selecting a tab marks the right copy`,async()=>{o().setAttribute(`active`,``),await d(()=>u([...r()].at(-1)?.hasAttribute(`active`)).toBe(!0))})}},v={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=c(e),r=()=>a(n).querySelectorAll(`.menu > cosmoz-tab-next`);await d(()=>u(r().length).toBeGreaterThan(0));let o=[],l=[];await t(`drop every tab but the first, bar stays mounted`,async()=>{let e=[...n.querySelectorAll(`cosmoz-tab-next`)].slice(1);o=e.map(e=>new WeakRef(e)),l=[...r()].map(e=>new WeakRef(e)),e.forEach(e=>e.remove()),u(o.length).toBeGreaterThan(0),u(l.length).toBeGreaterThan(0),await i(20)}),await t(`the removed tabs are collectable`,async()=>u(await s(o)).toBe(0)),await t(`and so are the menu copies of them`,async()=>u(await s(l)).toBe(0))}},y={render:()=>t`
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
    `,play:async({canvasElement:e,step:t})=>{let n=c(e),r=l(e);await t(`the bar shrinks into the row instead of spilling`,async()=>{await d(()=>u(n.getBoundingClientRect().right).toBeLessThanOrEqual(r.getBoundingClientRect().right+1))}),await t(`and hands the tabs that no longer fit to the menu`,async()=>{await d(()=>u(a(n).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),u(a(n).querySelector(`.more`)?.hasAttribute(`hidden`)).toBe(!1)})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <!-- after the first tab, so auto-assignment would say "stats" -->
                <div class="pinned" slot="tabs">Orders</div>
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      pinned = bar.querySelector('.pinned') as HTMLElement;
    await waitFor(() => expect(bar.querySelectorAll('cosmoz-tab-next[overflowing]').length).toBeGreaterThan(0));
    await step('the consumer keeps the slot they asked for', async () => {
      await settle();
      expect(pinned.getAttribute('slot')).toBe('tabs');
    });
    await step('and keeps it across re-renders', async () => {
      bar.setAttribute('variant', 'brand');
      box(canvasElement).style.width = '200px';
      await settle();
      expect(pinned.getAttribute('slot')).toBe('tabs');
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
      /** each copy mirrors its original badge state. */
      [...copies()].forEach(copy => {
        const original = bar.querySelector(\`cosmoz-tab-next[name="\${copy.getAttribute('name')}"]\`);
        expect(copy.getAttribute('badge')).toBe(original?.getAttribute('badge') ?? null);
      });
    });
    await step('activating a copy forwards to the original tab', async () => {
      const last = [...bar.querySelectorAll('cosmoz-tab-next')].at(-1) as HTMLElement;
      let clicks = 0,
        /** delegated consumers should see only the forwarded click. */
        delegated = 0;
      last.addEventListener('click', () => clicks++);
      (bar.parentElement as HTMLElement).addEventListener('click', () => delegated++);
      ([...copies()].at(-1) as HTMLElement).click();
      await waitFor(() => expect(clicks).toBe(1));
      expect(delegated).toBe(1);
    });
  }
}`,...h.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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

    /** wait out the trigger-induced overflow reshuffle. */
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

    /** light-dom labels can change without attribute updates. */
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 240px; overflow: hidden;">
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
      copies = () => sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next');
    await waitFor(() => expect(copies().length).toBeGreaterThan(0));

    /** keep only weak refs from here. */
    let refs: WeakRef<HTMLElement>[] = [];
    let cloneRefs: WeakRef<HTMLElement>[] = [];
    await step('drop every tab but the first, bar stays mounted', async () => {
      const victims = [...bar.querySelectorAll<HTMLElement>('cosmoz-tab-next')].slice(1);
      refs = victims.map(tab => new WeakRef(tab));
      cloneRefs = [...copies()].map(clone => new WeakRef(clone));
      victims.forEach(tab => tab.remove());
      expect(refs.length).toBeGreaterThan(0);
      expect(cloneRefs.length).toBeGreaterThan(0);
      await settle(20);
    });
    await step('the removed tabs are collectable', async () => expect(await retained(refs)).toBe(0));
    await step('and so are the menu copies of them', async () => expect(await retained(cloneRefs)).toBe(0));
  }
}`,...v.parameters?.docs?.source},description:{story:`removed tabs must not be retained by overflow state.
keeping the bar mounted exposes those leaks.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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

    /**
     * top bars need the tab host to shrink.
     * otherwise it spills instead of overflowing.
     */
    await step('the bar shrinks into the row instead of spilling', async () => {
      await waitFor(() => expect(bar.getBoundingClientRect().right).toBeLessThanOrEqual(row.getBoundingClientRect().right + 1));
    });
    await step('and hands the tabs that no longer fit to the menu', async () => {
      await waitFor(() => expect(sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length).toBeGreaterThan(0));
      expect(sr(bar).querySelector('.more')?.hasAttribute('hidden')).toBe(false);
    });
  }
}`,...y.parameters?.docs?.source}}},b=[`NonTabChildrenAreNeverTreatedAsTabs`,`AnExplicitSlotIsNeverReassigned`,`NextCopiesOverflowingTabsIntoTheMenu`,`CopiesFollowTheirOriginals`,`RemovedTabsAreNotRetained`,`OverflowsWhenTheBarIsAFlexItem`]}))();export{m as AnExplicitSlotIsNeverReassigned,_ as CopiesFollowTheirOriginals,h as NextCopiesOverflowingTabsIntoTheMenu,p as NonTabChildrenAreNeverTreatedAsTabs,y as OverflowsWhenTheBarIsAFlexItem,v as RemovedTabsAreNotRetained,b as __namedExportsOrder,f as default};