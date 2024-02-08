import React, { useState } from 'react'
import './typeCategory.css'
import Type from './Type'

const CanModify = () => {

    const [typesData, setTypesData] = useState({
        productType: '',
        category: ''
    })

    const data = [
        {
            "_id": "65c4b1d47afeb81df8b7c4b6",
            "type": "Men",
            "categories": [
                {
                    "category": "Shirts",
                    "_id": "65c4b1f27afeb81df8b7c4ba"
                },
                {
                    "category": "T-Shirts",
                    "_id": "65c4b2027afeb81df8b7c4be"
                },
                {
                    "category": "Winter Wear",
                    "_id": "65c4b20f7afeb81df8b7c4c3"
                },
                {
                    "category": "Jeans & Trousers",
                    "_id": "65c4b21c7afeb81df8b7c4c9"
                },
                {
                    "category": "Shorts",
                    "_id": "65c4b22b7afeb81df8b7c4d0"
                },
                {
                    "category": "Formal-Shirts",
                    "_id": "65c4b2357afeb81df8b7c4d8"
                },
                {
                    "category": "Watches",
                    "_id": "65c4b2417afeb81df8b7c4e1"
                }
            ],
            "__v": 7
        },
        {
            "_id": "65c4b25c7afeb81df8b7c4ec",
            "type": "Women",
            "categories": [
                {
                    "category": "Sarees",
                    "_id": "65c4b25c7afeb81df8b7c4ee"
                },
                {
                    "category": "Dresses",
                    "_id": "65c4b26b7afeb81df8b7c4f2"
                },
                {
                    "category": "Jeans",
                    "_id": "65c4b2727afeb81df8b7c4f7"
                },
                {
                    "category": "T-shirts",
                    "_id": "65c4b2807afeb81df8b7c4fd"
                },
                {
                    "category": "Trousers",
                    "_id": "65c4b2897afeb81df8b7c504"
                },
                {
                    "category": "Kurtas",
                    "_id": "65c4b2927afeb81df8b7c50c"
                },
                {
                    "category": "Winter Wear",
                    "_id": "65c4b29c7afeb81df8b7c515"
                },
                {
                    "category": "Watches",
                    "_id": "65c4b2a67afeb81df8b7c51f"
                }
            ],
            "__v": 8
        }
    ]

    const handleTypesData = (e) => {
        const { name, value } = e.target
        setTypesData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleTypesSubmit = (e)=>{
        e.preventDefault()

        console.log(typesData)
    }
    return (
        <div className='canModify'>
            <div className='typeCategoryDiv'>
                <div className='typesHeading'>
                    Available Types & Categories
                </div>
                <div className='typeCategory'>
                    {(data && data.length !== 0) && (
                        data.map(one => {
                            return (
                                <Type key={one._id} {...one} />
                            )
                        })
                    )
                    }
                </div>
                <div className='getTypeCategory'>
                    <form onSubmit={handleTypesSubmit}>
                        <fieldset className='formInfo'>
                            <legend>Add a Type/Category</legend>
                            <div>
                                <label htmlFor='name'>Product Type:</label>
                                <input
                                    className='profileInput'
                                    type='text'
                                    name='productType'
                                    value={typesData.productType}
                                    onChange={handleTypesData}
                                />
                            </div>
                            <div>
                                <label htmlFor='name'>Category:</label>
                                <input
                                    className='profileInput'
                                    type='text'
                                    name='category'
                                    value={typesData.category}
                                    onChange={handleTypesData}
                                />
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='updateBtn'
                                >
                                    Update
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CanModify
