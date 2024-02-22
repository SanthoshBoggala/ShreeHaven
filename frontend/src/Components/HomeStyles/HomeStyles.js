import React from 'react'
import './homeStyles.css'
import StyleComponent from './StyleComponent'
import styles1 from '../../Images/styles1.jpg'
import styles2 from '../../Images/styles2.webp'

const HomeStyles = () => {
  const styleData = [
    {
      image: styles1,
      name: 'Shirts'
    },
    {
      image: styles2,
      name: 'Trousers'
    },
    {
      image: styles1,
      name: 'T-Shirts'
    },
    {
      image: styles1,
      name: 'Hoodies'
    },
    {
      image: styles1,
      name: 'Goddi '
    },
    {
      image: styles1,
      name: 'Goddilo'
    }
  ]
  return (
    <div className='homeStyles'>
      <div className='homeHeading'>Explore Our Products</div>
      <div className='row homeStylesData'>
        {(styleData && styleData.length !==0 ) ? 
          styleData.map((oneCategory, index)=> <StyleComponent  key={oneCategory.name} {...oneCategory} />) : (
            <h4>No Categories Available</h4>
          )
        }
      </div>
    </div>
  )
}

export default HomeStyles
