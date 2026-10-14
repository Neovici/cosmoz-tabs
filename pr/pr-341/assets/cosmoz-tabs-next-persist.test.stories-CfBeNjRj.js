import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-vJHty9e1.js";import{c as r,s as i}from"./if-defined-BAEwhwvb.js";import{n as a,t as o}from"./use-hash-param-CtY9hGKG.js";import{a as s,i as c,t as l}from"./next-Dyk5ds9K.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{o(),i(),n(),l(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f=`cosmoz-tabs-persist-test`,p=[{name:`tab0`,title:`Tab0`,fallback:!0},{name:`tab1`,title:`Tab1`},{name:`tab2`,title:`Tab2`,persist:!1}],m=()=>{let e=s(p,{hashParam:`ptab`,persist:f});return t`<cosmoz-tabs-next>${c(e)}</cosmoz-tabs-next>`},customElements.get(`cosmoz-tabs-next-persist-test`)||customElements.define(`cosmoz-tabs-next-persist-test`,r(m)),h={title:`Tests/Tabs next persist`},g=({stored:e,hash:n=``})=>(e?localStorage.setItem(f,e):localStorage.removeItem(f),window.location.hash=n,t`<cosmoz-tabs-next-persist-test></cosmoz-tabs-next-persist-test>`),_=e=>e.querySelector(`cosmoz-tabs-next-persist-test`),v=(e,t)=>e.shadowRoot.querySelector(`cosmoz-tab-next[name="${t}"]`),y=e=>e.shadowRoot.querySelector(`cosmoz-tab-next[active]`)?.getAttribute(`name`),b=()=>{localStorage.removeItem(f),window.location.hash=``},x={render:()=>g({}),play:async({canvasElement:e})=>{let t=_(e);await d(()=>u(y(t)).toBe(`tab0`)),v(t,`tab1`).click(),await d(()=>u(y(t)).toBe(`tab1`)),u(localStorage.getItem(f)).toBe(`tab1`),b()}},S={render:()=>g({stored:`tab1`}),play:async({canvasElement:e})=>{let t=_(e);await d(()=>u(y(t)).toBe(`tab1`)),b()}},C={render:()=>g({}),play:async({canvasElement:e})=>{let t=_(e);v(t,`tab1`).click(),await d(()=>u(y(t)).toBe(`tab1`)),v(t,`tab2`).click(),await d(()=>u(y(t)).toBe(`tab2`)),u(localStorage.getItem(f)).toBe(`tab1`),b()}},w={render:()=>g({stored:`tab1`,hash:a(`ptab`,`tab2`)}),play:async({canvasElement:e})=>{let t=_(e);await d(()=>u(y(t)).toBe(`tab2`)),b()}},T=[`ClickIsRemembered`,`StoredTabOpens`,`OptedOutTabIsNotRemembered`,`HashWinsOverStored`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => fixture({}),
  play: async ({
    canvasElement
  }) => {
    const demo = getDemo(canvasElement);
    await waitFor(() => expect(activeName(demo)).toBe('tab0'));
    header(demo, 'tab1').click();
    await waitFor(() => expect(activeName(demo)).toBe('tab1'));
    expect(localStorage.getItem(KEY)).toBe('tab1');
    cleanup();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => fixture({
    stored: 'tab1'
  }),
  play: async ({
    canvasElement
  }) => {
    const demo = getDemo(canvasElement);
    await waitFor(() => expect(activeName(demo)).toBe('tab1'));
    cleanup();
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => fixture({}),
  play: async ({
    canvasElement
  }) => {
    const demo = getDemo(canvasElement);
    header(demo, 'tab1').click();
    await waitFor(() => expect(activeName(demo)).toBe('tab1'));
    header(demo, 'tab2').click();
    await waitFor(() => expect(activeName(demo)).toBe('tab2'));
    expect(localStorage.getItem(KEY)).toBe('tab1');
    cleanup();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => fixture({
    stored: 'tab1',
    hash: link('ptab', 'tab2')!
  }),
  play: async ({
    canvasElement
  }) => {
    const demo = getDemo(canvasElement);
    await waitFor(() => expect(activeName(demo)).toBe('tab2'));
    cleanup();
  }
}`,...w.parameters?.docs?.source}}}})))()}E();export{x as ClickIsRemembered,w as HashWinsOverStored,C as OptedOutTabIsNotRemembered,S as StoredTabOpens,T as __namedExportsOrder,h as default};