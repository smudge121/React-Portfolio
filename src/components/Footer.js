import React, { useState } from 'react';
import gitIcon from "../assets/icons/github-mark.png"
import mailIcon from "../assets/icons/icons8-gmail-logo-48.png"
import linkedIcon from "../assets/icons/LI-In-Bug.png"

function Footer(){
    const testStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.2)" 
    }

    return (
<div>
<footer className="text-center text-lg-start fixed-bottom">
  <div className="container p-3 text-center">
    <div className="row d-flex justify-content-around">
      <div className='col-4'><img className='icon' href="https://github.com/smudge121" src={gitIcon} /></div>
      <div className='col-4'><img className='icon' href="mailto:jaretishii17@gmail.com" src={mailIcon} /></div>
      <div className='col-4'><img className='icon' href="https://www.linkedin.com/in/jaret-ishii/" src={linkedIcon} /></div>
    </div>
  </div>
</footer>
</div>
    )
}

export default Footer;