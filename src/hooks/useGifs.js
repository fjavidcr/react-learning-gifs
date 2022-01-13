import { useEffect, useState } from 'react'
import GhifyApi from '../services/GhipyApi'

export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    console.log('fetch gifs')
    setLoading(true)
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')

    GhifyApi.getGifs({
      keyword: keywordToUse,
      limit: 12
    }).then( gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
    })
  }, [keyword]) // [] significa que no tiene dependencias y solo se ejecuta una vez

  return {loading, gifs}
}