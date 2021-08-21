import React, { Component } from 'react';
import { UpvoteButtom } from './Components/MajorComponents';

class Product extends Component {
    render() {
        return (
            <div className="item">
                <div className="company-container">
                    <div className="_image_border">
                        <img src={this.props.src} alt="img" className="_image"/>
                    </div>
                </div>
                <div className="details">
                    <div className="details-name">{this.props.name}</div>
                    <div className="details-tags">{this.props.tags}</div>
                </div>
                <div className="voting">
                    <UpvoteButtom upvotes={this.props.upvotes}/>
                </div>
            </div>
        )
    }
}

export default Product;