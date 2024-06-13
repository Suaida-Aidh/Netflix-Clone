import React,{useEffect, useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl ,API_KEY} from '../../Constants/Constants'
import Youtube from 'react-youtube'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, setUrlId] = useState('')

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert('Network error')
    })
  },[])

  const opts ={
    height: '390',
    width: '100%',
    playerVars:{
      autoplay : 0,
    },
  };

  const handleMovie = (id) =>{
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log('Trailer not available')
        alert('Trailer not available')
      }
    })
  }

  return (
    <div className='row'>
        <h2>{props.title }</h2>
        <div className="posters">
            {movies.map((obj)=>{
              return(
                <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

              )
              })}

        </div>
      { urlid &&  <Youtube opts={opts} videoId={urlid.key} /> }
    </div>
  )
}

export default RowPost