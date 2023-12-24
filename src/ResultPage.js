import React from 'react'
import './ResultPage.css'
import PikachuImage from './Assets/pikachu.png'

import { useEffect } from 'react'
import axios from 'axios'



const ResultPage = () => {

  const [pokemonName, setPokemonName] = useEffect("")

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/result')
      .then((res) => {
        setPokemonName(res.data);
      })
  }, [])

  return (
    <div className= 'text-center align-items-center py-10'>
      The Pokémon you are looking for is: {pokemonName} 
      <img src={pokemonName+Image} />
    </div>
  )
}

export default ResultPage