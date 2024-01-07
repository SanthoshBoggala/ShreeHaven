import './reviews.css'

const SingleReview = ()=>{

    const reviews = {
        "user" : "santhosh",
        "rating" : "2.5",
        "date" : "15-2-2003",
        "description" : "The quality is great but the arms around is super annoying(tight)its not a regular fit(mention in description)its slim fit don't go for for it if you're not thin i exchange with larger size but still same issue."
    }

    const reviewRatingColor = reviews.rating > 3.0 ? 'primary' : 'danger'
    
    return (
        <div className='singleReview'>
            <div className='reviewUserDetails'>
                <div>
                    <img
                        className='userRevieImage'
                        src='https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg' 
                    />
                    <span className='reviewUser'>{reviews.user}</span>
                    <span className={`badge bg-${reviewRatingColor} productStarRating`}>{reviews.rating + '★'}</span>
                </div>
                <div className='reviewDate'>{reviews.date}</div>
            </div>
            <hr className='reviewLine'/>
            <div className='reviewDescription'>
                {reviews.description}
            </div>
            
            
        </div>
    )
}

export default SingleReview