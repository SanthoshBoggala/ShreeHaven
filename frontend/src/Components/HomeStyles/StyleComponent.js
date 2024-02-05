import './homeStyles.css'
import React from 'react'

const StyleComponent = ({style}) => {
    return (
        <div className='style col-lg-2 col-md-3 col-sm-4 col-6 g-3'>
            <div className='styleImg'>
                <img
                    src={style.image}
                    alt='stylesImg'
                    className='img-fluid'
                />
            </div>
            <div className='styleName'>
                {style.name}
            </div>
        </div>
    )
}

export default StyleComponent
