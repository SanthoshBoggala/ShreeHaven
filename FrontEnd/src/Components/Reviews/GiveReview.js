import './reviews.css'
import notRatedStar from '../../Images/notRatedStar.png'
import ratedStar from '../../Images/ratedStar.png'
import { useState } from 'react'

const GiveReview = () => {
    const [rating, setRating] = useState(0);
    let stars = []
    let lastStar = rating
    while (lastStar !== 0) {
        stars.push(1)
        lastStar = lastStar - 1
    }

    let notRated = 5 - rating
    while (notRated !== 0) {
        stars.push(0)
        notRated = notRated - 1
    }
    console.log(stars)

    const handleStar = (n, isStar) => {
        if (isStar === 1) {
            setRating(n)
        }
        else setRating(n)
    }
    return (
        <>
            <div className='giveStarRating'>
                <div className='giveReviewHeading'>
                    Review Product
                </div>
                <div className='starSet'>
                    <div className='star'>
                        <img
                            src={stars[0] === 1 ? ratedStar : notRatedStar}
                            alt='startIcon'
                            className='img-fluid'
                            onClick={() => handleStar(1, stars[0])}
                        />
                    </div>
                    <div className='star'>
                        <img
                            src={stars[1] === 1 ? ratedStar : notRatedStar}
                            alt='startIcon'
                            className='img-fluid'
                            onClick={() => handleStar(2, stars[1])}
                        />
                    </div>
                    <div className='star'>
                        <img
                            src={stars[2] === 1 ? ratedStar : notRatedStar}
                            alt='startIcon'
                            className='img-fluid'
                            onClick={() => handleStar(3, stars[2])}
                        />
                    </div>
                    <div className='star'>
                        <img
                            src={stars[3] === 1 ? ratedStar : notRatedStar}
                            alt='startIcon'
                            className='img-fluid'
                            onClick={() => handleStar(4, stars[3])}
                        />
                    </div>
                    <div className='star'>
                        <img
                            src={stars[4] === 1 ? ratedStar : notRatedStar}
                            alt='startIcon'
                            className='img-fluid'
                            onClick={() => handleStar(5, stars[4])}
                        />
                    </div>
                </div>
            </div>
            <div className='writeReview'>
                <div className='giveReviewHeading'>Write a Review</div>
                <textarea
                    placeholder='How is the product? What do you like?What do you hate?'>
                </textarea>
                <button 
                    onClick={()=>{}} 
                >
                    Finish
                </button>
            </div>
        </>
    )
}

export default GiveReview
