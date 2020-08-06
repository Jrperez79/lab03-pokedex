import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PokesList extends Component {
    render() {
        const {
            pokemon: {
                pokemon,
                url_image,
            }
        } = this.props;
        
        return <Link to={`/detail/${pokemon}`}>
            <p>My name is {pokemon}</p>
            <img src={url_image} alt={pokemon} />
        </Link>
    }
}
