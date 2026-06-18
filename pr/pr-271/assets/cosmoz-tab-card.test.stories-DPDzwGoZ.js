import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-i6Iwgyig.js";import{t as r}from"./cosmoz-tabs-Bqp1aTsc.js";var i,a,o,s,c;e((()=>{n(),r(),{expect:i,waitFor:a}=__STORYBOOK_MODULE_TEST__,o={title:`Tests/Tab card`},s={render:()=>t`
        <cosmoz-tabs .selected=${`tab1`}>
            <cosmoz-tab heading="Cards" name="tab1">
                <cosmoz-tab-card heading="Card one">card one</cosmoz-tab-card>
                <cosmoz-tab-card heading="Card two" collapsable
                    >card two</cosmoz-tab-card
                >
            </cosmoz-tab>
        </cosmoz-tabs>
    `,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs`);await t(`cards render their headings`,async()=>{await a(()=>{let e=n.querySelectorAll(`cosmoz-tab-card`);i(e.length).toBe(2),e.forEach(e=>{i(e.shadowRoot.querySelector(`.heading`)?.textContent?.trim()).toBe(e.getAttribute(`heading`))})})}),await t(`collapsable card toggles the collapsed attribute`,async()=>{let e=n.querySelectorAll(`cosmoz-tab-card`)[1];i(e.hasAttribute(`collapsed`)).toBe(!1),e.shadowRoot.querySelector(`.collapse-icon`).click(),await a(()=>i(e.hasAttribute(`collapsed`)).toBe(!0))})}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <cosmoz-tabs .selected=\${'tab1'}>
            <cosmoz-tab heading="Cards" name="tab1">
                <cosmoz-tab-card heading="Card one">card one</cosmoz-tab-card>
                <cosmoz-tab-card heading="Card two" collapsable
                    >card two</cosmoz-tab-card
                >
            </cosmoz-tab>
        </cosmoz-tabs>
    \`,
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = canvasElement.querySelector('cosmoz-tabs')!;
    await step('cards render their headings', async () => {
      await waitFor(() => {
        const cards = tabs.querySelectorAll('cosmoz-tab-card');
        expect(cards.length).toBe(2);
        cards.forEach(card => {
          const heading = card.shadowRoot!.querySelector('.heading');
          expect(heading?.textContent?.trim()).toBe(card.getAttribute('heading'));
        });
      });
    });
    await step('collapsable card toggles the collapsed attribute', async () => {
      const card = tabs.querySelectorAll('cosmoz-tab-card')[1] as HTMLElement;
      expect(card.hasAttribute('collapsed')).toBe(false);
      (card.shadowRoot!.querySelector('.collapse-icon') as HTMLElement).click();
      await waitFor(() => expect(card.hasAttribute('collapsed')).toBe(true));
    });
  }
}`,...s.parameters?.docs?.source}}},c=[`HeadingAndCollapse`]}))();export{s as HeadingAndCollapse,c as __namedExportsOrder,o as default};