import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full px-6 md:px-12 lg:px-20 pt-32 md:pt-44 pb-10 bg-gradient-to-r from-black via-black/80 to-transparent text-white'>
      <h1 className='max-w-3xl text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]'>
        {title}
      </h1>
      <p className='mt-4 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed text-gray-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-3 md:line-clamp-none'>
        {overview}
      </p>
      <div className='mt-7 flex items-center gap-3 md:gap-4'>
        <button className='rounded-md bg-white text-black px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold hover:bg-white/85 transition-colors duration-200'>plau</button>
        <button className='rounded-md bg-gray-500/70 text-white px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold hover:bg-gray-400/70 transition-colors duration-200 backdrop-blur-sm'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle