import React, { Component } from 'react'
import UpvoteButton from '../Upvote/UpvoteButton';

export default class CompanyInstance extends Component {
    render() {
        return (
            <div className="company-instance">
                <div className="company-instance-logo">
                    <img src={this.props.src} alt="img" className="company-instance-logo-img"/>
                </div>
                <div className="company-instance-desc">
                    <div className="company-instance-name">
                        {this.props.name}
                    </div>
                    <div className="company-instance-bio">
                        {this.props.desc}
                    </div>
                </div>
                <div className="company-upvote-count">
                    <UpvoteButton count={this.props.count} uid={this.props.uid} handleUpvote={this.props.handleUpvote}/>
                </div>
            </div>
        )
    }
}
