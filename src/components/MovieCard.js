import React from 'react'
import { ImageCdnUrl } from '../assets/images'

const MovieCard = ({posterPAth}) => {
    // console.log(posterPAth)
    if(!posterPAth){
      return null
    }
  return (
    <div className='w-36 md:w-48 pr-6 h-50'>
          <img src={ImageCdnUrl + posterPAth}  />
    </div>
  )
}

export default MovieCard