import { tagged as css } from '@neovici/cosmoz-utils';

export default css`
	:host {
		background-color: var(--cosmoz-tabs-bg-color, #fff);
		color: var(--cosmoz-tabs-text-color, #606c7e);
		font-family: var(--cosmoz-tabs-font-family, inherit);
		font-size: var(--cosmoz-tabs-font-size, 13px);
		line-height: var(--cosmoz-tabs-line-height, 19px);
		box-shadow: var(--cosmoz-tabs-shadow, inset 0 -1px 0 0 #e5e6eb);
		flex: none;
		display: flex;
		align-items: center;
		overflow-x: auto;
		-webkit-overflow-scrolling: auto;
		scrollbar-width: none;
		padding-bottom: 1px;
	}
	:host::-webkit-scrollbar {
		display: none;
	}
`;
