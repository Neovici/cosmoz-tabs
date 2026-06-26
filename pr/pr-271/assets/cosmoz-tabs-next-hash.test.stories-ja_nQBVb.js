import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-l1zHrOt5.js";import{a as r,o as i}from"./if-defined-CcxirRVb.js";import{i as a,r as o}from"./dist-D_ma8Dom.js";import{a as s,i as c,t as l}from"./next-BKHnYXiw.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{o(),r(),n(),l(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f=[{name:`tab0`,title:`Tab0`},{name:`tab1`,title:`Tab1`},{name:`tab2`,title:`Tab2`}],p=()=>t`<cosmoz-tabs-next>${c(s(f,{hashParam:`ntab`}))}</cosmoz-tabs-next>`,customElements.get(`cosmoz-tabs-next-hash-test`)||customElements.define(`cosmoz-tabs-next-hash-test`,i(p)),m={title:`Tests/Tabs next hash routing`},h=()=>t`<cosmoz-tabs-next-hash-test></cosmoz-tabs-next-hash-test>`,g=e=>e.querySelector(`cosmoz-tabs-next-hash-test`),_=e=>e.shadowRoot.querySelectorAll(`cosmoz-tab-next`),v=e=>e.shadowRoot.querySelector(`cosmoz-tab-next[active]`)?.getAttribute(`name`),y={render:()=>h(),play:async({canvasElement:e})=>{window.location.hash=``;let t=g(e);await d(()=>u(v(t)).toBe(`tab0`)),_(t)[1].click(),await d(()=>u(v(t)).toBe(`tab1`)),u(window.location.hash).toContain(`ntab=tab1`),_(t)[0].click(),await d(()=>u(v(t)).toBe(`tab0`)),window.location.hash=``}},b={render:()=>h(),play:async({canvasElement:e})=>{window.location.hash=``;let t=g(e);await d(()=>u(v(t)).toBe(`tab0`)),window.location.hash=a(`ntab`,`tab2`),await d(()=>u(v(t)).toBe(`tab2`)),window.location.hash=``}},x={render:()=>h(),play:async({canvasElement:e})=>{window.location.hash=``;let t=g(e);await d(()=>u(v(t)).toBe(`tab0`)),window.location.hash=a(`ntab`,`nope`),await d(()=>u(v(t)).toBe(`tab0`)),window.location.hash=``}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    window.location.hash = '';
    const demo = getDemo(canvasElement);
    await waitFor(() => expect(activeName(demo)).toBe('tab0'));
    headers(demo)[1].click();
    await waitFor(() => expect(activeName(demo)).toBe('tab1'));
    expect(window.location.hash).toContain('ntab=tab1');
    headers(demo)[0].click();
    await waitFor(() => expect(activeName(demo)).toBe('tab0'));
    window.location.hash = '';
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    window.location.hash = '';
    const demo = getDemo(canvasElement);
    await waitFor(() => expect(activeName(demo)).toBe('tab0'));
    window.location.hash = link('ntab', 'tab2')!;
    await waitFor(() => expect(activeName(demo)).toBe('tab2'));
    window.location.hash = '';
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => fixture(),
  play: async ({
    canvasElement
  }) => {
    window.location.hash = '';
    const demo = getDemo(canvasElement);
    await waitFor(() => expect(activeName(demo)).toBe('tab0'));
    window.location.hash = link('ntab', 'nope')!;
    await waitFor(() => expect(activeName(demo)).toBe('tab0'));
    window.location.hash = '';
  }
}`,...x.parameters?.docs?.source}}},S=[`SelectionUpdatesHash`,`HashUpdatesSelection`,`InvalidHashFallsBack`]}))();export{b as HashUpdatesSelection,x as InvalidHashFallsBack,y as SelectionUpdatesHash,S as __namedExportsOrder,m as default};