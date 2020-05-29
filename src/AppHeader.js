import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@600&display=swap" rel="stylesheet"></link>
    <div className="center-column">
    {/* <Image source={require('../images/icon.png')} /> */}
    <img className= "img-header" src={require('./images/icon.png')}/>
      <h1 className = "text-header"> É FEIRAAAAA</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink to="/">Buscar Lojas</NavLink>
        </li>
        <li>
          <NavLink to="/random">Estou com Sorte!</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
