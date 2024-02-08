import React from 'react'
import './typeCategory.css'

const Category = ( {category} ) => {
  return (
    <div className='category col-lg-2 col-md-3 col-sm-4 col-6'>
      {category}
    </div>
  )
}

export default Category
