import './App.css';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { animation, navbarUp, navbarDown } from './animations/animations';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHitting, setIsHitting] = useState(false);

  useEffect(() => {
    const runAnimations = async () => {
      await animation();
    };
    runAnimations();
  }, []);

  useEffect(() => {
    window.addEventListener('wheel', (e) => {
      if(e.deltaY > 0){
        
        navbarUp();
      } else {
        navbarDown();
      }
    });
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setIsHitting(true);
      setTimeout(() => setIsHitting(false), 300); // Match transition duration
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      <div style={{
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
        transform: `
          translate(-50%, -50%) 
          ${isHitting ? 'rotate(-45deg) scale(1.2)' : 'rotate(30deg) scale(1)'}
          scaleX(-1)  
        `,
        pointerEvents: "none",
        zIndex: 9999,
        width: "2vw",
        height: "2vw"
      }}>
      <img 
          src="src//assets//icons8-hammer-40.png" 
          alt="cursor" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            userSelect: "none",
            
            WebkitUserSelect: "none"
          }}
        />
      </div>
      
      <Home />
      <footer className='bg-[#88bbd3]' style={{
        Height: "40vh",
        padding: "4vh 3vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)"
      }}>
        <Footer />
        
      </footer>
      <div style={{
        width: "100vw",
        
        backgroundColor: "#1F2937",
        color: "#FFFFFF",
        flexGrow: 1,
        padding: "5vh 8vw",
        marginTop: "auto",
        overflowY: "auto"
      }}>
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          gap: "10vh"
        }}>
          {/* Column 1 */}
          <div style={{
            marginBottom: "2rem",
            '@media (min-width: 768px)': {
              marginBottom: 0
            }
          }}>
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#FFFFFF"
            }}>Example</h3>
            <p style={{ marginBottom: "0.5rem", color: "#FFFFFF" }}>Example</p>
            <p style={{ marginBottom: "0.5rem", color: "#FFFFFF" }}>123 Example Street, Example City, Example Country</p>
            <p style={{ marginBottom: "0.5rem" }}>
              <a href="tel:+1514890000" style={{
                textDecoration: "none",
                color: "#FFFFFF",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "#FBBF24"
                }
              }}>
                1-514-890-0000
              </a>
            </p>
            <p style={{ color: "#FFFFFF" }}>
              <a href="mailto:calinscompagnies@calins.com" style={{
                textDecoration: "none",
                color: "#FFFFFF",
                transition: "color 0.3s ease",
                '&:hover': {
                  color: "#FBBF24"
                }
              }}>
                calinscompagnies@calins.com
              </a>
            </p>
          </div>

          {/* Column 2 */}
          <div style={{
            marginBottom: "2rem",
            '@media (min-width: 768px)': {
              marginBottom: 0
            }
          }}>
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#FFFFFF"
            }}>Example</h3>
            <ul>
              {["About Us", "Delivery Policy", "Contact Us", "Our Stores", "Help", "Work at Hugs"].map((item, index) => (
                <li key={index}>
                      <a href="#" style={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                    transition: "color 0.3s ease",
                    '&:hover': {
                      color: "#FBBF24"
                    }
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div style={{
            marginBottom: "2rem",
            '@media (min-width: 768px)': {
              marginBottom: 0
            }
          }}>
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#FFFFFF"
            }}>Example</h3>
            <ul>
              {["My Personal Information", "My Addresses", "My Orders", "My Favorites"].map((item, index) => (
                <li key={index}>
                  <a href="#" style={{
                    textDecoration: "none",
                    color: "#FFFFFF",
                    transition: "color 0.3s ease",
                    '&:hover': {
                      color: "#FBBF24"
                    }
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 style={{
              fontSize: "1.125rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#FFFFFF"
            }}>Contact Us</h3>
            <ul style={{ marginBottom: "1rem" }}>
              <li>
                <a href="tel:+1514890000" style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  transition: "color 0.3s ease",
                  '&:hover': {
                    color: "#FBBF24"
                  }
                }}>
                  1-514-890-0000
                </a>
              </li>
              <li>
                <a href="mailto:calinscompagnies@calins.com" style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  transition: "color 0.3s ease",
                  '&:hover': {
                    color: "#FBBF24"
                  }
                }}>
                  Send mail
                </a>
              </li>
            </ul>
            <div style={{
              marginTop: "1rem",
              display: "flex"
            }}>
              <a href="#" style={{ 
                textDecoration: "none",
                marginRight: "0.5rem",
                color: "#FFFFFF",
                '&:hover': {
                  color: "#FBBF24"
                }
              }}>
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="#" style={{ 
                textDecoration: "none",
                  marginRight: "0.5rem",
                color: "#FFFFFF",
                '&:hover': {
                  color: "#FBBF24"
                }
              }}>
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="mailto:calinscompagnies@calins.com" style={{
                textDecoration: "none",
                color: "#FFFFFF",
                '&:hover': {
                  color: "#FBBF24"
                }
              }}>
                <i className="far fa-envelope fa-2x"></i>
              </a>
            </div>
          </div>
        </div>

        <p style={{
          textAlign: "center",
          marginTop: "2vh",
          color: "#FFFFFF"
        }}>
          &copy; 2024 - All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
