import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{c as t,s as n}from"./iframe-Cf16ebFM.js";import{c as r,s as i}from"./if-defined-3tWnuAo1.js";import{n as a,t as o}from"./cosmoz-tabs-CHmzzP90.js";import{o as s,s as c}from"./dist-DQ8Uly9V.js";var l,u,d,f,p;function m(){return(m=e((()=>{i(),t(),a(),s(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,customElements.define(`custom-header-tabs`,r(e=>o(e,e=>n`
                    <header>
                        <slot name="heading"></slot>
                        <nav role="tablist">${e}</nav>
                    </header>
                `),{observedAttributes:[`selected`,`hash-param`],styleSheets:[c]})),d={title:`Tests/Tabs custom header`},f={render:()=>n`<custom-header-tabs>
            <span slot="heading">Orders</span>
            <cosmoz-tab name="list" heading="List">List contents</cosmoz-tab>
            <cosmoz-tab name="details" heading="Details">Details contents</cosmoz-tab>
        </custom-header-tabs>`,play:async({canvasElement:e})=>{let t=e.querySelector(`custom-header-tabs`);await u(()=>l(t.shadowRoot.querySelectorAll(`header [role=tab]`)).toHaveLength(2)),l(t.shadowRoot.querySelector(`.tabs`)).toBeNull(),t.shadowRoot.querySelectorAll(`[role=tab]`)[1].click(),await u(()=>l(t.querySelector(`[name=details]`)).toHaveAttribute(`is-selected`))}},p=[`PreservesSelection`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => html\`<custom-header-tabs>
            <span slot="heading">Orders</span>
            <cosmoz-tab name="list" heading="List">List contents</cosmoz-tab>
            <cosmoz-tab name="details" heading="Details">Details contents</cosmoz-tab>
        </custom-header-tabs>\`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector('custom-header-tabs')!;
    await waitFor(() => expect(host.shadowRoot!.querySelectorAll('header [role=tab]')).toHaveLength(2));
    expect(host.shadowRoot!.querySelector('.tabs')).toBeNull();
    host.shadowRoot!.querySelectorAll<HTMLElement>('[role=tab]')[1].click();
    await waitFor(() => expect(host.querySelector('[name=details]')).toHaveAttribute('is-selected'));
  }
}`,...f.parameters?.docs?.source}}}})))()}m();export{f as PreservesSelection,p as __namedExportsOrder,d as default};