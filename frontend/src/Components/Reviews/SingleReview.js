import './reviews.css'
import { formatDistanceToNow } from 'date-fns'

const SingleReview = ({review})=>{


    let timeAgo = formatDistanceToNow(new Date(review.date), { addSuffix: true })
    timeAgo = timeAgo.split(" ").splice(1).join(" ")

    const reviewRatingColor = Number(review.starRating) > 3.0 ? 'primary' : 'danger'
    
    return (
        <div className='singleReview'>
            <div className='reviewUserDetails'>
                <div>
                    <img
                        className='userRevieImage'
                        alt='review'
                        src='https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg' 
                    />
                    <span className='reviewUser'>{review.user.username}</span>
                    <span className={`badge bg-${reviewRatingColor} productStarRating`}>{review.starRating + '★'}</span>
                </div>
                <div className='reviewDate'>{timeAgo}</div>
            </div>
            <div className='reviewDescription'>
                {review.comment}
            </div>
        </div>
    )
}

export default SingleReview