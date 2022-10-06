import React from 'react'
import Playlist from './Playlist'
import "./audio.css"

const Audio = () => {
  return (
    <div className='w-[80vw] w426 lg:w-[80vw] md:w-[80vw] relative playlistAudio flex justify-center items-center '>
      <Playlist />
    </div>
  )
}

export default Audio