import React, { Component } from 'react'
import CompanyInstance from "./CompanyInstance";
import Data from "../../Constants/ApplicationData";

export default class CompaniesContainer extends Component {
    render() {
        return (
            <div className="companies-container">
                <div className="company-instance-container">
                    {Data.map(item => <CompanyInstance
                        src={item.img_src}
                        name={item.name}
                        count={item.upvotes}
                        tags={item.tags}
                    />)}
                </div>
            </div>
        )
    }
}
