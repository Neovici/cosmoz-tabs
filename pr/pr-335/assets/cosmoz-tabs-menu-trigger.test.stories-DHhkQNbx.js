import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-DdYlncx5.js";import{t as r}from"./next-uXa4_oKM.js";import{a as i,c as a,i as o,l as s,n as c,o as l}from"./overflow-helpers-DLaqpx3x.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),r(),c(),{expect:u,waitFor:d}=__STORYBOOK_MODULE_TEST__,f={title:`Tests/Overflow menu trigger`},p=(e,t,n=`keydown`)=>e.dispatchEvent(new KeyboardEvent(n,{key:t,bubbles:!0,composed:!0,cancelable:!0})),m=e=>a(e).querySelector(`.more-button`)?.getAttribute(`aria-expanded`)===`true`,h=e=>a(e).querySelector(`.more`)?.hasAttribute(`opened`),g=e=>[...a(e).querySelectorAll(`.menu > cosmoz-tab-next`)],_={render:()=>i(`240px`),play:async({canvasElement:e,step:t})=>{let n=o(e);await t(`Escape-like dismissal restores the trigger`,async()=>{await d(()=>u(g(n).length).toBeGreaterThan(0)),a(n).querySelector(`.more-button`)?.click(),await d(()=>u(m(n)).toBe(!0)),a(n).querySelector(`.more`).opened=!1,await d(()=>u(m(n)).toBe(!1)),await d(()=>u(a(n).activeElement?.classList.contains(`more-button`)).toBe(!0))})}},v={render:()=>i(`240px`),play:async({canvasElement:e})=>{let t=o(e),n=[...t.querySelectorAll(`cosmoz-tab-next`)];await l(2),await d(()=>u(g(t).length).toBeGreaterThan(0)),a(t).querySelector(`.more-button`)?.click(),await new Promise(e=>requestAnimationFrame(e)),await new Promise(e=>requestAnimationFrame(e));let r=g(t)[1],i=[];n.forEach(e=>e.addEventListener(`click`,()=>i.push(e.getAttribute(`name`)))),r.focus(),u(a(t).activeElement).toBe(r),p(r,` `,`keydown`),await new Promise(e=>requestAnimationFrame(e)),u(i).toEqual([]),p(r,` `,`keyup`),await l(2),await d(()=>u(i).toEqual([r.getAttribute(`name`)]))}},y={render:()=>i(`240px`),play:async({canvasElement:e})=>{let t=o(e);await l(2),await d(()=>u(g(t).length).toBeGreaterThan(0));let n=a(t).querySelector(`.more-button`);u(n.getAttribute(`aria-haspopup`)).toBe(`true`),u(n.getAttribute(`aria-expanded`)).toBe(`false`),n.click(),await l(2),await d(()=>u(m(t)).toBe(!0)),u(h(t)).toBe(!0)}},b={render:()=>i(`240px`),play:async({canvasElement:e,step:t})=>{let n=o(e);await l(2),await d(()=>u(g(n).length).toBeGreaterThan(0)),await t(`the trigger is painted inside the clip band`,async()=>{let e=a(n).querySelector(`slot:not([name])`).getBoundingClientRect(),t=s(n),r=t.getBoundingClientRect();u(document.defaultView?.getComputedStyle(t).visibility).toBe(`visible`),u(r.top).toBeGreaterThanOrEqual(e.top-.5),u(r.bottom).toBeLessThanOrEqual(e.bottom+.5),u(r.height).toBeGreaterThan(0)}),await t(`a real click opens the menu`,async()=>{await null.click(s(n)),await d(()=>u(m(n)).toBe(!0)),u(h(n)).toBe(!0)}),await t(`a real Escape dismisses and restores the focus`,async()=>{await null.keyboard(`{Escape}`),await d(()=>u(m(n)).toBe(!1)),await d(()=>u(a(n).activeElement?.classList.contains(`more-button`)).toBe(!0))})}},x={render:()=>t`<div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next more-label="">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>`,play:async({canvasElement:e})=>{let t=o(e);await l(2),await d(()=>u(a(t).querySelector(`.more-button`)?.textContent?.trim()).toBe(`More`))}},S=[`DismissalHandsFocusBackToTheTrigger`,`SpacePicksOnKeyUpLikeANativeButton`,`TheTriggerAnnouncesItsPopup`,`TheTriggerIsReachableByARealClick`,`AnEmptyLabelFallsBackToTheTranslation`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source},description:{story:`dismissal hands focus back to the trigger; picking does not.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => nextFixture('240px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = next(canvasElement);
    await pump(2);
    await waitFor(() => expect(copies(tabs).length).toBeGreaterThan(0));
    await step('the trigger is painted inside the clip band', async () => {
      const band = sr(tabs).querySelector('slot:not([name])') as HTMLSlotElement;
      const b = band.getBoundingClientRect();
      const button = trigger(tabs);
      const t = button.getBoundingClientRect();
      expect(document.defaultView?.getComputedStyle(button).visibility).toBe('visible');
      expect(t.top).toBeGreaterThanOrEqual(b.top - 0.5);
      expect(t.bottom).toBeLessThanOrEqual(b.bottom + 0.5);
      expect(t.height).toBeGreaterThan(0);
    });
    await step('a real click opens the menu', async () => {
      await driverUserEvent.click(trigger(tabs));
      await waitFor(() => expect(expanded(tabs)).toBe(true));
      expect(opened(tabs)).toBe(true);
    });
    await step('a real Escape dismisses and restores the focus', async () => {
      await driverUserEvent.keyboard('{Escape}');
      await waitFor(() => expect(expanded(tabs)).toBe(false));
      await waitFor(() => expect(sr(tabs).activeElement?.classList.contains('more-button')).toBe(true));
    });
  }
}`,...b.parameters?.docs?.source},description:{story:`the trigger sits in the bar's first row: a real click has to reach it.
the regression that motivated this pin: the trigger wrapped below the
host's own clip band exactly when the menu was needed - invisible and
unhittable for users, invisible to programmatic clicks too.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as AnEmptyLabelFallsBackToTheTranslation,_ as DismissalHandsFocusBackToTheTrigger,v as SpacePicksOnKeyUpLikeANativeButton,y as TheTriggerAnnouncesItsPopup,b as TheTriggerIsReachableByARealClick,S as __namedExportsOrder,f as default};