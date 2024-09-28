import Ratings from '@/components/VendorCard/Ratings'
import './vendorReviews.css'
import { useState, useRef, useEffect } from 'react'
import useFetch from '@/utils/useFetch'
import { root, useAuthStore } from '@/utils/AuthStore'
import TopLoader from '../AuthPages/TopLoader'
import { formatDate } from '@/utils/dateFormat'
import { reviewsStore } from '@/utils/OtherStores'
// import Ratings from '@/components/VendorCard/Ratings'


const VendorReviews = () => {

    const { token, user } = useAuthStore((state) => ({
		token: state.token,
		user: state.user
	}))

    const { setOptionID, optionID, allReviews, setAllReviews } = reviewsStore((state) => ({
        optionID: state.optionID,
        setOptionID: state.setOptionID,
        allReviews: state.allReviews,
		setAllReviews: state.setAllReviews
    }))

    // console.log(optionID)

    

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    // const [allReviews, setAllReviews] = useState([...reviews])

    console.log(allReviews)

    const [rating, setRating] = useState(false)
     const [small, setSmall] = useState(true)
    const inputRef = useRef(false)

    const changeRating = (number) => {
        setRating((prev) => number)
    }

    const addRating = () => {
        const reviewText = inputRef.current.value
        const vendorID = Number(window.location.href.split('/')[4])
        // console.log(reviewText)
        setLoading(prev => true)
        if(reviewText){
            const body = {
                printer_id: vendorID,
                rating: Number(rating),
                comment: reviewText
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
            const url = `${root}/reviews/create/`
            useFetch(url, body, headers, 'post').then(({ data: createReviewData, error: createReviewError }) => {
                setLoading(prev => false)
                if(createReviewData){
                    console.log(createReviewData)
                    if(!createReviewData.message){
                        setAllReviews([...allReviews, createReviewData])
                        inputRef.current.value = ''
                        inputRef.current.blur()
                        setRating(0)
                    }else{
                        setError(prev => createReviewData.message)
                        setTimeout(() => {
                            setError(prev => false)
                        }, 900)
                    }
                }else{    
                    setError(prev => 'An Error Occurred, check your Connection!')
                    setTimeout(() => {
                        setError(prev => false)
                    }, 900)
                }
                // console.log(createReviewData, createReviewError)
            })
        }
    }

    const editRating = () =>{
        const reviewText = inputRef.current.value
        setLoading(prev => true)
        const reviewID = optionID.id
        if(reviewText){
            const body = {
                rating: Number(rating),
                comment: reviewText
            }
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
            const url = `${root}/reviews/${reviewID}/edit/`
            useFetch(url, body, headers, 'put').then(({ data: editReviewData, error: ediyReviewError }) => {
                setLoading(prev => false)
                if(editReviewData){
                   const dummyReviews = [...allReviews]
                   const thisReview = dummyReviews.filter(function(el){
                    return el.id == editReviewData.id
                   })[0]
                   dummyReviews[dummyReviews.indexOf(thisReview)] = editReviewData
                   setAllReviews(dummyReviews)
                   setOptionID(false)
                   inputRef.current.value = ''
                   inputRef.current.blur()
                   setRating(0)
                }else{
                    setError(prev => 'An Error Occurred, check your Connection!')
                    setTimeout(() => {
                        setError(prev => false)
                    }, 900)
                }
                // console.log(createReviewData, createReviewError)
            })
        }
    }

    useEffect(() => {
        if(optionID.edit){
            setLoading(true)
            const headers = {
                'Authorization': `Token ${token}`
            }
            const url = `${root}/reviews/${optionID.id}/`
            useFetch(url, false, headers, 'get').then(({ data: reviewData, error: reviewError })=>{
                setLoading(prev => false)
                if(reviewData){
                    setError(prev => false)
                    setRating(prev => reviewData.rating)
                    // console.log(reviewData, reviewError)
                    inputRef.current.focus()
                    inputRef.current.value = reviewData.comment
                }else{
                    setError(prev => 'An Error Occurred, check your Connection!')
                    setTimeout(() => {
                        setError(prev => false)
                    }, 900)
                }
            })
        }
    }, [optionID])
    

    return (
        <div  className="vendor-reviews-section">
            {
                loading? (
                    <TopLoader />
                ):(
                    <></>
                )
            }
            <div className="review-heading">
                <h3>Reviews</h3>
            </div>
            {
                error? (
                    <div className="review-errors">
                       { error }
                    </div>
                ): (
                    <></>
                )
            }
            <div className={`create-review ${small? 'small': ''}`}>
                <div className="review-text">
                    <div className="user-icon">
                        <img src={ '/assets/images/user.png'  } alt="" />
                    </div>
                    <input name="" id="" placeholder='Add a Review' ref={ inputRef } onFocus={ () => {
                        setSmall(prev => false)
                    } }/>
                    {
                        optionID.edit? (
                            <button className='add-review-btn' onClick={() => {
                                editRating()
                            }}>Edit</button>
                        ):(
                            <button className='add-review-btn' onClick={() => {
                                addRating()
                            }}>Add</button>
                        )
                    }
                </div>
                <div className="create-rating">
                    <Ratings createRating={ true } changeRating={ changeRating } rating={ rating }/> 
                </div>
            </div>
            <div className="all-reviews">
                {
                    allReviews.length > 0? (
                        <>
                            {
                                allReviews.map(review => (
                                    <div className="review">
                                        <div className="review-content">
                                            <p>"{ review.comment }"</p>
                                            <div className="review-rating">
                                                <Ratings rating={ review.rating } createRating={ false } changeRating={ false }/>
                                            </div>
                                        </div>
                                        <div className="time-updated">
                                            <p>{ formatDate(new Date(review.created_at).getTime()).timeApproxl }</p>
                                        </div>
                                        {
                                            review.user == user.id? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16" onClick={  () => {
                                                    setOptionID({
                                                        id: review.id,
                                                        show: true,
                                                        edit: false
                                                    })
                                                }}>
                                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                                </svg>
                                            ):(
                                                <></>
                                            )
                                        }
                                    </div>
                                ))
                            }
                        </>
                    ):(
                        <></>
                    )
                }
            </div>
        </div>
    )
}

export default VendorReviews
