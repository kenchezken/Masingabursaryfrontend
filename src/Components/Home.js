import { useState } from 'react';
import React from 'react';
import NavigationBar from './Navbar';
import Marquee from './Marquee';
import CountdownTimer from './countdown';
import ControlledCarousel from './carossel';
import Footer from './footer';
import './carossel.css'



function Home() {
  return (
    <>
    <NavigationBar />
    <Marquee/>
     <CountdownTimer/>
     <ControlledCarousel/>
    
    <Footer
    />
    </>
    
  );
}

export default Home;