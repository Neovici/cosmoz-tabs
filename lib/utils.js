const isInvalid = tab => tab.hidden || tab.disabled,

	isValid = tab => !isInvalid(tab),

	/**
	 * Gets the element icon name.
	 *
	 * @param {HTMLElement} tab The tab to compute icon for
	 * @returns {string} Name of the element icon.
	 */
	getIcon = tab => tab.isSelected ? tab.selectedIcon ?? tab.icon : tab.icon,

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

	encloses = (ancestor, descendant, _limits = []) => {
		const limits = [..._limits, document.body];
		let parent = descendant;
		while (parent && !limits.includes(parent)) {
			if (parent === ancestor) {
				return true;
			}
			const nextParent = parent.parentNode;
			if (nextParent == null && parent instanceof ShadowRoot) {
				parent = parent.host;
				continue;
			}
			parent = nextParent;

		}
		return false;
	},
	elect = (tabs, selected) => {
		if (selected == null) {
			return tabs.find(isValid);
		}
		const selection = tabs.find(tab => tab.getAttribute('name') === selected);
		if (selection == null) {
			return tabs.find(isValid);
		}
		if (isValid(selection)) {
			return selection;
		}
	};


export {
	encloses,
	elect,
	isInvalid,
	isValid,
	getIcon,
	getIconStyle
};
