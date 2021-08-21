import React from 'react';
import "../App.css";

class SearchBar extends React.Component {
    render () {
        return (
            <div className="search-bar-container">
                <input type="text" className="search-bar" />
            </div>
        );
    }
};

class UpvoteButtom extends React.Component {
    render () {
        return (
            <div className="upvote-container">
                <div className="icon-box">Upvote</div>
                <div className="upvote-count">{this.props.upvotes}</div>
            </div>
        );
    }
};

class NewsLetter extends React.Component {
    render () {
        return (
            <div className="newsletter">
                <div className="newsletter-heading">Newsletter</div>
                <div className="newletter-container">
                    <input type="text" className="email-id"/>
                    <button className="submit-btn">Subscribe</button>
                </div>
            </div>
        );
    }
};

class Logo extends React.Component {
    render () {
        return (
            <div className="logo">Product Hunt</div>
        );
    }
};

class Jobs extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            jobs : [
                {
                    "profile" : "Software Developer",
                    "location" : "New Delhi"
                },
                {
                    "profile" : "Product Manager",
                    "location" : "Bangalore"
                },
                {
                    "profile" : "Senior Developer",
                    "location" : "Bangalore"
                },
                {
                    "profile" : "Software Developer",
                    "location" : "New Delhi"
                },
                {
                    "profile" : "Product Manager",
                    "location" : "Bangalore"
                },
                {
                    "profile" : "Senior Developer",
                    "location" : "Bangalore"
                },
            ]
        }
    }

    render () {
        return (
            <div className="job-container">
                <div className="jobs-heading">Jobs</div>
                {this.state.jobs.slice(0,5).map(item => (
                    <div className="job-item-container">
                        <div className="job-company-logo"></div>
                        <div className="job-desc">
                            <div className="profile-name">{item.profile}</div>
                            <div className="location">Software Development</div>
                            <div className="location">{item.location}</div>
                        </div>
                    </div>
                ))}
                <button className="see-all-jobs-btn">See all jobs</button>
            </div>
        );
    }
}

export { SearchBar, UpvoteButtom, Logo, NewsLetter, Jobs };

