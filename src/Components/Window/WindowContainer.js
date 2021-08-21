import React, { Component } from 'react'
import CompaniesContainer from "../Companies/CompaniesContainer";
import SidePanel from "../SidePanel/SidePanelContainer";
import JobProfileContainer from "../JobProfile/JobProfileContainer";
export default class WindowContainer extends Component {
    render() {
        return (
            <div className="window-container">
                {/* <CompaniesContainer/> */}
                <JobProfileContainer/>
                <SidePanel/>
            </div>
        )
    }
}
