import React, { Component } from 'react';
import CompanyLogo from "./CompanyLogo";

export default class HeaderContainer extends Component {
    render() {
        return (
            <div className="header-container">
                <div className="logo-header-container">
                    <CompanyLogo/>
                </div>
            </div>
        )
    }
}
