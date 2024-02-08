import React, { useState } from 'react'
import './uploadProduct.css'

const PersonalInfo = () => {
  const categories = {
    Men: ['Shirts', 'T-Shirts', 'Winter Wear', 'Jeans & Trousers',
      'Shorts', 'Formal-Shirts', 'Watches'],
    Women: ['Sarees', 'Dresses', 'Jeans', 'T-shirts', 'Trousers',
      'Kurtas', 'Winter Wear', 'Watches'],
    Other: ['Mobiles', 'Bluetooths', 'Laptops']
  }

  const typesList = ['Men', 'Women', 'Other']

  const initialProduct = {
    name: '',
    brand: '',
    category: categories[typesList[0]][0],
    type: typesList[0],
    price: '',
    discount: '',
    files: [],
    inStock: 'true',
    ratings: '',
    description: '',
    starRating: 0,
  };
  const [product, setProduct] = useState(initialProduct)
  const [err, setErr] = useState('')
  const [categoryList, setCategoryList] = useState(typesList[0])

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name !== 'type') {
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    } else {
      setCategoryList(value)
      setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  }

  const handleFileChange = (e) => {
    const files = e.target.files;
    setProduct(prev => {
      return { ...prev, files: files || [] }
    })
  }


  const validateProduct = () => {
    if (Number(product.starRating) > 5) {
      setErr('Star rating should be only in 0-5')
      return false
    }
    if (product.files.length < 3) {
      setErr('Upload atleast 3 images')
      return false
    }

    return true
  }
  const uploadProduct = (e) => {
    e.preventDefault()

    if (!validateProduct()) return

    setErr('')

    const formData = new FormData();

    formData.append('name', product.name);
    formData.append('brand', product.brand);
    formData.append('category', product.category);
    formData.append('type', product.type);
    formData.append('price', product.price);
    formData.append('discount', product.discount);
    formData.append('inStock', product.inStock);
    formData.append('ratings', product.ratings);
    formData.append('starRating', product.starRating);
    formData.append('description', product.description);

    for (let i = 0; i < product.files.length; i++) {
      formData.append(`files[]`, product.files[i]);
    }

    console.log("form", formData)

    try {
      async function postData() {
        const res = await fetch('http://localhost:5000/api/products', {
          method: 'POST',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWMyZmNiZDczZDg2MjQyYTU0ZTIzNGEiLCJlbWFpbCI6InNAZ21haWwuY29tIiwidHlwZSI6ImN1c3RvbWVyIiwiaWF0IjoxNzA3MzIxODA5LCJleHAiOjE3MDczNTc4MDl9.0gTQJe5zI7r1V28ht5YO07XR6LVFEqhEsePBfx6NnvU'
          },
          body: formData
        })
        const data = await res.json()

        console.log(data)

      }
      postData()
    } catch (error) {
      console.log(error)
    }
  }

  console.log(product)
  return (
    <div className='uploadProductForm row'>
      <form className='col-11 col-md-10' onSubmit={uploadProduct}>
        <fieldset className='formInfo'>
          <legend>Upload New Product</legend>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              className='profileInput'
              type='text'
              name='name'
              value={product.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='name'>Brand:</label>
            <input
              className='profileInput'
              type='text'
              name='brand'
              value={product.brand}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='name'>Type:</label>
            <select
              className='options'
              name='type'
              onChange={handleInputChange}
            >
              <option value={'select'} >---Select---</option>
              {
                typesList.map(ty => {
                  return (<option key={ty} value={ty} >{ty}</option>)
                })
              }
            </select>
          </div>
          <div>
            <label htmlFor='name'>Category:</label>
            <select
              className='options'
              name='category'
              onChange={handleInputChange}
            >
              <option value={'select'} >---Select---</option>
              {
                categories && categories[categoryList].map(cate => {
                  return (<option key={cate} value={cate} >{cate}</option>)
                })
              }
            </select>
          </div>
          <div>
            <label htmlFor='name'>Price:</label>
            <input
              className='profileInput'
              type='number'
              name='price'
              value={product.price}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className='inStockDiv'>
            <label>Stock Available</label>
            <input type='radio' className='inStock' name='inStock' value={'true'} checked={product.inStock === 'true'} onChange={handleInputChange} /> Yes
            <input type='radio' className='inStock' name='inStock' value={'false'} checked={product.inStock === 'false'} onChange={handleInputChange} /> No
          </div>
          <div>
            <label htmlFor='name'>Discount:</label>
            <input
              className='profileInput'
              type='number'
              min={0}
              max={99}
              name='discount'
              value={product.discount}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='name'>Star Rating:</label>
            <input
              className='profileInput'
              type='number'
              name='starRating'
              value={product.starRating}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor='name'>Ratings:</label>
            <input
              className='profileInput'
              type='number'
              name='ratings'
              value={product.ratings}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label> Description: </label> <br />
            <textarea
              className='textAreaDesc'
              onChange={handleInputChange}
              name='description'
              value={product.description}
              placeholder='Share something about product...'
              rows={3}
              cols={35}
            >
            </textarea>
          </div>
          <div>
            <input
              type='file'
              name='files'
              multiple
              accept='image/*'
              onChange={handleFileChange}
            />
          </div>
          <div className='text-danger'>{err}</div>
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
  );
};

export default PersonalInfo;
