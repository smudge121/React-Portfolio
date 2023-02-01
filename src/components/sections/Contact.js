import React, { useState } from 'react';


function Contact({isActive}){

  const [message, setMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    window.open(`mailto:jaretishii17@gmail.com?body=${message}`);
  };

  const handleInputChange = (e) => {
    const { value } = e.target;

    setMessage(value);
  }

    return (
        <div>
        {isActive ? (
          <div>
            <div className='container'>
              <div className='row'><h2 className='aboreto display-2 border-bottom border-3 border-dark'>Contact Me</h2></div>
              <div className='row mt-3'>
                <form>
                  <div className="form-group d-flex flex-column justify-content-center align-items-center mb-3">
                    <label className="aboreto h2 dark-grey" htmlFor="email-form">Email address</label>
                    <input type="email" className="form-control-custom w-50 dark-grey montserrat p-2" id="email-form" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">Enter your email to contact me</small>
                  </div>
                  <div className="form-group d-flex flex-column justify-content-center align-items-center mb-3">
                    <label className="aboreto h2 dark-grey" htmlFor="message">Message</label>
                    <textarea rows="5" value={message} onChange={handleInputChange} className="form-control-custom w-50 dark-grey montserrat p-3" id="message" placeholder="Message of Email" ></textarea>
                  </div>
                  <button type="submit" onClick={handleFormSubmit} className="rounded-circle p-3 btn-custom h2 dancing">Submit</button>
                </form>
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