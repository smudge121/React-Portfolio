import React, { useState } from 'react';
import headshot from "../../assets/JIshii.jpg"

function AboutMe({isActive}){
    return (
        <div>
        {isActive ? (
          <div>about me
            <div className='container'>
              <div className='row d-flex'>
                <img src={headshot} className = "about-img rounded-circle col-3" />
                <div className='col-9'>
                  <h2 className='text-left'>Jaret Ishii</h2>
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