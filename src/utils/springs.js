import React from 'react';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';

// Fade in string.
export function fadeIn(element) {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <Spring to={{ opacity: isVisible ? 1 : 0 }} delay={100} config={{ duration: 600 }}>
            {({ opacity }) => <span style={{ opacity }}>{element}</span>}
        </Spring>
      )}
    </VisibilitySensor>
  );
}

// Fade in the return value of the callback from left.
export function fadeFromLeft(callback) {
  return (
    <span style={{ overflow: 'hidden' }}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring 
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-256px)'
            }}
            config={{ duration: 300 }}
          >
            {props => <div style={{ ...props }}>{callback}</div>}
          </Spring>
        )}
      </VisibilitySensor>
    </span>
  );
}

// Fade in the return value of the callback from right.
export function fadeFromRight(callback) {
  return (
    <span style={{ overflow: 'hidden' }}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring 
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(256px)'
            }}
            config={{ duration: 300 }}
          >
            {props => <div style={{ ...props }}>{callback}</div>}
          </Spring>
        )}
      </VisibilitySensor>
    </span>
  );
}

// Fade in the return value of the callback form bottom.
export function fadeFromBottom(callback) {
  return (
    <span style={{ overflow: 'hidden' }}>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <Spring 
            delay={100}
            to={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(256px)'
            }}
            config={{ duration: 300 }}
          >
            {props => <div style={{ ...props }}>{callback}</div>}
          </Spring>
        )}
      </VisibilitySensor>
    </span>
  );
}

// Flip contents of callback.
export function flipHex(callback) {
  return (
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <Spring
          delay={100}
          to={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'rotateY(0)' : 'rotateY(3.142rad)'
          }}
          config={{ duration: 300 }}
        >
          {props => <div style={{ ...props }}>{callback}</div>}
        </Spring>
      )}
    </VisibilitySensor>
  )
}
