import operate from '../logic/operate';

console.log(operate('56', '44', '÷'));

describe('test operate', () => {
  it('test +', () => {
    expect(operate('56', '44', '+')).toBe('100');
  });
  it('test -', () => {
    expect(operate('56', '44', '-')).toBe('12');
  });
  it('test %', () => {
    expect(operate('56', '44', '%')).toBe('12');
  });
  it('test ÷', () => {
    expect(operate('56', '44', '÷')).toBe('1.27272727272727272727');
  });
});
