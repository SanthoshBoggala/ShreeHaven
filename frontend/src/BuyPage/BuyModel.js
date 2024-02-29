import React, { useState } from 'react'
import './buyPage.css'

const BuyModal = ({extra, key}) => {
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

    const [err, setErr] = useState("")
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
        e.preventDefault()

        if((extra.color.length || extra.size.length) === 0){
            setErr("Invalid color/size selected")
            return
        }
        if((formData.selectedAddress.length || formData.selectedPaymentMethod.length) === 0){
            setErr("Invalid selected address/payment method")
            return
        }
    }

    return (
        <div className='afterBuy'>
            <form onSubmit={handleSubmit}>
                <fieldset className='modelForm'>
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
                <div className='error'>
                    {err}
                </div>
                <div className='buyPageBtn text-center mt-3'>
                    <button
                        className="buyBtn"
                    >
                        Buy Now
                    </button>
                </div>
                </fieldset>
            </form>
        </div>
    )
}

export default BuyModal
