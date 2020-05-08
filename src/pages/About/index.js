import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron, Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import { useTransition,  animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faDatabase, faGraduationCap, faSortAmountDown, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import ScrollableAnchor, {configureAnchors, goToTop } from 'react-scrollable-anchor';
import { projects } from '../../utils/projects';
import './about.css';
import '../../utils/styles/shapes.css';

export default function About(props) {

  // Used for changing classes at specific viewports.
  const size = useWindowSize();

  /* ********************** Code from Gabe Ragland at usehooks.com/usewindowsize. ********************* */
  function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
      return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
      };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
      if (!isClient) {
        return false;
      }
      
      function handleResize() {
        setWindowSize(getSize());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }); // Empty array ensures that effect is only run on mount and unmount

    return windowSize;
  }
  /* ************************************************************************************************** */

  configureAnchors({ offset: -60, scrollDuration: 450 });

  return (
    <>
      {/****************************************** INTRODUCTION *****************************************/}
      <Jumbotron className='jumbo-bg-light v-center-rows' fluid>
        <Row className='name-bg'>
          <Col md={6} className='text-center my-5 my-md-auto'>
            <h2 id='name' className='my-3'>
              <span className='ul-pink ol-pink'>
                <span className='vl-blue-left'></span>
                  Tyler Kennedy
                <span className='vl-blue-right'></span>
              </span>
            </h2>
            <p className='font-large'>I am an observer, a learner, and an achiever.</p>
          </Col>
          <Col md={6} className='text-center'>
            <Image id='profile-pic' src={require('../../utils/images/portfolio.png')} alt='Tyler Kennedy' fluid/>
          </Col>
        </Row>
      </Jumbotron>
      {/********************************************* ABOUT *********************************************/}
      {(size.width > 767) ? <div className='triangle-down'></div> : <></>}
      <Jumbotron className='jumbo-bg-dark v-center-rows' fluid>
        <Container>
          <ScrollableAnchor id={'about'}>
            <h3 className='header-dark'><span className='ul-pink ol-pink'>About</span></h3>
          </ScrollableAnchor>
          <Row>
            <Col md={{ span: 10, offset: 1 }}>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className='my-3'>
                  <div className='text-center font-large'>
                    <p>
                      I've alway wanted to live in a constant state of not-knowing-enough, 
                      and what better platform for that than the web?
                    </p>
                    <p>
                      With a B.S. in computer science and a Master's in IT on the way, I'm 
                      ready to make your vision come to life.
                    </p>
                  </div>
                </Col>
                <Col md={{ span: 10, offset: 1 }} className='my-auto'>
                <h3 className='text-center mt-5 mb-3'>Soft Skills</h3>
                <Accordion defaultActiveKey='1'>
                  <Card className='a-card'>
                    <Accordion.Toggle as={Card.Header} eventKey="0" className='a-card-header'>
                      Flexiblity
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body className='a-card-body'>
                        I've never really had a set schedule, and as a result I've learned to be flexible. 
                        Let me know what works for you, and I'll make it work for me too.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className='a-card'>
                    <Accordion.Toggle as={Card.Header} eventKey="1" className='a-card-header'>
                      Cooperation
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className='a-card-body'>
                        I work well with others... plain and simple. 
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className='a-card'>
                    <Accordion.Toggle as={Card.Header} eventKey="2" className='a-card-header'>
                      Listening
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body className='a-card-body'>
                        This is maybe a weird skill to talk about, but it's more important than most realize.
                        A focused listener can figure out what a client wants, and when to ask questions.
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      {(size.width > 767) ? <div className='triangle-up'></div> : <></>}
      {/********************************************* WHY ME ********************************************/}
      <ScrollableAnchor id={'skills'}>
        <h3 className='header-light'><span className='ul-pink ol-pink'>Why me?</span></h3>
      </ScrollableAnchor>
      <Jumbotron className='jumbo-bg-light' fluid>
        <Container className='v-center-rows'>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <Row>
                <Col md={6}>
                    <div className='hexagon mx-auto hex-margins'>
                      <FontAwesomeIcon icon={faDesktop} size='2x' className='hex-icons'></FontAwesomeIcon>
                    </div>
                    <div className='text-center'>
                      <h4>Browser Knowledge</h4>
                      <span>CSS</span>
                      <span className='dot'></span>
                      <span>&#60;&#47;HTML&#62;</span>
                      <span className='dot'></span>
                      <span>JavaScript</span>
                      <span className='dot'></span>
                      <span>jQuery</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='hexagon mx-auto hex-margins'>
                    <FontAwesomeIcon icon={faServer} size='2x' className='hex-icons'></FontAwesomeIcon>
                    </div>
                    <div className='text-center'>
                      <h4>Server Side</h4>
                      <span>Node.js</span>
                      <span className='dot'></span>
                      <span>Express.js</span>
                      <span className='dot'></span>
                      <span>API Usage</span>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                    <div className='hexagon mx-auto hex-margins'>
                      <FontAwesomeIcon icon={faDatabase} size='2x' className='hex-icons'></FontAwesomeIcon>
                    </div>
                    <div className='text-center'>
                      <h4>Database</h4>
                      <span>MySQL</span>
                      <span className='dot'></span>
                      <span>MongoDB</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='hexagon mx-auto hex-margins'>
                      <FontAwesomeIcon icon={faGitAlt} size='2x' className='hex-icons'></FontAwesomeIcon>
                    </div>
                    <div className='text-center'>
                      <h4>Developer Tools</h4>
                      <span>Heroku</span>
                      <span className='dot'></span>
                      <span>Git</span>
                      <span className='dot'></span>
                      <span>Github</span>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                    <div className='hexagon mx-auto hex-margins'>
                      <FontAwesomeIcon icon={faGraduationCap} size='2x' className='hex-icons'></FontAwesomeIcon>
                    </div>
                    <div className='text-center'>
                      <h4>Education</h4>
                      <span>B.S. Computer Science</span>
                      <span className='dot'></span>
                      <span>B.S Sociology</span>
                      <span className='dot'></span>
                      <span>Vanderbilt Coding Bootcamp</span>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='hexagon mx-auto hex-margins'>
                      <FontAwesomeIcon icon={faSortAmountDown} size='2x' className='hex-icons'></FontAwesomeIcon>
                    </div>
                    <div className='text-center'>
                      <h4>Concepts</h4>
                      <span>CRUD Operations</span>
                      <span className='dot'></span>
                      <span>MVC</span>
                      <span className='dot'></span>
                      <span>Algorithms</span>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
      {/******************************************* PORTFOLIO *******************************************/}
      <ScrollableAnchor id={'portfolio'}>
        <h3 className='header-dark pb-3'><span className='ul-pink ol-pink'>Portfolio</span></h3>
      </ScrollableAnchor>
      <Jumbotron className='jumbo-bg-dark v-center-rows' fluid>
        <Container>
          <Row className='mb-5'>
            {projects.map((project, index) => {
              return (
                <Col md={4} key={index} className='px-1 py-3 d-flex align-items-stretch'>
                  <Card className='p-card'>
                    <Card.Img variant='top' src={require('../../utils/images/' + project.image)} />
                    <Card.Body className='p-card-body'>
                      <Card.Title className='p-card-header'>{project.title}</Card.Title>
                      <p>
                        {project.techs.map((tech, index) => {
                          return (
                            <span key={index}>
                              {(index !== 0) ? 
                                <><span className='dot'></span><span className='font-small'>{tech}</span></> : 
                                <span>{tech}</span>}
                            </span>
                          );
                        })}
                      </p>
                    </Card.Body>
                    <a href={project.link} className='stretched-link' target='_blank' rel='noopener noreferrer'><span></span></a>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Jumbotron>
      <div className='half-circle'>
        <FontAwesomeIcon icon={faAngleDoubleUp} size='3x' className='circle-icons' onClick={() => goToTop()}></FontAwesomeIcon>
      </div>
    </>
  );
}