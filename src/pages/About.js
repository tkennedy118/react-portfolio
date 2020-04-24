import React from 'react';
import { Container, Jumbotron, Row, Col, Image } from 'react-bootstrap';
import '../utils/styles/about.css';

export default function About() {
  return (
    <Jumbotron className='py-0 cus-jumbo' fluid>
      <Container>
        <Row>
          <Col md={5}>
            <h1>About me</h1>
          </Col>
          <Col md={7}>
            <Image src={require('../utils/images/portfolio.png')} alt='Tyler Kennedy' fluid />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}