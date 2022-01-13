import { useEffect, useState } from 'react'
import GhifyApi from '../services/GhipyApi'

export function useGifs ({ keyword }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    console.log('fetch gifs')
    setLoading(true)

    GhifyApi.getGifs({
      keyword,
      limit: 12
    }).then( gifs => {
      setGifs(gifs)
      setLoading(false)
    })
  }, [keyword]) // [] significa que no tiene dependencias y solo se ejecuta una vez

  return {loading, gifs}
}