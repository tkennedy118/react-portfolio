import React from 'react';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import '../utils/styles/about.css';

export default function About() {
  return (
    <>
      <Jumbotron className='py-0 my-0 about-jumbotron-gray' fluid>
        <Container>
          <Row>
            <Col md={7} className='text-center my-5 my-md-auto'>
              <h2 className='about-text-red about-font-large'>Tyler Kennedy</h2>
              <p className='about-text-red'>I am an observer, a learner, and an achiever.</p>
            </Col>
            <Col md={5}>
              <Image src={require('../utils/images/portfolio.png')} alt='Tyler Kennedy' fluid />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      <Jumbotron className='py-0 my-0 about-jumbotron-blue' fluid>
        <Container>
          <Row>
            <Col md={5} className='my-auto'>
            <Image src={require('../utils/images/paint-red.png')} alt='Red Paint' fluid />
            </Col>
            <Col md={7}>
              <h3 className='about-text-white about-font-medium text-center my-4'>About me.</h3>
              <p className='about-text-white text-center'>
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
      <Jumbotron className='py-0 my-0 about-jumbotron-red' fluid>
        <Container>
            <Row>
              <Col md={7}>
                <h3 className='about-text-blue about-font-medium text-center my-4'>Specs.</h3>
                <p className='about-text-white text-center'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                  when an unknown printer took a galley of type and scrambled it to make a type 
                  specimen book. It has survived not only five centuries, but also the leap into 
                  electronic typesetting, remaining essentially unchanged. 
                </p>
              </Col>
              <Col md={5} className='my-auto'>
                <Image src={require('../utils/images/paint-blue.png')} alt='Blue Paint' fluid />
              </Col>
            </Row>
        </Container>
      </Jumbotron>
    </>
  );
}