import { templatize } from '@polymer/polymer/lib/utils/templatize';


// @see https://github.com/PolymerElements/test-fixture/issues/47#issuecomment-453212161
// Helper code to make <template is="dom-template"> stampable by test-fixture
export const upgradeDomTemplates = () => {
	document.querySelectorAll('[is="dom-template"]').forEach(t => {
		t.stamp = function (...args) {
			if (!this._ctor) {
				this._ctor =	templatize(this);
			}
			return new this._ctor(...args);
		};
	});
};

export const updateModel = (fixture, model) => {
	fixture.__templatizeInstance.setProperties(model);
};
