import{i as e}from"./preload-helper-usAeo7Bx.js";import{K as t,q as n}from"./iframe-CQ_V4elZ.js";import{a as r,f as i,l as a,m as o,r as s,s as c,t as l}from"./untitled-M9f3BaOx.js";var u,d,f,p,m,h,g,_,v=e((()=>{l(),n(),u=t`<style>
	cosmoz-tabs::part(content) {
		padding-top: calc(var(--cz-spacing) * 5);
	}
	.panel {
		max-width: 680px;
		font-size: var(--cz-text-sm, 14px);
		line-height: 1.55;
		color: var(--cz-color-text-secondary, #475467);
	}
	.panel h3 {
		margin: 0 0 14px;
		font-size: var(--cz-text-md, 16px);
		font-weight: 600;
		color: var(--cz-color-text-primary, #101828);
	}
	.panel p {
		margin: 0 0 12px;
	}
	.dl {
		display: grid;
		grid-template-columns: max-content 1fr;
		gap: 10px 32px;
		margin: 0;
	}
	.dl dt {
		color: var(--cz-color-text-tertiary, #667085);
	}
	.dl dd {
		margin: 0;
		color: var(--cz-color-text-primary, #101828);
		font-variant-numeric: tabular-nums;
	}
	table.rows {
		width: 100%;
		border-collapse: collapse;
		font-variant-numeric: tabular-nums;
	}
	table.rows th,
	table.rows td {
		padding: 9px 12px;
		text-align: left;
		border-bottom: 1px solid var(--cz-color-border-secondary, #eaecf0);
	}
	table.rows th {
		color: var(--cz-color-text-tertiary, #667085);
		font-weight: 600;
		font-size: var(--cz-text-xs, 12px);
		text-transform: uppercase;
		letter-spacing: 0.04em;
	}
	table.rows td.num,
	table.rows th.num {
		text-align: right;
	}
	table.rows tfoot td {
		font-weight: 600;
		color: var(--cz-color-text-primary, #101828);
		border-bottom: none;
	}
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.timeline li {
		position: relative;
		padding: 0 0 18px 22px;
		border-left: 2px solid var(--cz-color-border-secondary, #eaecf0);
	}
	.timeline li:last-child {
		padding-bottom: 0;
	}
	.timeline li::before {
		content: "";
		position: absolute;
		left: -5px;
		top: 4px;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--cz-color-fg-brand, #508aef);
	}
	.timeline time {
		display: block;
		font-size: var(--cz-text-xs, 12px);
		color: var(--cz-color-text-tertiary, #667085);
	}
	.thread {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.comment {
		display: flex;
		gap: 12px;
	}
	.comment .avatar {
		flex: 0 0 auto;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		font-weight: 600;
		font-size: var(--cz-text-xs, 12px);
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}
	.comment .body strong {
		color: var(--cz-color-text-primary, #101828);
	}
	.comment .body time {
		margin-left: 8px;
		font-size: var(--cz-text-xs, 12px);
		color: var(--cz-color-text-tertiary, #667085);
	}
	.files {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	.files li {
		display: flex;
		justify-content: space-between;
		padding: 11px 0;
		border-bottom: 1px solid var(--cz-color-border-secondary, #eaecf0);
	}
	.files li:last-child {
		border-bottom: none;
	}
	.files .meta {
		color: var(--cz-color-text-tertiary, #667085);
	}
	.status {
		display: inline-block;
		padding: 2px 10px;
		border-radius: var(--cz-radius-full, 999px);
		font-size: var(--cz-text-xs, 12px);
		font-weight: 500;
		color: var(--cz-color-text-on-brand);
		background: var(--cz-color-bg-brand-solid);
	}
</style>`,d=()=>t`<div class="panel">
		<h3>Invoice INV-2026-04417</h3>
		<dl class="dl">
			<dt>Supplier</dt>
			<dd>Nordic Office Supplies AB</dd>
			<dt>Invoice number</dt>
			<dd>INV-2026-04417</dd>
			<dt>Invoice date</dt>
			<dd>2026-05-28</dd>
			<dt>Due date</dt>
			<dd>2026-06-27</dd>
			<dt>Payment terms</dt>
			<dd>30 days net</dd>
			<dt>Purchase order</dt>
			<dd>PO 4500219</dd>
			<dt>Currency</dt>
			<dd>SEK</dd>
			<dt>Net amount</dt>
			<dd>48 250.00</dd>
			<dt>VAT (25%)</dt>
			<dd>12 062.50</dd>
			<dt>Total</dt>
			<dd>60 312.50</dd>
			<dt>Status</dt>
			<dd><span class="status">Awaiting approval</span></dd>
		</dl>
	</div>`,f=()=>t`<div class="panel">
		<h3>Invoice rows</h3>
		<table class="rows">
			<thead>
				<tr>
					<th>Article</th>
					<th>Description</th>
					<th class="num">Qty</th>
					<th class="num">Unit price</th>
					<th class="num">Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>100245</td>
					<td>Copy paper A4 80g (box of 5 reams)</td>
					<td class="num">12</td>
					<td class="num">245.00</td>
					<td class="num">2 940.00</td>
				</tr>
				<tr>
					<td>100677</td>
					<td>Printer toner HP 26X, black</td>
					<td class="num">4</td>
					<td class="num">1 290.00</td>
					<td class="num">5 160.00</td>
				</tr>
				<tr>
					<td>100412</td>
					<td>Whiteboard markers, assorted (pack of 4)</td>
					<td class="num">15</td>
					<td class="num">119.00</td>
					<td class="num">1 785.00</td>
				</tr>
				<tr>
					<td>100501</td>
					<td>Desk organiser, oak veneer</td>
					<td class="num">6</td>
					<td class="num">349.00</td>
					<td class="num">2 094.00</td>
				</tr>
				<tr>
					<td>100388</td>
					<td>Ergonomic office chair, mesh back</td>
					<td class="num">9</td>
					<td class="num">4 030.11</td>
					<td class="num">36 271.00</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="4">Net total</td>
					<td class="num">48 250.00</td>
				</tr>
			</tfoot>
		</table>
	</div>`,p=()=>t`<div class="panel">
		<h3>Accounting</h3>
		<table class="rows">
			<thead>
				<tr>
					<th>Account</th>
					<th>Cost center</th>
					<th>Project</th>
					<th class="num">Amount</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>4010 · Office supplies</td>
					<td>CC-200 · Administration</td>
					<td>—</td>
					<td class="num">30 000.00</td>
				</tr>
				<tr>
					<td>4010 · Office supplies</td>
					<td>CC-310 · Sales North</td>
					<td>—</td>
					<td class="num">12 250.00</td>
				</tr>
				<tr>
					<td>5410 · Consumables</td>
					<td>CC-200 · Administration</td>
					<td>PRJ-2026-12</td>
					<td class="num">6 000.00</td>
				</tr>
			</tbody>
			<tfoot>
				<tr>
					<td colspan="3">Distributed</td>
					<td class="num">48 250.00</td>
				</tr>
			</tfoot>
		</table>
	</div>`,m=()=>t`<div class="panel">
		<h3>History</h3>
		<ul class="timeline">
			<li>
				<time>2026-05-28 09:14 · System</time>
				Invoice received and interpreted via OCR.
			</li>
			<li>
				<time>2026-05-28 09:15 · System</time>
				Automatically matched to purchase order PO 4500219.
			</li>
			<li>
				<time>2026-05-29 11:02 · Johan Berg</time>
				Assigned to Maria Lindqvist for review.
			</li>
			<li>
				<time>2026-06-01 14:37 · Maria Lindqvist</time>
				Accounting adjusted — split across CC-200 and CC-310.
			</li>
			<li>
				<time>2026-06-02 08:20 · Maria Lindqvist</time>
				Submitted for approval.
			</li>
		</ul>
	</div>`,h=()=>t`<div class="panel">
		<div class="thread">
			<div class="comment">
				<div class="avatar">ML</div>
				<div class="body">
					<div>
						<strong>Maria Lindqvist</strong><time>2026-06-01 14:39</time>
					</div>
					<p>
						Split the cost between Administration and Sales North — the chairs
						are for the new sales hires, everything else is general office
						stock.
					</p>
				</div>
			</div>
			<div class="comment">
				<div class="avatar">JB</div>
				<div class="body">
					<div><strong>Johan Berg</strong><time>2026-06-02 09:05</time></div>
					<p>
						Looks right to me. Approving once the delivery note is attached —
						can you double-check the toner quantity against the receipt?
					</p>
				</div>
			</div>
		</div>
	</div>`,g=()=>t`<div class="panel">
		<h3>Attachments</h3>
		<ul class="files">
			<li>
				<span>invoice-INV-2026-04417.pdf</span>
				<span class="meta">PDF · 248 KB</span>
			</li>
			<li>
				<span>delivery-note-DN-88231.pdf</span>
				<span class="meta">PDF · 96 KB</span>
			</li>
			<li>
				<span>price-agreement-2026.xlsx</span>
				<span class="meta">XLSX · 41 KB</span>
			</li>
		</ul>
	</div>`,_=[{name:`overview`,title:`Overview`,icon:s,render:d},{name:`rows`,title:`Invoice rows`,badge:`5`,icon:a,render:f},{name:`accounting`,title:`Accounting`,icon:o,render:p},{name:`history`,title:`History`,icon:i,render:m},{name:`comments`,title:`Comments`,badge:`2`,icon:c,render:h},{name:`attachments`,title:`Attachments`,badge:`3`,icon:r,render:g}]}));export{v as a,u as c,m as i,f as l,g as n,_ as o,h as r,d as s,p as t};