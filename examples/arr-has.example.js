import arrHas from '../src/arr-has'

const arr = [1, 2, 3]

arrHas(arr, 2)
//=> true

arrHas(arr, 4)
//=> false

arrHas(arr, 'asd')
//=> false
