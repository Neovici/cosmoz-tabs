import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-Dq8ZPbTf.js";import{t as r}from"./next-bUuF6DIv.js";import{i,n as a,s as o}from"./overflow-helpers-DSoO5Ig9.js";var s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),r(),a(),{expect:s,waitFor:c}=__STORYBOOK_MODULE_TEST__,l={title:`Tests/Tabs overflow (next, radiogroup)`},u=()=>t`
    <div class="box" style="width: 220px; overflow: hidden;">
        <cosmoz-tabs-next variant="segmented" compact-width role="radiogroup">
            <cosmoz-tab-next name="today">Today</cosmoz-tab-next>
            <cosmoz-tab-next name="week">7 days</cosmoz-tab-next>
            <cosmoz-tab-next name="month">30 days</cosmoz-tab-next>
            <cosmoz-tab-next name="quarter">90 days</cosmoz-tab-next>
            <cosmoz-tab-next name="year" active>12 months</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,d={render:u,play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>o(n).querySelector(`.menu`),a=()=>o(n).querySelectorAll(`.menu > cosmoz-tab-next`);await c(()=>s(a().length).toBeGreaterThan(0)),await t(`the menu is the same group as the bar`,async()=>{s(n.getAttribute(`role`)).toBe(`radiogroup`),s(r().getAttribute(`role`)).toBe(`radiogroup`)}),await t(`the copies are radios reporting aria-checked`,async()=>{a().forEach(e=>{s(e.getAttribute(`role`)).toBe(`radio`),s(e.hasAttribute(`aria-selected`)).toBe(!1),s(e.getAttribute(`aria-checked`)).toBe(e.hasAttribute(`active`)?`true`:`false`)}),s(r().querySelector(`[name="year"]`)?.getAttribute(`aria-checked`)).toBe(`true`)}),await t(`Enter picks a radio like any button`,async()=>{let e=[];n.querySelectorAll(`cosmoz-tab-next`).forEach(t=>t.addEventListener(`click`,()=>e.push(t.getAttribute(`name`)))),o(n).querySelector(`.more-button`).click();let[t]=a();await c(()=>{t.focus(),s(o(n).activeElement).toBe(t)}),t.dispatchEvent(new KeyboardEvent(`keydown`,{key:`Enter`,bubbles:!0,composed:!0,cancelable:!0})),s(e).toEqual([t.getAttribute(`name`)])}),await t(`copies do not carry the bar-only size`,async()=>{n.setAttribute(`size`,`sm`),await c(()=>s([...a()].some(e=>e.hasAttribute(`size`))).toBe(!1))})}},f={render:u,play:async({canvasElement:e,step:t})=>{let n=i(e);await c(()=>s(o(n).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),await t(`no attribute churn once nothing changes`,async()=>{let e=0,t=new MutationObserver(t=>{e+=t.length});n.querySelectorAll(`cosmoz-tab-next`).forEach(e=>t.observe(e,{attributes:!0})),e=0,await c(()=>{let t=e;return new Promise(e=>{setTimeout(e,200)}).then(()=>s(e).toBe(t))},{timeout:5e3}),e=0,n.setAttribute(`more-label`,`More`),await c(()=>new Promise(e=>{setTimeout(e,300)}).then(()=>s(e).toBe(0))).catch(()=>void 0),t.disconnect(),s(e).toBe(0)})}},p=e=>e.getAttribute(`role`),m={render:()=>t`
        <cosmoz-tabs-next variant="segmented" compact-width>
            <cosmoz-tab-next name="today" active>Today</cosmoz-tab-next>
            <cosmoz-tab-next name="week">7 days</cosmoz-tab-next>
        </cosmoz-tabs-next>
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=()=>n.querySelector(`cosmoz-tab-next`);await c(()=>s(p(n)).toBe(`tablist`)),await t(`setting a role later re-renders`,async()=>{n.setAttribute(`role`,`radiogroup`),n.setAttribute(`more-label`,`More`),await c(()=>s(p(n)).toBe(`radiogroup`)),await c(()=>s(r().getAttribute(`role`)).toBe(`radio`))}),await t(`removing it falls back to a tablist`,async()=>{n.removeAttribute(`role`),n.setAttribute(`more-label`,`Mer`),await c(()=>s(p(n)).toBe(`tablist`)),await c(()=>s(r().getAttribute(`role`)).toBe(`tab`)),s(r().getAttribute(`aria-selected`)).toBe(`true`),s(r().hasAttribute(`aria-checked`)).toBe(!1)}),await t(`and it can be set again`,async()=>{n.setAttribute(`role`,`radiogroup`),await c(()=>s(p(n)).toBe(`radiogroup`))})}},h=[`OverflowingRadiosStayRadios`,`ASettledBarStopsWriting`,`RoleChangesLandOnTheirOwn`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
      expect(bar.getAttribute('role')).toBe('radiogroup');
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
      await waitFor(() => expect([...copies()].some(c => c.hasAttribute('size'))).toBe(false));
    });
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: radiogroup,
  play: async ({
    canvasElement,
    step
  }) => {
    const bar = next(canvasElement);
    await waitFor(() => expect(sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length).toBeGreaterThan(0));
    await step('no attribute churn once nothing changes', async () => {
      let writes = 0;
      const observer = new MutationObserver(records => {
        writes += records.length;
      });
      bar.querySelectorAll('cosmoz-tab-next').forEach(tab => observer.observe(tab, {
        attributes: true
      }));
      // the mark cycle settles late under a cold storybook iframe;
      // wait for a quiet stretch before arming the comparison
      writes = 0;
      await waitFor(() => {
        const before = writes;
        return new Promise<void>(resolve => {
          setTimeout(resolve, 200);
        }).then(() => expect(writes).toBe(before));
      }, {
        timeout: 5000
      });
      writes = 0;
      // re-render without changing anything the tabs depend on
      bar.setAttribute('more-label', 'More');
      await waitFor(() => {
        // a quiet window proves no follow-up writes came
        return new Promise<void>(resolve => {
          setTimeout(resolve, 300);
        }).then(() => expect(writes).toBe(0));
      }).catch(() => undefined);
      observer.disconnect();
      expect(writes).toBe(0);
    });
  }
}`,...f.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    await step('setting a role later re-renders', async () => {
      bar.setAttribute('role', 'radiogroup');
      // an observed attribute re-render picks authored changes up;
      // nudge another one to force the pass (role itself is a
      // platform-reflected property and does not schedule renders)
      bar.setAttribute('more-label', 'More');
      await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
      await waitFor(() => expect(first().getAttribute('role')).toBe('radio'));
    });
    await step('removing it falls back to a tablist', async () => {
      bar.removeAttribute('role');
      bar.setAttribute('more-label', 'Mer');
      await waitFor(() => expect(itemsRole(bar)).toBe('tablist'));
      await waitFor(() => expect(first().getAttribute('role')).toBe('tab'));
      expect(first().getAttribute('aria-selected')).toBe('true');
      expect(first().hasAttribute('aria-checked')).toBe(false);
    });
    await step('and it can be set again', async () => {
      bar.setAttribute('role', 'radiogroup');
      await waitFor(() => expect(itemsRole(bar)).toBe('radiogroup'));
    });
  }
}`,...m.parameters?.docs?.source}}}})))()}g();export{f as ASettledBarStopsWriting,d as OverflowingRadiosStayRadios,m as RoleChangesLandOnTheirOwn,h as __namedExportsOrder,l as default};