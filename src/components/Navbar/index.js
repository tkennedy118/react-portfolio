import React from 'react';
import { Navbar as BootsNavbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './style.css';

export default function Navbar() {

  return(
    <BootsNavbar collapseOnSelect expand='md' fixed='top' variant='dark' className='nav-background shadow' style={{ width: '100vw' }}>
      <BootsNavbar.Brand href='#top' className='nav-font-small tk'>TK</BootsNavbar.Brand>
      <BootsNavbar.Toggle aria-controls='responsive-nav-links' />
      <BootsNavbar.Collapse id='responsive-nav-links'>
        <Nav className='mx-auto'>
          <Nav.Link href='#about' className='nav-font-small'>about</Nav.Link>
          <Nav.Link href='#skills' className='nav-font-small'>why me?</Nav.Link>
          <Nav.Link href='#portfolio' className='nav-font-small'>portfolio</Nav.Link>
        </Nav>
        <Nav>
          <div>
            <a href='https://www.linkedin.com/in/tyler-kennedy-626070139' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon size='2x' className='icon' icon={faLinkedinIn}></FontAwesomeIcon>
            </a>
            <a href='https://github.com/tkennedy118' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon size='2x' className='icon' icon={faGithub}></FontAwesomeIcon>
            </a>
            <a href='https://www.facebook.com/tyler.kennedy.73?ref=bookmarks' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon size='2x' className='icon' icon={faFacebook}></FontAwesomeIcon>
            </a>
          </div>
          </Nav>
      </BootsNavbar.Collapse>
    </BootsNavbar>
  )
}
