import React, { Component } from 'react'
import CompaniesContainer from "../Companies/CompaniesContainer";
import SidePanel from "../SidePanel/SidePanelContainer";

export default class WindowContainer extends Component {
    render() {
        return (
            <div className="window-container">
                <CompaniesContainer/>
                <SidePanel/>
            </div>
        )
    }
}
