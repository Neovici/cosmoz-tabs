import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-Bk-WGUUu.js";var r,i,a,o,s,c,l,u,d,f,p,m=e((()=>{n(),r=e=>e.querySelector(`.box`),i=async(e=4)=>{for(let t=0;t<e;t++)await new Promise(requestAnimationFrame)},a=e=>e.querySelector(`cosmoz-tabs`),o=e=>e.querySelector(`cosmoz-tabs-next`),s=e=>e.shadowRoot,c=e=>s(e).querySelectorAll(`.items > .tab[overflowing]`),l=e=>s(e).querySelectorAll(`.menu .menu-item`),u=e=>s(e).querySelector(`.more`),d=e=>s(e).querySelector(`.more-button`),f=e=>{let t=s(e).querySelector(`.items`).getBoundingClientRect();return[...s(e).querySelectorAll(`.items > .tab`)].filter(e=>{let n=e.getBoundingClientRect();return n.width>0&&n.left>=t.left-1&&n.right<=t.right+1}).length+l(e).length},p=(e,n=t``)=>t`
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
`}));export{a,f as c,s as d,d as f,m as i,l,c as n,u as o,p as r,o as s,r as t,i as u};