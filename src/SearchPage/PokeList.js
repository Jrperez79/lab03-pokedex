import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

export default class PokesList extends Component {
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
                   pokeState.length > 0 && <div>
                       {
                        Number(currentPage) !== 1
                        && <button onClick={handlePrevClick}>Prev</button>
                       }
                       {
                        Number(currentPage) !== Number(totalPages) &&
                        <button onClick={handleNextClick}>Next</button>
                       }
                       {currentPage} of {totalPages}
                    </div>
                }
                    <div>
                        {pokeState.map(pokemon => <PokeItem pokemon={pokemon} />)}
                    </div>
           </div>
       )
    }
}
