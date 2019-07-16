import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clientes from "./componentes/Clientes"
import Choferes from "./componentes/Choferes"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Clientes titulo="los clientes son" />
        </p>
         <p>
          <Choferes titulo="los choferes son" />
        </p>
        {/* <a
          className="AppCargas"
          href="./Cargas"
          rel="noopener noreferrer"
        >
          Ver Cargas
         </a> */}
      </header>
    </div>
  );
}

export default App;

