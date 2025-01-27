// Home.jsx
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import broImg from '../assets/bro.png';
import CustomButton from '../components/CustomButton.jsx'
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

import TradesCarousel from '../components/TradesCarousel.jsx';
import ReviewsCarousel from '../components/ReviewCarousel.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import HireSafely from '../components/HireSafely.jsx';
import DownloadTradehub from '../components/DownloadTradehub.jsx';
import { transform } from 'motion';



// b3d6fa
// 53678d
//bdf
//e99f9f
const topL = '#1D8189'
const botR = '#B89D91'
const innerLight = '#767572'
const butRed ="#CAAA9E"
const fillLightP2 = '#EEE3DB'
const p3topR = '#2C8796'
const p3botL = "#4E6E72"
const p3CardDark = '#EEE3DB'
const p3CardLight = '#F7F4F3'
const CardDark = '#151114'


const Home = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "#f2efef",
      margin: 0,
      padding: 0,
      minHeight: "100vh",
      overflowX: "hidden"
    }}>
      {/* Part 1 - Hero Section */}
      <div style={{
        background: "#f2efef",
        minHeight: "100vh",
        padding: "2vh 0",
        margin: 0,
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
      }}>
        <Navbar />
        <div className='border-2 rounded-4xl border-black' style={{
          display: "flex",
          width: "90%",
          flexDirection: "row",
          marginTop: "15vh",
          padding: "3vw",
          backdropFilter: "blur(5px)",
          '@media (max-width: 768px)': {
            flexDirection: "column",
            padding: "4vw",
            margin: "1vh 0"
          }
        }}>
          <div style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
            padding: "0 2vw",
            '@media (max-width: 768px)': {
              width: "100%",
              padding: "2vw",
              gap: "2vh"
            }
          }}>
            <div className='frontQuote' style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1vh",
              margin: "7vh 0 0 3vh",
              fontSize: "clamp(24px,4vw,60px)"
            }}>
              <p>
                Find a local trusted
              </p>
              <span  style={{color: "red"}}>Roofer</span>
            </div>
            <div style={{
              margin: "0 0 0 3vh"
            }}>
              <h1 className='frontQuote' style={{
                fontSize: "clamp(14px,1.8vw,24px)",
                margin: "0"
              }}>The idea framework to learn how to</h1>
              <h1 className='frontQuote' style={{
                fontSize: "clamp(14px,1.8vw,24px)",
                margin: "0  "
              }}>manage all aspects of startup</h1>
              
              <div style={{
                
                marginTop: "3vh",
                borderRadius: "2xl",
                overflow: "hidden",
                width: "fit-content"
              }}>
                <div className='frontQuote'>

                <CustomButton  buttonName={"Start For Free"} />
                </div>
                
              </div>
            </div>
          </div>
          <div className="hover:scale-115 transition-transform duration-300 w-full md:w-1/2 flex justify-center items-center">
                
            <img className='heroImg w-[clamp(200px,35vw,400px)] h-auto' src={broImg} alt="hero"  />
          </div>
        </div>
      </div>

      {/* Part 2 - How It Works */}
      <div className='bg-[#88bbd3]' style={{
        
        minHeight: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <HowItWorks />
      </div>

      {/* Part 3 - Trades Section */}
      <div className='bg-[#f2efef]' style={{
        
        minHeight: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <TradesCarousel />
      </div>

      {/* Part 4 - Hire Safely */}
      <div className='bg-[#88bbd3]' style={{
        
        minHeight: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <HireSafely />
      </div>

      {/* Part 5 - Reviews and Download */}
      <div style={{
        
        minHeight: "100vh",
        padding: "5vh 3vw",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "5vh"
      }}>
        <div style={{
          width: "100%",
          margin: "0 0 5vh 0",
          padding: "3vh",
          borderRadius: "2vh"
        }}>
          <ReviewsCarousel />
        </div>
        <div className='bg-[#88bbd3]' style={{
          width: "100%",
          margin: 0,
          padding: "3vh",
          borderRadius: "2vh"
        }}>
          <DownloadTradehub />
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Home;

