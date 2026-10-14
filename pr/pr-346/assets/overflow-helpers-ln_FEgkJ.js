import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{l as t,u as n}from"./iframe-LJ3zOmwL.js";var r,i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),r=e=>e.querySelector(`.box`),i=async(e=4)=>{for(let t=0;t<e;t++)await new Promise(requestAnimationFrame)},a=async(e=4)=>{let t=document.body.animate([],{duration:1});for(let t=0;t<e+2;t++)await new Promise(requestAnimationFrame);t.cancel()},o=e=>e.querySelector(`cosmoz-tabs-next`),s=e=>e.shadowRoot,c=async e=>{let t=window.gc;if(!t)throw Error(`window.gc is unavailable: run with --js-flags=--expose-gc`);for(let e=0;e<5;e++)t(),await new Promise(e=>setTimeout(e,30));return e.filter(e=>e.deref()).length},l=e=>s(e).querySelector(`.more`),u=e=>s(e).querySelector(`.more-button`),d=(e,n=t``)=>t`
	<div class="box" style="width: ${e}; overflow: hidden;">
		<cosmoz-tabs-next variant="underline">
			${n}
			<cosmoz-tab-next
				name="overview"
				active
				style="width: 90px; flex: 0 0 90px"
				>Overview</cosmoz-tab-next
			>
			<cosmoz-tab-next
				name="rows"
				badge="5"
				style="width: 110px; flex: 0 0 110px"
				>Invoice rows</cosmoz-tab-next
			>
			<cosmoz-tab-next name="accounting" style="width: 100px; flex: 0 0 100px"
				>Accounting</cosmoz-tab-next
			>
			<cosmoz-tab-next name="history" style="width: 80px; flex: 0 0 80px"
				>History</cosmoz-tab-next
			>
			<cosmoz-tab-next name="attachments" style="width: 110px; flex: 0 0 110px"
				>Attachments</cosmoz-tab-next
			>
		</cosmoz-tabs-next>
	</div>
`})))()}export{d as a,i as c,o as i,s as l,f as n,a as o,l as r,c as s,r as t,u};