import SingleReview from './SingleReview'
import './reviews.css'

const Reviews = ({ reviews, ratings, starRating })=>{
    const reviewsData = [
        {
            user: 'santhosh',
            rating: 3.9,
            date: Date.now(),
            comment: "The quality is great but the arms around is super annoying(tight)its not a regular fit(mention in description)its slim fit don't go for for it if you're not thin i exchange with larger size but still same issue."
        },
        {
            user: 'santhosh',
            rating: 2.5,
            date: Date.now(),
            comment: "The quality is great but the arms around is super annoying(tight)its not a regular fit(mention in description)its slim fit don't go for for it if you're not thin i exchange with larger size but still same issue."
        },
        {
            user: 'santhosh',
            rating: 3.5,
            date: Date.now(),
            comment: "The quality is great but the arms around is super annoying(tight)its not a regular fit(mention in description)its slim fit don't go for for it if you're not thin i exchange with larger size but still same issue."
        }
    ]
    return (
        <div className='reviewsPage'>
            <div>
                {reviewsData && reviewsData.length !== 0 ? (
                    <>
                        <div className='homeHeading'>Ratings & Reviews</div>
                        <div className='reviewBox'> 
                            <div className='starRating'>{starRating}</div>
                            <div className='ratings'>{ratings + ' Ratings &'}</div>
                            <div className='ratings'>{reviews + ' Reviews'}</div>
                        </div>
                        {reviewsData.map(review => <SingleReview review={review} />)}
                        <button className='viewAll'>View All Reviews</button>
                    </>
                ) : (
                    <h4 className='homeHeading'>No Reviews Available</h4>
                )
                }
            </div>
        </div>
    )
}

export default Reviews