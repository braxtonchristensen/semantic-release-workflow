import { sum, diff } from '../src';

describe('sum', () => {
  it('should take 2 args at once', () => {
    expect(sum(1, 1)).toEqual(2);
  });
  it('should take 1 arg at a time', () => {
    expect(sum(1)(1)).toEqual(2);
  });
});

describe('diff', () => {
  it('should take 2 args at once', () => {
    expect(diff(1, 1)).toEqual(0);
  });
  it('should take 1 arg at a time', () => {
    expect(diff(1)(1)).toEqual(0);
  });
});