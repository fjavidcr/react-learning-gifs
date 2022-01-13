// import React from 'react'
import Gif from '../Gif'

export default function GifsList ({ gifs }) {
  return <>
    {
      gifs.map( ({id, title, url}) =>
        <Gif 
          id={id} 
          title={title} 
          url={url}
          key={id}
        />
      )
    }
  </>
}