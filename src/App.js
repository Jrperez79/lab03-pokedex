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
    isLoading: false,
  }
  
  handleClick = async () => {
    this.setState({isLoading: true})
    const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=800&pokemon=${this.state.search}`)

    this.setState({
      pokeState: data.body.results,
      isLoading: false
    })
  }

  handlePokeSearch = (e) => {
    this.setState({search: e.target.value})
  }

  render() {
    return (
      <main>
          <Header />
          <PokeSearch handleSearch={this.handlePokeSearch} />
          <button onClick={this.handleClick}>Click to Find Pokemon</button>
         <PokesList showPokes={this.state.pokeState} />
      </main>
    )
  }
}

