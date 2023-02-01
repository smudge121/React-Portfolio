import React, { useState } from 'react';
import AboutMe from './sections/AboutMe';
import Contact from './sections/Contact';
import Projects from './sections/Projects';
import Resume from './sections/Resume';

function Navigation({aboutMe, contact, project, resume}){

    return (
      <div>
        <AboutMe isActive={aboutMe} />
        <Contact isActive={contact} />
        <Projects isActive={project} />
        <Resume isActive={resume} />
      </div>
    )
}

export default Navigation;