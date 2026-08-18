import{i as e}from"./preload-helper-usAeo7Bx.js";import{J as t,Y as n}from"./iframe-DOneIXTJ.js";import{t as r}from"./cosmoz-tabs-DL87BdnV.js";import{a as i,c as a,d as o,f as s,i as c,n as l,o as u,p as d,r as f,t as p,u as m}from"./overflow-helpers-Ch4Fn9Sv.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),r(),c(),{expect:h,waitFor:g}=__STORYBOOK_MODULE_TEST__,_={title:`Tests/Tabs overflow`},v={render:()=>f(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await t(`tabs that do not fit are clipped and menued`,async()=>{await g(()=>h(l(n).length).toBeGreaterThan(0)),await g(()=>h(m(n).length).toBe(l(n).length))}),await t(`the menu rows are the clipped tabs, in tab order`,async()=>{let e=[...l(n)].map(e=>e.textContent?.trim());h([...m(n)].map(e=>e.textContent?.trim())).toEqual(e)}),await t(`the trigger is shown`,async()=>{h(u(n).hasAttribute(`hidden`)).toBe(!1)})}},y={render:()=>f(`900px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await t(`no tab is clipped`,async()=>{await g(()=>h(s(n).querySelectorAll(`.items > .tab`).length).toBe(5)),await g(()=>h(l(n).length).toBe(0))}),await t(`the trigger is hidden`,async()=>{await g(()=>h(u(n).hasAttribute(`hidden`)).toBe(!0)),h(getComputedStyle(u(n)).display).toBe(`none`)})}},b={render:()=>f(`900px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(l(n).length).toBe(0)),await t(`narrowing pushes tabs into the menu`,async()=>{p(e).style.width=`240px`,await g(()=>h(m(n).length).toBeGreaterThan(0))}),await t(`widening brings them back`,async()=>{p(e).style.width=`900px`,await g(()=>h(m(n).length).toBe(0)),h(l(n).length).toBe(0)})}},x={render:()=>f(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(m(n).length).toBeGreaterThan(0)),await t(`activating the last menu row selects that tab`,async()=>{[...m(n)].at(-1).click(),await g(()=>h(n.selected).toBe(`attachments`)),await g(()=>h(e.querySelector(`cosmoz-tab[name="attachments"]`)?.hasAttribute(`is-selected`)).toBe(!0))}),await t(`the trigger marks that the selection is in there`,async()=>{await g(()=>h(u(n).hasAttribute(`data-active`)).toBe(!0))})}},S={render:()=>f(`260px`,t`<cosmoz-tab name="secret" heading="Secret" hidden></cosmoz-tab>`),play:async({canvasElement:e,step:t})=>{let n=i(e);await t(`a hidden tab is neither clipped nor menued`,async()=>{await g(()=>h(m(n).length).toBeGreaterThan(0)),h([...m(n),...l(n)].map(e=>e.textContent?.trim())).not.toContain(`Secret`)})}},C={render:()=>t`
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
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`.host`),r=i(e);await t(`mounted inside a hidden container, nothing overflows`,async()=>{await g(()=>h(s(r).querySelectorAll(`.items > .tab`).length).toBe(5)),await o(),h(m(r).length).toBe(0)}),await t(`once revealed, no tab is stranded`,async()=>{n.style.display=``,await g(()=>h(m(r).length).toBeGreaterThan(0)),await g(()=>h(a(r)).toBe(5))})}},w={render:()=>f(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>s(n).querySelector(`.more`);await g(()=>h(m(n).length).toBeGreaterThan(0)),await t(`open the menu`,async()=>{d(n).click(),await g(()=>h(r().opened).toBe(!0))}),await t(`widening past the overflow closes it`,async()=>{p(e).style.width=`900px`,await g(()=>h(m(n).length).toBe(0)),await g(()=>h(r().opened).toBeFalsy())}),await t(`narrowing back does not reopen it`,async()=>{p(e).style.width=`260px`,await g(()=>h(m(n).length).toBeGreaterThan(0)),h(r().opened).toBeFalsy()})}},T={render:()=>f(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(m(n).length).toBeGreaterThan(0)),d(n).click(),await t(`Enter on a focused row selects that tab`,async()=>{let e=[...m(n)].at(-1);e.focus(),e.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,composed:!0})),await g(()=>h(n.selected).toBe(`attachments`))})}},E={render:()=>f(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>d(n);await g(()=>h(m(n).length).toBeGreaterThan(0)),await t(`activating a row hands focus back to the trigger`,async()=>{r().click(),await g(()=>h(r().getAttribute(`aria-expanded`)).toBe(`true`)),[...m(n)].at(-1).click(),await g(()=>h(s(n).activeElement).toBe(r())),h(r().getAttribute(`aria-expanded`)).toBe(`false`)})}},D={render:()=>f(`260px`),play:async({canvasElement:e,step:t})=>{let n=i(e);await g(()=>h(m(n).length).toBeGreaterThan(0)),d(n).click();let r=()=>[...m(n)],a=s(n).querySelector(`.menu`),o=()=>r().indexOf(s(n).activeElement),c=(e,t)=>t.dispatchEvent(new KeyboardEvent(`keydown`,{key:e,bubbles:!0,composed:!0})),l=r().length-1;await t(`up from nothing lands on the last row, not the one before it`,()=>{c(`ArrowUp`,a),h(o()).toBe(l)}),await t(`down wraps from the last row to the first`,()=>{c(`ArrowDown`,r()[l]),h(o()).toBe(0)}),await t(`up wraps from the first row to the last`,()=>{c(`ArrowUp`,r()[0]),h(o()).toBe(l)})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      // make sure the hidden-state report really happened.
      await settle();
      expect(rows(tabs).length).toBe(0);
    });

    // inactive outer tabs trigger this in real views.
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

    // avoid empty popovers after the menu disappears.
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

    // the menu itself means no row is focused yet.
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
}`,...D.parameters?.docs?.source}}},O=[`CollectsOverflowingTabs`,`NoMenuWhenEverythingFits`,`ResizeMovesTabsInAndOutOfTheMenu`,`MenuRowSelectsTab`,`HiddenTabsAreNotInTheMenu`,`EveryTabIsReachableAfterBeingRevealed`,`MenuClosesWhenNothingOverflowsAnyMore`,`MenuRowsActivateFromTheKeyboard`,`FocusReturnsToTheTriggerOnClose`,`ArrowKeysWrapThroughTheMenu`]}))();export{D as ArrowKeysWrapThroughTheMenu,v as CollectsOverflowingTabs,C as EveryTabIsReachableAfterBeingRevealed,E as FocusReturnsToTheTriggerOnClose,S as HiddenTabsAreNotInTheMenu,w as MenuClosesWhenNothingOverflowsAnyMore,x as MenuRowSelectsTab,T as MenuRowsActivateFromTheKeyboard,y as NoMenuWhenEverythingFits,b as ResizeMovesTabsInAndOutOfTheMenu,O as __namedExportsOrder,_ as default};