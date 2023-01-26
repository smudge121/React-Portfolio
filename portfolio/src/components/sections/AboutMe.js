import React, { useState } from 'react';

function AboutMe({isActive}){
    return (
        <div>
        {isActive ? (
          <div>about me</div>
        ) : (
          <div></div>
        )}
      </div>
    )
}

export default AboutMe;