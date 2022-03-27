import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { POKEMON_API_URL, IMAGE_API_URL } from '../config'
import PokeCard from './PokeCard'

const Pokedex = () => {
  const [pokemonData, setPokemonData] = useState([])
  useEffect(() => {
    axios.get(POKEMON_API_URL + '?limit=400').then((response) => {
      if (response.status >= 200 && response.status < 300) {
        const { results } = response.data
        let newPokemonData = []
        results.forEach((pokemon, index) => {
          index++
          let pokemonObject = {
            id: index,
            url: IMAGE_API_URL + index + '.png',
            name: pokemon.name,
          }
          newPokemonData.push(pokemonObject)
        })
        setPokemonData(newPokemonData)
      }
    })
  }, [])

  return (
    <div className='container mt80'>
      <div className='row'>
        {pokemonData.map((pokemon) => {
          return <PokeCard key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    </div>
  )
}

export default Pokedex
