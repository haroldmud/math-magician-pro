import React, { useEffect, useState } from 'react';
import calculate from '../logic/calculate';
import Header from './Header';

const Calcul = () => {
  const [links] = useState([
    { link: '../Calculator', active: true },
    { link: '../', active: false },
    { link: '../Quote', active: false },
  ]);
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const dropCalc = (e) => {
		  const myObj = calculate(state, e.target.textContent);
		  setState(myObj);
  };

  const { next, operation, total } = state;
  const op = operation === '%' ? 'mod' : operation;
  let result = '';
  if (total) {
		  result = `${total} ${op || ''} ${next || ''}`;
  } else if (next) {
		  result = `${next} ${op || ''}`;
  }

  return (
    <section className='calcul'>
      <Header anchor={links}/>
      <h2>Let's do some calculations!</h2>
      <div className="table">
        <div className="result"><span>{result || 0}</span></div>
        <div className="operations">
            <button onClick={dropCalc}>AC</button>
            <button onClick={dropCalc}>+/-</button>
            <button onClick={dropCalc}>%</button>
            <button onClick={dropCalc} className="sign">÷</button>
            <button onClick={dropCalc}>7</button>
            <button onClick={dropCalc}>8</button>
            <button onClick={dropCalc}>9</button>
            <button onClick={dropCalc} className="sign">x</button>
            <button onClick={dropCalc}>4</button>
            <button onClick={dropCalc}>5</button>
            <button onClick={dropCalc}>6</button>
            <button onClick={dropCalc} className="sign">-</button>
            <button onClick={dropCalc}>1</button>
            <button onClick={dropCalc}>2</button>
            <button onClick={dropCalc}>3</button>
            <button onClick={dropCalc} className="sign">+</button>
            <button onClick={dropCalc} className="spans">0</button>
            <button onClick={dropCalc}>.</button>
            <button onClick={dropCalc} className="sign">=</button>
        </div>
    </div>
    </section>
  );
};

export default Calcul;
