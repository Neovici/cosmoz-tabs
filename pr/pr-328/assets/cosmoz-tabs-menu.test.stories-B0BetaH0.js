import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-DfeUzwQo.js";import{i as r,n as i,t as a}from"./next-Dw1w080C.js";import{a as o,c as s,i as c,n as l,s as u}from"./overflow-helpers-CDOjXXIj.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),a(),i(),l(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Tests/Overflow menu`},m=()=>o(`260px`),h=e=>[...u(e).querySelectorAll(`.menu > cosmoz-tab-next`)],g=async e=>{s(e).click(),await f(()=>d(u(e).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!0))},_={render:m,play:async({canvasElement:e,step:t})=>{let n=c(e);await f(()=>d(h(n).length).toBeGreaterThan(0)),await g(n);let r=[...u(n).querySelectorAll(`.menu > cosmoz-tab-next`)].at(-1)?.getAttribute(`name`),i=n.querySelector(`[name="${r}"]`),a=[...h(n)].at(-1);await t(`focus the last menu row`,async()=>{a.focus(),d(u(n).activeElement).toBe(a)}),await t(`a badge lands on the copy without replacing it`,async()=>{i.setAttribute(`badge`,`9`),await f(()=>d(a.getAttribute(`badge`)).toBe(`9`)),d(h(n).includes(a)).toBe(!0),d(a.isConnected).toBe(!0)}),await t(`and the row still has focus`,async()=>d(u(n).activeElement).toBe(a)),await t(`a relabel also lands in place`,async()=>{i.textContent=`Files`,await f(()=>d(a.textContent?.trim()).toBe(`Files`)),d(h(n).includes(a)).toBe(!0),d(u(n).activeElement).toBe(a)})}},v={render:m,play:async({canvasElement:e,step:t})=>{let n=c(e),r=()=>s(n).textContent?.trim();await f(()=>d(h(n).length).toBeGreaterThan(0)),await t(`defaults to a label without the call site asking`,async()=>{d(r()).toBe(`More`)}),await t(`the attribute overrides it`,async()=>{n.setAttribute(`more-label`,`Mer`),await f(()=>d(r()).toBe(`Mer`))}),await t(`and so does the property`,async()=>{n.removeAttribute(`more-label`),n.moreLabel=`Fler`,await f(()=>d(r()).toBe(`Fler`))})}},y=()=>t`
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
`,b={render:y,play:async({canvasElement:e,step:t})=>{let n=c(e);await f(()=>d(h(n).length).toBeGreaterThan(0));let r=()=>h(n).find(e=>e.hasAttribute(`disabled`)),i=()=>h(n).find(e=>!e.hasAttribute(`disabled`));await t(`a disabled copy is skipped and announced`,async()=>{d(r()?.getAttribute(`tabindex`)).toBe(`-1`),d(r()?.getAttribute(`aria-disabled`)).toBe(`true`)}),await t(`an enabled copy is not announced disabled`,async()=>d(i()?.hasAttribute(`aria-disabled`)).toBe(!1)),await t(`every enabled row is a tab stop`,async()=>{let e=h(n).filter(e=>e.getAttribute(`tabindex`)===`0`);d(e.length).toBe(h(n).length-1),d(e.every(e=>!e.hasAttribute(`disabled`))).toBe(!0)}),await t(`and disabled follows the tab, not just the copy`,async()=>{n.querySelector(`[name=off]`).removeAttribute(`disabled`),await f(()=>d(h(n).find(e=>e.getAttribute(`name`)===`off`)?.hasAttribute(`aria-disabled`)).toBe(!1)),d(h(n).filter(e=>e.getAttribute(`tabindex`)===`0`).length).toBe(h(n).length)})}},x={render:m,play:async({canvasElement:e,step:t})=>{let n=c(e);await f(()=>d(h(n).length).toBeGreaterThan(0));let r=h(n).at(-1),i=n.querySelector(`[name=${r.getAttribute(`name`)}]`),a;i.addEventListener(`click`,e=>a=e),await t(`a modified click stays modified`,async()=>{r.dispatchEvent(new MouseEvent(`click`,{bubbles:!0,composed:!0,ctrlKey:!0})),await f(()=>d(a?.ctrlKey).toBe(!0))}),await t(`and leaves the menu open, having selected nothing`,async()=>d(u(n).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!1)),await t(`a plain click arrives plain`,async()=>{a=void 0,r.click(),await f(()=>d(a).toBeTruthy()),d(a?.ctrlKey).toBe(!1),d(a?.button).toBe(0)}),await t(`cancelling the forward cancels the copy too`,async()=>{i.addEventListener(`click`,e=>e.preventDefault());let e=new MouseEvent(`click`,{bubbles:!0,composed:!0,cancelable:!0});r.dispatchEvent(e),await f(()=>d(e.defaultPrevented).toBe(!0))})}},S={render:m,play:async({canvasElement:e,step:t})=>{let n=c(e);await f(()=>d(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0));let r=n.querySelector(`cosmoz-tab-next[overflowing]`);await t(`re-slotting it out of the bar clears the mark`,async()=>{r.setAttribute(`slot`,`stats`),await f(()=>d(r.hasAttribute(`overflowing`)).toBe(!1)),d(getComputedStyle(r).visibility).not.toBe(`hidden`)}),await t(`removing one from the DOM clears it too`,async()=>{let e=n.querySelector(`cosmoz-tab-next[overflowing]`);e.remove(),await f(()=>d(e.hasAttribute(`overflowing`)).toBe(!1))})}},C={render:()=>t`
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
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`.box`),r=c(e).querySelector(`[name=b]`);await t(`a wide tab that does not fit is marked`,async()=>{n.style.width=`340px`,await f(()=>d(r.hasAttribute(`overflowing`)).toBe(!0))}),await t(`room for it brings it back`,async()=>{n.style.width=`500px`,await f(()=>d(r.hasAttribute(`overflowing`)).toBe(!1))})}},w={render:()=>t`<div class="box">
            <cosmoz-tabs-next>
                ${r({tabs:[{name:`x`,title:`Tab X`,badge:``},{name:`y`,title:`Tab Y`,badge:`3`}],active:{name:`x`,title:`Tab X`},onActivate:()=>void 0})}
            </cosmoz-tabs-next>
        </div>`,play:async({canvasElement:e,step:t})=>{let n=c(e),r=e=>u(n.querySelector(`[name=${e}]`)).querySelector(`.badge`);await t(`an empty badge renders no badge at all`,async()=>await f(()=>d(r(`x`)).toBe(null))),await t(`a real one still does`,async()=>await f(()=>d(r(`y`)?.textContent?.trim()).toBe(`3`)))}},T=[`AnOpenMenuKeepsFocusWhenATabChanges`,`TheMoreLabelIsTranslatedAndOverridable`,`DisabledRowsAreOutOfTheTabOrder`,`ForwardedClicksKeepTheirMouseSemantics`,`AMarkIsRemovedWhenATabLeavesTheBar`,`AWideTabIsReclassifiedOnResize`,`AnEmptyBadgeRendersNothing`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
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
      await waitFor(() => expect(label()).toBe('Fler'));
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
      await waitFor(() => expect(b.hasAttribute('overflowing')).toBe(false));
    });
  }
}`,...C.parameters?.docs?.source},description:{story:`the layout itself classifies: a tab wraps the moment it does not fit,
and a width change is taken fresh. 48% tabs plus the flex gap overflow
under any track below 400px and fit above it, canvas-size
independent.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`empty badge attributes become boolean true in pion.
render tabs should omit them instead.`,...w.parameters?.docs?.description}}}})))()}E();export{S as AMarkIsRemovedWhenATabLeavesTheBar,C as AWideTabIsReclassifiedOnResize,w as AnEmptyBadgeRendersNothing,_ as AnOpenMenuKeepsFocusWhenATabChanges,b as DisabledRowsAreOutOfTheTabOrder,x as ForwardedClicksKeepTheirMouseSemantics,v as TheMoreLabelIsTranslatedAndOverridable,T as __namedExportsOrder,p as default};