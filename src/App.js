import { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import { apiURL } from './constants';

// const GIFS = [
//   'https://media4.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=790b761147f128d039ab8ad83a0dc481bd5d9f94865e9e52&rid=giphy.gif&ct=g',
//   'https://media0.giphy.com/media/N6funLtVsHW0g/giphy.gif?cid=ecf05e47t76fbdzf5l9eowg5tu599q4f0thunkth38xyqp8g&rid=giphy.gif&ct=g'
// ]

// const OTHER_GIFS = [
//   'https://media2.giphy.com/media/vBjLa5DQwwxbi/giphy.gif?cid=ecf05e47hw0c2evym17pzsvhj0wwvrbu6w0z9dm1v0dnef22&rid=giphy.gif&ct=g',
//   'https://media2.giphy.com/media/rj12FejFUysTK/giphy.gif?cid=ecf05e47hw0c2evym17pzsvhj0wwvrbu6w0z9dm1v0dnef22&rid=giphy.gif&ct=g'
// ]


function App() {
  // const [gifs, setGifs] = useState(GIFS)
  const [gifs, setGifs] = useState([])

  useEffect(function () {
    console.log('efecto ejecutado');
    fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data = []} = response // = [] es valor por defecto y response es undefined
        const gifs = data.map(image => image.images.downsized_medium.url)
        console.log(gifs)
        setGifs(gifs)
      })
  }, []) // [] significa que no tiene dependencias y solo se ejecuta una vez

  return (
    <div className="App">
      <section className="Gifs-search">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {
          gifs.map( gif => <img src={gif} alt='gif-image' />)
        }
        {/* <button onClick={() => setGifs(OTHER_GIFS)}>Cambiar gifs</button> */}
      </section>
    </div>
  );
}

export default App;
