import  React, { Component } from 'react';
import './css/Project.css';

class Project extends Component {
    render() {
        const { name, link, github, technologies, description } = this.props;
        const linkElement = link != null ? <a href={link}>{link.replace(/(^\w+:|^)\/\//, '')}</a> : null
        return (
            <div className="Project flex-container">
                <div className="Project-Info">
                    <h3>
                        {name}
                          {/* - 
                        <a href={github}>
                            <i className="fab fa-github"></i>
                        </a> */}
                    </h3>
                    {linkElement}
                </div>
                <div className="Project-Details">
                    <p>{technologies}</p>
                    <p>{description}</p>
                </div>
            </div>
        );
    }
  }
  
export default Project;
