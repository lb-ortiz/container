import React from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';

const AppHeader = () => (
  <header>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Chettan+2:wght@600&display=swap" rel="stylesheet"></link>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
    <div className="center-column">
    {/* <Image source={require('../images/icon.png')} /> */}
    <NavLink to="/"><img className= "img-header" src={require('./images/icon.png') }/></NavLink>
      <h1 className = "text-header"> Feira Demo</h1>
    </div>
    <nav>
      <ol className="center-column">
        <li href="#" class="w3-bar-item w3-button w3-hover-green" >
          <NavLink to="/">Buscar Lojas</NavLink>
        </li>
        <li href="#" class="w3-bar-item w3-button w3-hover-green">
          <NavLink to="/random">Estou com Sorte!</NavLink>
        </li>
        <li href="#" class="w3-bar-item w3-button w3-hover-green">
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
