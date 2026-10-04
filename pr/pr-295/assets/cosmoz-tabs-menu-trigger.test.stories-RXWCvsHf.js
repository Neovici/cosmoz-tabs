import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-DlcEHjqf.js";import{t as r}from"./next-Byy_h0mg.js";import{a as i,c as a,i as o,n as s}from"./overflow-helpers-WGKXL7Md.js";var c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),r(),s(),{expect:c,waitFor:l}=__STORYBOOK_MODULE_TEST__,u={title:`Tests/Overflow menu trigger`},d=(e,t,n=`keydown`)=>e.dispatchEvent(new KeyboardEvent(n,{key:t,bubbles:!0,composed:!0,cancelable:!0})),f=e=>a(e).querySelector(`.more-button`)?.getAttribute(`aria-expanded`)===`true`,p=e=>a(e).querySelector(`.more`)?.hasAttribute(`opened`),m=e=>[...a(e).querySelectorAll(`.menu > cosmoz-tab-next`)],h={render:()=>i(`240px`),play:async({canvasElement:e,step:t})=>{let n=o(e);await t(`Escape-like dismissal restores the trigger`,async()=>{await l(()=>c(m(n).length).toBeGreaterThan(0)),a(n).querySelector(`.more-button`)?.click(),await l(()=>c(f(n)).toBe(!0)),a(n).querySelector(`.more`).opened=!1,await l(()=>c(f(n)).toBe(!1)),await l(()=>c(a(n).activeElement?.classList.contains(`more-button`)).toBe(!0))})}},g={render:()=>i(`240px`),play:async({canvasElement:e})=>{let t=o(e),n=[...t.querySelectorAll(`cosmoz-tab-next`)];await l(()=>c(m(t).length).toBeGreaterThan(0)),a(t).querySelector(`.more-button`)?.click(),await new Promise(e=>requestAnimationFrame(e)),await new Promise(e=>requestAnimationFrame(e));let r=m(t)[1],i=[];n.forEach(e=>e.addEventListener(`click`,()=>i.push(e.getAttribute(`name`)))),r.focus(),c(a(t).activeElement).toBe(r),d(r,` `,`keydown`),await new Promise(e=>requestAnimationFrame(e)),c(i).toEqual([]),d(r,` `,`keyup`),await l(()=>c(i).toEqual([r.getAttribute(`name`)]))}},_={render:()=>i(`240px`),play:async({canvasElement:e})=>{let t=o(e);await l(()=>c(m(t).length).toBeGreaterThan(0));let n=a(t).querySelector(`.more-button`);c(n.getAttribute(`aria-haspopup`)).toBe(`true`),c(n.getAttribute(`aria-expanded`)).toBe(`false`),n.click(),await l(()=>c(f(t)).toBe(!0)),c(p(t)).toBe(!0)}},v={render:()=>t`<div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next more-label="">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>`,play:async({canvasElement:e})=>{let t=o(e);await l(()=>c(a(t).querySelector(`.more-button`)?.textContent?.trim()).toBe(`More`))}},y=[`DismissalHandsFocusBackToTheTrigger`,`SpacePicksOnKeyUpLikeANativeButton`,`TheTriggerAnnouncesItsPopup`,`AnEmptyLabelFallsBackToTheTranslation`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => nextFixture('240px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await step('Escape-like dismissal restores the trigger', async () => {
      await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
      sr(tabs).querySelector<HTMLButtonElement>('.more-button')?.click();
      await waitFor(() => expect(expanded(tabs)).toBe(true));
      (sr(tabs).querySelector('.more') as HTMLElement & {
        opened?: boolean;
        shadowRoot?: ShadowRoot;
      }).opened = false;
      await waitFor(() => expect(expanded(tabs)).toBe(false));
      await waitFor(() => expect(sr(tabs).activeElement?.classList.contains('more-button')).toBe(true));
    });
  }
}`,...h.parameters?.docs?.source},description:{story:`dismissal hands focus back to the trigger; picking does not.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => nextFixture('240px'),
  play: async ({
    canvasElement
  }) => {
    const tabs = next(canvasElement),
      originals = [...tabs.querySelectorAll<HTMLElement>('cosmoz-tab-next')];
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    sr(tabs).querySelector<HTMLButtonElement>('.more-button')?.click();
    // let the open settle before interacting
    await new Promise(r => requestAnimationFrame(r));
    await new Promise(r => requestAnimationFrame(r));
    const row = copies(tabs)[1] as HTMLElement,
      seen: string[] = [];
    originals.forEach(tab => tab.addEventListener('click', () => seen.push(tab.getAttribute('name')!)));
    row.focus();
    expect(sr(tabs).activeElement).toBe(row);
    /** Space keydown only prevents the page scroll; the pick is on keyup */
    key(row, ' ', 'keydown');
    await new Promise(r => requestAnimationFrame(r));
    expect(seen).toEqual([]);
    key(row, ' ', 'keyup');
    await waitFor(() => expect(seen).toEqual([row.getAttribute('name')]));
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => nextFixture('240px'),
  play: async ({
    canvasElement
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    const button = sr(tabs).querySelector('.more-button') as HTMLElement;
    expect(button.getAttribute('aria-haspopup')).toBe('true');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    await waitFor(() => expect(expanded(tabs)).toBe(true));
    expect(opened(tabs)).toBe(true);
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => html\`<div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next more-label="">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>\`,
  play: async ({
    canvasElement
  }) => {
    const tabs = next(canvasElement);
    await waitFor(() => expect(sr(tabs).querySelector('.more-button')?.textContent?.trim()).toBe('More'));
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{v as AnEmptyLabelFallsBackToTheTranslation,h as DismissalHandsFocusBackToTheTrigger,g as SpacePicksOnKeyUpLikeANativeButton,_ as TheTriggerAnnouncesItsPopup,y as __namedExportsOrder,u as default};