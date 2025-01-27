import React, { useEffect } from 'react';
import StepsCard from './StepsCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  useEffect(() => {
    gsap.fromTo(".howItWorksContainer", {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".howItWorksContainer",
        start: "top 60%",  
        end: "top 20%",    // Ends animation when top of container hits 20% of viewport
        toggleActions: "play none none reverse"     // Keep markers for debugging
      }
    });
  }, []);

  const steps = [
    {
      id: 1,
      image: "https://tradehub24.com/profile_images/icon-3.png",
      heading: "Work Review",
      description: "The client is encouraged to leave feedback and reviews about the tradesperson's work, which helps build their reputation on the platform.",
      buttonText: "Leave a Review",
    },
    {
      id: 2,
      image: "https://tradehub24.com/profile_images/icon-1.png",
      heading: "Sign Up as a Trader",
      description: "Submit a bid to the homeowner, outlining their qualifications, approach to the job, timeline, and pricing.",
      buttonText: "Sign up",
    },
    {
      id: 3,
      image: "https://tradehub24.com/profile_images/icon-2.png",
      heading: "Request a Quote",
      description: "A dedicated platform for homeowners and tradespeople to connect, Trade Hub24 aims to simplify the process of finding and hiring skilled professionals for home maintenance and repair tasks.",
      buttonText: "Request a Quote",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center px-4 bg-gradient-to-b from-[#F7F9FC] to-[#EDF2F7]">
      <div className=" rounded-xl shadow-sm w-full max-w-6xl mx-auto">
        <div className="howItWorksContainer" style={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          border: "0.1vh solid white",
          borderRadius: "4vh",
          alignItems: "center",
          justifyContent: "center",
          padding: "2vw",
          gap: "2.5vh",
          minHeight: "fit-content",
          marginTop: "1vh",
          
          
          opacity: 0,  // Set initial opacity to 0
          '@media (max-width: 768px)': {
            width: "90%",
            padding: "3vw",
            gap: "2vh",
            marginTop: "2vh"
          }
        }}>
          <h2 className="howItWorks text-center font-bold" style={{
            fontSize: "clamp(20px, 3vw, 36px)",
            marginBottom: "clamp(10px, 2vh, 20px)"
          }}>
            How It Works
          </h2>
          
          <div className="flex flex-col md:flex-row md:justify-center md:items-center justify-center items-center w-full" style={{
            gap: "clamp(15px, 2vw, 25px)",
            minHeight: "fit-content"
          }}>
            {steps.map((step) => (
              <StepsCard 
                key={step.id}
                stepImage={step.image} 
                stepHeading={step.heading} 
                stepDescription={step.description} 
                stepButtonText={step.buttonText} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
