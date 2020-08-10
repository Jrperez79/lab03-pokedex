import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
       const {
           pokeState,
           handleNextClick,
           handlePrevClick,
           currentPage,
           totalPages
       } = this.props;

       return (
           <div>
                {
                   pokeState.length > 0 && <div className="prev-next">
                       {
                        Number(currentPage) !== 1
                        && <button onClick={handlePrevClick}>Prev</button>
                       }
                       {currentPage} of {totalPages}
                       {
                        Number(currentPage) !== Number(totalPages) &&
                        <button onClick={handleNextClick}>Next</button>
                       }
                    </div>
                }
                    <div>
                        {pokeState.map(pokemon => <PokeItem key={pokemon} pokemon={pokemon} />)}
                    </div>
           </div>
       )
    }
}
