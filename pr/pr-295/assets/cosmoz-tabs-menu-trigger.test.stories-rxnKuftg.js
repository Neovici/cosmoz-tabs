import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-Cdvi9uWS.js";import{t as r}from"./cosmoz-tabs-v3YGL7cr.js";import{t as i}from"./next-B0zd65zo.js";import{a,c as o,d as s,i as c,m as l,p as u,r as d,s as f}from"./overflow-helpers-CEAflxvQ.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),r(),i(),c(),{expect:p,waitFor:m}=__STORYBOOK_MODULE_TEST__,h={title:`Tests/Overflow menu trigger`},g=(e,t)=>e.dispatchEvent(new KeyboardEvent(`keydown`,{key:t,bubbles:!0,composed:!0,cancelable:!0})),_=e=>l(e).getAttribute(`aria-expanded`)===`true`,v=e=>u(e).querySelector(`.more`)?.hasAttribute(`opened`),y=e=>[...u(e).querySelectorAll(`.menu > cosmoz-tab-next`)],b=[{name:`legacy`,get:a,items:e=>[...s(e)]},{name:`next`,get:f,items:y}],x=()=>t`${d(`260px`)}${o(`240px`)}`,S={render:x,play:async({canvasElement:e,step:t})=>{for(let{name:n,get:r,items:i}of b){let a=r(e);await m(()=>p(i(a).length).toBeGreaterThan(0)),await t(`${n}: Enter on a focused row`,async()=>{l(a).click(),await m(()=>p(_(a)).toBe(!0));let e=i(a).at(-1);e.focus(),p(u(a).activeElement).toBe(e),g(e,`Enter`),await m(()=>p(_(a)).toBe(!1)),await m(()=>p(u(a).activeElement).toBe(l(a)))})}}},C={render:x,play:async({canvasElement:e,step:t})=>{for(let{name:n,get:r,items:i}of b){let a=r(e);await m(()=>p(i(a).length).toBeGreaterThan(0)),await t(`${n}: the trigger announces its popup`,()=>{let e=l(a);p(e.getAttribute(`aria-haspopup`)).toBe(`true`);let t=e.getAttribute(`aria-controls`);p(u(a).getElementById(t)).toBe(u(a).querySelector(`.menu`))}),await t(`${n}: ArrowDown opens on the first row`,async()=>{l(a).focus(),g(l(a),`ArrowDown`),await m(()=>p(v(a)).toBe(!0)),await m(()=>p(u(a).activeElement).toBe(i(a)[0])),u(a).querySelector(`.more`).opened=!1,await m(()=>p(v(a)).toBe(!1))}),await t(`${n}: ArrowUp opens on the last row`,async()=>{l(a).focus(),g(l(a),`ArrowUp`),await m(()=>p(v(a)).toBe(!0)),await m(()=>p(u(a).activeElement).toBe(i(a).at(-1))),u(a).querySelector(`.more`).opened=!1,await m(()=>p(v(a)).toBe(!1))})}}},w={render:()=>d(`260px`),play:async({canvasElement:e,step:t})=>{let n=a(e);await m(()=>p(s(n).length).toBeGreaterThan(0)),l(n).click(),await m(()=>p(v(n)).toBe(!0)),await t(`a ctrl-click neither selects nor closes`,async()=>{let e=n.selected;s(n)[0].dispatchEvent(new MouseEvent(`click`,{ctrlKey:!0,bubbles:!0,cancelable:!0})),await new Promise(requestAnimationFrame),p(v(n)).toBe(!0),p(n.selected).toBe(e)})}},T={render:()=>t`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs more-label="">
                <cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
                <cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
                <cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
                <cosmoz-tab name="history" heading="History"></cosmoz-tab>
            </cosmoz-tabs>
        </div>
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next more-label="">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    `,play:async({canvasElement:e})=>{for(let{get:t}of b){let n=t(e);await m(()=>p(l(n).textContent?.trim()).toBe(`More`))}}},E=[`KeyboardPickHandsFocusBackToTheTrigger`,`ArrowKeysOnTheTriggerOpenTheMenu`,`ModifiedClicksLeaveTheLegacyMenuOpen`,`AnEmptyLabelFallsBackToTheTranslation`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: both,
  play: async ({
    canvasElement,
    step
  }) => {
    for (const {
      name,
      get,
      items
    } of families) {
      const tabs = get(canvasElement) as HTMLElement;
      await waitFor(() => expect(items(tabs).length).toBeGreaterThan(0));
      await step(\`\${name}: Enter on a focused row\`, async () => {
        trigger(tabs).click();
        await waitFor(() => expect(expanded(tabs)).toBe(true));
        const row = items(tabs).at(-1) as HTMLElement;
        row.focus();
        expect(sr(tabs).activeElement).toBe(row);
        key(row, 'Enter');
        await waitFor(() => expect(expanded(tabs)).toBe(false));
        await waitFor(() => expect(sr(tabs).activeElement).toBe(trigger(tabs)));
      });
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: both,
  play: async ({
    canvasElement,
    step
  }) => {
    for (const {
      name,
      get,
      items
    } of families) {
      const tabs = get(canvasElement) as HTMLElement;
      await waitFor(() => expect(items(tabs).length).toBeGreaterThan(0));
      await step(\`\${name}: the trigger announces its popup\`, () => {
        const button = trigger(tabs);
        expect(button.getAttribute('aria-haspopup')).toBe('true');
        const controls = button.getAttribute('aria-controls')!;
        expect(sr(tabs).getElementById(controls)).toBe(sr(tabs).querySelector('.menu'));
      });
      await step(\`\${name}: ArrowDown opens on the first row\`, async () => {
        trigger(tabs).focus();
        key(trigger(tabs), 'ArrowDown');
        await waitFor(() => expect(opened(tabs)).toBe(true));
        await waitFor(() => expect(sr(tabs).activeElement).toBe(items(tabs)[0]));
        (sr(tabs).querySelector('.more') as HTMLElement & {
          opened: boolean;
        }).opened = false;
        await waitFor(() => expect(opened(tabs)).toBe(false));
      });
      await step(\`\${name}: ArrowUp opens on the last row\`, async () => {
        trigger(tabs).focus();
        key(trigger(tabs), 'ArrowUp');
        await waitFor(() => expect(opened(tabs)).toBe(true));
        await waitFor(() => expect(sr(tabs).activeElement).toBe(items(tabs).at(-1)));
        (sr(tabs).querySelector('.more') as HTMLElement & {
          opened: boolean;
        }).opened = false;
        await waitFor(() => expect(opened(tabs)).toBe(false));
      });
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => fixture('260px'),
  play: async ({
    canvasElement,
    step
  }) => {
    const tabs = legacy(canvasElement);
    await waitFor(() => expect(rows(tabs).length).toBeGreaterThan(0));
    trigger(tabs).click();
    await waitFor(() => expect(opened(tabs)).toBe(true));
    await step('a ctrl-click neither selects nor closes', async () => {
      const before = (tabs as HTMLElement & {
        selected?: string;
      }).selected;
      rows(tabs)[0].dispatchEvent(new MouseEvent('click', {
        ctrlKey: true,
        bubbles: true,
        cancelable: true
      }));
      await new Promise(requestAnimationFrame);
      expect(opened(tabs)).toBe(true);
      expect((tabs as HTMLElement & {
        selected?: string;
      }).selected).toBe(before);
    });
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => html\`
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs more-label="">
                <cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
                <cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
                <cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
                <cosmoz-tab name="history" heading="History"></cosmoz-tab>
            </cosmoz-tabs>
        </div>
        <div class="box" style="width: 240px; overflow: hidden;">
            <cosmoz-tabs-next more-label="">
                <cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
                <cosmoz-tab-next name="rows">Invoice rows</cosmoz-tab-next>
                <cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
                <cosmoz-tab-next name="history">History</cosmoz-tab-next>
            </cosmoz-tabs-next>
        </div>
    \`,
  play: async ({
    canvasElement
  }) => {
    for (const {
      get
    } of families) {
      const tabs = get(canvasElement) as HTMLElement;
      await waitFor(() => expect(trigger(tabs).textContent?.trim()).toBe('More'));
    }
  }
}`,...T.parameters?.docs?.source}}}})))()}D();export{T as AnEmptyLabelFallsBackToTheTranslation,C as ArrowKeysOnTheTriggerOpenTheMenu,S as KeyboardPickHandsFocusBackToTheTrigger,w as ModifiedClicksLeaveTheLegacyMenuOpen,E as __namedExportsOrder,h as default};