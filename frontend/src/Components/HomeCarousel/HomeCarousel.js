import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeCarousel.css';

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const img = 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/carousel2.webp'

  return (
    <div className='homeCarousel'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={img}
            alt='Product 1'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={img}
            alt='Product 2'
          />
        </Carousel.Item>
        {/* Add more items as needed */}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
