import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-es1tv1o5.js";import{t as r}from"./next-DXrm-ReY.js";import{a as i,c as a,i as o,n as s,o as c}from"./overflow-helpers-CFuvIu03.js";var l,u,d,f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),r(),s(),{expect:l,waitFor:u}=__STORYBOOK_MODULE_TEST__,d={title:`Tests/Overflow menu trigger`},f=(e,t,n=`keydown`)=>e.dispatchEvent(new KeyboardEvent(n,{key:t,bubbles:!0,composed:!0,cancelable:!0})),p=e=>a(e).querySelector(`.more-button`)?.getAttribute(`aria-expanded`)===`true`,m=e=>a(e).querySelector(`.more`)?.hasAttribute(`opened`),h=e=>[...a(e).querySelectorAll(`.menu > cosmoz-tab-next`)],g={render:()=>i(`240px`),play:async({canvasElement:e,step:t})=>{let n=o(e);await t(`Escape-like dismissal restores the trigger`,async()=>{await u(()=>l(h(n).length).toBeGreaterThan(0)),a(n).querySelector(`.more-button`)?.click(),await u(()=>l(p(n)).toBe(!0)),a(n).querySelector(`.more`).opened=!1,await u(()=>l(p(n)).toBe(!1)),await u(()=>l(a(n).activeElement?.classList.contains(`more-button`)).toBe(!0))})}},_={render:()=>i(`240px`),play:async({canvasElement:e})=>{let t=o(e),n=[...t.querySelectorAll(`cosmoz-tab-next`)];await c(2),await u(()=>l(h(t).length).toBeGreaterThan(0)),a(t).querySelector(`.more-button`)?.click(),await new Promise(e=>requestAnimationFrame(e)),await new Promise(e=>requestAnimationFrame(e));let r=h(t)[1],i=[];n.forEach(e=>e.addEventListener(`click`,()=>i.push(e.getAttribute(`name`)))),r.focus(),l(a(t).activeElement).toBe(r),f(r,` `,`keydown`),await new Promise(e=>requestAnimationFrame(e)),l(i).toEqual([]),f(r,` `,`keyup`),await c(2),await u(()=>l(i).toEqual([r.getAttribute(`name`)]))}},v={render:()=>i(`240px`),play:async({canvasElement:e})=>{let t=o(e);await c(2),await u(()=>l(h(t).length).toBeGreaterThan(0));let n=a(t).querySelector(`.more-button`);l(n.getAttribute(`aria-haspopup`)).toBe(`true`),l(n.getAttribute(`aria-expanded`)).toBe(`false`),n.click(),await c(2),await u(()=>l(p(t)).toBe(!0)),l(m(t)).toBe(!0)}},y={render:()=>t`<div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next more-label="">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>`,play:async({canvasElement:e})=>{let t=o(e);await c(2),await u(()=>l(a(t).querySelector(`.more-button`)?.textContent?.trim()).toBe(`More`))}},b=[`DismissalHandsFocusBackToTheTrigger`,`SpacePicksOnKeyUpLikeANativeButton`,`TheTriggerAnnouncesItsPopup`,`AnEmptyLabelFallsBackToTheTranslation`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`dismissal hands focus back to the trigger; picking does not.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => nextFixture('240px'),
  play: async ({
    canvasElement
  }) => {
    const tabs = next(canvasElement),
      originals = [...tabs.querySelectorAll<HTMLElement>('cosmoz-tab-next')];
    await pump(2);
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
    await pump(2);
    await waitFor(() => expect(seen).toEqual([row.getAttribute('name')]));
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => nextFixture('240px'),
  play: async ({
    canvasElement
  }) => {
    const tabs = next(canvasElement);
    await pump(2);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    const button = sr(tabs).querySelector('.more-button') as HTMLElement;
    expect(button.getAttribute('aria-haspopup')).toBe('true');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    button.click();
    await pump(2);
    await waitFor(() => expect(expanded(tabs)).toBe(true));
    expect(opened(tabs)).toBe(true);
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    await pump(2);
    await waitFor(() => expect(sr(tabs).querySelector('.more-button')?.textContent?.trim()).toBe('More'));
  }
}`,...y.parameters?.docs?.source}}}})))()}x();export{y as AnEmptyLabelFallsBackToTheTranslation,g as DismissalHandsFocusBackToTheTrigger,_ as SpacePicksOnKeyUpLikeANativeButton,v as TheTriggerAnnouncesItsPopup,b as __namedExportsOrder,d as default};