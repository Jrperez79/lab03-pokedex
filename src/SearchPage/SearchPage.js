import React, { Component } from 'react'
import request from 'superagent';
import PokesList from './PokesList.js';

export default class SearchPage extends Component {
    state = {
        search: '',
        searchBy: 'pokemon',
        pokeState: []
    }

    handleClick = async () => {
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=1000&${this.state.searchBy}=${this.state.search}`);

        this.setState({
            pokeState: data.body.results
        })
    }

    handlePokeType = (e) => {
        const type = e.target.value;
        this.setState({ filter: type })
    }

    render() {
        const { pokeState } = this.state;

        return (
            <div>
                <input onChange={(e) => this.setState({ search: e.target.value })} />  
                <select onChange={(e) => { this.setState({ searchBy: e.target.value })}} >
                    <option value='pokemon'>Name</option>
                    <option value='type'>Type</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>      
                </select>
                <button onClick={this.handleClick}>Find a Pokemon</button>
                {
                    pokeState.map(poke => <PokesList key={poke} pokemon={poke} />)
                }
            </div>
        );
    }
}
