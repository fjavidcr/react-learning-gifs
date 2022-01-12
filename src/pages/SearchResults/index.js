import React from "react"
import GifsList from "../../components/GifsList"

export default function SearchResults ({ params }) {
  return (
    <section className="Gifs-search">
      <GifsList keyword={params.keyword} />
    </section>
  )
}