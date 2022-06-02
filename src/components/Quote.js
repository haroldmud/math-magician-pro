import React, { useState } from 'react';
import Header from './Header';
import '../styles/Quote.css';

const Quote = () => {
  const [links] = useState([
    { link: '../Calculator', active: false },
    { link: '../', active: false },
    { link: '../Quote', active: true },
  ]);

  return (
    <section>
      <Header anchor={links} />
      <h3>
        Mathematics is not about numbers, equations, computations
        or algorithms: it's about understanding. -willian Paul Thurston
      </h3>
    </section>
  );
};

export default Quote;
