import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=' pt-44 absolute pt-[20%] px-24 w-screen aspect-video text-white bg-gradient-to-r from-black' >
      <h2 className='text-3xl font-bold'>{title}</h2>
      <h4 className='text-lg w-1/3'>{overview}</h4>
      <div className='d-flex mt-2'>
        <button className='bg-white text-black px-14  hover:opacity-80  btn '> ▶️Play</button>
        <button className='bg-gray-600 opacity-80  text-black px-14 hover:opacity-80 mx-3  btn' > ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle