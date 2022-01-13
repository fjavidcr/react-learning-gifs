import React from "react"
import { Link } from "wouter"

export default function LinkList ({ title, items }) {
  return (
    <>
      <h3 className="App-title">{title}</h3>
      <ul>
        {
          items.map( gif => 
            <li key={gif}>
              <Link to={`/search/${gif}`}>{gif}</Link>
            </li>
          )
        }
      </ul>
    </>
  )
}