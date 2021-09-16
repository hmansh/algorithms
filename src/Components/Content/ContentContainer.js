import React, { Component } from 'react'
import SearchContainer from "../Search/SearchContainer";
import WindowContainer from "../Window/WindowContainer";

export default class ContentContainer extends Component {
    render() {
        return (
            <div className="content-container">
                <SearchContainer/>
                <WindowContainer 
                    data={this.props.data} 
                    handleUpvote={this.props.handleUpvote}
                />
            </div>
        )
    }
}
