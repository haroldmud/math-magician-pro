import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calcul extends Component {
	constructor(props) {
		super(props);
		this.state = { total: null, next: null, operation: null };
	  }
	
	  componentDidMount = () => {
		this.setState({
		  total: null,
		  next: null,
		  opreration: null,
		});
	  };
	
	  render() {
		const dropCalc = (e) => {
		  const myObj = calculate(this.state, e.target.textContent);
		  this.setState(myObj);
		};
	
		const { next, operation, total } = this.state;
		const op = operation === "%" ? "mod" : operation;
		let result = "";
		if (total) {
		  result = `${total} ${op || ""} ${next || ""}`;
		} else if (next) {
		  result = `${next} ${op || ""}`;
		}

    // render() { 
        return (
            <React.Fragment>
							<section className='table'>
								<div className="result"><span>{result || 0}</span></div>
								<div className="operations">
									<button onClick={dropCalc}>AC</button>
									<button onClick={dropCalc}>+/-</button>
									<button onClick={dropCalc}>%</button>
									<button onClick={dropCalc} className='sign'>÷</button>
									<button onClick={dropCalc}>7</button>
									<button onClick={dropCalc}>8</button>
									<button onClick={dropCalc}>9</button>
									<button onClick={dropCalc} className='sign'>x</button>
									<button onClick={dropCalc}>4</button>
									<button onClick={dropCalc}>5</button>
									<button onClick={dropCalc}>6</button>
									<button onClick={dropCalc} className='sign'>-</button>
									<button onClick={dropCalc}>1</button>
									<button onClick={dropCalc}>2</button>
									<button onClick={dropCalc}>3</button>
									<button onClick={dropCalc} className='sign'>+</button>
									<button onClick={dropCalc} className='spans'>0</button>
									<button onClick={dropCalc}>.</button>
									<button onClick={dropCalc} className='sign'>=</button>
								</div>
							</section>
            </React.Fragment>
        );
    }
}
 
export default Calcul;