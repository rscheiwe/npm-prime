"use strict"

function range(start, count) {
  return Array.apply(0, Array(count))
    .map((element, index) => index + start)
}

function getPrimeFactors(num) {
  let i = 2, lim = Math.floor(num/2), primes = [];
  while (i < lim) {
    while (num % i === 0) {
      num /= i;
      primes.push(i);
    }
    i++;
    lim = Math.floor(num/2);
  }
  primes.push(num);
  return primes
}

function prime(n) {
  for (let i=2; i < n; i++) {
    if (n % i === 0) {
      return getPrimeFactors(n)
    }
  }
  return true
}

module.exports = prime
