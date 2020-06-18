import { curry } from 'ramda';
import { sum } from 'my-test-numbers';

export const concat = curry((a: string, b: string) => {
  return a + b;
});

export const sumStringNums = curry((a: string, b: string) => {
  const numberA = Number(a);
  const numberB = Number(b);

  return sum(numberA, numberB);
});
