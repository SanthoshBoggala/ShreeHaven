import './reviews.css'

const SingleReview = ({review})=>{

    const reviewRatingColor = review.rating > 3.0 ? 'primary' : 'danger'
    
    return (
        <div className='singleReview'>
            <div className='reviewUserDetails'>
                <div>
                    <img
                        className='userRevieImage'
                        alt='review'
                        src='https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg' 
                    />
                    <span className='reviewUser'>{review.user}</span>
                    <span className={`badge bg-${reviewRatingColor} productStarRating`}>{review.rating + '★'}</span>
                </div>
                <div className='reviewDate'>{review.date}</div>
            </div>
            <div className='reviewDescription'>
                {review.comment}
            </div>
            
            
        </div>
    )
}

export default SingleReview