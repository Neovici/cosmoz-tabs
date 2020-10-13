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

	choose = (tabs, selected) => {
		if (selected == null) {
			return tabs.find(isValid);
		}
		const selectedTab = tabs.find(tab => getName(tab) === selected);
		return selectedTab && isValid(selectedTab) ? selectedTab : tabs.find(isValid);
	},
	collect = slot => slot.assignedElements().flatMap(el => {
		if (el.matches('cosmoz-tab')) {
			return [el];
		}
		if (el.matches('slot')) {
			return collect(el);
		}
		return [];
	});


export {
	choose,
	collect,
	isValid,
	getIcon,
	getIconStyle,
	getName
};
