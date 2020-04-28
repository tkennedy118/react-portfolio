import React from 'react';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import '../utils/styles/about.css';

export default function About() {
  return (
    <>
      <Jumbotron className='py-0 my-0 about-jumbotron-background' fluid>
        <Container>
          <Row>
            <Col md={7} className='text-center my-5 my-md-auto'>
              <h2>
                <span className='vl-blue'></span>Tyler Kennedy
              </h2>
              <p>I am an observer, a learner, and an achiever.</p>
            </Col>
            <Col md={5} className='text-center'>
              <Image id='profile-pic' src={require('../utils/images/portfolio.png')} alt='Tyler Kennedy' fluid />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className='my-0 about-jumbotron-background' fluid>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h3 className='text-center my-4'>What you should know about me.</h3>
              <p className='text-center'>
                
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className='py-0 my-0 about-jumbotron-background' fluid>
        <Container>
          <Row>
            <Col md={{ span: 7, offset: 1 }}>
              <h3 className='text-center my-4'>What can I do?</h3>
              <p className='text-center'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type 
                specimen book. It has survived not only five centuries, but also the leap into 
                electronic typesetting, remaining essentially unchanged. 
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </>
  );
}