import React, { Component } from 'react'

export default class JobInstance extends Component {
    render() {
        return (
            <div className="job-instance">
               <div className="job-instance-logo">
                   <img src="https://banner2.cleanpng.com/20180601/org/kisspng-apple-company-corporation-nasdaq-aapl-apple-logo-5b110ce6a35299.938342481527844070669.jpg" alt="" />
               </div>
               <div className="job-instance-desc">
                   <div className="job-instance-company">Apple</div>
                   <div className="job-instance-role">Software Developer 1</div>
               </div>
            </div>
        )
    }
}
