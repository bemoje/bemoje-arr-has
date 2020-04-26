# @bemoje/arr-has

Returns true if the element exists in the array

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-has" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-has" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-has" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-has.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-has" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-has.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-has" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-has" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-has/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-has" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-has
npm install --save @bemoje/arr-has
npm install --save-dev @bemoje/arr-has
```

## Usage

```javascript
import arrHas from '@bemoje/arr-has'

const arr = [1, 2, 3]

arrHas(arr, 2)
//=> true

arrHas(arr, 4)
//=> false

arrHas(arr, 'asd')
//=> false

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrHas

##### Returns
true if the element exists in the array

##### Parameters

-   `arr` **[Array][3]** The array to search

-   `element` **any** The element to find

##### Returns
**[boolean][4]** 

[1]: #arrhas

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean