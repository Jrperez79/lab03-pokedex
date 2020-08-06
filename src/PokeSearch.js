import React, { Component } from 'react'

export default class PokeSearch extends Component {
    render() {
        return (
            <div className="poke-search">
                <h3>Search for a Pokemon...</h3>
                <input type="text" placeholder="Enter Name of Pokemon" onChange={this.props.handlePokeSearch} />
            </div>
        )
    }
}
