import React, { PureComponent } from 'react';
import '../css/Hero.css';

class Hero extends PureComponent {
  render() {
    return (
      <div className='hero'>
        <h1 className='hero-text'>Would You Rather...</h1>
      </div>
    );
  }
}

export default Hero;