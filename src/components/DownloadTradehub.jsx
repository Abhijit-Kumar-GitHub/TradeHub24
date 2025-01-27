import React from 'react'
import appStore from '/src/assets/appStore.webp'
import playStore from '/src/assets/playStore.webp'

const DownloadTradehub = () => {
  return (
    <div className="flex flex-col md:flex-row  justify-center items-center w-full min-h-[70vh] gap-16 p-8">
      {/* Left side content */}
      <div className="flex flex-col border-2 rounded-4xl border-white items-center justify-center space-y-12 md:w-1/2" style={{
        padding: "10vh",
      }}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Download Our App
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-2xl">
          Get instant access to trusted professionals and manage your projects on the go
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8">
          <button className="hover:scale-115 transition-transform duration-300">
            <img 
              src={appStore} 
              alt="Download on App Store" 
              className="h-16 md:h-20"
            />
          </button>
          <button className="hover:scale-115 transition-transform duration-300">
            <img 
              src={playStore} 
              alt="Get it on Play Store" 
              className="h-16 md:h-20"
            />
          </button>
        </div>
      </div>

      
    </div>
  )
}

export default DownloadTradehub
