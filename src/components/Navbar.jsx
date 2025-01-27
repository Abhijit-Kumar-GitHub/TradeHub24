import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import CustomButton from './CustomButton';

const Navbar = () => {
  // useEffect(() => {
  //   // Initial logo animation
  //   gsap.fromTo('.logo', {
  //     y: -50,
  //     opacity: 0
  //   }, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //     delay: 1
  //   });

  //   // Create timeline for nav items and buttons
  //   const tl = gsap.timeline({ delay: 1.5 });
    
  //   tl.fromTo('.nav-item', {
  //     y: -30,
  //     opacity: 0
  //   }, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //     stagger: 0.1
  //   })
  //   .fromTo('.button-container button', {
  //     y: -30,
  //     opacity: 0
  //   }, {
  //     y: 0,
  //     opacity: 1,
  //     duration: 0.5,
  //     stagger: 0.1
  //   });
  // }, []);

  return (
    <div className='w-full navbar bg-[#45455d4e] flex flex-col md:flex-row justify-between items-center' 
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        padding: "clamp(10px, 2.2vw, 3.5vh)",
        gap: "clamp(10px, 1.8vw, 18px)",
        height: "10vh",
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(69, 69, 93, 0.3)"
      }}>
      
      <div className='logo'>
        <img 
          src="https://tradehub24.com/profile_images/logo.png" 
          alt="Logo" 
          style={{
            width: "30vh",
            maxHeight: "3.5vh"
          }}
        />
      </div>
      
      <div style={{
        fontSize: "clamp(13px, 1.6vw, 22px)",
        gap: "clamp(10px, 2.2vh, 28px)"
      }} className='flex flex-wrap justify-center gap-[2vh]'>
        <div className='nav-item cursor-pointer hover:text-blue-500'>How It Works</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Join Us</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Popular Trades</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Reviews</div>
        <div className='nav-item cursor-pointer hover:text-blue-500'>Contact</div>
      </div>

      <div style={{
        fontSize: "clamp(12px, 1.4vw, 20px)",
        gap: "clamp(8px, 2.2vh, 22px)"
      }} className='flex gap-[2vh] button-container'>
        <CustomButton buttonName={"Login"} />
        <CustomButton buttonName={"Start Free Trial"} />
      </div>
    </div>
  )
}

export default Navbar;
