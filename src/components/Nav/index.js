import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return(
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        TK
      </a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarLinks'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarLinks'>
        <ul className='navbar-nav mx-auto'>
          <li className='nav-item mx-2'>
            <Link className='nav-link' to='/about'>about</Link>
          </li>
          <li className='nav-item mx-2'>
            <Link className='nav-link' to='/portfolio'>portfolio</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}