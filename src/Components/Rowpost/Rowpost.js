import React from 'react'
import YouTube from 'react-youtube'
import './Rowpost.css'
import { useEffect,useState  } from 'react'
import { imgUrl,API_KEY } from '../../Constants/constants'
import instance from '../../axios/axios'

function Rowpost(props) {

  const [post,setPost] = useState([]);
  const [id,setId] =useState();

  useEffect(()=>{
    
    instance.get(props.url).then(res=>{

      setPost(res.data.results)
  })
  },[props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  const handleClick = (id)=>{
     
    console.log(id)
      instance.get(`movie/${id}/videos?api_key=${API_KEY}`).then(res=>{
        console.log(res)
        if((res.data.results.length)!==0){
          setId(res.data.results[0].key);
        }
      }).catch(err=>{
        console.log(err)
      })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
       {post.map((obj)=>
         <img onClick={()=>{handleClick(obj.id)}} className={props.isSmall?'smallPoster':'poster'} alt="post" src={`${imgUrl+obj.backdrop_path}`}/> 
       )}
      </div>
      <div>
       { id && <YouTube videoId={id} opts={opts} /> }
      </div>
         
      
    </div>
  )
}

export default Rowpost
