import calculate from '../logic/calculate';

const test1 = {
  total: '500',
  next: '15',
  operation: 'x',
};

const test2 = {
  total: '500',
  next: '15',
  operation: null,
};

console.log(calculate(test1, '÷'));
const ACresponse = {
  total: null,
  next: null,
  operation: null,
};

const DOTresponse = {
  total: '500',
  next: '15.',
  operation: null,
};

const EQLresponse = {
  total: '7500',
  next: null,
  operation: null,
};

const SUMresponse = {
  total: '7500',
  next: null,
  operation: '+',
};

const MINUSresponse = {
  total: '7500',
  next: null,
  operation: '-',
};

const QUOTIENTresponse = {
  total: '7500',
  next: null,
  operation: '÷',
};

describe('test calculate', () => {
  it('test AC', () => {
    expect(calculate(test1, 'AC')).toStrictEqual(ACresponse);
  });
  it('test =', () => {
    expect(calculate(test1, '=')).toStrictEqual(EQLresponse);
  });
  it('test .', () => {
    expect(calculate(test2, '.')).toStrictEqual(DOTresponse);
  });
  it('test +', () => {
    expect(calculate(test1, '+')).toStrictEqual(SUMresponse);
  });
  it('test -', () => {
    expect(calculate(test1, '-')).toStrictEqual(MINUSresponse);
  });
  it('test ÷', () => {
    expect(calculate(test1, '÷')).toStrictEqual(QUOTIENTresponse);
  });
});
