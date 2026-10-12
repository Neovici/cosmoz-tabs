import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-BKrKWFYT.js";import{c as r,s as i}from"./if-defined-yLBIHD02.js";import{a,i as o,n as s,t as c}from"./next-CU-dP7VP.js";import{c as l,n as u}from"./overflow-helpers-DdNugyUe.js";var d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{i(),n(),c(),s(),u(),{expect:d,waitFor:f}=__STORYBOOK_MODULE_TEST__,p={title:`Tests/Tabs keys (next)`},m=[{name:`overview`,title:`Overview`},{name:`rows`,title:`Invoice rows`},{name:`plain`,title:`Hidden one`,hidden:!0},{name:`settings`,title:`Settings`,disabled:!0},{name:`history`,title:`History`}],h=()=>{let e=a(m);return t`<cosmoz-tabs-next>${o(e)}</cosmoz-tabs-next>`},customElements.get(`cosmoz-tabs-next-keys-test`)||customElements.define(`cosmoz-tabs-next-keys-test`,r(h)),g=(e,t)=>e.dispatchEvent(new KeyboardEvent(`keydown`,{key:t,bubbles:!0})),_=()=>t`
    <cosmoz-tabs-next-keys-test></cosmoz-tabs-next-keys-test>
`,v={render:_,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-next-keys-test`),r=n.shadowRoot.querySelector(`cosmoz-tabs-next`),i=e=>r.querySelector(`cosmoz-tab-next[name="${e}"]`),a=()=>n.shadowRoot.activeElement;await f(()=>d(i(`overview`).hasAttribute(`active`)).toBe(!0)),await t(`arrow-right picks the next shown member, stop and all`,async()=>{i(`overview`).focus(),g(i(`overview`),`ArrowRight`),await f(()=>d(i(`rows`).hasAttribute(`active`)).toBe(!0)),d(a()).toBe(i(`rows`)),d(i(`rows`).getAttribute(`tabindex`)).toBe(`0`),d(i(`overview`).getAttribute(`tabindex`)).toBe(`-1`)}),await t(`the walk skips the hidden and the disabled`,async()=>{g(i(`rows`),`ArrowRight`),await f(()=>d(i(`history`).hasAttribute(`active`)).toBe(!0)),d(a()).toBe(i(`history`)),d(i(`settings`).hasAttribute(`active`)).toBe(!1)}),await t(`the band clamps - no wrap`,async()=>{g(i(`history`),`ArrowRight`),d(a()).toBe(i(`history`)),d(i(`history`).hasAttribute(`active`)).toBe(!0),g(i(`history`),`ArrowLeft`),await f(()=>d(i(`rows`).hasAttribute(`active`)).toBe(!0)),d(a()).toBe(i(`rows`))})}},y={render:_,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-next-keys-test`).shadowRoot.querySelector(`cosmoz-tabs-next`),r=e=>n.querySelector(`cosmoz-tab-next[name="${e}"]`);await f(()=>d(r(`overview`).hasAttribute(`active`)).toBe(!0)),await t(`Home is the band's first shown member`,async()=>{r(`rows`).focus(),g(r(`rows`),`Home`),await f(()=>d(r(`overview`).hasAttribute(`active`)).toBe(!0))}),await t(`End is its last shown member`,async()=>{g(r(`overview`),`End`),await f(()=>d(r(`history`).hasAttribute(`active`)).toBe(!0)),d(r(`settings`).hasAttribute(`active`)).toBe(!1)})}},b={render:_,play:async({canvasElement:e,step:t})=>{let n=e.querySelector(`cosmoz-tabs-next-keys-test`),r=n.shadowRoot.querySelector(`cosmoz-tabs-next`),i=e=>r.querySelector(`cosmoz-tab-next[name="${e}"]`);await f(()=>d(i(`overview`).hasAttribute(`active`)).toBe(!0)),await t(`a key from outside the bar's members is no walk`,async()=>{g(n,`ArrowRight`),g(r,`ArrowRight`),d(n.shadowRoot.activeElement).toBeNull(),await l(),d(i(`rows`).hasAttribute(`active`)).toBe(!1),d(i(`overview`).hasAttribute(`active`)).toBe(!0)})}},x=[`TheArrowsRoveAndPick`,`HomeAndEndWalkTheBand`,`KeysOutsideTheBarDoNotRove`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: keysFixture,
  play: async ({
    canvasElement,
    step
  }) => {
    const demo = canvasElement.querySelector('cosmoz-tabs-next-keys-test') as HTMLElement,
      bar = demo.shadowRoot.querySelector('cosmoz-tabs-next') as HTMLElement,
      tab = (name: string) => bar.querySelector(\`cosmoz-tab-next[name="\${name}"]\`) as HTMLElement,
      focused = () => demo.shadowRoot.activeElement as HTMLElement;
    await waitFor(() => expect(tab('overview').hasAttribute('active')).toBe(true));
    await step('arrow-right picks the next shown member, stop and all', async () => {
      tab('overview').focus();
      press(tab('overview'), 'ArrowRight');
      await waitFor(() => expect(tab('rows').hasAttribute('active')).toBe(true));
      expect(focused()).toBe(tab('rows'));
      expect(tab('rows').getAttribute('tabindex')).toBe('0');
      expect(tab('overview').getAttribute('tabindex')).toBe('-1');
    });
    await step('the walk skips the hidden and the disabled', async () => {
      press(tab('rows'), 'ArrowRight');
      await waitFor(() => expect(tab('history').hasAttribute('active')).toBe(true));
      expect(focused()).toBe(tab('history'));
      expect(tab('settings').hasAttribute('active')).toBe(false);
    });
    await step('the band clamps - no wrap', async () => {
      press(tab('history'), 'ArrowRight');
      // the walk moves focus synchronously: home still has it
      expect(focused()).toBe(tab('history'));
      expect(tab('history').hasAttribute('active')).toBe(true);
      press(tab('history'), 'ArrowLeft');
      await waitFor(() => expect(tab('rows').hasAttribute('active')).toBe(true));
      expect(focused()).toBe(tab('rows'));
    });
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: keysFixture,
  play: async ({
    canvasElement,
    step
  }) => {
    const demo = canvasElement.querySelector('cosmoz-tabs-next-keys-test') as HTMLElement,
      bar = demo.shadowRoot.querySelector('cosmoz-tabs-next') as HTMLElement,
      tab = (name: string) => bar.querySelector(\`cosmoz-tab-next[name="\${name}"]\`) as HTMLElement;
    await waitFor(() => expect(tab('overview').hasAttribute('active')).toBe(true));
    await step('Home is the band\\'s first shown member', async () => {
      tab('rows').focus();
      press(tab('rows'), 'Home');
      await waitFor(() => expect(tab('overview').hasAttribute('active')).toBe(true));
    });
    await step('End is its last shown member', async () => {
      press(tab('overview'), 'End');
      await waitFor(() => expect(tab('history').hasAttribute('active')).toBe(true));
      expect(tab('settings').hasAttribute('active')).toBe(false);
    });
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: keysFixture,
  play: async ({
    canvasElement,
    step
  }) => {
    const demo = canvasElement.querySelector('cosmoz-tabs-next-keys-test') as HTMLElement,
      bar = demo.shadowRoot.querySelector('cosmoz-tabs-next') as HTMLElement,
      tab = (name: string) => bar.querySelector(\`cosmoz-tab-next[name="\${name}"]\`) as HTMLElement;
    await waitFor(() => expect(tab('overview').hasAttribute('active')).toBe(true));
    await step('a key from outside the bar\\'s members is no walk', async () => {
      press(demo, 'ArrowRight');
      press(bar, 'ArrowRight');
      // the walk would have moved focus synchronously
      expect(demo.shadowRoot.activeElement).toBeNull();
      await settle();
      expect(tab('rows').hasAttribute('active')).toBe(false);
      expect(tab('overview').hasAttribute('active')).toBe(true);
    });
  }
}`,...b.parameters?.docs?.source}}}})))()}S();export{y as HomeAndEndWalkTheBand,b as KeysOutsideTheBarDoNotRove,v as TheArrowsRoveAndPick,x as __namedExportsOrder,p as default};