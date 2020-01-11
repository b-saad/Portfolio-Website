import  React, { Component } from 'react';
import './css/App.css';

import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects'
import PersonalInfo from './data/info.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing landingInfo={PersonalInfo.landing} />
        <Projects projects={PersonalInfo.projects}/>
      </ div>
    );
  }
}

export default App;
