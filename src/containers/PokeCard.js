import React from 'react'
import { NavLink } from 'react-router-dom'

const PokeCard = ({ pokemon }) => {
  return (
    <div className='col-sm-2 mb-4'>
      <div className='card'>
        <img src={pokemon.url} className='card-img-top' alt='pokemon.name' />
        <div className='card-body text-center'>
          <NavLink
            className='btn btn-outline-warning'
            to={`/pokemon/${pokemon.id}`}
          >
            {pokemon.name}
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default PokeCard
