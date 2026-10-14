import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-LJ3zOmwL.js";import{t as r}from"./next-CZfC2cAk.js";import{c as i,i as a,l as o,n as s,o as c,s as l,t as u}from"./overflow-helpers-ln_FEgkJ.js";var d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),r(),s(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Tests/Tabs overflow (next)`},m={render:()=>t`
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
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=n.querySelector(`.heading`),i=n.querySelector(`.stats`);await c(2),await f(()=>d(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0)),await t(`the component leaves the consumer markup alone`,async()=>{d(r.getAttribute(`slot`)).toBe(`tabs`),d(i.getAttribute(`slot`)).toBe(`stats`)}),await t(`they are never marked, clipped or copied`,async()=>{d(r.hasAttribute(`overflowing`)).toBe(!1),d(i.hasAttribute(`overflowing`)).toBe(!1),d(o(n).querySelectorAll(`.menu > :not(cosmoz-tab-next)`).length).toBe(0)}),await t(`they stay visible however narrow the bar gets`,async()=>{u(e).style.width=`120px`,await f(()=>d(i.getBoundingClientRect().width).toBeGreaterThan(0)),d(r.getBoundingClientRect().width).toBeGreaterThan(0)})}},h={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <!-- explicit assignment: there is no auto-assignment to fight with -->
                <div class="pinned" slot="tabs">Orders</div>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=n.querySelector(`.pinned`);await c(2),await f(()=>d(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0)),await t(`the consumer keeps the slot they asked for`,async()=>{d(r.getAttribute(`slot`)).toBe(`tabs`)}),await t(`and keeps it across re-renders`,async()=>{n.setAttribute(`variant`,`brand`),u(e).style.width=`200px`,await f(()=>d(r.getAttribute(`slot`)).toBe(`tabs`))})}},g={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=()=>n.querySelectorAll(`cosmoz-tab-next[overflowing]`),i=()=>o(n).querySelectorAll(`.menu > cosmoz-tab-next`);await t(`every overflowing tab gets a copy in the menu`,async()=>{await f(()=>d(r().length).toBeGreaterThan(0)),await f(()=>d(i().length).toBe(r().length))}),await t(`a copy keeps the badge and is a vertical tab`,async()=>{let e=o(n).querySelector(`.menu`);d(e.getAttribute(`role`)).toBe(`tablist`),d(e.getAttribute(`aria-orientation`)).toBe(`vertical`),[...i()].forEach(e=>d(e.getAttribute(`role`)).toBe(`tab`)),[...i()].forEach(e=>{let t=n.querySelector(`cosmoz-tab-next[name="${e.getAttribute(`name`)}"]`);d(e.getAttribute(`badge`)).toBe(t?.getAttribute(`badge`)??null)})}),await t(`activating a copy forwards to the original tab`,async()=>{let e=[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1),t=0,r=0;e.addEventListener(`click`,()=>t++),n.parentElement.addEventListener(`click`,()=>r++),[...i()].at(-1).click(),await f(()=>d(t).toBe(1)),d(r).toBe(1)})}},_=`flex: 0 0 90px; width: 90px; overflow: hidden;`,v={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" style=${_} active
                    >Overview</cosmoz-tab-next
                >
                <cosmoz-tab-next name="rows" style=${_}
                    >Invoice rows</cosmoz-tab-next
                >
                <cosmoz-tab-next name="accounting" style=${_}
                    >Accounting</cosmoz-tab-next
                >
                <cosmoz-tab-next name="history" style=${_}
                    >History</cosmoz-tab-next
                >
                <cosmoz-tab-next name="attachments" style=${_}
                    >Attachments</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=()=>o(n).querySelectorAll(`.menu > cosmoz-tab-next`),i=()=>[...n.querySelectorAll(`cosmoz-tab-next`)].at(-1);await c(2),await f(()=>d(r().length).toBeGreaterThan(0)),await t(`wait for the overflow set to stop moving`,async()=>{let e=-1;await f(()=>{let t=r().length;return new Promise(n=>{requestAnimationFrame(()=>{d(r().length).toBe(t),e=t,n()})})}),d(e).toBeGreaterThan(0)}),await t(`a relabelled tab relabels its copy`,async()=>{i().textContent=`Files`,await f(()=>d([...r()].at(-1)?.textContent?.trim()).toBe(`Files`))}),await t(`a badge added later reaches the copy`,async()=>{i().setAttribute(`badge`,`7`),await f(()=>d([...r()].at(-1)?.getAttribute(`badge`)).toBe(`7`))}),await t(`selecting a tab marks the right copy`,async()=>{i().setAttribute(`active`,``),await f(()=>d([...r()].at(-1)?.hasAttribute(`active`)).toBe(!0))})}},y={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=()=>o(n).querySelectorAll(`.menu > cosmoz-tab-next`);await c(2),await f(()=>d(r().length).toBeGreaterThan(0));let i=[],s=[];await t(`drop every tab but the first, bar stays mounted`,async()=>{let e=[...n.querySelectorAll(`cosmoz-tab-next`)].slice(1);i=e.map(e=>new WeakRef(e)),s=[...r()].map(e=>new WeakRef(e)),e.forEach(e=>e.remove()),d(i.length).toBeGreaterThan(0),d(s.length).toBeGreaterThan(0),await f(()=>d([...r()].some(t=>e.includes(t.parentElement.querySelector(`[name="${t.getAttribute(`name`)}"]`)))).toBe(!1))}),await t(`the removed tabs are collectable`,async()=>d(await l(i)).toBe(0)),await t(`and so are the menu copies of them`,async()=>d(await l(s)).toBe(0))}},b={render:()=>t`
        <div class="box" style="width: 360px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline" compact-width>
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="history" href="#!/somewhere"
                    >History</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=n.querySelector(`[name="overview"]`),o=n.querySelector(`[name="rows"]`),s=n.querySelector(`[name="history"]`),c=(e,t,n=`keydown`)=>e.dispatchEvent(new KeyboardEvent(n,{key:t,bubbles:!0}));await t(`an arrow walks the focus and picks nothing`,async()=>{r.focus(),c(r,`ArrowRight`),await i(2),d(document.activeElement).toBe(o),d(o.hasAttribute(`active`)).toBe(!1)}),await t(`Enter picks the focused tab`,async()=>{let e=0;o.addEventListener(`click`,()=>e++),c(o,`Enter`),await i(2),d(e).toBe(1)}),await t(`a Space keyup picks too`,async()=>{let e=0;o.addEventListener(`click`,()=>e++),c(o,` `,`keydown`),c(o,` `,`keyup`),await i(2),d(e).toBe(1)}),await t(`a link tab picks through its link`,async()=>{let e=``,t=t=>{t.preventDefault(),e=t.composedPath().find(e=>e.tagName===`A`)?.getAttribute(`href`)??``};document.addEventListener(`click`,t,{capture:!0,once:!0}),s.focus(),c(s,`Enter`),await i(2),document.removeEventListener(`click`,t,{capture:!0}),d(e).toBe(`#!/somewhere`)})}},x={render:()=>t`
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
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=u(e);await t(`the bar shrinks into the row instead of spilling`,async()=>{await f(()=>d(n.getBoundingClientRect().right).toBeLessThanOrEqual(r.getBoundingClientRect().right+1))}),await t(`and hands the tabs that no longer fit to the menu`,async()=>{await f(()=>d(o(n).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),d(o(n).querySelector(`.more`)?.hasAttribute(`hidden`)).toBe(!1)})}},S=[`NonTabChildrenAreNeverTreatedAsTabs`,`AnExplicitSlotIsNeverReassigned`,`NextCopiesOverflowingTabsIntoTheMenu`,`CopiesFollowTheirOriginals`,`RemovedTabsAreNotRetained`,`TheWalkFocusesAndTheKeysPick`,`OverflowsWhenTheBarIsAFlexItem`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    await pump(2);
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
    await pump(2);
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    await pump(2);
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    await pump(2);
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
}`,...y.parameters?.docs?.source},description:{story:`removed tabs must not be retained by overflow state.
keeping the bar mounted exposes those leaks.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 360px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline" compact-width>
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="history" href="#!/somewhere"
                    >History</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      overview = bar.querySelector('[name="overview"]') as HTMLElement,
      rows = bar.querySelector('[name="rows"]') as HTMLElement,
      history = bar.querySelector('[name="history"]') as HTMLElement,
      fire = (el: HTMLElement, key: string, type = 'keydown') => el.dispatchEvent(new KeyboardEvent(type, {
        key,
        bubbles: true
      }));
    await step('an arrow walks the focus and picks nothing', async () => {
      overview.focus();
      fire(overview, 'ArrowRight');
      await settle(2);
      expect(document.activeElement).toBe(rows);
      expect(rows.hasAttribute('active')).toBe(false);
    });
    await step('Enter picks the focused tab', async () => {
      let picks = 0;
      rows.addEventListener('click', () => picks++);
      fire(rows, 'Enter');
      await settle(2);
      expect(picks).toBe(1);
    });
    await step('a Space keyup picks too', async () => {
      let picks = 0;
      rows.addEventListener('click', () => picks++);
      fire(rows, ' ', 'keydown');
      fire(rows, ' ', 'keyup');
      await settle(2);
      expect(picks).toBe(1);
    });
    await step('a link tab picks through its link', async () => {
      // the pick navigates for real; the storybook page must stay on
      // its own story - cancel the default, keep the pick's evidence
      let href = '';
      const cancel = (e: MouseEvent) => {
        e.preventDefault();
        const link = (e.composedPath() as HTMLElement[]).find(el => el.tagName === 'A');
        href = link?.getAttribute('href') ?? '';
      };
      document.addEventListener('click', cancel, {
        capture: true,
        once: true
      });
      history.focus();
      fire(history, 'Enter');
      await settle(2);
      document.removeEventListener('click', cancel, {
        capture: true
      });
      expect(href).toBe('#!/somewhere');
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{h as AnExplicitSlotIsNeverReassigned,v as CopiesFollowTheirOriginals,g as NextCopiesOverflowingTabsIntoTheMenu,m as NonTabChildrenAreNeverTreatedAsTabs,x as OverflowsWhenTheBarIsAFlexItem,y as RemovedTabsAreNotRetained,b as TheWalkFocusesAndTheKeysPick,S as __namedExportsOrder,p as default};