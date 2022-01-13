import { useEffect, useState, useContext } from 'react'
import GhifyApi from '../services/GhipyApi'
import GifsContext from '../context/GifsContext'

export function useGifs ({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(function () {
    console.log('fetch gifs')
    setLoading(true)
    
    const keywordToUse = keyword || localStorage.getItem('lastKeyword')
    console.log({keyword, keywordToUse})

    GhifyApi.getGifs({
      keyword: keywordToUse,
      limit: 12
    }).then( gifs => {
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastKeyword', keywordToUse)
    })
  }, [keyword, setGifs]) // [] significa que no tiene dependencias y solo se ejecuta una vez

  return {loading, gifs}
}