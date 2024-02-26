import React, { useState } from 'react'
import './buyPage.css'

const BuyModal = () => {
    const addrs = [
        "123 Main St, Cityville",
        "456 Oak Ave, Townburg",
        "789 Pine Ln, Villagetown"
    ]

    const paymentMethods = [
        "Credit Card",
        "PayPal",
        "Google Pay"
    ]

    const [formData, setFormData] = useState({
        selectedAddress: '',
        selectedPaymentMethod: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData((prev)=>(
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = (e) => {
        e.preventDeafult()
    }

    return (
        <div className='afterBuy'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Select an address:</legend>
                    {addrs.map((address, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                id={`address${index}`}
                                name="selectedAddress"
                                value={address}
                                checked={formData.selectedAddress === address}
                                onChange={handleInputChange}
                            />
                            <label htmlFor={`address${index}`}>{address}</label>
                        </div>
                    ))}
                </fieldset>

                <fieldset>
                    <legend>Select a payment method:</legend>
                    {paymentMethods.map((method, index) => (
                        <div key={index}>
                            <input
                                type="radio"
                                id={`paymentMethod${index}`}
                                name="selectedPaymentMethod"
                                value={method}
                                checked={formData.selectedPaymentMethod === method}
                                onChange={handleInputChange}
                            />
                            <label htmlFor={`paymentMethod${index}`}>{method}</label>
                        </div>
                    ))}
                </fieldset>

                <div className='buyPageBtn text-center'>
                    <button
                        className="buyBtn"
                    >
                        Buy Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default BuyModal
