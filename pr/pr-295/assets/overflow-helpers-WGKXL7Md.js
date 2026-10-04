import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-DlcEHjqf.js";var r,i,a,o,s,c,l,u;function d(){return(d=e((()=>{n(),r=e=>e.querySelector(`.box`),i=async(e=4)=>{for(let t=0;t<e;t++)await new Promise(requestAnimationFrame)},a=e=>e.querySelector(`cosmoz-tabs-next`),o=e=>e.shadowRoot,s=async e=>{let t=window.gc;if(!t)throw Error(`window.gc is unavailable: run with --js-flags=--expose-gc`);for(let e=0;e<5;e++)t(),await new Promise(e=>setTimeout(e,30));return e.filter(e=>e.deref()).length},c=e=>o(e).querySelector(`.more`),l=e=>o(e).querySelector(`.more-button`),u=(e,n=t``)=>t`
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
`})))()}export{u as a,o as c,a as i,l,d as n,s as o,c as r,i as s,r as t};