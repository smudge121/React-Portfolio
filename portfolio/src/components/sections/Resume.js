import React, { useState } from 'react';

function Resume({isActive}){
    return (
      <div>
        {isActive ? (
          <div>
          <div className='container'>
            <div className='row'><h2 className='aboreto display-2 border-bottom border-3 border-dark'>Resume</h2></div>
            <div className='row'>
              <p className='mt-5 dancing h1 dark-grey'>To Be Uploaded</p>
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