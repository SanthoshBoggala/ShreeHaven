import { useContext, useState } from 'react'
import GiveReview from './GiveReview'
import SingleReview from './SingleReview'
import './reviews.css'
import { toast, ToastContainer } from 'react-toastify'
import UserContext from '../../contexts/userContext'

const Reviews = ({productKey, reviews, ratings, starRating })=>{
    const [canReview, setCanReview] = useState(false)
    const {user, token} = useContext(UserContext)

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
    const handleReview = ()=>{
        if(user && user.type === 'customer'){
            setCanReview(prev => !prev)
        }
        else{
            toast.error("Only customer can review... ")
            return
        }
    }
    return (
        <div className='reviewsPage'>
            <div>
                {reviewsData && reviewsData.length !== 0 ? (
                    <>
                        <div className='reviewHeading'>Ratings & Reviews</div>
                        <div className='reviewBox'> 
                            <div className='starRating'>{starRating}</div>
                            <div className='ratings'>{ratings + ' Ratings &'}</div>
                            <div className='ratings'>{reviews + ' Reviews'}</div>
                        </div>
                        {reviewsData.map((review, index) => <SingleReview  key={index} review={review}/>)}
                        <div className='viewAllDiv'>
                            <button className='viewAll'>Show All</button>
                            <button className='viewAll' onClick={handleReview}>{ canReview ? 'Close Review' : 'Rate Product'}</button>
                        </div>
                    </>
                ) : (
                    <h4 className='homeHeading'>No Reviews Available</h4>
                )
                }
                <div className='giveReview'>
                    { reviewsData && reviewsData.length === 0 && (
                        <div>
                            <button className='viewAll' onClick={handleReview}>{ canReview ? 'Close Review' : 'Rate Product'}</button>    
                        </div>  
                    )}
                    {canReview && <GiveReview />}
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Reviews