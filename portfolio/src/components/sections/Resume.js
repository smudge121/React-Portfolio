import React, { useState } from 'react';

function Resume({isActive}){
    return (
      <div>
        {isActive ? (
          <div>resume</div>
        ) : (
          <div></div>
        )}
      </div>
    )
}

export default Resume;