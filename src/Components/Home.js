import { useState } from 'react';
import React from 'react';
import Marquee from './Marquee';
import CountdownTimer from './countdown';
import ControlledCarousel from './carossel';
import Footer from './footer';
import './carossel.css'



function Home() {
  return (
    <>
    <Marquee/>
     <ControlledCarousel/>
      <CountdownTimer/>
    <Footer
    />
    </>
    
  );
}

export default Home;