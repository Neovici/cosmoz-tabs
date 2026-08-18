import{i as e}from"./preload-helper-usAeo7Bx.js";import{J as t,Y as n}from"./iframe-DOneIXTJ.js";import{t as r}from"./next-Da4QcpH0.js";import{d as i,f as a,i as o,p as s,s as c}from"./overflow-helpers-Ch4Fn9Sv.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{n(),r(),o(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Tests/Overflow menu`},f=()=>t`
    <div class="box" style="width: 240px; overflow: hidden;">
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
            <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
            <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            <cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,p=e=>[...a(e).querySelectorAll(`.menu > cosmoz-tab-next`)],m=async e=>{s(e).click(),await u(()=>l(a(e).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!0))},h={render:f,play:async({canvasElement:e,step:t})=>{let n=c(e);await u(()=>l(p(n).length).toBeGreaterThan(0)),await m(n);let r=[...n.querySelectorAll(`cosmoz-tab-next`)].pop(),i=p(n).at(-1);await t(`focus the last menu row`,async()=>{i.focus(),l(a(n).activeElement).toBe(i)}),await t(`a badge lands on the copy without replacing it`,async()=>{r.setAttribute(`badge`,`9`),await u(()=>l(p(n).at(-1)?.getAttribute(`badge`)).toBe(`9`)),l(p(n).at(-1)).toBe(i),l(i.isConnected).toBe(!0)}),await t(`and the row still has focus`,async()=>l(a(n).activeElement).toBe(i)),await t(`a relabel also lands in place`,async()=>{r.textContent=`Files`,await u(()=>l(p(n).at(-1)?.textContent?.trim()).toBe(`Files`)),l(p(n).at(-1)).toBe(i),l(a(n).activeElement).toBe(i)})}},g={render:f,play:async({canvasElement:e,step:t})=>{let n=c(e),r=()=>s(n).textContent?.trim();await u(()=>l(p(n).length).toBeGreaterThan(0)),await t(`defaults to a label without the call site asking`,async()=>{l(r()).toBe(`More`)}),await t(`the attribute overrides it`,async()=>{n.setAttribute(`more-label`,`Mer`),await u(()=>l(r()).toBe(`Mer`))}),await t(`and so does the property`,async()=>{n.removeAttribute(`more-label`),n.moreLabel=`Fler`,await i(),l(r()).toBe(`Fler`)})}},_=()=>t`
    <div class="box" style="width: 240px; overflow: hidden;">
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
            <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
            <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            <cosmoz-tab-next name="attachments" disabled>Attachments</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,v={render:_,play:async({canvasElement:e,step:t})=>{let n=c(e);await u(()=>l(p(n).length).toBeGreaterThan(0));let r=()=>p(n).find(e=>e.hasAttribute(`disabled`)),i=()=>p(n).find(e=>!e.hasAttribute(`disabled`));await t(`a disabled copy is skipped and announced`,async()=>{l(r()?.getAttribute(`tabindex`)).toBe(`-1`),l(r()?.getAttribute(`aria-disabled`)).toBe(`true`)}),await t(`an enabled copy is not`,async()=>{l(i()?.getAttribute(`tabindex`)).toBe(`0`),l(i()?.hasAttribute(`aria-disabled`)).toBe(!1)}),await t(`and it follows the tab, not just the first copy`,async()=>{n.querySelector(`[name=attachments]`).removeAttribute(`disabled`),await u(()=>l(p(n).find(e=>e.getAttribute(`name`)===`attachments`)?.getAttribute(`tabindex`)).toBe(`0`))})}},y={render:f,play:async({canvasElement:e,step:t})=>{let n=c(e);await u(()=>l(p(n).length).toBeGreaterThan(0));let r=p(n).at(-1),o=n.querySelector(`[name=${r.getAttribute(`name`)}]`),s;o.addEventListener(`click`,e=>s=e),await t(`a modified click stays modified`,async()=>{r.dispatchEvent(new MouseEvent(`click`,{bubbles:!0,composed:!0,ctrlKey:!0})),await i(4),l(s?.ctrlKey).toBe(!0)}),await t(`and leaves the menu open, having selected nothing`,async()=>l(a(n).querySelector(`.more`)?.hasAttribute(`opened`)).toBe(!1)),await t(`a plain click arrives plain`,async()=>{s=void 0,r.click(),await u(()=>l(s).toBeTruthy()),l(s?.ctrlKey).toBe(!1),l(s?.button).toBe(0)}),await t(`cancelling the forward cancels the copy too`,async()=>{o.addEventListener(`click`,e=>e.preventDefault());let e=new MouseEvent(`click`,{bubbles:!0,composed:!0,cancelable:!0});r.dispatchEvent(e),await i(4),l(e.defaultPrevented).toBe(!0)})}},b={render:f,play:async({canvasElement:e,step:t})=>{let n=c(e);await u(()=>l(n.querySelectorAll(`cosmoz-tab-next[overflowing]`).length).toBeGreaterThan(0));let r=n.querySelector(`cosmoz-tab-next[overflowing]`);await t(`re-slotting it out of the bar clears the mark`,async()=>{r.setAttribute(`slot`,`stats`),await u(()=>l(r.hasAttribute(`overflowing`)).toBe(!1)),l(getComputedStyle(r).visibility).not.toBe(`hidden`)}),await t(`removing one from the DOM clears it too`,async()=>{let e=n.querySelector(`cosmoz-tab-next[overflowing]`);e.remove(),await u(()=>l(e.hasAttribute(`overflowing`)).toBe(!1))})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    await open(tabs);

    // the last tab can change without reshuffling overflow.
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    await step('an enabled copy is not', async () => {
      expect(on()?.getAttribute('tabindex')).toBe('0');
      expect(on()?.hasAttribute('aria-disabled')).toBe(false);
    });
    await step('and it follows the tab, not just the first copy', async () => {
      const attachments = tabs.querySelector('[name=attachments]') as HTMLElement;
      attachments.removeAttribute('disabled');
      await waitFor(() => expect(copies(tabs).find(c => c.getAttribute('name') === 'attachments')?.getAttribute('tabindex')).toBe('0'));
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`AnOpenMenuKeepsFocusWhenATabChanges`,`TheMoreLabelIsTranslatedAndOverridable`,`DisabledRowsAreOutOfTheTabOrder`,`ForwardedClicksKeepTheirMouseSemantics`,`AMarkIsRemovedWhenATabLeavesTheBar`]}))();export{b as AMarkIsRemovedWhenATabLeavesTheBar,h as AnOpenMenuKeepsFocusWhenATabChanges,v as DisabledRowsAreOutOfTheTabOrder,y as ForwardedClicksKeepTheirMouseSemantics,g as TheMoreLabelIsTranslatedAndOverridable,x as __namedExportsOrder,d as default};