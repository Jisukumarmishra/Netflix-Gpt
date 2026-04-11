import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-6 w-screen aspect-video pt-[15%] md:pt-[20%] px-6 md:px-16 lg:px-24 absolute z-10 text-white bg-gradient-to-r from-black/90 via-black/50 to-transparent">
      <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-2xl w-full md:w-1/2">
        {title}
      </h1>
      <p className="hidden md:block py-4 md:py-6 text-sm md:text-lg text-gray-100 font-medium drop-shadow-xl w-full md:w-1/3 line-clamp-4">
        {overview}
      </p>
      <div className="flex items-center gap-3 mt-2 md:mt-0">
        <button className="flex items-center gap-2 bg-white text-black py-1.5 md:py-2.5 px-4 md:px-8 text-sm md:text-xl font-bold rounded hover:bg-white/80 transition-colors">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-8 md:h-8">
            <path d="M6 4l15 8-15 8V4z" />
          </svg>
          Play
        </button>
        <button className="hidden md:flex items-center gap-2 bg-[rgba(109,109,110,0.7)] text-white py-2.5 px-8 text-xl font-bold rounded hover:bg-[rgba(109,109,110,0.4)] transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          More Info
        </button>
        </div>
      </div>
  );
};

export default VideoTitle
