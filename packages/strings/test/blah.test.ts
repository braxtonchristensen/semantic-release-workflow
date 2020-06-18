import { concat, sumStringNums } from '../src';

describe('concat', () => {
  it('should concat number strings', () => {
    expect(concat('1', '1')).toEqual('11');
  });
  it('should curry concat number strings', () => {
    expect(concat('1')('1')).toEqual('11');
  });
});

describe('sumStringNums', () => {
  it('should add number strings', () => {
    expect(sumStringNums('1', '1')).toEqual(2);
  });
  it('should curry add number strings', () => {
    expect(sumStringNums('1')('1')).toEqual(2);
  });
});
