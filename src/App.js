import React, {useState} from 'react'
// import logo from './logo.svg'
import './App.css'
import GifsList from './components/GifsList'

export default function App() {
  const [keyword, setKeyword] = useState('marvel')
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <section className="Gifs-search">
        <GifsList keyword={keyword} />
      </section>
      <button onClick={() => setKeyword('ironman')}>Cambiar gifs</button>
    </div>
  )
}
