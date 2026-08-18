import{i as e}from"./preload-helper-usAeo7Bx.js";import{J as t,Y as n}from"./iframe-DOneIXTJ.js";import{T as r,w as i}from"./untitled-tiq9wtpx.js";import{t as a}from"./next-Da4QcpH0.js";import{d as o,f as s,i as c}from"./overflow-helpers-Ch4Fn9Sv.js";var l,u,d,f,p;e((()=>{i(),n(),a(),c(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,customElements.get(`cosmoz-tabs-next-slot-wrapper`)||customElements.define(`cosmoz-tabs-next-slot-wrapper`,r(()=>t`
                <cosmoz-tabs-next variant="underline">
                    <cosmoz-tab-next name="tab0" active>Tab0</cosmoz-tab-next>
                    <slot></slot>
                </cosmoz-tabs-next>
            `)),d={title:`Tests/Tabs slot (next)`},f={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next-slot-wrapper>
                <cosmoz-tab-next name="tab1">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="tab2">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="tab3">Attachments</cosmoz-tab-next>
                <span class="notatab">x</span>
            </cosmoz-tabs-next-slot-wrapper>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-next-slot-wrapper`),r=s(n).querySelector(`cosmoz-tabs-next`),i=()=>s(r).querySelector(`.items slot`).assignedElements({flatten:!0});await o(20),await t(`the projecting slot is left where it is`,async()=>l([...r.children].find(e=>e.localName===`slot`)?.hasAttribute(`slot`)).toBe(!1)),await t(`every tab reaches the clipping container`,async()=>{l(i().filter(e=>e.localName===`cosmoz-tab-next`).map(e=>e.getAttribute(`name`))).toEqual([`tab0`,`tab1`,`tab2`,`tab3`])}),await t(`projected tabs are styled like the direct one`,async()=>await u(()=>l(n.querySelector(`[name=tab1]`)?.getAttribute(`variant`)).toBe(`underline`))),await t(`and they take part in the overflow`,async()=>{await u(()=>l(s(r).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),l(s(r).querySelectorAll(`.menu > :not(cosmoz-tab-next)`).length).toBe(0)})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next-slot-wrapper>
                <cosmoz-tab-next name="tab1">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="tab2">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="tab3">Attachments</cosmoz-tab-next>
                <span class="notatab">x</span>
            </cosmoz-tabs-next-slot-wrapper>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const wrapper = canvasElement.querySelector('cosmoz-tabs-next-slot-wrapper') as HTMLElement;
    const bar = sr(wrapper).querySelector('cosmoz-tabs-next') as HTMLElement;
    const projected = () => (sr(bar).querySelector('.items slot') as HTMLSlotElement).assignedElements({
      flatten: true
    });
    await settle(20);
    await step('the projecting slot is left where it is', async () => expect([...bar.children].find(el => el.localName === 'slot')?.hasAttribute('slot')).toBe(false));
    await step('every tab reaches the clipping container', async () => {
      const tabs = projected().filter(el => el.localName === 'cosmoz-tab-next');
      expect(tabs.map(el => el.getAttribute('name'))).toEqual(['tab0', 'tab1', 'tab2', 'tab3']);
    });
    await step('projected tabs are styled like the direct one', async () => await waitFor(() => expect(wrapper.querySelector('[name=tab1]')?.getAttribute('variant')).toBe('underline')));
    await step('and they take part in the overflow', async () => {
      await waitFor(() => expect(sr(bar).querySelectorAll('.menu > cosmoz-tab-next').length).toBeGreaterThan(0));
      // non-tabs stay out of the overflow path.
      expect(sr(bar).querySelectorAll('.menu > :not(cosmoz-tab-next)').length).toBe(0);
    });
  }
}`,...f.parameters?.docs?.source}}},p=[`CollectsTabsThroughNestedSlot`]}))();export{f as CollectsTabsThroughNestedSlot,p as __namedExportsOrder,d as default};