import './reviews.css'

const SingleReview = ()=>{
    const review = {
        user: 'santhosh',
        rating: 2.5,
        date: Date.now(),
        comment: "The quality is great but the arms around is super annoying(tight)its not a regular fit(mention in description)its slim fit don't go for for it if you're not thin i exchange with larger size but still same issue."
    }

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