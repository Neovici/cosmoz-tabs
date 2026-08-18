import{i as e}from"./preload-helper-usAeo7Bx.js";import{J as t,Y as n}from"./iframe-DOneIXTJ.js";var r,i,a,o,s,c,l,u,d,f,p,m,h=e((()=>{n(),r=e=>e.querySelector(`.box`),i=async(e=4)=>{for(let t=0;t<e;t++)await new Promise(requestAnimationFrame)},a=e=>e.querySelector(`cosmoz-tabs`),o=e=>e.querySelector(`cosmoz-tabs-next`),s=e=>e.shadowRoot,c=async e=>{let t=window.gc;if(!t)throw Error(`window.gc is unavailable: run with --js-flags=--expose-gc`);for(let e=0;e<5;e++)t(),await new Promise(e=>setTimeout(e,30));return e.filter(e=>e.deref()).length},l=e=>s(e).querySelectorAll(`.items > .tab[overflowing]`),u=e=>s(e).querySelectorAll(`.menu .menu-item`),d=e=>s(e).querySelector(`.more`),f=e=>s(e).querySelector(`.more-button`),p=e=>{let t=s(e).querySelector(`.items`).getBoundingClientRect();return[...s(e).querySelectorAll(`.items > .tab`)].filter(e=>{let n=e.getBoundingClientRect();return n.width>0&&n.left>=t.left-1&&n.right<=t.right+1}).length+u(e).length},m=(e,n=t``)=>t`
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
`}));export{a,p as c,i as d,s as f,h as i,c as l,l as n,d as o,f as p,m as r,o as s,r as t,u};