import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CustomButton from './CustomButton';
import Card from './Card';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TradesCarousel = () => {
  const tradesData = [
    {
      id: 1,
      image: "/src/assets/Trades/plumber.svg",
      title: "Plumbing",
      description: "Expert plumbing solutions for all your needs. From repairs to installations.",
    },
    {
      id: 2,
      image: '/src/assets/Trades/electrician.svg',
      title: 'Electrician',
      description: 'Professional electrical services for your home. Safe and certified installations.',
    },
    {
      id: 3,
      image: '/src/assets/Trades/carpenter.svg',
      title: 'Carpenter',
      description: 'Custom woodwork and repairs. From furniture to structural carpentry.',
    },
    {
      id: 4,
      image: '/src/assets/Trades/painter.svg',
      title: 'Painter',
      description: 'Quality interior and exterior painting. Transform your space with color.',
    },
    {
      id: 5,
      image: '/src/assets/Trades/bath.svg',
      title: 'Bathrooms',
      description: 'Complete bathroom renovations and upgrades. Modern designs and installations.',
    },
    {
      id: 6,
      image: '/src/assets/Trades/locksmith.svg',
      title: 'Locksmith',
      description: 'Emergency lockout services and security solutions. Available 24/7.',
    },
    {
      id: 7,
      image: '/src/assets/Trades/driveways.svg',
      title: 'Driveways',
      description: 'Professional driveway installation and repairs. Enhance your curb appeal.',
    },
    {
      id: 8,
      image: '/src/assets/Trades/handyman.svg',
      title: 'Handyman',
      description: 'General repairs and maintenance. No job too small for your home needs.',
    },
    {
      id: 9,
      image: '/src/assets/Trades/builder.svg',
      title: 'Builder',
      description: 'Construction and renovation experts. Building your vision from ground up.',
    },
    {
      id: 10,
      image: '/src/assets/Trades/tiler.svg',
      title: 'Tiler',
      description: 'Expert tile installation for floors and walls. Precision and style combined.',
    },
    {
      id: 11,
      image: '/src/assets/Trades/roofer.svg',
      title: 'Roofer',
      description: 'Complete roofing services. From repairs to full roof replacements.',
    },
    {
      id: 12,
      image: '/src/assets/Trades/plasterer.svg',
      title: 'Plasterer',
      description: 'Smooth walls and perfect finishes. Interior and exterior plastering.',
    },
    {
      id: 13,
      image: '/src/assets/Trades/heating.svg',
      title: 'Heating',
      description: 'Heating system installations and repairs. Keep your home warm and efficient.',
    },
    {
      id: 14,
      image: '/src/assets/Trades/landscaper.svg',
      title: 'Landscaping',
      description: 'Transform your outdoor space. Garden design and maintenance services.',
    },
  ];

  useEffect(() => {
    // const tl = gsap.timeline();

    gsap.fromTo('.tradesCarouselHeading', {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      scrollTrigger: {
        trigger: '.tradesCarouselHeadingParent',
        scroller: 'body',
        start: 'top 60%',
        end: 'top 0%',
        toggleActions: "play none none reverse"
      }
    })

    gsap.fromTo('.tradesCarousel', {
      x: 50,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: '.tradesCarouselHeadingParent',
        scroller: 'body',
        start: 'top 80%',
        end: 'top 0%',
        toggleActions: "play none none reverse",
      }
    });

    
  }, []);

  return (
    <div className=" tradesCarouselHeadingParent w-full flex flex-col items-center" style={{
      padding: "clamp(15px, 3vw, 50px)",
      minHeight: "clamp(400px, 70vh, 800px)",
      '@media (max-width: 768px)': {
        padding: "15px",
        minHeight: "500px"
      }
    }}>
      <h2 className="tradesCarouselHeading text-center font-bold w-full" style={{
        fontSize: "clamp(24px, 4vw, 48px)",
        marginBottom: "clamp(20px, 4vh, 60px)",
        '@media (max-width: 768px)': {
          fontSize: "28px",
          marginBottom: "30px"
        }
      }}>
        Popular Trades
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { 
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: { 
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 25
          }
        }}
        style={{
          padding: "clamp(10px, 2vw, 30px)",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          '@media (max-width: 768px)': {
            padding: "15px 10px"
          }
        }}
      >
        {tradesData.map((trade) => (
          <div className="tradesCarousel" >

          <SwiperSlide className="tradesCarousel" key={trade.id} style={{
            display: "flex",
            justifyContent: "center"
          }}>
            <div className="bg-white border-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center" style={{
              padding: "clamp(20px, 3vw, 35px)",
              width: "100%",
              maxWidth: "400px",
              minHeight: "clamp(300px, 45vh, 400px)",
              gap: "clamp(15px, 2.5vh, 25px)",
              '@media (max-width: 768px)': {
                padding: "20px",
                minHeight: "280px",
                gap: "15px"
              }
            }}>
              <div className="w-full flex justify-center" style={{
                height: "clamp(120px, 20vh, 180px)",
                marginBottom: "clamp(10px, 2vh, 20px)",
                '@media (max-width: 768px)': {
                  height: "120px",
                  marginBottom: "15px"
                }
              }}>
                <div style={{
                  width: "clamp(120px, 25vw, 200px)",
                  height: "100%",
                  position: "relative",
                  '@media (max-width: 768px)': {
                    width: "120px"
                  }
                }}>
                  <img 
                    src={trade.image} 
                    alt={trade.title} 
                    className="rounded-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      objectPosition: "center"
                    }}
                  />
                </div>
              </div>

              <h3 className="font-semibold text-center" style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                marginBottom: "clamp(10px, 2vh, 20px)",
                '@media (max-width: 768px)': {
                  fontSize: "20px",
                  marginBottom: "10px"
                }
              }}>
                {trade.title}
              </h3>

              <p className="text-gray-700 text-center flex-grow flex items-center justify-center" style={{
                fontSize: "clamp(16px, 1.8vw, 20px)",
                lineHeight: "1.6",
                padding: "0 clamp(10px, 2vw, 20px)",
                '@media (max-width: 768px)': {
                  fontSize: "16px",
                  lineHeight: "1.5",
                  padding: "0 10px"
                }
              }}>
                {trade.description}
              </p>
            </div>
          </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default TradesCarousel;
