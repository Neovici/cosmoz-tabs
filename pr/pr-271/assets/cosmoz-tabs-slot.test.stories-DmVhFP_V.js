import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-8z_X1pIs.js";import{a as r,o as i}from"./if-defined-CsXErmzi.js";import{t as a}from"./cosmoz-tabs-D85nsjZB.js";var o,s,c,l,u;e((()=>{r(),n(),a(),{expect:o,waitFor:s}=__STORYBOOK_MODULE_TEST__,customElements.get(`cosmoz-tabs-slot-wrapper`)||customElements.define(`cosmoz-tabs-slot-wrapper`,i(()=>t`
                <cosmoz-tabs>
                    <cosmoz-tab name="tab0" heading="Tab0">0</cosmoz-tab>
                    <slot></slot>
                </cosmoz-tabs>
            `)),c={title:`Tests/Tabs slot`},l={render:()=>t`
        <cosmoz-tabs-slot-wrapper>
            <cosmoz-tab name="tab1" heading="Tab1">1</cosmoz-tab>
            <span name="notatab">x</span>
        </cosmoz-tabs-slot-wrapper>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-slot-wrapper`),r=n.shadowRoot.querySelector(`cosmoz-tabs`);await t(`the nested-slot tab is collected (non-tabs ignored)`,async()=>{await s(()=>o(r.shadowRoot.querySelectorAll(`[role=tab]`).length).toBe(2)),o(Array.from(r.shadowRoot.querySelectorAll(`[role=tab] > span`)).map(e=>e.textContent)).toEqual([`Tab0`,`Tab1`])}),await t(`selecting the slotted tab marks it is-selected`,async()=>{r.selected=`tab1`,await s(()=>o(n.querySelector(`cosmoz-tab[name=tab1]`)?.getAttribute(`is-selected`)).toBe(``))})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs-slot-wrapper>
            <cosmoz-tab name="tab1" heading="Tab1">1</cosmoz-tab>
            <span name="notatab">x</span>
        </cosmoz-tabs-slot-wrapper>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const wrapper = canvasElement.querySelector('cosmoz-tabs-slot-wrapper')!;
    const tabs = wrapper.shadowRoot!.querySelector('cosmoz-tabs') as HTMLElement & {
      selected?: string;
    };
    await step('the nested-slot tab is collected (non-tabs ignored)', async () => {
      await waitFor(() => expect(tabs.shadowRoot!.querySelectorAll('[role=tab]').length).toBe(2));
      const headings = Array.from(tabs.shadowRoot!.querySelectorAll('[role=tab] > span')).map(el => el.textContent);
      expect(headings).toEqual(['Tab0', 'Tab1']);
    });
    await step('selecting the slotted tab marks it is-selected', async () => {
      tabs.selected = 'tab1';
      await waitFor(() => expect(wrapper.querySelector('cosmoz-tab[name=tab1]')?.getAttribute('is-selected')).toBe(''));
    });
  }
}`,...l.parameters?.docs?.source}}},u=[`CollectsTabsThroughNestedSlot`]}))();export{l as CollectsTabsThroughNestedSlot,u as __namedExportsOrder,c as default};