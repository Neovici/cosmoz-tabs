const isValid = tab => !tab.hidden && !tab.disabled,

	/**
	 * Gets the element icon name.
	 *
	 * @param {HTMLElement} tab The tab to compute icon for
	 * @param {boolean} isSelected Is the tab selected
	 * @returns {string} Name of the element icon.
	 */
	getIcon = (tab, isSelected) => isSelected ? tab.selectedIcon ?? tab.icon : tab.icon,

	getName = tab => tab.getAttribute('name'),

	/**
	 * Gets the element icon style property and value if icon color is
	 * set, otherwise return nothing.
	 *
	 * @param {HTMLElement} tab The tab to compute icon stype for
	 * @returns {string/void} Style color property and value for the icon.
	 */
	getIconStyle = tab => {
		const iconColor = tab.iconColor ?? '#15b0d3';
		return ['color: ' + iconColor, tab.iconStyle]
			.join(';');
	},

	elect = (tabs, selected) => {
		if (selected == null) {
			return tabs.find(isValid);
		}
		const selection = tabs.find(tab => getName(tab) === selected);
		return selection && isValid(selection) ? selection : tabs.find(isValid);
	};


export {
	elect,
	isValid,
	getIcon,
	getIconStyle,
	getName
};
