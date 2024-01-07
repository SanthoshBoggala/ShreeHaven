import './item.css'

const Item = ({productDetails})=>{
    return (
        <div className="col-lg-2 col-md-3 col-6 col-sm-4 mb-3">
            <div className='itemDiv'>
                <div className='itemImage'>
                    <img 
                        src={productDetails.image}
                        className='img-fliud'
                        alt={productDetails}
                    />
                </div>
                <div className='itemDetails'>
                    <div className='itemBrand'>{productDetails.brand}</div>
                    <div className='itemName'>{productDetails.name}</div>
                    <div className='itemPriceDetails'>
                        <div className='itemNewPrice'>{"₹" + productDetails.newPrice}</div>
                        <div className='itemDiscount'>{productDetails.discount + '% Off'}</div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Item