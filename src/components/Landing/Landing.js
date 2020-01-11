import  React, { Component } from 'react';
import '../../css/Landing.css';

import LandingInfoCard from './LandingInfoCard';

class Landing extends Component {
    render() {
        const { landingInfo } = this.props;
        return (
          <div className="Landing">
            <LandingInfoCard title={landingInfo.name} subtitle={landingInfo.occupation} body={landingInfo.about}/>
          </div>
        );
    }
  }
  
  export default Landing;
