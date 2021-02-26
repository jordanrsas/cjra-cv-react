import React from 'react';
import styled from 'styled-components';
import style from '../App.css'
import json from '../resume.json';
import Profile from './Profile'
import About from './About'
import Work from './Work'
import Skills from './Skills'
import Education from './Education'

const CV = styled.div`
display: inline-block;
margin-right: 0;
vertical-align: top;
overflow: hidden;
`
const Home = () => (
    <div className="row">
      <aside className="col-md-4">
        <div className="inner">
          <Profile profileData={json.basics} />
        </div>
      </aside>
      <main className="col-md-8">
        <div className="inner">
          <CV>
          <About aboutData={json.basics.summary} />
          <Work workData={json.work}/>
          <Skills skillsData={json.skills}/>
          <Education educationData={json.education} />
            </CV>
        </div>
      </main>
  </div>
);

export default Home;