import React from 'react'
import Support from '../components/Support.jsx'

const Footer = () => {
  return (
    <div className="flex flex-col  h-screen">
      {/* Main Support Section */}
      <div className="flex-grow h-[61vh] w-screen ">
        <Support />
      </div>
      
      {/* Footer Section */}
      
    </div>
  );
};

export default Footer;
