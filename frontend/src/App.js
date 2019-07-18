import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clientes from "./componentes/Clientes"
import Choferes from "./componentes/Choferes"
import {BrowserRouter as Router, Route, Switch, Redirect, NavLink as Link} from "react-router-dom"
import { Nav, NavItem, NavLink } from 'reactstrap';



function App() {
  return (
    <div className="App">
    <Router>
  <Nav>
  <NavItem>
  <NavLink tag={Link} to="/clientes" activeClassName="active">Clientes</NavLink>
  </NavItem>
  <NavItem>
  <NavLink tag={Link} to="/choferes" activeClassName="active">Choferes</NavLink>
  </NavItem>
</Nav>
  <img src={logo} className="App-logo" alt="logo"/>
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