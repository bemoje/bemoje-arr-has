(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-has'] = factory(global.assertArgs, global.assertType));
}(this, (function (assertArgs, assertType) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Returns true if the element exists in the array
	 * @param {Array} arr - The array to search
	 * @param {*} element - The element to find
	 * @returns {boolean}
	 */
	function arrHas(arr, element) {
		assertArgs(arr, element);
		assertType(Array, arr);
		return arr.indexOf(element) !== -1
	}

	return arrHas;

})));
