import React, { Component } from 'react'
import request from 'superagent';
import Header from './Header.js';
import PokesList from './PokesList.js';
import PokeSearch from './PokeSearch.js';
import './App.css';



export default class App extends Component {
  state = {
    search: '',
    pokeState: [],
  }
  
  handleSubmit = async () => {
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=800&pokemon=${this.state.search}`)

    this.setState({
      pokeState: data.body.results
    })
  }

  handlePokeSearch = (e) => {
    const value = e.target.value;
    this.setState({search: value });
  }

  render() {
    return (
      <main>
          <Header />
          <div>
            <PokeSearch handlePokeSearch={this.handlePokeSearch} />
            <button onClick={this.handleSubmit}>Click to Find Pokemon</button>
          </div>
         <PokesList showPokes={this.state.pokeState} />
      </main>
    )
  }
}

