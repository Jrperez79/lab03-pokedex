import React, { Component } from 'react'
import request from 'superagent';
import PokeList from './PokeList.js';
import '../App.css';

export default class SearchPage extends Component {
    state = {
        search: '',
        searchBy: 'pokemon',
        pokeState: [],
        currentPage: 1,
        totalPages: 1
    }

    componentDidMount = async () => {
        const params = new URLSearchParams(this.props.location.search);

        const searchBy = params.get('searchBy');
        const page = params.get('page');
        const search = params.get('search');

        if (searchBy && page && search) {
            await this.setState({
                searchBy: searchBy,
                currentPage: page,
                search: search
            });
        }
        // await is important because it helps keep the fetch in sync?
        await this.makeRequest()
    }

    makeRequest = async () => {
        
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${this.state.currentPage}&perPage=20&${this.state.searchBy}=${this.state.search}`);

        await this.setState({
            pokeState: data.body.results,
            totalPages: Math.ceil(data.body.count / 20),
        })
        
        const params = new URLSearchParams(this.props.location.search);

        params.set('search', this.state.search);
        params.set('searchBy', this.state.searchBy);
        params.set('page', this.state.currentPage);

        this.props.history.push('?' + params.toString())
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await this.setState({
            currentPage: 1
        })
        await this.makeRequest()
    }

    handleNextClick = async () => {
        await this.setState({ currentPage: Number(this.state.currentPage) + 1 })

        await this.makeRequest();
    }

    handlePrevClick = async () => {
        await this.setState({ currentPage: Number(this.state.currentPage) - 1 })

        await this.makeRequest();
    }

    handlePokeType = (e) => {
        const type = e.target.value;

        this.setState({ filter: type })
    }

    render() {
        const { 
                pokeState, 
                currentPage, 
                totalPages, 
            } = this.state;

        return (
            <div className="search-main">
                <form  onSubmit={this.handleSubmit}>
                <input className="input" placeholder="Enter Pokemon Here" onChange={(e) => this.setState({ search: e.target.value })} value={this.state.search}/>  
                <select className="select" onChange={(e) => { this.setState({ searchBy: e.target.value })}} value={this.state.searchBy}>
                    <option value='pokemon'>Name</option>
                    <option value='type'>Type</option>
                    <option value='attack'>Attack</option>
                    <option value='defense'>Defense</option>      
                </select>
                <button onClick={this.handleClick}>Find a Pokemon</button>
                </form>
                <div>
                {
                    <PokeList
                    handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick} 
                    currentPage={currentPage}
                    pokeState={pokeState}
                    totalPages={totalPages} 
                    />
                }
                </div>
            </div>
        );
    }
}
