import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-C81qHdVY.js";import{t as r}from"./next-D1lx5QSj.js";import{c as i,i as a,n as o,s}from"./overflow-helpers-DBuOm38u.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),r(),o(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Tests/Tabs overflow (next, radiogroup)`},d=()=>t`
    <div class="box" style="width: 220px; overflow: hidden;">
        <cosmoz-tabs-next variant="segmented" compact-width role="radiogroup">
            <cosmoz-tab-next name="today">Today</cosmoz-tab-next>
            <cosmoz-tab-next name="week">7 days</cosmoz-tab-next>
            <cosmoz-tab-next name="month">30 days</cosmoz-tab-next>
            <cosmoz-tab-next name="quarter">90 days</cosmoz-tab-next>
            <cosmoz-tab-next name="year" active>12 months</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,f={render:d,play:async({canvasElement:e,step:t})=>{let n=a(e),r=()=>i(n).querySelector(`.menu`),o=()=>i(n).querySelectorAll(`.menu > cosmoz-tab-next`);await l(()=>c(o().length).toBeGreaterThan(0)),await t(`the menu is the same group as the bar`,async()=>{c(i(n).querySelector(`.items`)?.getAttribute(`role`)).toBe(`radiogroup`),c(r().getAttribute(`role`)).toBe(`radiogroup`)}),await t(`the copies are radios reporting aria-checked`,async()=>{o().forEach(e=>{c(e.getAttribute(`role`)).toBe(`radio`),c(e.hasAttribute(`aria-selected`)).toBe(!1),c(e.getAttribute(`aria-checked`)).toBe(e.hasAttribute(`active`)?`true`:`false`)}),c(r().querySelector(`[name="year"]`)?.getAttribute(`aria-checked`)).toBe(`true`)}),await t(`Enter picks a radio like any button`,async()=>{let e=[];n.querySelectorAll(`cosmoz-tab-next`).forEach(t=>t.addEventListener(`click`,()=>e.push(t.getAttribute(`name`)))),i(n).querySelector(`.more-button`).click();let[t]=o();await l(()=>{t.focus(),c(i(n).activeElement).toBe(t)}),t.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,composed:!0,cancelable:!0})),c(e).toEqual([t.getAttribute(`name`)])}),await t(`copies do not carry the bar-only size`,async()=>{n.setAttribute(`size`,`sm`),await s(),o().forEach(e=>c(e.hasAttribute(`size`)).toBe(!1))})}},p={render:d,play:async({canvasElement:e,step:t})=>{let n=a(e);await l(()=>c(i(n).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),await s(8),await t(`no attribute churn once nothing changes`,async()=>{let e=0,t=new MutationObserver(t=>{e+=t.length});n.querySelectorAll(`cosmoz-tab-next`).forEach(e=>t.observe(e,{attributes:!0})),n.setAttribute(`more-label`,`More`),await s(8),t.disconnect(),c(e).toBe(0)})}},m=e=>i(e).querySelector(`.items`)?.getAttribute(`role`),h={render:()=>t`
        <cosmoz-tabs-next variant="segmented" compact-width>
            <cosmoz-tab-next name="today" active>Today</cosmoz-tab-next>
            <cosmoz-tab-next name="week">7 days</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=()=>n.querySelector(`cosmoz-tab-next`);await l(()=>c(m(n)).toBe(`tablist`)),await t(`setting a role later needs no other re-render`,async()=>{n.setAttribute(`role`,`radiogroup`),await l(()=>c(m(n)).toBe(`radiogroup`)),await l(()=>c(r().getAttribute(`role`)).toBe(`radio`)),c(n.getAttribute(`role`)).toBe(`none`)}),await t(`removing it falls back to a tablist`,async()=>{n.removeAttribute(`role`),await l(()=>c(m(n)).toBe(`tablist`)),await l(()=>c(r().getAttribute(`role`)).toBe(`tab`)),c(r().getAttribute(`aria-selected`)).toBe(`true`),c(r().hasAttribute(`aria-checked`)).toBe(!1),c(n.getAttribute(`role`)).toBe(`none`)}),await t(`and it can be set again`,async()=>{n.setAttribute(`role`,`radiogroup`),await l(()=>c(m(n)).toBe(`radiogroup`))})}},g=[`OverflowingRadiosStayRadios`,`ASettledBarStopsWriting`,`RoleChangesLandOnTheirOwn`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: radiogroup,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      menu = () => sr(bar).querySelector('.menu') as HTMLElement,
      copies = () => sr(bar).querySelectorAll<HTMLElement>('.menu > cosmoz-tab-next');
    await waitFor(() => expect(copies().length).toBeGreaterThan(0));
    await step('the menu is the same group as the bar', async () => {
      expect(sr(bar).querySelector('.items')?.getAttribute('role')).toBe('radiogroup');
      expect(menu().getAttribute('role')).toBe('radiogroup');
    });
    await step('the copies are radios reporting aria-checked', async () => {
      copies().forEach(copy => {
        expect(copy.getAttribute('role')).toBe('radio');
        expect(copy.hasAttribute('aria-selected')).toBe(false);
        expect(copy.getAttribute('aria-checked')).toBe(copy.hasAttribute('active') ? 'true' : 'false');
      });
      // the last one is active and, at this width, in the menu
      expect(menu().querySelector('[name="year"]')?.getAttribute('aria-checked')).toBe('true');
    });
    await step('Enter picks a radio like any button', async () => {
      const seen: string[] = [];
      bar.querySelectorAll('cosmoz-tab-next').forEach(tab => tab.addEventListener('click', () => seen.push(tab.getAttribute('name')!)));
      (sr(bar).querySelector('.more-button') as HTMLElement).click();
      const [first] = copies();
      await waitFor(() => {
        first.focus();
        expect(sr(bar).activeElement).toBe(first);
      });
      first.dispatchEvent(new KeyboardEvent('keydown', {
        key: 'Enter',
        bubbles: true,
        composed: true,
        cancelable: true
      }));
      // the original, not the copy, received the pick
      expect(seen).toEqual([first.getAttribute('name')]);
    });
    await step('copies do not carry the bar-only size', async () => {
      bar.setAttribute('size', 'sm');
      await settle();
      copies().forEach(copy => expect(copy.hasAttribute('size')).toBe(false));
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: radiogroup,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement);
    await waitFor(() => expect(sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length).toBeGreaterThan(0));
    await settle(8);
    await step('no attribute churn once nothing changes', async () => {
      let writes = 0;
      const observer = new MutationObserver(records => {
        writes += records.length;
      });
      bar.querySelectorAll('cosmoz-tab-next').forEach(tab => observer.observe(tab, {
        attributes: true
      }));
      // re-render without changing anything the tabs depend on
      bar.setAttribute('more-label', 'More');
      await settle(8);
      observer.disconnect();
      expect(writes).toBe(0);
    });
  }
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs-next variant="segmented" compact-width>
            <cosmoz-tab-next name="today" active>Today</cosmoz-tab-next>
            <cosmoz-tab-next name="week">7 days</cosmoz-tab-next>
        </cosmoz-tabs-next>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement),
      first = () => bar.querySelector('cosmoz-tab-next') as HTMLElement;
    await waitFor(() => expect(itemsRole(bar)).toBe('tablist'));
    await step('setting a role later needs no other re-render', async () => {
      bar.setAttribute('role', 'radiogroup');
      await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
      await waitFor(() => expect(first().getAttribute('role')).toBe('radio'));
      expect(bar.getAttribute('role')).toBe('none');
    });
    await step('removing it falls back to a tablist', async () => {
      bar.removeAttribute('role');
      await waitFor(() => expect(itemsRole(bar)).toBe('tablist'));
      await waitFor(() => expect(first().getAttribute('role')).toBe('tab'));
      expect(first().getAttribute('aria-selected')).toBe('true');
      expect(first().hasAttribute('aria-checked')).toBe(false);
      expect(bar.getAttribute('role')).toBe('none');
    });
    await step('and it can be set again', async () => {
      bar.setAttribute('role', 'radiogroup');
      await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
    });
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as ASettledBarStopsWriting,f as OverflowingRadiosStayRadios,h as RoleChangesLandOnTheirOwn,g as __namedExportsOrder,u as default};