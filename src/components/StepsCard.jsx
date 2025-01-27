import React from 'react'
import CustomButton from './CustomButton'

const StepsCard = ({stepImage, stepHeading, stepButtonText, stepDescription}) => {
  return (
    <div className='border-2 border-black' style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "30vw",
      minWidth: "27vw",
      height: "45vh",
      padding: "2vw",
      gap: "2vh",
      backgroundColor: "#F7F9FC",
      borderRadius: "1vh",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
      border: "1px solid #E8ECF4",
      position: "relative",
      '@media (max-width: 768px)': {
        width: "85vw",
        minWidth: "75vw",
        height: "60vh",
        padding: "4vw",
        gap: "2vh"
      },
      '@media (max-width: 480px)': {
        width: "90vw",
        minWidth: "85vw",
        height: "65vh",
        padding: "5vw",
        gap: "2.5vh"
      }
    }}>
      <div className="w-full flex justify-center" style={{
        height: "12vh",
        '@media (max-width: 768px)': {
          height: "12vh"
        },
        '@media (max-width: 480px)': {
          height: "10vh"
        }
      }}>
        <img 
          src={stepImage} 
          alt={stepHeading} 
          className="rounded-lg h-full"
          style={{
            objectFit: "contain",
            width: "auto",
            '@media (max-width: 480px)': {
              height: "20vh"
            }
          }}
        />
      </div>
      
      <h3 className="font-semibold text-center" style={{
        fontSize: "1.2vw",
        marginTop: "1vh",
        color: "#2D3748",
        '@media (max-width: 768px)': {
          fontSize: "2.4vw",
          marginTop: "1vh"
        },
        '@media (max-width: 480px)': {
          fontSize: "3.5vw",
          marginTop: "0.5vh"
        }
      }}>
        {stepHeading}
      </h3>
      
      <span className="text-center flex-grow" style={{
        fontSize: "1vw",
        lineHeight: "1.4",
        padding: "0 1.5vw",
        '@media (max-width: 768px)': {
          fontSize: "2vw",
          padding: "0 2vw"
        },
        '@media (max-width: 480px)': {
          fontSize: "3vw",
          padding: "0 3vw",
          lineHeight: "1.3"
        }
      }}>
        {stepDescription}
      </span>
      
      <div style={{ 
        position: "absolute",
        bottom: "2vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        '@media (max-width: 480px)': {
          bottom: "3vh"
        }
      }}>
        <CustomButton 
          buttonName={stepButtonText}
          style={{
            backgroundColor: "#4299E1",
            color: "#FFFFFF",
            padding: "1vh 2vw",
            borderRadius: "0.5vh",
            fontSize: "1vw",
            '@media (max-width: 768px)': {
              fontSize: "2vw",
              padding: "1.5vh 3vw"
            },
            '@media (max-width: 480px)': {
              fontSize: "2.8vw",
              padding: "2vh 4vw"
            },
            '&:hover': {
              backgroundColor: "#3182CE"
            }
          }} 
        />
      </div>
    </div>
  )
}

export default StepsCard
