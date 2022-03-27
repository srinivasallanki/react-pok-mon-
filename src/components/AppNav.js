import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark nav-bar-color fixed-top'>
      <div className='container-fluid'>
        <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <NavLink className='nav-link active' aria-current='page' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='nav-link active' aria-current='page' to='/'>
              Favourite
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AppNav
