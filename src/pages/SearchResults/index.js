// import React from "react"
import GifsList from "../../components/GifsList"
import { useGifs } from "../../hooks/useGifs"

export default function SearchResults ({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({ keyword })

  return (
    <>
    {
      loading ? "loading..." :
      <section className="Gifs-search">
        <GifsList gifs={gifs} />
      </section>
    }
    </>
  )
}