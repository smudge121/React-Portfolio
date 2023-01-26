import React, { useState } from 'react';
import Navigation from './Navigation';

function Header(){
    const [aboutMe, setAboutMe] = useState(true);
    const [contact, setContact] = useState(false);
    const [project, setProject] = useState(false);
    const [resume, setResume] = useState(false);


    const handleClick = () => {
        setAboutMe(!aboutMe);

    }

    return (
<div>
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className={`nav-link ${aboutMe ? "disabled" : ""}`} href="#" onClick={
          () => {
            setAboutMe(!aboutMe);
            if (contact) setContact(!contact);
            else if (project) setProject(!project);
            else if (resume) setResume(!resume);
          }
          }>About Me</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${project ? "disabled" : ""}`} href="#" onClick={
          () => {
            setProject(!project);
            if (contact) setContact(!contact);
            else if (aboutMe) setAboutMe(!aboutMe);
            else if (resume) setResume(!resume);
          }
          }>Projects</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${contact ? "disabled" : ""}`} href="#" onClick={
          () => {
            setContact(!contact);
            if (aboutMe) setAboutMe(!aboutMe);
            else if (project) setProject(!project);
            else if (resume) setResume(!resume);
          }
          }>Contact Me</a>
      </li>
      <li className="nav-item">
        <a className={`nav-link ${resume ? "disabled" : ""}`} href="#" onClick={
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

<Navigation aboutMe={aboutMe} contact={contact} 
    project={project} resume={resume} />
</div>
    )
}

export default Header;