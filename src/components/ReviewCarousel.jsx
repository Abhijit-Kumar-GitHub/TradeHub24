import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const ReviewsCarousel = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.reviewCarouselContainer',
        start: 'top 75%',
        end: 'top 25%',
        toggleActions: "play none none reverse"
      }
    });

    tl.fromTo('.reviewCarouselHeading', {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power2.inOut"
    })
    .fromTo('.reviewCarouselSlide', {
      x: 100,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      duration: 0.4,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const reviews = [
    {
      id: 1,
      name: "John Anderson",
      role: "Homeowner",
      image: "/src/assets/Customers/person1.jpg",
      review: "Excellent service! The platform made it easy to find a reliable tradesperson. The plumber I hired was professional and efficient.",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      role: "Business Owner",
      image: "/src/assets/Customers/person2.jpg",
      review: "As a cafe owner, I needed urgent electrical work done. Found a great electrician within hours. Outstanding platform!",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      role: "Property Manager",
      image: "/src/assets/Customers/person3.jpg",
      review: "Managing multiple properties is easier with TradeHub24. Quick access to qualified trades people whenever needed.",
      rating: 4
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "Homeowner",
      image: "/src/assets/Customers/person4.jpg",
      review: "Had my bathroom renovated through a tradesperson found here. The whole process was smooth and transparent.",
      rating: 5
    },
    {
      id: 5,
      name: "Michael Roberts",
      role: "Restaurant Owner",
      image: "/src/assets/Customers/person5.jpg",
      review: "The verification system gives real peace of mind. Found a reliable handyman for our restaurant maintenance.",
      rating: 4
    },
    {
      id: 6,
      name: "Lisa Patel",
      role: "Landlord",
      image: "/src/assets/Customers/person6.jpg",
      review: "Perfect for landlords! Easy to find trusted trades people for various property maintenance needs.",
      rating: 5
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Office Manager",
      image: "/src/assets/Customers/person7.jpg",
      review: "The platform saved us time and money. Great for finding commercial maintenance contractors.",
      rating: 4
    },
    {
      id: 8,
      name: "Maria Garcia",
      role: "Homeowner",
      image: "/src/assets/Customers/person8.jpg",
      review: "From painting to plumbing, I've found all my home improvement professionals here. Highly recommend!",
      rating: 5
    },
    {
      id: 9,
      name: "Thomas Brown",
      role: "Shop Owner",
      image: "/src/assets/Customers/person9.jpg",
      review: "Quick response times and professional service. The booking system is straightforward and efficient.",
      rating: 4
    },
    {
      id: 10,
      name: "Sophie Taylor",
      role: "Real Estate Agent",
      image: "/src/assets/Customers/person10.jpg",
      review: "Essential tool for real estate professionals. Makes property maintenance and renovations hassle-free.",
      rating: 5
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#EDF2F7] to-[#F7FAFC] ">
      <div className=" rounded-xl shadow-sm ">
        <div className="reviewCarouselContainer " style={{
          width: "100%",
          padding: "4vh 3vw",
          backgroundColor: "#F7F9FC",
          borderRadius: "2vh",
          '@media (max-width: 768px)': {
            padding: "3vh 4vw"
          }
        }}>
          <h2 className="reviewCarouselHeading " style={{
            fontSize: "3vw",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4vh",
            color: "#2D3748",
            '@media (max-width: 768px)': {
              fontSize: "5vw",
              marginBottom: "3vh"
            }
          }}>
            Customer Reviews
          </h2>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            style={{
              padding: "2vh 1vw",
              '@media (max-width: 768px)': {
                padding: "1vh 2vw"
              }
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id} className="reviewCarouselSlide border-2 rounded-2xl">
                <div style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "1vh",
                  padding: "3vh 2vw",
                  minHeight: "40vh",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2vh",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  '@media (max-width: 768px)': {
                    padding: "4vh 3vw",
                    minHeight: "45vh"
                  }
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2vw"
                  }}>
                    <img 
                      src={review.image} 
                      alt={review.name} 
                      style={{
                        width: "5vw",
                        height: "5vw",
                        borderRadius: "50%",
                        objectFit: "cover",
                        '@media (max-width: 768px)': {
                          width: "12vw",
                          height: "12vw"
                        }
                      }}
                    />
                    <div>
                      <h3 style={{
                        fontSize: "1.5vw",
                        fontWeight: "600",
                        color: "#2D3748",
                        '@media (max-width: 768px)': {
                          fontSize: "4vw"
                        }
                      }}>
                        {review.name}
                      </h3>
                      <p style={{
                        fontSize: "1.2vw",
                        color: "#4A5568",
                        '@media (max-width: 768px)': {
                          fontSize: "3vw"
                        }
                      }}>
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <p style={{
                    fontSize: "1.3vw",
                    color: "#4A5568",
                    lineHeight: 1.6,
                    flex: 1,
                    '@media (max-width: 768px)': {
                      fontSize: "3.2vw"
                    }
                  }}>
                    "{review.review}"
                  </p>

                  <div style={{
                    display: "flex",
                    gap: "0.5vw"
                  }}>
                    {[...Array(review.rating)].map((_, index) => (
                      <span 
                        key={index}
                        style={{
                          color: "#F6E05E",
                          fontSize: "1.8vw",
                          '@media (max-width: 768px)': {
                            fontSize: "4vw"
                          }
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
