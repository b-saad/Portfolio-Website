import  React, { Component } from 'react';
import './css/Project.css';

class Project extends Component {
    render() {
        const { key, name, link, github, technologies, description } = this.props;
        const linkElement = link != null ? <a href={link}>Check it out</a> : null
        return (
            <div className="Project" key={key}>
                <h3>{name}</h3>
                {linkElement}
                <a href={github}>{github}</a>
                <p>{technologies}</p>
                <p>{description}</p>
            </div>
        );
    }
  }
  
export default Project;
