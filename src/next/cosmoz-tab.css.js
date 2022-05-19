import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		position: relative;
		display: flex;
		box-sizing: border-box;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 11px 24px;
		color: inherit;
		text-decoration: none;
		text-align: center;
		letter-spacing: 0.3px;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: pointer;
		/* TODO(accessibility): focused tab should be outlined */
		outline: 0;
	}

	:host([active]) {
		color: var(--cosmoz-tabs-accent-color, #508aef);
		box-shadow: inset 0 -3px 0px 0px var(--cosmoz-tabs-accent-color, #508aef);
		font-weight: 700;
		letter-spacing: 0;
	}

	:host([disabled]) {
		opacity: 0.4;
		pointer-events: none;
	}

	#iconSlot::slotted(*) {
		flex-shrink: 0;
	}

	#contentSlot::slotted(*) {
		flex: auto;
	}

	.badge {
		font-family: var(--cosmoz-font-base, 'Verdana, Arial, sans-serif');
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

	a {
		display: contents;
	}
`;
