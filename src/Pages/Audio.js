import React from 'react'
import Playlist from './Playlist'
import "./audio.css"

const Audio = () => {
  return (
    <div className='min-w-[80vw] relative playlistAudio flex justify-center items-center '>
      <Playlist />
    </div>
  )
}

export default Audio