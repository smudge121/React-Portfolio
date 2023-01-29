import React, { useState } from 'react';
import Project from '../Project';
import {_projects} from "../../assets/constants"

function Projects({ isActive }){
    return (
        <div>
        {isActive ? (
        <div className='container'>
          <div className='row'>
            {
              _projects.map(function(proj, index) {
                return (
                  <div className='col-6 pt-5' key={index}>
                    <Project img={proj.img} git={proj.git} 
                    title={proj.title} url={proj.url} subtitle={proj.subtitle} />
                  </div>
                )
              })
            }
          </div>
        </div>
          
        ) : (
          <div></div>
        )}
      </div>
    )
}

export default Projects;