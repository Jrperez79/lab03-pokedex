import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import SearchPage from './SearchPage/SearchPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import './App.css';



export default class App extends Component {
  render() {
    return (
      <>
      <div>
          <Router>
              <header>
                <h1>Pokemon - Pokedex!</h1>
                <li className="left-header">
                  <Link to="/detail">Detail</Link>
                </li>
                <li className="right-header">
                  <Link to="/">Home</Link>
                </li>
              </header>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(routerProps) => <SearchPage {...routerProps} />} 
                />
                  <Route 
                    path="/detail/:myPokemonId"
                    exact
                    render={(routerProps) => <DetailPage {...routerProps} />}
                  />
              </Switch>
          </Router>
      </div>
      </>
    )
  }
}
