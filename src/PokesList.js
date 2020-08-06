import React, { Component } from 'react'

export default class PokesList extends Component {
    render() {
        return (
            <div>
                <ul className="poke-list">
                    {this.props.showPokes.map(poke => (
                    <li key={poke.id}>
                        <h3>{poke.pokemon}</h3>
                        <img src={poke.url_image} alt="" />
                    <p className="height">Height: {poke.height}ft</p>
                    <p className="weight">Weight: {poke.weight}lbs</p>
                    <p className="attack">Attack: {poke.attack}</p>
                    <p className="defense">Defense: {poke.defense}</p>
                    </li>))}
                </ul>
            </div>
        )
    }
}
