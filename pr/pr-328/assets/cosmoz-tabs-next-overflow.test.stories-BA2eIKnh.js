import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-DfeUzwQo.js";import{t as r}from"./next-Dw1w080C.js";import{i,n as a,o,s,t as c}from"./overflow-helpers-CDOjXXIj.js";var l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),r(),a(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Tests/Tabs overflow (next)`},f={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <div class="heading" slot="tabs">Orders</div>
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <div class="stats" slot="stats">1-20 of 87</div>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=n.querySelector(`.heading`),a=n.querySelector(`.stats`);await u(()=>l(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0)),await t(`the component leaves the consumer markup alone`,async()=>{l(r.getAttribute(`slot`)).toBe(`tabs`),l(a.getAttribute(`slot`)).toBe(`stats`)}),await t(`they are never marked, clipped or copied`,async()=>{l(r.hasAttribute(`overflowing`)).toBe(!1),l(a.hasAttribute(`overflowing`)).toBe(!1),l(s(n).querySelectorAll(`.menu > :not(cosmoz-tab-next)`).length).toBe(0)}),await t(`they stay visible however narrow the bar gets`,async()=>{c(e).style.width=`120px`,await u(()=>l(a.getBoundingClientRect().width).toBeGreaterThan(0)),l(r.getBoundingClientRect().width).toBeGreaterThan(0)})}},p={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <!-- explicit assignment: there is no auto-assignment to fight with -->
                <div class="pinned" slot="tabs">Orders</div>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=n.querySelector(`.pinned`);await u(()=>l(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0)),await t(`the consumer keeps the slot they asked for`,async()=>{l(r.getAttribute(`slot`)).toBe(`tabs`)}),await t(`and keeps it across re-renders`,async()=>{n.setAttribute(`variant`,`brand`),c(e).style.width=`200px`,await u(()=>l(r.getAttribute(`slot`)).toBe(`tabs`))})}},m={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>n.querySelectorAll(`cosmoz-tab-next[overflowing]`),a=()=>s(n).querySelectorAll(`.menu > cosmoz-tab-next`);await t(`every overflowing tab gets a copy in the menu`,async()=>{await u(()=>l(r().length).toBeGreaterThan(0)),await u(()=>l(a().length).toBe(r().length))}),await t(`a copy keeps the badge and is a vertical tab`,async()=>{let e=s(n).querySelector(`.menu`);l(e.getAttribute(`role`)).toBe(`tablist`),l(e.getAttribute(`aria-orientation`)).toBe(`vertical`),[...a()].forEach(e=>l(e.getAttribute(`role`)).toBe(`tab`)),[...a()].forEach(e=>{let t=n.querySelector(`cosmoz-tab-next[name="${e.getAttribute(`name`)}"]`);l(e.getAttribute(`badge`)).toBe(t?.getAttribute(`badge`)??null)})}),await t(`activating a copy forwards to the original tab`,async()=>{let e=[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1),t=0,r=0;e.addEventListener(`click`,()=>t++),n.parentElement.addEventListener(`click`,()=>r++),[...a()].at(-1).click(),await u(()=>l(t).toBe(1)),l(r).toBe(1)})}},h=`flex: 0 0 90px; width: 90px; overflow: hidden;`,g={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" style=${h} active
                    >Overview</cosmoz-tab-next
                >
                <cosmoz-tab-next name="rows" style=${h}
                    >Invoice rows</cosmoz-tab-next
                >
                <cosmoz-tab-next name="accounting" style=${h}
                    >Accounting</cosmoz-tab-next
                >
                <cosmoz-tab-next name="history" style=${h}
                    >History</cosmoz-tab-next
                >
                <cosmoz-tab-next name="attachments" style=${h}
                    >Attachments</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>s(n).querySelectorAll(`.menu > cosmoz-tab-next`),a=()=>[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1);await u(()=>l(r().length).toBeGreaterThan(0)),await t(`wait for the overflow set to stop moving`,async()=>{let e=-1;await u(()=>{let t=r().length;return new Promise(n=>{requestAnimationFrame(()=>{l(r().length).toBe(t),e=t,n()})})}),l(e).toBeGreaterThan(0)}),await t(`a relabelled tab relabels its copy`,async()=>{a().textContent=`Files`,await u(()=>l([...r()].at(-1)?.textContent?.trim()).toBe(`Files`))}),await t(`a badge added later reaches the copy`,async()=>{a().setAttribute(`badge`,`7`),await u(()=>l([...r()].at(-1)?.getAttribute(`badge`)).toBe(`7`))}),await t(`selecting a tab marks the right copy`,async()=>{a().setAttribute(`active`,``),await u(()=>l([...r()].at(-1)?.hasAttribute(`active`)).toBe(!0))})}},_={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>s(n).querySelectorAll(`.menu > cosmoz-tab-next`);await u(()=>l(r().length).toBeGreaterThan(0));let a=[],c=[];await t(`drop every tab but the first, bar stays mounted`,async()=>{let e=[...n.querySelectorAll(`cosmoz-tab-next`)].slice(1);a=e.map(e=>new WeakRef(e)),c=[...r()].map(e=>new WeakRef(e)),e.forEach(e=>e.remove()),l(a.length).toBeGreaterThan(0),l(c.length).toBeGreaterThan(0),await u(()=>l([...r()].some(t=>e.includes(t.parentElement.querySelector(`[name="${t.getAttribute(`name`)}"]`)))).toBe(!1))}),await t(`the removed tabs are collectable`,async()=>l(await o(a)).toBe(0)),await t(`and so are the menu copies of them`,async()=>l(await o(c)).toBe(0))}},v={render:()=>t`
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
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=c(e);await t(`the bar shrinks into the row instead of spilling`,async()=>{await u(()=>l(n.getBoundingClientRect().right).toBeLessThanOrEqual(r.getBoundingClientRect().right+1))}),await t(`and hands the tabs that no longer fit to the menu`,async()=>{await u(()=>l(s(n).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),l(s(n).querySelector(`.more`)?.hasAttribute(`hidden`)).toBe(!1)})}},y=[`NonTabChildrenAreNeverTreatedAsTabs`,`AnExplicitSlotIsNeverReassigned`,`NextCopiesOverflowingTabsIntoTheMenu`,`CopiesFollowTheirOriginals`,`RemovedTabsAreNotRetained`,`OverflowsWhenTheBarIsAFlexItem`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <div class="heading" slot="tabs">Orders</div>
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <div class="stats" slot="stats">1-20 of 87</div>
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
    await step('the component leaves the consumer markup alone', async () => {
      // no auto-assignment: the consumer's slot attributes are theirs
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
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <!-- explicit assignment: there is no auto-assignment to fight with -->
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
      expect(pinned.getAttribute('slot')).toBe('tabs');
    });
    await step('and keeps it across re-renders', async () => {
      bar.setAttribute('variant', 'brand');
      box(canvasElement).style.width = '200px';
      await waitFor(() => expect(pinned.getAttribute('slot')).toBe('tabs'));
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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

    /** wait out the overflow set settling: two stable reads a frame apart. */
    await step('wait for the overflow set to stop moving', async () => {
      let count = -1;
      await waitFor(() => {
        const seen = copies().length;
        return new Promise<void>(resolve => {
          requestAnimationFrame(() => {
            expect(copies().length).toBe(seen);
            count = seen;
            resolve();
          });
        });
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
      // the copies of the removed tabs must drop
      await waitFor(() => expect([...copies()].some(clone => victims.includes(clone.parentElement.querySelector(\`[name="\${clone.getAttribute('name')}"]\`) as HTMLElement))).toBe(false));
    });
    await step('the removed tabs are collectable', async () => expect(await retained(refs)).toBe(0));
    await step('and so are the menu copies of them', async () => expect(await retained(cloneRefs)).toBe(0));
  }
}`,..._.parameters?.docs?.source},description:{story:`removed tabs must not be retained by overflow state.
keeping the bar mounted exposes those leaks.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}}})))()}b();export{p as AnExplicitSlotIsNeverReassigned,g as CopiesFollowTheirOriginals,m as NextCopiesOverflowingTabsIntoTheMenu,f as NonTabChildrenAreNeverTreatedAsTabs,v as OverflowsWhenTheBarIsAFlexItem,_ as RemovedTabsAreNotRetained,y as __namedExportsOrder,d as default};