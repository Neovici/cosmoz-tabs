import{i as e}from"./preload-helper-usAeo7Bx.js";import{J as t,Y as n}from"./iframe-T0BedWGr.js";import{T as r,w as i}from"./untitled-DD2WTsRj.js";import{t as a}from"./next-B0L137RR.js";import{d as o,f as s,i as c}from"./overflow-helpers-CwlYrfFd.js";var l,u,d,f,p,m;e((()=>{i(),n(),a(),c(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,customElements.get(`cosmoz-tabs-next-slot-wrapper`)||customElements.define(`cosmoz-tabs-next-slot-wrapper`,r(()=>t`
                <cosmoz-tabs-next variant="underline">
                    <cosmoz-tab-next name="tab0" active>Tab0</cosmoz-tab-next>
                    <slot></slot>
                </cosmoz-tabs-next>
            `)),customElements.get(`cosmoz-tabs-next-dynamic-slot-wrapper`)||customElements.define(`cosmoz-tabs-next-dynamic-slot-wrapper`,r(e=>t`
                    <cosmoz-tabs-next variant="underline">
                        <cosmoz-tab-next name="tab0" active>Tab0</cosmoz-tab-next>
                        <slot></slot>
                        ${e.hasAttribute(`dense`)?t`
                                    <cosmoz-tab-next name="owned1">Owned 1</cosmoz-tab-next>
                                    <cosmoz-tab-next name="owned2">Owned 2</cosmoz-tab-next>
                              `:``}
                    </cosmoz-tabs-next>
                `,{observedAttributes:[`dense`]})),d={title:`Tests/Tabs slot (next)`},f={render:()=>t`
        <div class="box" style="width: 260px; overflow: hidden;">
            <cosmoz-tabs-next-slot-wrapper>
                <cosmoz-tab-next name="tab1">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="tab2">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="tab3">Attachments</cosmoz-tab-next>
                <span class="notatab">x</span>
            </cosmoz-tabs-next-slot-wrapper>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-next-slot-wrapper`),r=s(n).querySelector(`cosmoz-tabs-next`),i=()=>s(r).querySelector(`.items slot`).assignedElements({flatten:!0});await o(20),await t(`the projecting slot is left where it is`,async()=>l([...r.children].find(e=>e.localName===`slot`)?.hasAttribute(`slot`)).toBe(!1)),await t(`every tab reaches the clipping container`,async()=>{l(i().filter(e=>e.localName===`cosmoz-tab-next`).map(e=>e.getAttribute(`name`))).toEqual([`tab0`,`tab1`,`tab2`,`tab3`])}),await t(`projected tabs are styled like the direct one`,async()=>await u(()=>l(n.querySelector(`[name=tab1]`)?.getAttribute(`variant`)).toBe(`underline`))),await t(`and they take part in the overflow`,async()=>{await u(()=>l(s(r).querySelectorAll(`.menu > cosmoz-tab-next`).length).toBeGreaterThan(0)),l(s(r).querySelectorAll(`.menu > :not(cosmoz-tab-next)`).length).toBe(0)})}},p={render:()=>t`
        <div class="box" style="width: 140px; overflow: hidden;">
            <cosmoz-tabs-next-dynamic-slot-wrapper>
                <cosmoz-tab-next name="tab1">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="tab2">Accounting</cosmoz-tab-next>
            </cosmoz-tabs-next-dynamic-slot-wrapper>
        </div>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-next-dynamic-slot-wrapper`),r=s(n).querySelector(`cosmoz-tabs-next`),i=()=>s(r).querySelectorAll(`.menu > cosmoz-tab-next`);await u(()=>l(i().length).toBeGreaterThan(0)),await t(`new projected tabs are picked up`,async()=>{n.append(Object.assign(document.createElement(`cosmoz-tab-next`),{textContent:`Attachments`})),n.lastElementChild?.setAttribute(`name`,`tab3`),await u(()=>l([...i()].some(e=>e.getAttribute(`name`)===`tab3`)).toBe(!0))}),await t(`wrapper-owned tab changes are picked up`,async()=>{n.setAttribute(`dense`,``),await u(()=>l([...i()].some(e=>e.getAttribute(`name`)===`owned2`)).toBe(!0))})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
    const wrapper = canvasElement.querySelector("cosmoz-tabs-next-slot-wrapper") as HTMLElement;
    const bar = sr(wrapper).querySelector("cosmoz-tabs-next") as HTMLElement;
    const projected = () => (sr(bar).querySelector(".items slot") as HTMLSlotElement).assignedElements({
      flatten: true
    });
    await settle(20);
    await step("the projecting slot is left where it is", async () => expect([...bar.children].find(el => el.localName === "slot")?.hasAttribute("slot")).toBe(false));
    await step("every tab reaches the clipping container", async () => {
      const tabs = projected().filter(el => el.localName === "cosmoz-tab-next");
      expect(tabs.map(el => el.getAttribute("name"))).toEqual(["tab0", "tab1", "tab2", "tab3"]);
    });
    await step("projected tabs are styled like the direct one", async () => await waitFor(() => expect(wrapper.querySelector("[name=tab1]")?.getAttribute("variant")).toBe("underline")));
    await step("and they take part in the overflow", async () => {
      await waitFor(() => expect(sr(bar).querySelectorAll(".menu > cosmoz-tab-next").length).toBeGreaterThan(0));
      /** non-tabs stay out of the overflow path. */
      expect(sr(bar).querySelectorAll(".menu > :not(cosmoz-tab-next)").length).toBe(0);
    });
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 140px; overflow: hidden;">
            <cosmoz-tabs-next-dynamic-slot-wrapper>
                <cosmoz-tab-next name="tab1">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="tab2">Accounting</cosmoz-tab-next>
            </cosmoz-tabs-next-dynamic-slot-wrapper>
        </div>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const wrapper = canvasElement.querySelector("cosmoz-tabs-next-dynamic-slot-wrapper") as HTMLElement;
    const bar = sr(wrapper).querySelector("cosmoz-tabs-next") as HTMLElement;
    const rows = () => sr(bar).querySelectorAll(".menu > cosmoz-tab-next");
    await waitFor(() => expect(rows().length).toBeGreaterThan(0));
    await step("new projected tabs are picked up", async () => {
      wrapper.append(Object.assign(document.createElement("cosmoz-tab-next"), {
        textContent: "Attachments"
      }));
      wrapper.lastElementChild?.setAttribute("name", "tab3");
      await waitFor(() => expect([...rows()].some(row => row.getAttribute("name") === "tab3")).toBe(true));
    });
    await step("wrapper-owned tab changes are picked up", async () => {
      wrapper.setAttribute("dense", "");
      await waitFor(() => expect([...rows()].some(row => row.getAttribute("name") === "owned2")).toBe(true));
    });
  }
}`,...p.parameters?.docs?.source}}},m=[`CollectsTabsThroughNestedSlot`,`TracksDynamicNestedSlotChanges`]}))();export{f as CollectsTabsThroughNestedSlot,p as TracksDynamicNestedSlotChanges,m as __namedExportsOrder,d as default};