import { concat, sumStringNums, reverse, levenshteinDistance } from '../src';

describe('concat', () => {
  it('should concat number strings', () => {
    expect(concat('1', '1')).toEqual('11');
  });
  it('should curry concat number strings', () => {
    expect(concat('1')('1')).toEqual('11');
  });
});

describe('reverse', () => {
  it('should reverse strings', () => {
    expect(reverse('test')).toEqual('tset');
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

describe('levenshteinDistance', () => {
  it('should give a levenshtein score of strings given', () => {
    const same = levenshteinDistance('Test', 'Test');
    const close = levenshteinDistance('Pretty Close', 'Pretty Colse');
    const notEven = levenshteinDistance('Not Even', 'Remotely Close');
    expect(same).toBe(0);
    expect(close).toBe(2);
    expect(notEven).toBe(11);
  });
});
