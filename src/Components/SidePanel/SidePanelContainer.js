import React, { Component } from 'react'
import JobContainer from "../Jobs/JobContainer";
import NewsletterContainer from "../Newsletter/NewsletterContainer";

export default class SidePanelContainer extends Component {
    render() {
        return (
            <div className="sidepanel-container">
                <JobContainer/>
                <NewsletterContainer/>
            </div>
        )
    }
}
