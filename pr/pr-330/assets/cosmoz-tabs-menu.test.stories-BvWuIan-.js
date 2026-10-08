import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-CKiHJFd3.js";import{i as r,n as i,t as a}from"./next-owEVcXu7.js";import{a as o,c as s,i as c,l,n as u,o as d}from"./overflow-helpers-H9kiIusL.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),a(),i(),u(),{expect:f,waitFor:p}=__STORYBOOK_MODULE_TEST__,m={title:`Tests/Overflow menu`},h=()=>o(`260px`),g=e=>[...s(e).querySelectorAll(`.menu > cosmoz-tab-next`)],_=async e=>{l(e).click(),await p(()=>f(s(e).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!0))},v={render:h,play:async({canvasElement:e,step:t})=>{let n=c(e);await d(2),await p(()=>f(g(n).length).toBeGreaterThan(0)),await _(n);let r=[...s(n).querySelectorAll(`.menu > cosmoz-tab-next`)].at(-1)?.getAttribute(`name`),i=n.querySelector(`[name="${r}"]`),a=[...g(n)].at(-1);await t(`focus the last menu row`,async()=>{a.focus(),f(s(n).activeElement).toBe(a)}),await t(`a badge lands on the copy without replacing it`,async()=>{i.setAttribute(`badge`,`9`),await p(()=>f(a.getAttribute(`badge`)).toBe(`9`)),f(g(n).includes(a)).toBe(!0),f(a.isConnected).toBe(!0)}),await t(`and the row still has focus`,async()=>f(s(n).activeElement).toBe(a)),await t(`a relabel also lands in place`,async()=>{i.textContent=`Files`,await p(()=>f(a.textContent?.trim()).toBe(`Files`)),f(g(n).includes(a)).toBe(!0),f(s(n).activeElement).toBe(a)})}},y={render:h,play:async({canvasElement:e,step:t})=>{let n=c(e),r=()=>l(n).textContent?.trim();await d(2),await p(()=>f(g(n).length).toBeGreaterThan(0)),await t(`defaults to a label without the call site asking`,async()=>{f(r()).toBe(`More`)}),await t(`the attribute overrides it`,async()=>{n.setAttribute(`more-label`,`Mer`),await p(()=>f(r()).toBe(`Mer`))}),await t(`and so does the property`,async()=>{n.removeAttribute(`more-label`),n.moreLabel=`Fler`,await p(()=>f(r()).toBe(`Fler`))})}},b=()=>t`
    <div class="box" style="width: 260px; overflow: hidden;">
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next
                name="overview"
                active
                style="width: 90px; flex: 0 0 90px"
                >Overview</cosmoz-tab-next
            >
            <cosmoz-tab-next name="rows" style="width: 110px; flex: 0 0 110px"
                >Invoice rows</cosmoz-tab-next
            >
            <cosmoz-tab-next name="accounting" style="width: 100px; flex: 0 0 100px"
                >Accounting</cosmoz-tab-next
            >
            <cosmoz-tab-next name="history" style="width: 80px; flex: 0 0 80px"
                >History</cosmoz-tab-next
            >
            <cosmoz-tab-next name="off" disabled style="width: 110px; flex: 0 0 110px"
                >Off</cosmoz-tab-next
            >
        </cosmoz-tabs-next>
    </div>
`,x={render:b,play:async({canvasElement:e,step:t})=>{let n=c(e);await d(2),await p(()=>f(g(n).length).toBeGreaterThan(0));let r=()=>g(n).find(e=>e.hasAttribute(`disabled`)),i=()=>g(n).find(e=>!e.hasAttribute(`disabled`));await t(`a disabled copy is skipped and announced`,async()=>{f(r()?.getAttribute(`tabindex`)).toBe(`-1`),f(r()?.getAttribute(`aria-disabled`)).toBe(`true`)}),await t(`an enabled copy is not announced disabled`,async()=>f(i()?.hasAttribute(`aria-disabled`)).toBe(!1)),await t(`every enabled row is a tab stop`,async()=>{let e=g(n).filter(e=>e.getAttribute(`tabindex`)===`0`);f(e.length).toBe(g(n).length-1),f(e.every(e=>!e.hasAttribute(`disabled`))).toBe(!0)}),await t(`and disabled follows the tab, not just the copy`,async()=>{n.querySelector(`[name=off]`).removeAttribute(`disabled`),await p(()=>f(g(n).find(e=>e.getAttribute(`name`)===`off`)?.hasAttribute(`aria-disabled`)).toBe(!1)),f(g(n).filter(e=>e.getAttribute(`tabindex`)===`0`).length).toBe(g(n).length)})}},S={render:h,play:async({canvasElement:e,step:t})=>{let n=c(e);await d(2),await p(()=>f(g(n).length).toBeGreaterThan(0));let r=g(n).at(-1),i=n.querySelector(`[name=${r.getAttribute(`name`)}]`),a;i.addEventListener(`click`,e=>a=e),await t(`a modified click stays modified`,async()=>{r.dispatchEvent(new MouseEvent(`click`,{bubbles:!0,composed:!0,ctrlKey:!0})),await p(()=>f(a?.ctrlKey).toBe(!0))}),await t(`and leaves the menu open, having selected nothing`,async()=>f(s(n).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!1)),await t(`a plain click arrives plain`,async()=>{a=void 0,r.click(),await p(()=>f(a).toBeTruthy()),f(a?.ctrlKey).toBe(!1),f(a?.button).toBe(0)}),await t(`cancelling the forward cancels the copy too`,async()=>{i.addEventListener(`click`,e=>e.preventDefault());let e=new MouseEvent(`click`,{bubbles:!0,composed:!0,cancelable:!0});r.dispatchEvent(e),await p(()=>f(e.defaultPrevented).toBe(!0))})}},C={render:h,play:async({canvasElement:e,step:t})=>{let n=c(e);await d(2),await p(()=>f(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0));let r=n.querySelector(`cosmoz-tab-next[overflowing]`);await t(`re-slotting it out of the bar clears the mark`,async()=>{r.setAttribute(`slot`,`stats`),await p(()=>f(r.hasAttribute(`overflowing`)).toBe(!1)),f(getComputedStyle(r).visibility).not.toBe(`hidden`)}),await t(`removing one from the DOM clears it too`,async()=>{let e=n.querySelector(`cosmoz-tab-next[overflowing]`);e.remove(),await p(()=>f(e.hasAttribute(`overflowing`)).toBe(!1))})}},w={render:()=>t`
        <div class="box" style="width: 500px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="a" active style="flex:0 0 48%;width:48%"
                    >Wide tab A</cosmoz-tab-next
                >
                <cosmoz-tab-next name="b" style="flex:0 0 48%;width:48%"
                    >Wide tab B</cosmoz-tab-next
                >
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`.box`),r=c(e).querySelector(`[name=b]`);await t(`a wide tab that does not fit is marked`,async()=>{n.style.width=`340px`,await p(()=>f(r.hasAttribute(`overflowing`)).toBe(!0))}),await t(`room for it brings it back`,async()=>{n.style.width=`500px`,await d(),await p(()=>f(r.hasAttribute(`overflowing`)).toBe(!1))})}},T={render:()=>t`<div class="box">
            <cosmoz-tabs-next>
                ${r({tabs:[{name:`x`,title:`Tab X`,badge:``},{name:`y`,title:`Tab Y`,badge:`3`}],active:{name:`x`,title:`Tab X`},onActivate:()=>void 0})}
            </cosmoz-tabs-next>
        </div>`,play:async({canvasElement:e,step:t})=>{let n=c(e),r=e=>s(n.querySelector(`[name=${e}]`)).querySelector(`.badge`);await t(`an empty badge renders no badge at all`,async()=>await p(()=>f(r(`x`)).toBe(null))),await t(`a real one still does`,async()=>await p(()=>f(r(`y`)?.textContent?.trim()).toBe(`3`)))}},E=[`AnOpenMenuKeepsFocusWhenATabChanges`,`TheMoreLabelIsTranslatedAndOverridable`,`DisabledRowsAreOutOfTheTabOrder`,`ForwardedClicksKeepTheirMouseSemantics`,`AMarkIsRemovedWhenATabLeavesTheBar`,`AWideTabIsReclassifiedOnResize`,`AnEmptyBadgeRendersNothing`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await pump(2);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    await open(tabs);

    /**
     * pick the overflowing tab at runtime - which tabs overflow is
     * fixture geometry; the behavior (copies follow mutations in
     * place) must not depend on which one it is.
     */
    const name = [...sr(tabs).querySelectorAll('.menu > cosmoz-tab-next')].at(-1)?.getAttribute('name');
    const last = tabs.querySelector(\`[name="\${name}"]\`) as HTMLElement;
    const row = [...copies(tabs)].at(-1) as HTMLElement;
    await step('focus the last menu row', async () => {
      row.focus();
      expect(sr(tabs).activeElement).toBe(row);
    });
    await step('a badge lands on the copy without replacing it', async () => {
      last.setAttribute('badge', '9');
      await waitFor(() => expect(row.getAttribute('badge')).toBe('9'));
      expect(copies(tabs).includes(row)).toBe(true);
      expect(row.isConnected).toBe(true);
    });
    await step('and the row still has focus', async () => expect(sr(tabs).activeElement).toBe(row));
    await step('a relabel also lands in place', async () => {
      last.textContent = 'Files';
      await waitFor(() => expect(row.textContent?.trim()).toBe('Files'));
      expect(copies(tabs).includes(row)).toBe(true);
      expect(sr(tabs).activeElement).toBe(row);
    });
  }
}`,...v.parameters?.docs?.source},description:{story:`menu copies should update in place.
open menus must keep focus during live tab updates.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement),
      label = () => trigger(tabs).textContent?.trim();
    await pump(2);
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
      await waitFor(() => expect(label()).toBe('Fler'));
    });
  }
}`,...y.parameters?.docs?.source},description:{story:`the component owns the default translated label.
property overrides must work too.`,...y.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: withDisabled,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await pump(2);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    const off = () => copies(tabs).find(c => c.hasAttribute('disabled'));
    const on = () => copies(tabs).find(c => !c.hasAttribute('disabled'));
    await step('a disabled copy is skipped and announced', async () => {
      expect(off()?.getAttribute('tabindex')).toBe('-1');
      expect(off()?.getAttribute('aria-disabled')).toBe('true');
    });
    await step('an enabled copy is not announced disabled', async () => expect(on()?.hasAttribute('aria-disabled')).toBe(false));

    /** menu rows are plain tabbable links; disabled rows stay out. */
    await step('every enabled row is a tab stop', async () => {
      const stops = copies(tabs).filter(c => c.getAttribute('tabindex') === '0');
      expect(stops.length).toBe(copies(tabs).length - 1);
      expect(stops.every(c => !c.hasAttribute('disabled'))).toBe(true);
    });
    await step('and disabled follows the tab, not just the copy', async () => {
      const off = tabs.querySelector('[name=off]') as HTMLElement;
      off.removeAttribute('disabled');
      await waitFor(() => expect(copies(tabs).find(c => c.getAttribute('name') === 'off')?.hasAttribute('aria-disabled')).toBe(false));
      /** it joined the walkable rows afterwards. */
      expect(copies(tabs).filter(c => c.getAttribute('tabindex') === '0').length).toBe(copies(tabs).length);
    });
  }
}`,...x.parameters?.docs?.source},description:{story:`disabled rows should not stay in the tab order.
they still need aria because they are custom elements.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await pump(2);
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
      await waitFor(() => expect(seen?.ctrlKey).toBe(true));
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
      await waitFor(() => expect(own.defaultPrevented).toBe(true));
    });
  }
}`,...S.parameters?.docs?.source},description:{story:`forwarded clicks should keep mouse modifiers.
consumers must be able to cancel clone navigation.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await pump(2);
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
}`,...C.parameters?.docs?.source},description:{story:`remove our hidden mark when a tab leaves the bar.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 500px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="a" active style="flex:0 0 48%;width:48%"
                    >Wide tab A</cosmoz-tab-next
                >
                <cosmoz-tab-next name="b" style="flex:0 0 48%;width:48%"
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
      b = tabs.querySelector('[name=b]') as HTMLElement;
    await step('a wide tab that does not fit is marked', async () => {
      boxEl.style.width = '340px';
      await waitFor(() => expect(b.hasAttribute('overflowing')).toBe(true));
    });
    await step('room for it brings it back', async () => {
      boxEl.style.width = '500px';
      // the re-entry's crossing rides a compositor frame; a runner
      // produces none idle - poke it
      await pump();
      await waitFor(() => expect(b.hasAttribute('overflowing')).toBe(false));
    });
  }
}`,...w.parameters?.docs?.source},description:{story:`the layout itself classifies: a tab wraps the moment it does not fit,
and a width change is taken fresh. 48% tabs plus the flex gap overflow
under any track below 400px and fit above it, canvas-size
independent.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
    const badgeOf = (name: string) => sr(tabs.querySelector(\`[name=\${name}]\`) as HTMLElement).querySelector('.badge');
    await step('an empty badge renders no badge at all', async () => await waitFor(() => expect(badgeOf('x')).toBe(null)));
    await step('a real one still does', async () => await waitFor(() => expect(badgeOf('y')?.textContent?.trim()).toBe('3')));
  }
}`,...T.parameters?.docs?.source},description:{story:`empty badge attributes become boolean true in pion.
render tabs should omit them instead.`,...T.parameters?.docs?.description}}}})))()}D();export{C as AMarkIsRemovedWhenATabLeavesTheBar,w as AWideTabIsReclassifiedOnResize,T as AnEmptyBadgeRendersNothing,v as AnOpenMenuKeepsFocusWhenATabChanges,x as DisabledRowsAreOutOfTheTabOrder,S as ForwardedClicksKeepTheirMouseSemantics,y as TheMoreLabelIsTranslatedAndOverridable,E as __namedExportsOrder,m as default};