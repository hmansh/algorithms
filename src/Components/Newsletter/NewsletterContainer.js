import React, { Component } from 'react'
import NewsletterComponent from "../Newsletter/NewsletterComponent";

export default class NewsLetterContainer extends Component {
    render() {
        return (
            <div className="newsletter-container">
                <NewsletterComponent/>
            </div>
        )
    }
}
