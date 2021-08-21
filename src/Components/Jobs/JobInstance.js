import React, { Component } from 'react'

export default class JobInstance extends Component {
    render() {
        return (
            <div className="job-instance">
               <div className="job-instance-logo">
                   <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100" alt="" />
               </div>
               <div className="job-instance-desc">
                   <div className="job-instance-company">Intel</div>
                   <div className="job-instance-role">Software Developer 1</div>
               </div>
            </div>
        )
    }
}
