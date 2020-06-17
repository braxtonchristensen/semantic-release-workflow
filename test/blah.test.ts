import { sum, diff } from '../src';

describe('blah', () => {
  it('sum', () => {
    expect(sum(1, 1)).toEqual(2);
  });
  it('diff', () => {
    expect(diff(1, 1)).toEqual(0);
  });
});
