import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-DFJ0V7iD.js";import{t as r}from"./next-GEjAncmw.js";import{i,n as a,r as o,s}from"./overflow-helpers-D5E6NFta.js";var c,l,u,d,f,p,m,h,g;function _(){return(_=e((()=>{n(),r(),a(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Tests/Tabs overflow (next, hidden tabs)`},d=()=>t`
    <div class="box" style="width: 260px; overflow: hidden;">
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
            <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
            <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            <cosmoz-tab-next name="late" hidden>Late</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,f=e=>[...s(e).querySelectorAll(`.menu > cosmoz-tab-next`)].map(e=>e.getAttribute(`name`)),p={render:d,play:async({canvasElement:e,step:t})=>{let n=i(e),r=n.querySelector(`[name="late"]`);await l(()=>c(f(n).length).toBeGreaterThan(0)),c(f(n)).not.toContain(`late`),await t(`it is copied into the menu once it is shown`,async()=>{r.removeAttribute(`hidden`),await l(()=>c(f(n)).toContain(`late`)),c(r.hasAttribute(`overflowing`)).toBe(!0)}),await t(`and leaves it again when hidden`,async()=>{r.setAttribute(`hidden`,``),await l(()=>c(f(n)).not.toContain(`late`)),c(r.hasAttribute(`overflowing`)).toBe(!1)})}},m={render:d,play:async({canvasElement:e,step:t})=>{let n=i(e);await l(()=>c(f(n).length).toBeGreaterThan(0)),await t(`the menu empties and the trigger goes away`,async()=>{n.querySelectorAll(`cosmoz-tab-next:not([name="overview"])`).forEach(e=>e.setAttribute(`hidden`,``)),await l(()=>c(f(n)).toEqual([])),await l(()=>c(o(n).hasAttribute(`hidden`)).toBe(!0))}),await t(`no hidden tab keeps its overflow mark`,async()=>{await l(()=>c(n.querySelectorAll(`[hidden][overflowing]`).length).toBe(0))})}},h={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="late">Late</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=i(e),r=n.querySelector(`[name="late"]`);await l(()=>c(f(n)).toContain(`late`));let a=f(n).filter(e=>e!==`late`);c(a.length).toBeGreaterThan(0),await t(`nothing else moves, yet the copy goes`,async()=>{r.setAttribute(`hidden`,``),await l(()=>c(f(n)).toEqual(a)),c(r.hasAttribute(`overflowing`)).toBe(!1),c(o(n).hasAttribute(`hidden`)).toBe(!1)}),await t(`and comes back when shown again`,async()=>{r.removeAttribute(`hidden`),await l(()=>c(f(n)).toEqual([...a,`late`]))})}},g=[`AnUnhiddenTabPastTheEdgeJoinsTheMenu`,`HidingEveryOverflowingTabHidesTheTrigger`,`HidingATrailingClippedTabDropsItsCopy`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement),
      late = tabs.querySelector('[name="late"]') as HTMLElement;
    await waitFor(() => expect(names(tabs).length).toBeGreaterThan(0));
    expect(names(tabs)).not.toContain('late');
    await step('it is copied into the menu once it is shown', async () => {
      late.removeAttribute('hidden');
      await waitFor(() => expect(names(tabs)).toContain('late'));
      expect(late.hasAttribute('overflowing')).toBe(true);
    });
    await step('and leaves it again when hidden', async () => {
      late.setAttribute('hidden', '');
      await waitFor(() => expect(names(tabs)).not.toContain('late'));
      expect(late.hasAttribute('overflowing')).toBe(false);
    });
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(names(tabs).length).toBeGreaterThan(0));
    await step('the menu empties and the trigger goes away', async () => {
      tabs.querySelectorAll('cosmoz-tab-next:not([name="overview"])').forEach(tab => tab.setAttribute('hidden', ''));
      await waitFor(() => expect(names(tabs)).toEqual([]));
      await waitFor(() => expect(more(tabs).hasAttribute('hidden')).toBe(true));
    });
    await step('no hidden tab keeps its overflow mark', async () => {
      await waitFor(() => expect(tabs.querySelectorAll('[hidden][overflowing]').length).toBe(0));
    });
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="late">Late</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement),
      late = tabs.querySelector('[name="late"]') as HTMLElement;
    await waitFor(() => expect(names(tabs)).toContain('late'));
    const others = names(tabs).filter(name => name !== 'late');
    expect(others.length).toBeGreaterThan(0);
    await step('nothing else moves, yet the copy goes', async () => {
      late.setAttribute('hidden', '');
      await waitFor(() => expect(names(tabs)).toEqual(others));
      expect(late.hasAttribute('overflowing')).toBe(false);
      expect(more(tabs).hasAttribute('hidden')).toBe(false);
    });
    await step('and comes back when shown again', async () => {
      late.removeAttribute('hidden');
      await waitFor(() => expect(names(tabs)).toEqual([...others, 'late']));
    });
  }
}`,...h.parameters?.docs?.source}}}})))()}_();export{p as AnUnhiddenTabPastTheEdgeJoinsTheMenu,h as HidingATrailingClippedTabDropsItsCopy,m as HidingEveryOverflowingTabHidesTheTrigger,g as __namedExportsOrder,u as default};