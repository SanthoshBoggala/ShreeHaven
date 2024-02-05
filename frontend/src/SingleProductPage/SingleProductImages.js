import { useState } from 'react'
import './singleProductPage.css'
import OtherImages from './OtherImages'

const SingleProductImages = ({images}) => {
    const [currentImg, setCurrentImg] = useState(0)
    console.log(currentImg)
    return (
        <>
            <div className="col-sm-3 col-10 otherImages">
                {images && images.length !== 0 && (
                    images.map((img) => (
                    <OtherImages 
                        key={images.indexOf(img)}
                        count={images.indexOf(img)}
                        shine={currentImg === images.indexOf(img)}
                        img={img}
                        handleMainImage={(cur)=> setCurrentImg(cur)} 
                    /> 
                    ))
                )}
            </div>
            <div className="col-sm-9 col-10 mainImage">
                <div className="itemImg1">
                    <img
                        src={images[currentImg]}
                        alt='item1'
                        className="img-fluid"
                    />
                </div>
            </div>
        </>
    )
}

export default SingleProductImages
