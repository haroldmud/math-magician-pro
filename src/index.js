import React from 'react';
import ReactDom from 'react-dom';
import './style.css';
import Calcul from './components/Calculator';

const root = document.getElementById('root');
ReactDom.render(<Calcul />, root);
