import { API_KEY } from '../constants';

const API_HOST = 'https://api.giphy.com/v1/gifs/search'

function getGifs({ keyword = 'marvel', limit = 20 } = {}) {
  const apiURL = API_HOST + `?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`

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

const GhifyApi = {
  getGifs
}

export default GhifyApi