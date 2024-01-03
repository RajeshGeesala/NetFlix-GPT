import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' pt-44 absolute pt-[20%] md:px-24 px-6 w-screen aspect-video text-white bg-gradient-to-r from-black' >
      <h2 className=' md:text-3xl 2xl font-bold '>{title}</h2>
      <h4 className='text-lg w-1/3 hidden md:inline-block'>{overview}</h4>
      <div className='d-flex md:mt-2  my-4'>
        <button className='bg-white text-black px-14  hover:opacity-80  btn '>
          ▶️Play</button>
        <button className='bg-gray-600 opacity-80  text-black px-14 hover:opacity-80 mx-3  btn hidden md:inline-block' >
           More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle