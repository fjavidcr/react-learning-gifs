import React from "react"
import { Link } from "wouter"
import './Gif.css'

export default function Gif ({title, id, url}) {
  return (
    <figure key={'gif-figure-' + id}>
      <Link to={`/gif/${id}`} >
        <img src={url} alt={'gif-image-' + id} loading="lazy"/>
        <figcaption>{title} ({id}) </figcaption>
      </Link>
    </figure>
  )
}