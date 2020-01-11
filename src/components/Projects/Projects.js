import  React, { Component } from 'react';
import './css/Projects.css';

import ProjectSectionHeader from './ProjectSectionHeader';
import Divider from './Divider';
import Project from './Project';

class Projects extends Component {
    render() {
        const { projects } = this.props;
        const projectItems = projects.map((project, index) =>
            // no stable ID so index it used
            <Project key={index}
                     name={project.name} 
                     link={project.link} 
                     github={project.github} 
                     technologies={project.technologies}
                     description={project.description}
            />
        );
        return (
            <div className="Projects">
                <div className="ProjectSectionContainer">
                    <ProjectSectionHeader title='Projects' />   
                    <Divider />
                    {projectItems}
                </div>
            </div>
        );
    }
  }
  
export default Projects;
