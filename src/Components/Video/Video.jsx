import React from 'react'
import './Video.css'
import YTbutton from './YTbutton'
import video_wave from '../../assets/images/video_wave.png'
import bcircle from '../../assets/images/big-circle.svg'
import scircle from '../../assets/images/small-circle.svg'


function Video() {
  return (
    <>
    <div className='video'>
      <img src={video_wave} alt='wave' className='wave' />

      <div className='video-wrapper' id='video'>
        {/* <div className='rainbow'> */}
        
          <iframe
            src='https://www.youtube.com/embed/DLT7gjmx4yk'
            allow='autoplay; encrypted-media'
            allowfullscreen
            title='video'
            className='video-size'
          />
            <img src={scircle} alt='scircle' className='scircle' />

            <img src={bcircle} alt='wave' className='bcircle' />
        {/* </div> */}
        <YTbutton />
        </div>
      </div>
    </>
  )
}

export default Video
