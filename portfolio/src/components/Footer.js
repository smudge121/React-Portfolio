import React, { useState } from 'react';

function Footer(){
    const testStyle = {
        backgroundColor: "rgba(0, 0, 0, 0.2)" 
    }

    return (
<div>
<footer className="bg-light text-center text-lg-start fixed-bottom">
  <div className="container p-3 text-center">
    <div className="row d-flex justify-content-around">
      <a className='col-4' href="https://github.com/smudge121">git</a>
      <a className='col-4' href="mailto:jaretishii17@gmail.com">Email</a>
      <a className='col-4' href="https://www.linkedin.com/in/jaret-ishii/">LinkedIn</a>
    </div>
  </div>

  <div className="text-center p-3" style={testStyle}>
    © 2020 Copyright:
    <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
</div>
    )
}

export default Footer;