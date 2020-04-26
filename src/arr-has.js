import assertArgs from '@bemoje/assert-args'
import assertType from '@bemoje/assert-type'

/**
 * Returns true if the element exists in the array
 * @param {Array} arr - The array to search
 * @param {*} element - The element to find
 * @returns {boolean}
 */
export default function arrHas(arr, element) {
	assertArgs(arr, element)
	assertType(Array, arr)
	return arr.indexOf(element) !== -1
}
