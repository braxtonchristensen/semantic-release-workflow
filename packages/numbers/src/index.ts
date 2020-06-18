import { curry } from 'ramda';

export const sum = curry((a: number, b: number) => {
  return a + b;
});

export const diff = curry((a: number, b: number) => {
  return a - b;
});

export const multi = curry((a: number, b: number) => {
  return a * b;
});

export const div = curry((a: number, b: number) => {
  return a / b;
});
