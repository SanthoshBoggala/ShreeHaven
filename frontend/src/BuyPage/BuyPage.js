import React, { useState } from 'react'
import './buyPage.css'
import shoe2 from '../Images/mobile1.webp'
import BuyModel from './BuyModel';


const BuyPage = () => {

    const product = {
        "productKey": "Men_striped_casual_light_green_white_shirt",
        "name": "Men striped casual light green white shirt",
        "brand": "U TURN",
        "category": "Shirts",
        "price": 369,
        "newPrice": 313,
        "discount": 15,
        "starRating": 4.5,
        "ratings": 30059,
        "reviews": 3599,
    }

    const [extra, setExtra] = useState({
        count: 1,
        color: '',
        size: '',
    })
    const [totalPrice, setTotalPrice] = useState(product.newPrice)

    const handleChange = (e) => {
        const { name, value } = e.target

        if (name === 'count') {
            if (value !== '' && Number(value) < 1) {
                setExtra(prevExtra => ({ ...prevExtra, count: '1', totalPrice: product.newPrice }))
                setTotalPrice(product.newPrice)
            }
            else {
                setExtra(prevExtra => ({
                    ...prevExtra,
                    [name]: value,
                }))
                setTotalPrice(Number(value) * Number(product.newPrice))
            }
        }
        else {
            setExtra(prevExtra => ({
                ...prevExtra,
                [name]: value,
            }))
        }
    }
    console.log(totalPrice)

    const colors = {
        "Shirts": ['success', 'primary', 'info', 'secondary', 'dark', 'danger']
    }
    const sizes = {
        "Shirts": ['S', 'M', 'L', 'XL', 'XLL'],
        "Trousers": [28, 30, 32, 34, 36, 38, 40, 42]
    }
    return (
        <div className="buyPage row">
            <div className="productBuyDetails col-sm-6">
                <div className="productBrand">
                    {product.brand}
                </div>
                <div className="productName">
                    {product.name}
                </div>
                <div className="productPrice">
                    <div className="productNPrice">{"₹" + product.newPrice}</div>
                    <div className="productOPrice">{product.price}</div>
                    <div className="productDiscount">{product.discount + '% off'}</div>
                </div>
                <div className='buyExtra extras'>
                    Color:
                    <select
                        name='color'
                        onChange={handleChange}
                    >
                        <option value="">Select Color</option>
                        {colors && colors[product.category] && (
                            colors[product.category].map((x, index) => {
                                return (<option key={index} value={x}>{x}</option>)
                            })
                        )}
                    </select>
                </div> <br />
                <div className='buyExtra'>
                    Size:
                    <select
                        name='size'
                        onChange={handleChange}
                    >
                        <option value="">Select sizes</option>
                        {sizes && sizes[product.category] && (
                            sizes[product.category].map((x, index) => {
                                return (<option key={index} value={x}>{x}</option>)
                            })
                        )}
                    </select>
                </div> <br />
                <div className='buyExtra'>
                    Qty:
                    <input
                        className='count'
                        type="number"
                        name={'count'}
                        onChange={handleChange}
                        value={extra.count}
                        min={1}
                    />
                </div>
                <div className='totalPrice'>
                    Total Price: <span>{totalPrice}</span>
                </div>
                <div className='buyPageBtn'>
                    <button
                        className="buyBtn"
                    >
                        Buy Now
                    </button>
                </div>

            </div>

            <div className="col-sm-6">
                <div className='buyImage'>
                    <img src={shoe2} alt={product.name} />
                </div>
            </div>
            <BuyModel />
        </div>
    );
};

export default BuyPage;
