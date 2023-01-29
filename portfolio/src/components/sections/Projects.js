import React, { useState } from 'react';
import Project from '../Project';

function Projects({ isActive }){
    return (
        <div>
        {isActive ? (
          <div>projects</div>
        ) : (
          <div>
            <Project />
          </div>
        )}
      </div>
    )
}

export default Projects;