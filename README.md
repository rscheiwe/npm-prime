# npm-primes-simple: Node.js Package for Prime Factorization

[![npm package](https://nodei.co/npm/primes-simple.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/primes-simple)

[![npm version](https://badge.fury.io/js/primes-simple.svg)](https://badge.fury.io/js/primes-simple)

A simple Node.js package for either testing whether a number is prime, or returning the prime factors if a number is not prime.

## Installing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Install package with:
```
npm install --save primes-simple
```
In `example.js`, a few examples are shown.

To run:
```javascript
const primes = require('primes-simple')
let num = getRandomInt(10000,1000000) //or any num
prime(num)
```

## Running Tests

`index.test.js` provides three tests for benchmarking purposes, and personalized tests may be generated. Simply follow the sytax, making sure to use `assert.deepEqual`.
If the dependency for running tests (Mocha) is properly installed, simply write your tests and run `npm run test` in the console/terminal.

## Contributing

Please read [CONTRIBUTING.md](https://github.com/rscheiwe/npm-timsort/contributing.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
