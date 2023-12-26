import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import firstImage from '../images/pic7.jpeg';
import secondImage from '../images/pic8.jpg';
import thirdImage from '../images/pic3.jpg';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={{ height: '500px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstImage}
          alt="First slide"
          style={{ height: '500px', objectFit: 'fill' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={secondImage}
          alt="Second slide"
          style={{ height: '500px', objectFit: 'fill' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
