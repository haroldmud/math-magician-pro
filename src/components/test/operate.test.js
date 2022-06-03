import operate from '../logic/operate';

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
  it('test x', () => {
    expect(operate('50', '2', 'x')).toBe('100');
  });
});
