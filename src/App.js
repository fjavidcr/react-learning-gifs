import React from 'react'
import logo from './assets/img/logo.svg'
import './App.css'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext'
import { GifContextProvider } from './context/GifsContext'

import { Link, Route } from "wouter"

export default function App() {
  const SCProviderValue = {
    name: 'fjavidcr'
  }
  return (
    <StaticContext.Provider value={SCProviderValue}>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/'>
          <h1>GIFFY</h1>
        </Link>
        <GifContextProvider>
          <Route 
            path='/' 
            component={Home} 
          />
          <Route 
            path='/search/:keyword' 
            component={SearchResults} 
          />
          <Route 
            path='/gif/:id' 
            component={Detail} 
          />
        </GifContextProvider>
      </div>
    </StaticContext.Provider>
  )
}
 