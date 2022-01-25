import React from 'react'
import './Video.css'
import YTbutton from './YTbutton'
import video_wave from '../../assets/images/video_wave.png'
function Video() {
  return (
    <>
      <img src={video_wave} alt='wave' className='wave' />

      <div className='video-wrapper'>
        {/* <div className='rainbow'> */}
        
          <iframe
            src='https://www.youtube.com/embed/DLT7gjmx4yk'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
            className='video-size'
          />
        {/* </div> */}
        <YTbutton />
      </div>
    </>
  )
}

export default Video
