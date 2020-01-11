import  React, { Component } from 'react';
import './css/Projects.css';

import ProjectSectionHeader from './ProjectSectionHeader';
import Divider from './Divider';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="Projects">
                <div className="ProjectSectionContainer">
                    <ProjectSectionHeader title='Projects' />   
                    <Divider />
                </div>
            </div>
        );
    }
  }
  
export default Projects;
