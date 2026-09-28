import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-Cdvi9uWS.js";import{t as r}from"./cosmoz-tabs-v3YGL7cr.js";import{a as i,d as a,f as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,t as m}from"./overflow-helpers-CEAflxvQ.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{n(),r(),s(),{expect:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Tests/Tabs overflow`},v={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await t(`tabs that do not fit are clipped and menued`,async()=>{await g(()=>h(u(n).length).toBeGreaterThan(0)),await g(()=>h(a(n).length).toBe(u(n).length))}),await t(`the menu rows are the clipped tabs, in tab order`,async()=>{let e=[...u(n)].map(e=>e.textContent?.trim()),t=[...a(n)].map(e=>e.textContent?.trim());h(t).toEqual(e)}),await t(`the trigger is shown`,async()=>{h(d(n).hasAttribute(`hidden`)).toBe(!1)})}},y={render:()=>p(`900px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await t(`no tab is clipped`,async()=>{await g(()=>h(f(n).querySelectorAll(`.items > .tab`).length).toBe(5)),await g(()=>h(u(n).length).toBe(0))}),await t(`the trigger is hidden`,async()=>{await g(()=>h(d(n).hasAttribute(`hidden`)).toBe(!0)),h(getComputedStyle(d(n)).display).toBe(`none`)})}},b={render:()=>p(`900px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(u(n).length).toBe(0)),await t(`narrowing pushes tabs into the menu`,async()=>{m(e).style.width=`240px`,await g(()=>h(a(n).length).toBeGreaterThan(0))}),await t(`widening brings them back`,async()=>{m(e).style.width=`900px`,await g(()=>h(a(n).length).toBe(0)),h(u(n).length).toBe(0)})}},x={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(a(n).length).toBeGreaterThan(0)),await t(`activating the last menu row selects that tab`,async()=>{[...a(n)].at(-1).click(),await g(()=>h(n.selected).toBe(`attachments`)),await g(()=>h(e.querySelector(`cosmoz-tab[name="attachments"]`)?.hasAttribute(`is-selected`)).toBe(!0))}),await t(`the trigger marks that the selection is in there`,async()=>{await g(()=>h(d(n).hasAttribute(`data-active`)).toBe(!0))})}},S={render:()=>p(`260px`,t`<cosmoz-tab name="secret" heading="Secret" hidden></cosmoz-tab>`),play:async({canvasElement:e,step:t})=>{let n=i(e);await t(`a hidden tab is neither clipped nor menued`,async()=>{await g(()=>h(a(n).length).toBeGreaterThan(0));let e=[...a(n),...u(n)].map(e=>e.textContent?.trim());h(e).not.toContain(`Secret`)})}},C={render:()=>t`
        <div class="host" style="display: none;">
            <div class="box" style="width: 240px; overflow: hidden;">
                <cosmoz-tabs variant="underline">
                    <cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
                    <cosmoz-tab name="history" heading="History"></cosmoz-tab>
                    <cosmoz-tab name="attachments" heading="Attachments"></cosmoz-tab>
                </cosmoz-tabs>
            </div>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`.host`),r=i(e);await t(`mounted inside a hidden container, nothing overflows`,async()=>{await g(()=>h(f(r).querySelectorAll(`.items > .tab`).length).toBe(5)),await o(),h(a(r).length).toBe(0)}),await t(`once revealed, no tab is stranded`,async()=>{n.style.display=``,await g(()=>h(a(r).length).toBeGreaterThan(0)),await g(()=>h(c(r)).toBe(5))})}},w={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>f(n).querySelector(`.more`);await g(()=>h(a(n).length).toBeGreaterThan(0)),await t(`open the menu`,async()=>{l(n).click(),await g(()=>h(r().opened).toBe(!0))}),await t(`widening past the overflow closes it`,async()=>{m(e).style.width=`900px`,await g(()=>h(a(n).length).toBe(0)),await g(()=>h(r().opened).toBeFalsy())}),await t(`narrowing back does not reopen it`,async()=>{m(e).style.width=`260px`,await g(()=>h(a(n).length).toBeGreaterThan(0)),h(r().opened).toBeFalsy()})}},T={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(a(n).length).toBeGreaterThan(0)),l(n).click(),await t(`Enter on a focused row selects that tab`,async()=>{let e=[...a(n)].at(-1);e.focus(),e.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,composed:!0})),await g(()=>h(n.selected).toBe(`attachments`))})}},E={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>l(n);await g(()=>h(a(n).length).toBeGreaterThan(0)),await t(`activating a row hands focus back to the trigger`,async()=>{r().click(),await g(()=>h(r().getAttribute(`aria-expanded`)).toBe(`true`)),[...a(n)].at(-1).click(),await g(()=>h(f(n).activeElement).toBe(r())),h(r().getAttribute(`aria-expanded`)).toBe(`false`)})}},D={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(a(n).length).toBeGreaterThan(0)),l(n).click();let r=()=>[...a(n)],o=f(n).querySelector(`.menu`),s=()=>r().indexOf(f(n).activeElement),c=(e,t)=>t.dispatchEvent(new KeyboardEvent(`keydown`,{key:e,bubbles:!0,composed:!0})),u=r().length-1;await t(`up from nothing lands on the last row, not the one before it`,()=>{c(`ArrowUp`,o),h(s()).toBe(u)}),await t(`down wraps from the last row to the first`,()=>{c(`ArrowDown`,r()[u]),h(s()).toBe(0)}),await t(`up wraps from the first row to the last`,()=>{c(`ArrowUp`,r()[0]),h(s()).toBe(u)})}},O={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);n.setAttribute(`variant`,`segmented`),n.setAttribute(`compact-width`,``),await t(`the track hugs its tabs but stops at its box`,async()=>{await g(()=>h(u(n).length).toBeGreaterThan(0));let t=f(n).querySelector(`.tabs`);h(t.getBoundingClientRect().width).toBeLessThanOrEqual(m(e).getBoundingClientRect().width)}),await t(`every tab is still reachable`,async()=>{await g(()=>h(c(n)).toBe(5))}),await t(`the trigger sits inside the track`,async()=>{let e=f(n).querySelector(`.tabs`).getBoundingClientRect(),t=l(n).getBoundingClientRect();h(t.right).toBeLessThanOrEqual(e.right+1),h(t.left).toBeGreaterThanOrEqual(e.left-1)})}},k={render:()=>p(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(d(n).hasAttribute(`hidden`)).toBe(!1));for(let e of[`underline`,`brand`,`segmented`])await t(`${e}: trigger and tab share the sm box`,async()=>{n.setAttribute(`variant`,e),n.setAttribute(`size`,`sm`),await o();let t=getComputedStyle(f(n).querySelector(`.items > .tab`)),r=getComputedStyle(l(n));h(r.paddingTop).toBe(t.paddingTop),h(r.paddingBottom).toBe(t.paddingBottom),h(r.paddingLeft).toBe(t.paddingLeft)})}},A=[`CollectsOverflowingTabs`,`NoMenuWhenEverythingFits`,`ResizeMovesTabsInAndOutOfTheMenu`,`MenuRowSelectsTab`,`HiddenTabsAreNotInTheMenu`,`EveryTabIsReachableAfterBeingRevealed`,`MenuClosesWhenNothingOverflowsAnyMore`,`MenuRowsActivateFromTheKeyboard`,`FocusReturnsToTheTriggerOnClose`,`ArrowKeysWrapThroughTheMenu`,`SegmentedCompactTrackStillOverflows`,`SmallSizeTrimsTheTriggerLikeTheTabs`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    await step('tabs that do not fit are clipped and menued', async () => {
      await waitFor(() => expect(clipped(tabs).length).toBeGreaterThan(0));
      await waitFor(() => expect(rows(tabs).length).toBe(clipped(tabs).length));
    });
    await step('the menu rows are the clipped tabs, in tab order', async () => {
      const clippedNames = [...clipped(tabs)].map(el => el.textContent?.trim());
      const rowNames = [...rows(tabs)].map(el => el.textContent?.trim());
      expect(rowNames).toEqual(clippedNames);
    });
    await step('the trigger is shown', async () => {
      expect(more(tabs).hasAttribute('hidden')).toBe(false);
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => fixture('900px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    await step('no tab is clipped', async () => {
      await waitFor(() => expect(sr(tabs).querySelectorAll('.items > .tab').length).toBe(5));
      await waitFor(() => expect(clipped(tabs).length).toBe(0));
    });
    await step('the trigger is hidden', async () => {
      await waitFor(() => expect(more(tabs).hasAttribute('hidden')).toBe(true));
      expect(getComputedStyle(more(tabs)).display).toBe('none');
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => fixture('900px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    await waitFor(() => expect(clipped(tabs).length).toBe(0));
    await step('narrowing pushes tabs into the menu', async () => {
      box(canvasElement).style.width = '240px';
      await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
    });
    await step('widening brings them back', async () => {
      box(canvasElement).style.width = '900px';
      await waitFor(() => expect(rows(tabs).length).toBe(0));
      expect(clipped(tabs).length).toBe(0);
    });
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement) as HTMLElement & {
      selected?: string;
    };
    await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
    await step('activating the last menu row selects that tab', async () => {
      const row = [...rows(tabs)].at(-1) as HTMLElement;
      row.click();
      await waitFor(() => expect(tabs.selected).toBe('attachments'));
      await waitFor(() => expect(canvasElement.querySelector('cosmoz-tab[name="attachments"]')?.hasAttribute('is-selected')).toBe(true));
    });
    await step('the trigger marks that the selection is in there', async () => {
      await waitFor(() => expect(more(tabs).hasAttribute('data-active')).toBe(true));
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px', html\`<cosmoz-tab name="secret" heading="Secret" hidden></cosmoz-tab>\`),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    await step('a hidden tab is neither clipped nor menued', async () => {
      await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
      const names = [...rows(tabs), ...clipped(tabs)].map(el => el.textContent?.trim());
      expect(names).not.toContain('Secret');
    });
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="host" style="display: none;">
            <div class="box" style="width: 240px; overflow: hidden;">
                <cosmoz-tabs variant="underline">
                    <cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
                    <cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
                    <cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
                    <cosmoz-tab name="history" heading="History"></cosmoz-tab>
                    <cosmoz-tab name="attachments" heading="Attachments"></cosmoz-tab>
                </cosmoz-tabs>
            </div>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const host = canvasElement.querySelector('.host') as HTMLElement,
      tabs = legacy(canvasElement);
    await step('mounted inside a hidden container, nothing overflows', async () => {
      await waitFor(() => expect(sr(tabs).querySelectorAll('.items > .tab').length).toBe(5));
      /** make sure the hidden-state report really happened. */
      await settle();
      expect(rows(tabs).length).toBe(0);
    });

    /** inactive outer tabs trigger this in real views. */
    await step('once revealed, no tab is stranded', async () => {
      host.style.display = '';
      await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
      await waitFor(() => expect(reachable(tabs)).toBe(5));
    });
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement),
      dropdown = () => sr(tabs).querySelector('.more') as HTMLElement & {
        opened?: boolean;
      };
    await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
    await step('open the menu', async () => {
      trigger(tabs).click();
      await waitFor(() => expect(dropdown().opened).toBe(true));
    });

    /** avoid empty popovers after the menu disappears. */
    await step('widening past the overflow closes it', async () => {
      box(canvasElement).style.width = '900px';
      await waitFor(() => expect(rows(tabs).length).toBe(0));
      await waitFor(() => expect(dropdown().opened).toBeFalsy());
    });
    await step('narrowing back does not reopen it', async () => {
      box(canvasElement).style.width = '260px';
      await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
      expect(dropdown().opened).toBeFalsy();
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement) as HTMLElement & {
      selected?: string;
    };
    await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
    trigger(tabs).click();
    await step('Enter on a focused row selects that tab', async () => {
      const row = [...rows(tabs)].at(-1) as HTMLElement;
      row.focus();
      row.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        composed: true
      }));
      await waitFor(() => expect(tabs.selected).toBe('attachments'));
    });
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement),
      button = () => trigger(tabs);
    await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
    await step('activating a row hands focus back to the trigger', async () => {
      button().click();
      await waitFor(() => expect(button().getAttribute('aria-expanded')).toBe('true'));
      ([...rows(tabs)].at(-1) as HTMLElement).click();
      await waitFor(() => expect(sr(tabs).activeElement).toBe(button()));
      expect(button().getAttribute('aria-expanded')).toBe('false');
    });
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
    trigger(tabs).click();
    const items = () => [...rows(tabs)] as HTMLElement[],
      menu = sr(tabs).querySelector('.menu') as HTMLElement,
      focused = () => items().indexOf(sr(tabs).activeElement as HTMLElement),
      press = (key: string, from: HTMLElement) => from.dispatchEvent(new KeyboardEvent('keydown', {
        key,
        bubbles: true,
        composed: true
      }));
    const last = items().length - 1;

    /** the menu itself means no row is focused yet. */
    await step('up from nothing lands on the last row, not the one before it', () => {
      press('ArrowUp', menu);
      expect(focused()).toBe(last);
    });
    await step('down wraps from the last row to the first', () => {
      press('ArrowDown', items()[last]);
      expect(focused()).toBe(0);
    });
    await step('up wraps from the first row to the last', () => {
      press('ArrowUp', items()[0]);
      expect(focused()).toBe(last);
    });
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    tabs.setAttribute('variant', 'segmented');
    tabs.setAttribute('compact-width', '');
    await step('the track hugs its tabs but stops at its box', async () => {
      await waitFor(() => expect(clipped(tabs).length).toBeGreaterThan(0));
      const track = sr(tabs).querySelector('.tabs') as HTMLElement;
      expect(track.getBoundingClientRect().width).toBeLessThanOrEqual(box(canvasElement).getBoundingClientRect().width);
    });
    await step('every tab is still reachable', async () => {
      await waitFor(() => expect(reachable(tabs)).toBe(5));
    });
    await step('the trigger sits inside the track', async () => {
      const track = (sr(tabs).querySelector('.tabs') as HTMLElement).getBoundingClientRect();
      const button = trigger(tabs).getBoundingClientRect();
      expect(button.right).toBeLessThanOrEqual(track.right + 1);
      expect(button.left).toBeGreaterThanOrEqual(track.left - 1);
    });
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    await waitFor(() => expect(more(tabs).hasAttribute('hidden')).toBe(false));
    for (const variant of ['underline', 'brand', 'segmented']) {
      await step(\`\${variant}: trigger and tab share the sm box\`, async () => {
        tabs.setAttribute('variant', variant);
        tabs.setAttribute('size', 'sm');
        await settle();
        const tab = getComputedStyle(sr(tabs).querySelector('.items > .tab') as HTMLElement),
          button = getComputedStyle(trigger(tabs));
        expect(button.paddingTop).toBe(tab.paddingTop);
        expect(button.paddingBottom).toBe(tab.paddingBottom);
        expect(button.paddingLeft).toBe(tab.paddingLeft);
      });
    }
  }
}`,...k.parameters?.docs?.source}}}})))()}j();export{D as ArrowKeysWrapThroughTheMenu,v as CollectsOverflowingTabs,C as EveryTabIsReachableAfterBeingRevealed,E as FocusReturnsToTheTriggerOnClose,S as HiddenTabsAreNotInTheMenu,w as MenuClosesWhenNothingOverflowsAnyMore,x as MenuRowSelectsTab,T as MenuRowsActivateFromTheKeyboard,y as NoMenuWhenEverythingFits,b as ResizeMovesTabsInAndOutOfTheMenu,O as SegmentedCompactTrackStillOverflows,k as SmallSizeTrimsTheTriggerLikeTheTabs,A as __namedExportsOrder,_ as default};