import React, { useEffect, useState } from 'react'
import "./Banner.css"
//import axios from 'axios'
import instance from '../../axios/axios'
import { API_KEY ,imgUrl} from '../../Constants/constants'

function Banner() {
  const [movie,setMovie] =useState();
  //Math.floor(Math.random() * 20)
  useEffect(()=>{
    instance.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
      console.log(res.data.results)
     setMovie(res.data.results[Math.floor(Math.random() * 20)])
    
    })
  },[])
  return (
    
    <div
    style={{backgroundImage:`url(${movie?imgUrl+movie.backdrop_path:""})`}}
     className='Banner'>

      <div className='content'>
        <h1 className='title'>{movie?movie.title:""}</h1>
        <div className='Banner_buttons'>
          <button className='button'>play</button>
          <button className='button'>list</button>
        </div>
        <h4 className='description'>
        {movie?movie.overview:""}
        </h4>
      </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner
