import React, { Component } from 'react';

class Calcul extends Component {
    state = {  
        result : 0,
    };
    render() { 
        return (
            <React.Fragment>
							<section className='table'>
								<div className="result"><span>0</span></div>
								<div className="operations">
									<div>AC</div>
									<div>+/-</div>
									<div>%</div>
									<div className='sign'>:</div>
									<div>7</div>
									<div>8</div>
									<div>9</div>
									<div className='sign'>x</div>
									<div>4</div>
									<div>5</div>
									<div>6</div>
									<div className='sign'>-</div>
									<div>1</div>
									<div>2</div>
									<div>3</div>
									<div className='sign'>+</div>
									<div className='spans'>0</div>
									<div>.</div>
									<div className='sign'>=</div>
								</div>
							</section>
            </React.Fragment>
        );
    }
}
 
export default Calcul;