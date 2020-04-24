import React from 'react';
import { Navbar as BootsNavbar, Nav } from 'react-bootstrap';
import './style.css';

export default function Navbar() {

  return(
    <BootsNavbar collapseOnSelect expand='lg' className='nav-background'>
      <BootsNavbar.Brand href='/'>TK</BootsNavbar.Brand>
      <BootsNavbar.Toggle aria-controls='responsive-nav-links' />
      <BootsNavbar.Collapse id='responsive-nav-links'>
        <Nav className='mx-auto'>
          <Nav.Link href='/about'>about</Nav.Link>
          <Nav.Link href='/portfolio'>portfolio</Nav.Link>
        </Nav>
      </BootsNavbar.Collapse>
    </BootsNavbar>
  )
}
