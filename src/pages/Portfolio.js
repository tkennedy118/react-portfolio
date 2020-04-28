import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTransition,  animated } from 'react-spring';
import '../utils/styles/portfolio.css';

const projects = [
  {
    title: 'Novel 19',
    description: 'A mobile-friendly website designed to assist users in visualizing coronavirus cases in their region.',
    techs: ['Express', 'Handlebars', 'Passport', 'Sequelize'],
    image: 'covid-19.png',
    link: 'https://novel-19.herokuapp.com/home'
  },
  {
    title: 'Novel 19',
    description: 'A mobile-friendly website designed to assist users in visualizing coronavirus cases in their region.',
    techs: ['Express', 'Handlebars', 'Passport', 'Sequelize'],
    image: 'covid-19.png',
    link: 'https://novel-19.herokuapp.com/home'
  },
  {
    title: 'Novel 19',
    description: 'A mobile-friendly website designed to assist users in visualizing coronavirus cases in their region.',
    techs: ['Express', 'Handlebars', 'Passport', 'Sequelize'],
    image: 'covid-19.png',
    link: 'https://novel-19.herokuapp.com/home'
  },
  {
    title: 'Novel 19',
    description: 'A mobile-friendly website designed to assist users in visualizing coronavirus cases in their region.',
    techs: ['Express', 'Handlebars', 'Passport', 'Sequelize'],
    image: 'covid-19.png',
    link: 'https://novel-19.herokuapp.com/home'
  },
  {
    title: 'Novel 19',
    description: 'A mobile-friendly website designed to assist users in visualizing coronavirus cases in their region.',
    techs: ['Express', 'Handlebars', 'Passport', 'Sequelize'],
    image: 'covid-19.png',
    link: 'https://novel-19.herokuapp.com/home'
  }
]

export default function Portfolio() {

  const cards = projects.map((project, index) => {
    return (
      <Card key={index} className='rounded-0 my-3 shadow-sm port-card'>
        <Row>
          <Col md={6}>
            <Card.Img src={require('../utils/images/' + project.image)} className='rounded-0'/>
          </Col>
          <Col md={6} className='my-auto port-card-body-margin text-center'>
            <Card.Title className='pt-2'>{project.title}</Card.Title>
            <Card.Text className='py-2'>{project.description}</Card.Text>
            <div className='pb-1 port-font-small'>{project.techs.join(' ')}</div>
          </Col>
        </Row>
        <a href={project.link} className='stretched-link' target='_blank' rel='noopener noreferrer'>
          <span></span>
        </a>
      </Card>
    );
  });

  // const [cards, setCards] = useState([...cards])
  const transitions = useTransition(cards, card => card.key, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
  });
  
  return (
    <Container>
      {transitions.map(({ item, key, props }) => (
        <animated.div key={key} style={props}>
          {item}
        </animated.div>
      ))}
    </Container>
  );
}