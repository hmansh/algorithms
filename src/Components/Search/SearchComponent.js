import React, { Component } from 'react'

export default class SearchComponent extends Component {
    render() {
        return (
            <div className="search-component">
                <input type="text" placeholder="Search Companies" className="search-bar" />
            </div>
        )
    }
}
