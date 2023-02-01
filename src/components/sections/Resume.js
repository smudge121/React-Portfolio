import React, { useState } from 'react';

function Resume({isActive}){
    return (
      <div>
        {isActive ? (
          <div>
          <div className='container'>
            <div className='row'><h2 className='aboreto display-2 border-bottom border-3 border-dark'>Resume</h2></div>
            <div className='row mt-3'>
              <div className='mb-3 border-bottom border-1 border-dark'>
                <p className='h1 aboreto dark-grey'>Skills:</p>
                <div className='d-flex flex-column align-items-center'>
                  <p className='ft-5 dark-grey montserrat'><span className='h2 dancing dark-grey'>Programming Languages:</span> Javascript, C++, C#, HTML, CSS, SQL</p>
                  <p className='ft-5 dark-grey montserrat'><span className='h2 dancing dark-grey'>Tools:</span> Unity Game Engine, Visual Studio</p>
                  <p className='ft-5 dark-grey montserrat'>React, MongoDB, Express, </p>
                </div>
              </div>
              <div className='mb-3 border-bottom border-1 border-dark'>
                <p className='h1 aboreto dark-grey'>Employment</p>
                <div className='d-flex flex-column align-items-center'>
                  <p className='ft-5 dark-grey montserrat'><span className='h2 dancing dark-grey'>Title:</span> Jr Data Analyst</p>
                  <p className='ft-5 dark-grey montserrat'><span className='h2 dancing dark-grey'>Company:</span> Clever Care Health Plan</p>
                  <p className='ft-5 dark-grey montserrat'>In this position, I worked with Microsoft SQL server as a data analyst.
                    I mapped incoming and outgoing data, from and to our data warehouse.
                  </p>
                </div>
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

export default Resume;