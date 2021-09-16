import React, { Component } from 'react'
import CompanyInstance from "./CompanyInstance";

export default class CompaniesContainer extends Component {
    render() {
        return (
            <div className="companies-container">
                <div className="company-instance-container">
                    {this.props.data.map((item, index) => <CompanyInstance
                        src={item.img_src}
                        name={item.name}
                        count={item.upvotes}
                        desc={item.desc}
                        key={'key_'+index}
                        uid={item.uid}
                        handleUpvote={this.props.handleUpvote}
                    />)}
                    <button className="more-companies-btn btn">
                        View more Companies
                    </button>
                </div>
            </div>
        )
    }
}
