import React, { Component } from 'react'

export default class NewletterComponent extends Component {
    render() {
        return (
            <div className="newsletter-component">
                <div className="newsletter-header">
                    Newsletter
                </div>
                <div className="container">
                    <input className="newsletter-input input" placeholder="email"/>
                    <button className="newsletter-btn btn">
                        Subscribe
                    </button>
                </div>
            </div>
        )
    }
}
