import SingleReview from './SingleReview'
import './reviews.css'

const Reviews = ()=>{
    return (
        <div className='reviews'>
            <h3>Reviews</h3>
            <div>
                <SingleReview />
                <SingleReview />
                <SingleReview />
                <SingleReview />
            </div>
        </div>
    )
}

export default Reviews