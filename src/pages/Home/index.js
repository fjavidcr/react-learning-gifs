import React, { useState } from "react"
import { Link, useLocation } from 'wouter'
import './Home.css'

const POPULAR_GIFS = ["Marvel", "Ironman", "Capitan America", "Dr Strange"]

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  console.log(path)
  
  const handleSubmit = event => {
    event.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' value={keyword} placeholder="Search a gif here ..."/>
      </form>
      <h3 className="App-title">Los gifs más populares</h3>
      <ul>
        {
          POPULAR_GIFS.map( gif => 
            <li key={gif}>
              <Link to={`/search/${gif}`}>Gifs de {gif}</Link>
            </li>
          )
        }
      </ul>
    </>
  )
}