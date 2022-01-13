import React, { useState } from "react"
import { Link, useLocation } from 'wouter'
import './Home.css'
import GifsList from "../../components/GifsList"
import LinkList from "../../components/LinkList"
import { useGifs } from "../../hooks/useGifs"
import TrendingSearches from "../../components/TrendingSearches"


const POPULAR_GIFS = ["Marvel", "Ironman", "Capitan America", "Dr Strange"]

export default function Home () {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  
  const { loading, gifs } = useGifs()

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
      {/* <LinkList title='Los gifs más populares' items={POPULAR_GIFS}/> */}
      <TrendingSearches />
      <h3 className="App-title">Última búsqueda realizada</h3>
      <section className="Gifs-search">
        <GifsList gifs={gifs} />
      </section>
    </>
  )
}