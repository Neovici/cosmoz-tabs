/* eslint-disable max-lines-per-function */

import { Debouncer } from '@polymer/polymer/lib/utils/debounce';
import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer';
import { timeOut } from '@polymer/polymer/lib/utils/async';
import { enqueueDebouncer } from '@polymer/polymer/lib/utils/flush';
import { templatize } from '@polymer/polymer/lib/utils/templatize';

/** @polymerBehavior */
export const TabbedTemplateBehaviorImpl = {
	properties: {

		/**
		 * Set to true to render the template with a small delay even if the tab has never been selected.
		 */
		prerender: {
			type: Boolean,
			value: false,
			observer: '_prerenderChanged'
		}
	},

	created() {
		this._pendingProps = {};
	},

	attached() {
		this._observer = new FlattenedNodesObserver(this, this._onNodesChanged);
	},

	detached() {
		if (this._observer) {
			this._observer.disconnect();
			this._observer = null;
		}
		this._templateInstance = null;
		if (this._debouncer) {
			this._debouncer.cancel();
		}
	},

	_onNodesChanged() {
		if (this._userTemplate) {
			return;
		}
		const template = this.queryEffectiveChildren('template');
		if (!template) {
			return;
		}
		this._userTemplate = template;
		this._instanceCtor = templatize(template, this, {
			instanceProps: {},
			parentModel: true,
			forwardHostProp: this._forwardHostProp
		});
		if (!this.prerender && !this._shouldRender) {
			return;
		}
		this.render();
	},

	render() {
		this._shouldRender = true;
		if (!this._userTemplate || this._templateInstance) {
			return;
		}
		enqueueDebouncer(
			this._debouncer = Debouncer.debounce(this._debouncer,
				timeOut.after(16),
				() => this._createInstance()
			));
	},

	_prerenderChanged(prerender) {
		if (!prerender) {
			return;
		}
		this.render();
	},

	_createInstance() {
		if (this._templateInstance || !this._instanceCtor) {
			return;
		}
		const instance = new this._instanceCtor(this._pendingProps);
		this._templateInstance = instance;
		this.appendChild(instance.root);
		instance._flushProperties(true);
	},

	_forwardHostProp(prop, value) {
		const instance = this._templateInstance;
		if (!instance) {
			this._pendingProps[prop] = value;
			return;
		}
		instance.forwardHostProp(prop, value);
	}
};

/** @polymerBehavior */
export const TabbedTemplateBehavior = [TabbedTemplateBehaviorImpl];
