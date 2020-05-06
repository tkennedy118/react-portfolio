import React from 'react';
import { Navbar as BootsNavbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './style.css';

export default function Navbar() {

  return(
    <BootsNavbar  variant='light' bg='light' className='text-center'>
      <Nav className='mx-auto'>
        <a href='#'><FontAwesomeIcon size='2x' className='icon-footer' icon={faLinkedinIn}></FontAwesomeIcon></a>
        <a href='https://github.com/tkennedy118' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon size='2x' className='icon-footer' icon={faGithub}></FontAwesomeIcon></a>
        <a href='https://www.facebook.com/tyler.kennedy.73?ref=bookmarks' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon size='2x' className='icon-footer' icon={faFacebook}></FontAwesomeIcon></a>
      </Nav>
    </BootsNavbar>
  )
}