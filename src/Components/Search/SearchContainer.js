import React, { Component } from 'react';
import SearchComponent from './SearchComponent';

export default class SearchContainer extends Component {
    render() {
        return (
            <div className="search-container">
                <SearchComponent/>
            </div>
        )
    }
}
