import React, { Component } from 'react'
import CompaniesContainer from "../Companies/CompaniesContainer";
import SidePanel from "../SidePanel/SidePanelContainer";
import JobProfileContainer from "../JobProfile/JobProfileContainer";
import { Route } from 'react-router-dom';
export default class WindowContainer extends Component {
    render() {
        return (
            <div className="window-container">
                <Route path="/" exact render={() => <CompaniesContainer 
                    data={this.props.data} 
                    handleUpvote={this.props.handleUpvote}
                />} />
                <Route path="/job" exact render={() => <JobProfileContainer/>} />
                <SidePanel/>
            </div>
        )
    }
}
