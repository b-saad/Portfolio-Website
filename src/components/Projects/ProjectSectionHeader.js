import  React, { Component } from 'react';
import './css/ProjectSectionHeader.css';

class ProjectSectionHeader extends Component {
    render() {
        return (
            <h2 className="ProjectSectionHeader">
                {this.props.title}
            </h2>
        );
    }
  }
  
  export default ProjectSectionHeader;
