import { html } from '@polymer/polymer/lib/utils/html-tag';

export const badge = html`
.badge {
	font-family: Verdana, Arial, sans-serif;
	@apply --paper-font-common-base;

	font-weight: normal;
	font-size: 11px;
	line-height: 1;
	border-radius: 0.90909em;
	box-sizing: border-box;

	transform: translateY(-50%);
	vertical-align: top;
	min-width: 1.81818em;
	padding: 0.40909em 0.36363em;

	max-width: 80px;
	text-overflow: ellipsis;
	overflow: hidden;

	background-color: var(--accent-color, #ff4081);
	color: #ffffff;
	text-align: center;
}
.badge:empty {
	display: none;
}
`;
