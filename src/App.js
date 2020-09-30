import React from 'react'
import './App.css'
import Header from './componentes/Header'
import Sidebar from './componentes/Sidebar'
import Recomendados from './componentes/Recomendados'
import PaginaBusqueda from './componentes/PaginaBusqueda'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search/:searhTerm">
            <div className="app__page">
              <Sidebar />
              <PaginaBusqueda />
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Recomendados />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

