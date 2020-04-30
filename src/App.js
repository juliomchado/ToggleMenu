import React from 'react';

import './App.css'

function App() {

  function toggleMenu() {
    const menu = document.querySelector('.menu')

    menu.classList.toggle('active')
  }

  return (
    <React.Fragment>
      <div className="container">
        <div className="menu">
          <h1 className="h1" onClick={toggleMenu}>X</h1>
          <ul>
            <li><a href="aa" className="a">PRINCIPAL</a></li>
            <li><a href="an" className="a">INFO</a></li>
            <li><a href="am" className="a">ACCOUNT</a></li>
            <li><a href="al" className="a">CONFIG</a></li>
          </ul>
        </div>
        <div className="button-container">
          <span className="button-toggle" onClick={toggleMenu}></span>
          <span className="button-toggle" onClick={toggleMenu}></span>
          <span className="button-toggle" onClick={toggleMenu}></span>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
