'use strict'

const assert = require('assert')
const prime = require('../index.js')
const getRandomInt = require('../Random.js')

let random;

beforeEach(() => {
  getRandomInt(1000,100000)
})

describe('Test a Prime Number', () => {
  it('correctly identifies a prime number', () => {
    assert.equal(prime(7), true)
  })

  it('correctly returns prime factors', () => {
    assert.deepEqual(prime(12), [2,2,3])
  })

})
