import React, { Component } from 'react';
import JobProfileComponent from "./JobProfileComponent";

export default class JobProfileContainer extends Component {
    render() {
        return (
            <div className="job-profile-container">
                <JobProfileComponent/>
            </div>
        )
    }
}
