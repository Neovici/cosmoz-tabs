import{i as e}from"./preload-helper-usAeo7Bx.js";import{J as t,Y as n}from"./iframe-T0BedWGr.js";import{i as r,n as i,t as a}from"./next-B0L137RR.js";import{d as o,f as s,i as c,p as l,s as u}from"./overflow-helpers-CwlYrfFd.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{n(),a(),i(),c(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Tests/Overflow menu`},m=()=>t`
    <div class="box" style="width: 240px; overflow: hidden;">
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
            <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
            <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,h=e=>[...s(e).querySelectorAll(`.menu > cosmoz-tab-next`)],g=async e=>{l(e).click(),await f(()=>d(s(e).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!0))},_={render:m,play:async({canvasElement:e,step:t})=>{let n=u(e);await f(()=>d(h(n).length).toBeGreaterThan(0)),await g(n);let r=[...n.querySelectorAll(`cosmoz-tab-next`)].pop(),i=h(n).at(-1);await t(`focus the last menu row`,async()=>{i.focus(),d(s(n).activeElement).toBe(i)}),await t(`a badge lands on the copy without replacing it`,async()=>{r.setAttribute(`badge`,`9`),await f(()=>d(h(n).at(-1)?.getAttribute(`badge`)).toBe(`9`)),d(h(n).at(-1)).toBe(i),d(i.isConnected).toBe(!0)}),await t(`and the row still has focus`,async()=>d(s(n).activeElement).toBe(i)),await t(`a relabel also lands in place`,async()=>{r.textContent=`Files`,await f(()=>d(h(n).at(-1)?.textContent?.trim()).toBe(`Files`)),d(h(n).at(-1)).toBe(i),d(s(n).activeElement).toBe(i)})}},v={render:m,play:async({canvasElement:e,step:t})=>{let n=u(e),r=()=>l(n).textContent?.trim();await f(()=>d(h(n).length).toBeGreaterThan(0)),await t(`defaults to a label without the call site asking`,async()=>{d(r()).toBe(`More`)}),await t(`the attribute overrides it`,async()=>{n.setAttribute(`more-label`,`Mer`),await f(()=>d(r()).toBe(`Mer`))}),await t(`and so does the property`,async()=>{n.removeAttribute(`more-label`),n.moreLabel=`Fler`,await o(),d(r()).toBe(`Fler`)})}},y=()=>t`
    <div class="box" style="width: 240px; overflow: hidden;">
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
            <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
            <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            <cosmoz-tab-next name="attachments" disabled>Attachments</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,b={render:y,play:async({canvasElement:e,step:t})=>{let n=u(e);await f(()=>d(h(n).length).toBeGreaterThan(0));let r=()=>h(n).find(e=>e.hasAttribute(`disabled`)),i=()=>h(n).find(e=>!e.hasAttribute(`disabled`));await t(`a disabled copy is skipped and announced`,async()=>{d(r()?.getAttribute(`tabindex`)).toBe(`-1`),d(r()?.getAttribute(`aria-disabled`)).toBe(`true`)}),await t(`an enabled copy is not announced disabled`,async()=>d(i()?.hasAttribute(`aria-disabled`)).toBe(!1)),await t(`exactly one row is tabbable`,async()=>{let e=h(n).filter(e=>e.getAttribute(`tabindex`)===`0`);d(e.length).toBe(1),d(e[0].hasAttribute(`disabled`)).toBe(!1)}),await t(`and disabled follows the tab, not just the copy`,async()=>{n.querySelector(`[name=attachments]`).removeAttribute(`disabled`),await f(()=>d(h(n).find(e=>e.getAttribute(`name`)===`attachments`)?.hasAttribute(`aria-disabled`)).toBe(!1)),d(h(n).filter(e=>e.getAttribute(`tabindex`)===`0`).length).toBe(1)})}},x={render:m,play:async({canvasElement:e,step:t})=>{let n=u(e);await f(()=>d(h(n).length).toBeGreaterThan(0));let r=h(n).at(-1),i=n.querySelector(`[name=${r.getAttribute(`name`)}]`),a;i.addEventListener(`click`,e=>a=e),await t(`a modified click stays modified`,async()=>{r.dispatchEvent(new MouseEvent(`click`,{bubbles:!0,composed:!0,ctrlKey:!0})),await o(4),d(a?.ctrlKey).toBe(!0)}),await t(`and leaves the menu open, having selected nothing`,async()=>d(s(n).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!1)),await t(`a plain click arrives plain`,async()=>{a=void 0,r.click(),await f(()=>d(a).toBeTruthy()),d(a?.ctrlKey).toBe(!1),d(a?.button).toBe(0)}),await t(`cancelling the forward cancels the copy too`,async()=>{i.addEventListener(`click`,e=>e.preventDefault());let e=new MouseEvent(`click`,{bubbles:!0,composed:!0,cancelable:!0});r.dispatchEvent(e),await o(4),d(e.defaultPrevented).toBe(!0)})}},S={render:m,play:async({canvasElement:e,step:t})=>{let n=u(e);await f(()=>d(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0));let r=n.querySelector(`cosmoz-tab-next[overflowing]`);await t(`re-slotting it out of the bar clears the mark`,async()=>{r.setAttribute(`slot`,`stats`),await f(()=>d(r.hasAttribute(`overflowing`)).toBe(!1)),d(getComputedStyle(r).visibility).not.toBe(`hidden`)}),await t(`removing one from the DOM clears it too`,async()=>{let e=n.querySelector(`cosmoz-tab-next[overflowing]`);e.remove(),await f(()=>d(e.hasAttribute(`overflowing`)).toBe(!1))})}},C={render:()=>t`
        <div class="box" style="width: 900px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="a" active style="flex:0 0 400px;width:400px"
                    >Wide tab A</cosmoz-tab-next
                >
                <cosmoz-tab-next name="b" style="flex:0 0 400px;width:400px"
                    >Wide tab B</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`.box`),r=u(e),i=r.querySelector(`[name=b]`),a=s(r).querySelector(`.items`),c=()=>i.getBoundingClientRect().right-a.getBoundingClientRect().right;await o(30),await t(`park it just over the tolerance`,async()=>{for(let e=700;e<1e3&&(n.style.width=`${e}px`,await o(2),!(c()>1&&c()<=2));e+=1);await o(30),d(c()).toBeGreaterThan(1),d(i.hasAttribute(`overflowing`)).toBe(!0)}),await t(`a nudge under the tolerance brings it back`,async()=>{n.style.width=`${parseFloat(n.style.width)+1.5}px`,await f(()=>d(i.hasAttribute(`overflowing`)).toBe(!1)),d(c()).toBeLessThanOrEqual(1)})}},w={render:()=>t`<div class="box">
            <cosmoz-tabs-next>
                ${r({tabs:[{name:`x`,title:`Tab X`,badge:``},{name:`y`,title:`Tab Y`,badge:`3`}],active:{name:`x`,title:`Tab X`},onActivate:()=>void 0})}
            </cosmoz-tabs-next>
        </div>`,play:async({canvasElement:e,step:t})=>{let n=u(e);await o(20);let r=e=>s(n.querySelector(`[name=${e}]`)).querySelector(`.badge`);await t(`an empty badge renders no badge at all`,async()=>d(r(`x`)).toBe(null)),await t(`a real one still does`,async()=>d(r(`y`)?.textContent?.trim()).toBe(`3`))}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    await open(tabs);

    /** the last tab can change without reshuffling overflow. */
    const last = [...tabs.querySelectorAll<HTMLElement>('cosmoz-tab-next')].pop() as HTMLElement;
    const row = copies(tabs).at(-1) as HTMLElement;
    await step('focus the last menu row', async () => {
      row.focus();
      expect(sr(tabs).activeElement).toBe(row);
    });
    await step('a badge lands on the copy without replacing it', async () => {
      last.setAttribute('badge', '9');
      await waitFor(() => expect(copies(tabs).at(-1)?.getAttribute('badge')).toBe('9'));
      expect(copies(tabs).at(-1)).toBe(row);
      expect(row.isConnected).toBe(true);
    });
    await step('and the row still has focus', async () => expect(sr(tabs).activeElement).toBe(row));
    await step('a relabel also lands in place', async () => {
      last.textContent = 'Files';
      await waitFor(() => expect(copies(tabs).at(-1)?.textContent?.trim()).toBe('Files'));
      expect(copies(tabs).at(-1)).toBe(row);
      expect(sr(tabs).activeElement).toBe(row);
    });
  }
}`,..._.parameters?.docs?.source},description:{story:`menu copies should update in place.
open menus must keep focus during live tab updates.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement),
      label = () => trigger(tabs).textContent?.trim();
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    await step('defaults to a label without the call site asking', async () => {
      expect(label()).toBe('More');
    });
    await step('the attribute overrides it', async () => {
      tabs.setAttribute('more-label', 'Mer');
      await waitFor(() => expect(label()).toBe('Mer'));
    });
    await step('and so does the property', async () => {
      tabs.removeAttribute('more-label');
      (tabs as HTMLElement & {
        moreLabel?: string;
      }).moreLabel = 'Fler';
      await settle();
      expect(label()).toBe('Fler');
    });
  }
}`,...v.parameters?.docs?.source},description:{story:`the component owns the default translated label.
property overrides must work too.`,...v.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: withDisabled,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    const off = () => copies(tabs).find(c => c.hasAttribute('disabled'));
    const on = () => copies(tabs).find(c => !c.hasAttribute('disabled'));
    await step('a disabled copy is skipped and announced', async () => {
      expect(off()?.getAttribute('tabindex')).toBe('-1');
      expect(off()?.getAttribute('aria-disabled')).toBe('true');
    });
    await step('an enabled copy is not announced disabled', async () => expect(on()?.hasAttribute('aria-disabled')).toBe(false));

    /** a tablist gets one tab stop, not one per row. */
    await step('exactly one row is tabbable', async () => {
      const stops = copies(tabs).filter(c => c.getAttribute('tabindex') === '0');
      expect(stops.length).toBe(1);
      expect(stops[0].hasAttribute('disabled')).toBe(false);
    });
    await step('and disabled follows the tab, not just the copy', async () => {
      const attachments = tabs.querySelector('[name=attachments]') as HTMLElement;
      attachments.removeAttribute('disabled');
      await waitFor(() => expect(copies(tabs).find(c => c.getAttribute('name') === 'attachments')?.hasAttribute('aria-disabled')).toBe(false));
      /** still exactly one tab stop afterwards. */
      expect(copies(tabs).filter(c => c.getAttribute('tabindex') === '0').length).toBe(1);
    });
  }
}`,...b.parameters?.docs?.source},description:{story:`disabled rows should not stay in the tab order.
they still need aria because they are custom elements.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    const row = copies(tabs).at(-1) as HTMLElement;
    const original = tabs.querySelector(\`[name=\${row.getAttribute('name')}]\`) as HTMLElement;
    let seen: MouseEvent | undefined;
    original.addEventListener('click', e => seen = e as MouseEvent);
    await step('a modified click stays modified', async () => {
      row.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        composed: true,
        ctrlKey: true
      }));
      await settle(4);
      expect(seen?.ctrlKey).toBe(true);
    });
    await step('and leaves the menu open, having selected nothing', async () => expect(sr(tabs).querySelector('.more')?.hasAttribute('opened')).toBe(false));
    await step('a plain click arrives plain', async () => {
      seen = undefined;
      row.click();
      await waitFor(() => expect(seen).toBeTruthy());
      expect(seen?.ctrlKey).toBe(false);
      expect(seen?.button).toBe(0);
    });
    await step('cancelling the forward cancels the copy too', async () => {
      original.addEventListener('click', e => e.preventDefault());
      const own = new MouseEvent('click', {
        bubbles: true,
        composed: true,
        cancelable: true
      });
      row.dispatchEvent(own);
      await settle(4);
      expect(own.defaultPrevented).toBe(true);
    });
  }
}`,...x.parameters?.docs?.source},description:{story:`forwarded clicks should keep mouse modifiers.
consumers must be able to cancel clone navigation.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(tabs.querySelectorAll('cosmoz-tab-next[overflowing]').length).toBeGreaterThan(0));
    const victim = tabs.querySelector('cosmoz-tab-next[overflowing]') as HTMLElement;
    await step('re-slotting it out of the bar clears the mark', async () => {
      victim.setAttribute('slot', 'stats');
      await waitFor(() => expect(victim.hasAttribute('overflowing')).toBe(false));
      expect(getComputedStyle(victim).visibility).not.toBe('hidden');
    });
    await step('removing one from the DOM clears it too', async () => {
      const next2 = tabs.querySelector('cosmoz-tab-next[overflowing]') as HTMLElement;
      next2.remove();
      await waitFor(() => expect(next2.hasAttribute('overflowing')).toBe(false));
    });
  }
}`,...S.parameters?.docs?.source},description:{story:`remove our hidden mark when a tab leaves the bar.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 900px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="a" active style="flex:0 0 400px;width:400px"
                    >Wide tab A</cosmoz-tab-next
                >
                <cosmoz-tab-next name="b" style="flex:0 0 400px;width:400px"
                    >Wide tab B</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const boxEl = canvasElement.querySelector('.box') as HTMLElement,
      tabs = next(canvasElement),
      b = tabs.querySelector('[name=b]') as HTMLElement,
      items = sr(tabs).querySelector('.items') as HTMLElement,
      clip = () => b.getBoundingClientRect().right - items.getBoundingClientRect().right;
    await settle(30);
    await step('park it just over the tolerance', async () => {
      for (let w = 700; w < 1000; w += 1) {
        boxEl.style.width = \`\${w}px\`;
        await settle(2);
        if (clip() > 1 && clip() <= 2) {
          break;
        }
      }
      await settle(30);
      expect(clip()).toBeGreaterThan(1);
      expect(b.hasAttribute('overflowing')).toBe(true);
    });
    await step('a nudge under the tolerance brings it back', async () => {
      boxEl.style.width = \`\${parseFloat(boxEl.style.width) + 1.5}px\`;
      await waitFor(() => expect(b.hasAttribute('overflowing')).toBe(false));
      expect(clip()).toBeLessThanOrEqual(1);
    });
  }
}`,...C.parameters?.docs?.source},description:{story:`ratio thresholds miss absolute-pixel tolerance changes.
resize should reclassify wide near-fitting tabs.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="box">
            <cosmoz-tabs-next>
                \${renderTabs({
    tabs: [{
      name: 'x',
      title: 'Tab X',
      badge: ''
    }, {
      name: 'y',
      title: 'Tab Y',
      badge: '3'
    }],
    active: {
      name: 'x',
      title: 'Tab X'
    },
    onActivate: () => undefined
  } as never)}
            </cosmoz-tabs-next>
        </div>\`,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await settle(20);
    const badgeOf = (name: string) => sr(tabs.querySelector(\`[name=\${name}]\`) as HTMLElement).querySelector('.badge');
    await step('an empty badge renders no badge at all', async () => expect(badgeOf('x')).toBe(null));
    await step('a real one still does', async () => expect(badgeOf('y')?.textContent?.trim()).toBe('3'));
  }
}`,...w.parameters?.docs?.source},description:{story:`empty badge attributes become boolean true in pion.
render tabs should omit them instead.`,...w.parameters?.docs?.description}}},T=[`AnOpenMenuKeepsFocusWhenATabChanges`,`TheMoreLabelIsTranslatedAndOverridable`,`DisabledRowsAreOutOfTheTabOrder`,`ForwardedClicksKeepTheirMouseSemantics`,`AMarkIsRemovedWhenATabLeavesTheBar`,`AWideTabIsReclassifiedOnResize`,`AnEmptyBadgeRendersNothing`]}))();export{S as AMarkIsRemovedWhenATabLeavesTheBar,C as AWideTabIsReclassifiedOnResize,w as AnEmptyBadgeRendersNothing,_ as AnOpenMenuKeepsFocusWhenATabChanges,b as DisabledRowsAreOutOfTheTabOrder,x as ForwardedClicksKeepTheirMouseSemantics,v as TheMoreLabelIsTranslatedAndOverridable,T as __namedExportsOrder,p as default};