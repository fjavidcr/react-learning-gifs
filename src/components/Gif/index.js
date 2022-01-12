import React from "react"
import './Gif.css'

export default function Gif ({title, id, url}) {
  return (
    <figure key={'gif-figure-' + id}>
      <a href={`#${id}`} >
        <img src={url} alt={'gif-image-' + id} />
        <figcaption>{title} ({id}) </figcaption>
      </a>
    </figure>
  )
}