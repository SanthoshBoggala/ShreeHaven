import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeCarousel.css';

import carousel1 from '../../Images/carousel1.webp'

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='homeCarousel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={carousel1}
            alt='Product 1'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={carousel1}
            alt='Product 2'
          />
        </Carousel.Item>
        {/* Add more items as needed */}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
