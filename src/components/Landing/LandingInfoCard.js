import  React, { Component } from 'react';
import './css/LandingInfoCard.css';

class LandingInfoCard extends Component {
    render() {
        const { title, subtitle, body } = this.props;
        return (
            <div className="LandingInfoCard">
                <h1>{title}</h1>
                <h4>{subtitle}</h4>
                <p>{body}</p>
            </div>
        );
    }
  }
  
  export default LandingInfoCard;
