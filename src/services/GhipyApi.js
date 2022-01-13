import { API_KEY, API_HOST } from '../constants';


function getGifs({ keyword = 'marvel', limit = 20 } = {}) {
  const apiURL = API_HOST + `/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response // = [] es valor por defecto y response es undefined
      const gifs = data.map(image => {
        const {title, id, images} = image
        const {url} = images.downsized_medium
        return { title, id, url }
      })
      return gifs
    })
}

function getTrendingTerms() {
  const apiURL = API_HOST + `/trending/searches?api_key=${API_KEY}&rating=g&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response // = [] es valor por defecto y response es undefined
      return data
    })
}

const GhifyApi = {
  getGifs,
  getTrendingTerms
}

export default GhifyApi