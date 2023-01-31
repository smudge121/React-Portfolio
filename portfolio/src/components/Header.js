import React, { useState } from 'react';
import Navigation from './Navigation';

function Header(){
    const [aboutMe, setAboutMe] = useState(true);
    const [contact, setContact] = useState(false);
    const [project, setProject] = useState(false);
    const [resume, setResume] = useState(false);

    return (
<div>
<div>
<nav className="navbar navbar-expand-lg navbar-light">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className={`nav-link aboreto fs-3 ${aboutMe ? "disabled" : ""}`} href="#" onClick={
          () => {
            setAboutMe(!aboutMe);
            if (contact) setContact(!contact);
            else if (project) setProject(!project);
            else if (resume) setResume(!resume);
          }
          }>About Me</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link aboreto fs-3 ${project ? "disabled" : ""}`} href="#" onClick={
          () => {
            setProject(!project);
            if (contact) setContact(!contact);
            else if (aboutMe) setAboutMe(!aboutMe);
            else if (resume) setResume(!resume);
          }
          }>Projects</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link aboreto fs-3 ${contact ? "disabled" : ""}`} href="#" onClick={
          () => {
            setContact(!contact);
            if (aboutMe) setAboutMe(!aboutMe);
            else if (project) setProject(!project);
            else if (resume) setResume(!resume);
          }
          }>Contact Me</a>
      </li>
      <li className="nav-item ml-5">
        <a className={`nav-link aboreto fs-3 ${resume ? "disabled" : ""}`} href="#" onClick={
          () => {
            setResume(!resume);
            if (contact) setContact(!contact);
            else if (project) setProject(!project);
            else if (aboutMe) setAboutMe(!aboutMe);
          }
          }>Resume</a>
      </li>
    </ul>
  </div>
</nav>
</div>
<div className='page-body'>
  <Navigation aboutMe={aboutMe} contact={contact} 
    project={project} resume={resume} />
</div>

</div>
    )
}

export default Header;