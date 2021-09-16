import React, { Component } from 'react'

export default class UpvoteButton extends Component {
    render() {
        return (
            <button className="upvote-btn" onClick={() => this.props.handleUpvote(this.props.uid)}>
                <i className="fa fa-caret-up"></i>
                <div className="upvote-count">{this.props.count}</div>
            </button>
        )
    }
}
