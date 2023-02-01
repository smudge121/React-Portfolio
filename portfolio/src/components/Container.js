import React from 'react';
import image from '../assets/pexels-henry-&-co-2341290.jpg'

const Container = ({ children }) => {
  return (
    <div className="container-image" style={{
      backgroundImage: image,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      height: '100%'
    }}>
      {children}
    </div>
  );
};

export default Container;