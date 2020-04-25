import React from 'react';
import { Navbar as BootsNavbar, Nav } from 'react-bootstrap';
import './style.css';

export default function Navbar() {

  return(
    <BootsNavbar collapseOnSelect expand='lg' fixed='top' variant='dark' className='nav-background'>
      <BootsNavbar.Brand href='/' className='nav-font-small'>TK</BootsNavbar.Brand>
      <BootsNavbar.Toggle aria-controls='responsive-nav-links' />
      <BootsNavbar.Collapse id='responsive-nav-links'>
        <Nav className='mx-auto'>
          <Nav.Link href='/about' className='nav-font-small'>about</Nav.Link>
          <Nav.Link href='/portfolio' className='nav-font-small'>portfolio</Nav.Link>
        </Nav>
      </BootsNavbar.Collapse>
    </BootsNavbar>
  )
}
