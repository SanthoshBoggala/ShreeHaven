import React from 'react'
import './typeCategory.css'
import Category from './Category'

const Type = ({ type, categories }) => {
    return (
        <div className='typesDiv'>
            <div className='type'>{type}</div>
            <div className='categories row'>
                {
                    (categories && categories.length !== 0) && (
                        categories.map(cate=> <Category key={cate.category} category={cate.category}/>)
                    )
                }
            </div>
        </div>
    )
}

export default Type
