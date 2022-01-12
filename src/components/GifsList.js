import { useState, useEffect } from "react"
import Gif from './Gif'
import GhipyApi from '../services/GhipyApi';

export default function GifsList ({ keyword }) {

  const [gifs, setGifs] = useState([])

  useEffect(function () {
    console.log('fetch gifs');
    GhipyApi.getGifs({
      keyword,
      limit: 12
    }).then( gifs => setGifs(gifs))
  }, [keyword]) // [] significa que no tiene dependencias y solo se ejecuta una vez

  return gifs.map( ({id, title, url}) =>
    <Gif 
      id={id} 
      title={title} 
      url={url}
      key={id}
    />
  )
}