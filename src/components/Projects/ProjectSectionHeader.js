import  React, { Component } from 'react';
import './css/ProjectSectionHeader.css';

class ProjectSectionHeader extends Component {
    render() {
        return (
            <h1 className="ProjectSectionHeader">
                {this.props.title}
            </h1>
        );
    }
  }
  
  export default ProjectSectionHeader;
