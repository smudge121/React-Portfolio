import React, { useState } from 'react';

function Projects({ isActive }){
    return (
        <div>
        {isActive ? (
          <div>projects</div>
        ) : (
          <div></div>
        )}
      </div>
    )
}

export default Projects;