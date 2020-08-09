import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <header>
                <h1>Pokemon - Pokedex!</h1>
                <li className="left-header">
                  <Link to="/detail">Detail</Link>
                </li>
                <li className="right-header">
                  <Link to="/">Home</Link>
                </li>
              </header>
            </div>
        )
    }
}
