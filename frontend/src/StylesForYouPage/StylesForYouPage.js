import React from 'react'
import './stylesForYouPage.css'
import { useParams } from 'react-router-dom'
import { Products } from '../Components'

const StylesForYouPage = () => {
    const { id } = useParams()

    return (
        <div className='stylesForYouPage row'>
            <Products stylesForYouPage = {true}/>
        </div>
    )
}

export default StylesForYouPage
