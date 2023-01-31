import React, { useState } from 'react';

function Contact({isActive}){
    return (
        <div>
        {isActive ? (
          <div>
            <div className='container'>
              <div className='row'><h2 className='aboreto display-2 border-bottom border-3 border-dark'>Contact Me</h2></div>
              <div className='row'>
                <ul className='mt-5 justify-content-center'>
                  <li className='mb-2 dark-grey h3 montserrat'><a className='a-over link-custom' href="https://github.com/smudge121"><span className='dancing h1'>Email:</span> jaretishii17@gmail.com</a></li>
                  <li className='mb-2 dark-grey h3 montserrat'><a className='a-over link-custom' href="mailto:jaretishii17@gmail.com"><span className='dancing h1'>GitHub:</span> smudge121</a></li>
                  <li className='mb-2 dark-grey h3 montserrat'><a className='dancing h1 a-over link-custom' href="https://www.linkedin.com/in/jaret-ishii/">LinkedIn Page </a></li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
}

export default Contact;