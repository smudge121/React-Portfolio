import React, { useState } from 'react';
import headshot from "../../assets/JIshii.jpg"

function AboutMe({isActive}){
    return (
        <div>
        {isActive ? (
          <div>
            <div className='container'>
              <div className='row d-flex'>
                <img src={headshot} className = "about-img rounded-circle col-3" />
                <div className='col-9'>
                  <h1 className='text-left aboreto fs-1 mb-5 border-bottom border-3 border-dark'>Jaret Ishii</h1>
                  <p className='text-left montserrat fs-4'>My name is Jaret Ishii and I am a web developer and aspiring game developer.  I have experience developing applications in javascript. 
                    I have experience with React while using the MERN stack, HTML and CSS, SQL databases, and Express Routing.  I have also created video games using the
                    Unity Game Engine.`
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
}

export default AboutMe;