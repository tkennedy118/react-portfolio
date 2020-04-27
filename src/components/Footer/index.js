import React from 'react';
import { Navbar as BootsNavbar } from 'react-bootstrap';

export default function Navbar() {

  return(
    <BootsNavbar  variant='light' bg='light' className='text-center'>
      <BootsNavbar.Brand href='/' className='nav-font-small'>TK</BootsNavbar.Brand>
    </BootsNavbar>
  )
}