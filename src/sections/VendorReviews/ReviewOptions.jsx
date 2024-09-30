import useFetch from "@/utils/useFetch"
import { useState, useRef } from "react"

import { root, useAuthStore } from "@/utils/AuthStore"
import { reviewsStore } from "@/utils/OtherStores"


const ReviewOptions = ({ optionID, setOptionID }) => {

 

    const deleteRef = useRef(false)
    const deleteBtnRef = useRef(false)

    const { deleteReviewFromUI  } = reviewsStore((state) => ({
        deleteReviewFromUI: state.deleteReviewFromUI
    }))


    // document.addEventListener('click', (e)=>{
    //     if(deleteBtnRef && deleteRef){
    //         if(!deleteRef.current.contains(e.target) && !deleteBtnRef.current.contains(e.target)){
    //             setShowDelete(prev => false)
    //         }
    //     }
    // })

    const { token } = useAuthStore((state) => ({
        token: state.token
    }))

    const [showDelete, setShowDelete] = useState(false)
    const [loading, setLoading] = useState(false)

    const deleteReview = () => {
        const url = `${root}/reviews/${optionID.id}/delete/`
		const headers = {
			'Authorization': `Token ${token}`
		}	
        setLoading(prev => true)
        useFetch(url, false, headers, 'delete').then(({ data: deleteReviewData, error: deleteReviewError }) => {
            setLoading(prev => false)
            if(deleteReviewData){
                deleteReviewFromUI(optionID)
                setShowDelete(prev => false)
            }
 
        })
    }

    return (
        <>
            <div className={`review-options ${ optionID.show? 'show' : '' }`} >
                <div className="heading">
                    <h3>Options</h3>
                    <div className="close-options" onClick={() => {
                        setOptionID(false)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </div>
            <div className="option-section">
                    <div className="option" onClick={() => {
                         setOptionID({
                            id: optionID.id,
                            show: false,
                            edit: true
                        })
                    }}>
                        <h5>Edit</h5>
                    </div>
                    <div className="option" onClick={() => {
                        setOptionID({
                            id: optionID.id,
                            show: false,
                            edit: false
                        })
                        setShowDelete(prev => true)
                    }} ref={ deleteBtnRef }>
                        <h5 style={{ color: 'red' }}>Delete</h5>
                    </div>
            </div>
            </div>
            <div className={`confirm-delete ${showDelete? 'show': ''}`} ref={ deleteRef } style={ { pointerEvents: loading? 'none' : 'all' } }>
                <h4>Delete Review?</h4>
                <div className="confirm-actions">
                    <button onClick={() => {
                        deleteReview()
                    }}>{
                        loading? (
                            <img className =" w-[20px] h-[20px] " src="/assets/icons/loader.gif" alt="" />
                        ):(
                           <>Delete</> 
                        )
                    }</button>
                    <button onClick={() => {
                        setShowDelete(false)
                    }}>Cancel</button>
                </div>
            </div>
        </>
    )
}

export default ReviewOptions