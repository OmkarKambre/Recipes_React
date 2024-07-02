import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cards from './Cards';
import Nav from './Nav1';
import App from './App';
import { GrLike } from "react-icons/gr";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <App/>
  </BrowserRouter>,
  document.getElementById('root')
);
