import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-Cdvi9uWS.js";var r,i,a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),r=e=>e.querySelector(`.box`),i=async(e=4)=>{for(let t=0;t<e;t++)await new Promise(requestAnimationFrame)},a=e=>e.querySelector(`cosmoz-tabs`),o=e=>e.querySelector(`cosmoz-tabs-next`),s=e=>e.shadowRoot,c=async e=>{let t=window.gc;if(!t)throw Error(`window.gc is unavailable: run with --js-flags=--expose-gc`);for(let e=0;e<5;e++)t(),await new Promise(e=>setTimeout(e,30));return e.filter(e=>e.deref()).length},l=e=>s(e).querySelectorAll(`.items > .tab[overflowing]`),u=e=>s(e).querySelectorAll(`.menu .menu-item`),d=e=>s(e).querySelector(`.more`),f=e=>s(e).querySelector(`.more-button`),p=e=>{let t=s(e).querySelector(`.items`).getBoundingClientRect();return[...s(e).querySelectorAll(`.items > .tab`)].filter(e=>{let n=e.getBoundingClientRect();return n.width>0&&n.left>=t.left-1&&n.right<=t.right+1}).length+u(e).length},m=(e,n=t``)=>t`
	<div class="box" style="width: ${e}; overflow: hidden;">
		<cosmoz-tabs variant="underline">
			<cosmoz-tab name="overview" heading="Overview"></cosmoz-tab>
			<cosmoz-tab name="rows" heading="Invoice rows"></cosmoz-tab>
			<cosmoz-tab name="accounting" heading="Accounting"></cosmoz-tab>
			<cosmoz-tab name="history" heading="History"></cosmoz-tab>
			<cosmoz-tab name="attachments" heading="Attachments"></cosmoz-tab>
			${n}
		</cosmoz-tabs>
	</div>
`,h=(e,n=t``)=>t`
	<div class="box" style="width: ${e}; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			${n}
			<cosmoz-tab-next name="overview" active>Overview</cosmoz-tab-next>
			<cosmoz-tab-next name="rows" badge="5">Invoice rows</cosmoz-tab-next>
			<cosmoz-tab-next name="accounting">Accounting</cosmoz-tab-next>
			<cosmoz-tab-next name="history">History</cosmoz-tab-next>
			<cosmoz-tab-next name="attachments">Attachments</cosmoz-tab-next>
		</cosmoz-tabs-next>
	</div>
`})))()}export{a,h as c,u as d,i as f,g as i,p as l,f as m,l as n,d as o,s as p,m as r,o as s,r as t,c as u};