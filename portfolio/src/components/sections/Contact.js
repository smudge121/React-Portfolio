import React, { useState } from 'react';

function Contact({isActive}){
    return (
        <div>
        {isActive ? (
          <div>contact</div>
        ) : (
          <div></div>
        )}
      </div>
    )
}

export default Contact;