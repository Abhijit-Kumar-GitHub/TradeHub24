import React, { useEffect } from 'react';
import CustomButton from './CustomButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HireSafely = () => {
  useEffect(() => {
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hireSafelyContainer',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: "play none none reverse",
        // markers: true
      }
    });

    tl.fromTo('.hireSafelyHeading', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .fromTo('.hireSafelyContent', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");
  }, []);

  return (
    <div className="bg-[#F0F5FF]">
      <div className=" rounded-xl">
        <div className="rounded-lg shadow-sm">
          <div className="hireSafelyContainer" style={{
            width: "90vw",
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            gap: "4vh",
            margin: "0 auto",
            padding: "4vh 3vw",
            backgroundColor: "#F7F9FC",
            borderRadius: "2vh",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
            '@media (max-width: 768px)': {
              width: "95vw",
              padding: "3vh 4vw",
              gap: "3vh"
            }
          }}>
            {/* Heading Section */}
            <div className="hireSafelyHeading" style={{
              textAlign: "center",
              padding: "2vh 0"
            }}>
              <h2 style={{
                fontSize: "3.5vw",
                fontWeight: "200",
                color: "#2D3748",
                '@media (max-width: 768px)': {
                  fontSize: "5vw"
                }
              }}>
                Hire safely with our homeowner checklist
              </h2>
            </div>

            {/* Content Section */}
            <div className="hireSafelyContent" style={{
              display: "flex",
              flexDirection: "row",
              gap: "4vw",
              flex: 1,
              '@media (max-width: 768px)': {
                flexDirection: "column",
                gap: "4vh"
              }
            }}>
              {/* Left Side - Image and Button */}
              <div style={{
                flex: "0 0 40%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3vh",
                '@media (max-width: 768px)': {
                  flex: "none"
                }
              }}>
                <div className='hover:scale-115 transition-transform duration-300' style={{
                  width: "100%",
                  height: "35vh",
                  '@media (max-width: 768px)': {
                    height: "30vh"
                  }
                }}>
                  <img 
                    src="src/assets/bro2.png" 
                    alt="Hire Safely" 
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      borderRadius: "1vh"
                    }}
                  />
                </div>
                <CustomButton 
                  buttonName="Sign Up As Home Owner"
                  style={{
                    padding: "1.5vh 3vw",
                    fontSize: "1.2vw",
                    '@media (max-width: 768px)': {
                      fontSize: "3vw",
                      padding: "2vh 4vw"
                    }
                  }}
                />
              </div>

              {/* Right Side - Checklist */}
              <div style={{
                flex: "0 0 60%",
                display: "flex",
                flexDirection: "column",
                gap: "2vh",
                '@media (max-width: 768px)': {
                  flex: "none"
                }
              }}>
                <h5 style={{
                  fontSize: "1.8vw",
                  color: "#2D3748",
                  marginBottom: "2vh",
                  '@media (max-width: 768px)': {
                    fontSize: "4vw"
                  }
                }}>
                  Follow our top tips for a safe and successful hire:
                </h5>
                
                {[
                  "Verify credentials and insurance coverage",
                  "Read detailed reviews from previous customers",
                  "Get clear quotes and project timelines",
                  "Use secure payment methods through our platform",
                  "Track project progress in real-time",
                  "Access 24/7 customer support",
                  "Get our FREE Homeowner's Safety Guide"
                ].map((text, index) => (
                  <div key={index} style={{
                    fontSize: "1.4vw",
                    color: "#4A5568",
                    display: "flex",
                    alignItems: "center",
                    gap: "1vw",
                    '@media (max-width: 768px)': {
                      fontSize: "3.2vw"
                    }
                  }}>
                    <span>✔️</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireSafely;
