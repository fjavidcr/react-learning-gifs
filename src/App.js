import React from 'react'
import { Link, Route } from "wouter"

import logo from './logo.svg'
import './App.css'

import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

export default function App() {
  return (
    <div className="App">
      <Link to='/'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>GIFFY</h1>
      </Link>
      <Route 
        path='/' 
        component={Home} 
      />
      <Route 
        path='/search/:keyword' 
        component={SearchResults} 
      />
    </div>
  )
}
 