import React from 'react'
// import logo from './logo.svg'
import './App.css'
import GifsList from './components/GifsList'

import { Link, Route } from "wouter"

export default function App() {
  // const [keyword, setKeyword] = useState('marvel')
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <h1>App</h1>
      <Link to='/gif/marvel'>Gifs de Marvel</Link>
      <section className="Gifs-search">
        <Route 
          path='/gif/:keyword' 
          component={GifsList} 
        />
        {/* <GifsList keyword={keyword} /> */}
      </section>
      {/* <button onClick={() => setKeyword('ironman')}>Cambiar gifs</button> */}
    </div>
  )
}
