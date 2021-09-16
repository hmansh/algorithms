import React, { Component } from 'react'
import companyLogo from "../../Assets/printlogo.png";
import { Link } from "react-router-dom";
export default class JobProfileComponent extends Component {
    render() {
        return (
            <div className="job-profile-component">
                <div className="job-profile-information">
                    <div className="job-profile-logo">
                        <img src={companyLogo} alt=""/>
                    </div>
                    <div className="job-data">
                        <div className="job-type">
                            <i className="fa fa-suitcase"></i>
                            <span>Temporary • Internship</span>
                        </div>
                        <div className="job-location">
                            <i className="fa fa-location-arrow"></i>
                            <span>Location • Bangalore</span>
                        </div>
                        <div className="job-position">
                            <i className="fa fa-user"></i>
                            <span>Profile • SDE II</span>
                        </div>
                    </div>
                    <div className="job-profile-desc">
                        <div className="job-profile-desc-content">Job Description</div>
                        <div className="job-profile-desc-info">
                            The mission of Intel Labs is to drive technology leadership for Intel. This includes coordinating research and development among several business groups and aligning Intel's strategies and technologies with future industry needs. The G3 team in Intel Labs conducts exciting research in Generative, Graphics and Gaming technologies. Team is looking for graduate/undergraduate interns to participate in research and development of next-generation AI application in Computer Graphics and Vision. Building performant AI models for Intel software and hardware ecosystem. Come join us and be a part of building something new.
                        </div>
                        <div className="job-profile-desc-content">Experience</div>
                        <div className="job-profile-desc-info">
                            The mission of Intel Labs is to drive technology leadership for Intel. This includes coordinating research and development among several business groups and aligning Intel's strategies and technologies with future industry needs. The G3 team in Intel Labs conducts exciting research in Generative, Graphics and Gaming technologies. Team is looking for graduate/undergraduate interns.
                        </div>
                    </div>
                </div>
                <div className="application-btn">
                    <Link to="/" className="path-link">
                        <button className="company-website btn">Back</button>
                    </Link>
                    <button className="job-profile-apply btn">Apply</button>
                </div>
            </div>
        )
    }
}
