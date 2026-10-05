import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-AMO8G4yI.js";import{t as r}from"./next-DT5M_hEf.js";import{c as i,i as a,n as o,o as s,r as c}from"./overflow-helpers-CkHDcBym.js";var l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),r(),o(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Tests/Tabs overflow (next, hidden tabs)`},f=()=>t`
    <div class="box" style="width: 260px; overflow: hidden;">
        <cosmoz-tabs-next variant="underline">
            <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
            <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
            <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
            <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            <cosmoz-tab-next name="late" hidden>Late</cosmoz-tab-next>
        </cosmoz-tabs-next>
    </div>
`,p=e=>[...i(e).querySelectorAll(`.menu > cosmoz-tab-next`)].map(e=>e.getAttribute(`name`)),m={render:f,play:async({canvasElement:e,step:t})=>{let n=a(e),r=n.querySelector(`[name="late"]`);await s(2),await u(()=>l(p(n).length).toBeGreaterThan(0)),l(p(n)).not.toContain(`late`),await t(`it is copied into the menu once it is shown`,async()=>{r.removeAttribute(`hidden`),await u(()=>l(p(n)).toContain(`late`)),l(r.hasAttribute(`overflowing`)).toBe(!0)}),await t(`and leaves it again when hidden`,async()=>{r.setAttribute(`hidden`,``),await u(()=>l(p(n)).not.toContain(`late`)),l(r.hasAttribute(`overflowing`)).toBe(!1)})}},h={render:f,play:async({canvasElement:e,step:t})=>{let n=a(e);await s(2),await u(()=>l(p(n).length).toBeGreaterThan(0)),await t(`the menu empties and the trigger goes away`,async()=>{n.querySelectorAll(`cosmoz-tab-next:not([name="overview"])`).forEach(e=>e.setAttribute(`hidden`,``)),await u(()=>l(p(n)).toEqual([])),await u(()=>l(c(n).hasAttribute(`hidden`)).toBe(!0))}),await t(`no hidden tab keeps its overflow mark`,async()=>{await u(()=>l(n.querySelectorAll(`[hidden][overflowing]`).length).toBe(0))})}},g={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next variant="underline">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
                <cosmoz-tab-next name="late">Late</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=a(e),r=n.querySelector(`[name="late"]`);await s(2),await u(()=>l(p(n)).toContain(`late`));let i=p(n).filter(e=>e!==`late`);l(i.length).toBeGreaterThan(0),await t(`nothing else moves, yet the copy goes`,async()=>{r.setAttribute(`hidden`,``),await u(()=>l(p(n)).toEqual(i)),l(r.hasAttribute(`overflowing`)).toBe(!1),l(c(n).hasAttribute(`hidden`)).toBe(!1)}),await t(`and comes back when shown again`,async()=>{r.removeAttribute(`hidden`),await u(()=>l(p(n)).toEqual([...i,`late`]))})}},_=[`AnUnhiddenTabPastTheEdgeJoinsTheMenu`,`HidingEveryOverflowingTabHidesTheTrigger`,`HidingATrailingClippedTabDropsItsCopy`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement),
      late = tabs.querySelector('[name="late"]') as HTMLElement;
    await pump(2);
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: bar,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await pump(2);
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    await pump(2);
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
}`,...g.parameters?.docs?.source}}}})))()}v();export{m as AnUnhiddenTabPastTheEdgeJoinsTheMenu,g as HidingATrailingClippedTabDropsItsCopy,h as HidingEveryOverflowingTabHidesTheTrigger,_ as __namedExportsOrder,d as default};