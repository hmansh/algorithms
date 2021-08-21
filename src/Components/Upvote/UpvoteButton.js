import React, { Component } from 'react'

export default class UpvoteButton extends Component {
    render() {
        return (
            <button className="upvote-btn">
                <i className="fa fa-caret-up"></i>
                <div className="upvote-count">{this.props.count*124}</div>
            </button>
        )
    }
}
