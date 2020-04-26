import arrHas from '../src/arr-has'

describe('arrHas', () => {
	test('works', () => {
		const arr = [1, 2, 3]
		expect(arrHas(arr, 1)).toBe(true)
		expect(arrHas(arr, 2)).toBe(true)
		expect(arrHas(arr, 3)).toBe(true)
		expect(arrHas(arr, 0)).toBe(false)
		expect(arrHas(arr, 4)).toBe(false)
		expect(arrHas(arr, 'asd')).toBe(false)
	})
})
