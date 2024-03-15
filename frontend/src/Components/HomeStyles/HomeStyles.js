import React from 'react'
import './homeStyles.css'
import StyleComponent from './StyleComponent'

const HomeStyles = () => {
  const styleData = [
    {
      image: 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/t-shirts.webp',
      name: 'T-Shirts'
    },
    {
      image: 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/winterWear.png',
      name: 'Winter Wear'
    },
    {
      image: 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/mobiles.jpg',
      name: 'Mobiles'
    },
    {
      image: 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/sarees.jpg',
      name: 'Sarees'
    },
    {
      image: 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/watches.jpg',
      name: 'Watches'
    },
    {
      image: 'https://s3.ap-south-1.amazonaws.com/santhosh.shreehaven/ShreeHaven/otherImages/formal-shirts.jpeg',
      name: 'Formal-Shirts'
    }
  ]
  return (
    <div className='homeStyles'>
      <div className='homeHeading'>Explore Our Products</div>
      <div className='row homeStylesData'>
        {(styleData && styleData.length !==0 ) ? 
          styleData.map((oneCategory)=> <StyleComponent  key={oneCategory.name} {...oneCategory} />) : (
            <h4>No Categories Available</h4>
          )
        }
      </div>
    </div>
  )
}

export default HomeStyles
