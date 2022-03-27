import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { POKEMON_API_URL, IMAGE_API_URL } from '../config'

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState(null)

  const { id } = useParams()

  const fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPokemon(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [id])

  if (pokemon) {
    const { name, sprites, height, weight, types } = pokemon
    console.log(sprites.front_default)
    return (
      <div className='container mt80'>
        <div className='row featurette text-center'>
          <div className='col'>
            <img className='midSize' alt={name} src={sprites.front_default} />
            <h1 className='display-1 mb-5'>
              <button>
                <i class='fa fa-heart-o' aria-hidden='true'></i>
              </button>{' '}
              {name}
            </h1>
            <div className='container'>
              <div className='row '>
                <div className='col'>
                  <h2>Height</h2>
                  <h2> {height}m</h2>
                </div>
                <div className='col'>
                  <h2>Wight</h2>
                  <h2>{weight}kg</h2>
                </div>
                {types.map((pokemonType) => {
                  const { name } = pokemonType.type
                  return (
                    <div className='col'>
                      <h2>Type</h2>
                      <h2>{name}</h2>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <div>Loading.....</div>
  }
}

export default PokemonDetails
