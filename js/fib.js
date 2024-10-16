'use strict';

export default (n) => {
  if (n === 0 || n === 1) return n;

  let first = 0;
  let second = 1;
  let sum = first + second;
  for (let i = 1; i < n; ++i) {
    sum = first + second;
    first = second;
    second = sum;
  }
  return sum;
}
