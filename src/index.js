import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css';
import Calcul from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calcul />} />
        <Route path="Quote" element={<Quote />} />
        <Route path="math-magician-pro" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
