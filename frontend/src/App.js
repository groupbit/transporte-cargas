import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clientes from "./componentes/Clientes"
import Choferes from "./componentes/Choferes"
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink} from "react-router-dom"


function App() {
  return (
    <div className="App">
    <Router>
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <ul>
          
          <li><NavLink to="/clientes">Clientes</NavLink></li>
          <li><NavLink to="/choferes">Choferes</NavLink></li>
        </ul>
      </header>
      <main className="App-main">
        <Switch>
            <Route path="/clientes"  component={Clientes} />
            <Route path="/choferes" component={Choferes} />
            <Redirect to="/" />
      </Switch>
      </main>
      </Router>
    </div>
  );
}



export default App;

