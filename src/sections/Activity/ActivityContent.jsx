import Ratings from "@/components/VendorCard/Ratings"
import { useActivityNavStore } from "@/utils/OtherStores"
import { useAuthStore } from "@/utils/AuthStore"
import { useEffect, useState } from "react"
import useFetch from "@/utils/useFetch"
import { root } from "@/utils/AuthStore"
import LoadSpinner from "@/components/LoadSpnnner"
import { formatDate } from "@/utils/dateFormat"



const ActivityContent = () => {
    const { active, setOpenOrderWindow, setActiveOrder } = useActivityNavStore((state)=> ({
        active: state.active,
        setOpenOrderWindow: state.setOpenOrderWindow,
        setActiveOrder: state.setActiveOrder
    }))
    const { token, user, isVendor } = useAuthStore((state) => ({
		token: state.token,
		user: state.user,
        isVendor: state.isVendor
	}))



    const [contentType, setContentType] = useState('orders')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchContent = (url, headers, type, filter) => {
        setLoading(prev => true)
        useFetch(url, false, headers, type).then(({data: contentData, error: contentError}) => {
            setLoading(prev => false)
            if(contentData){
                let mappedData = contentData.map(el => ({
                    ...el,
                    timeMiilliseconds: new Date(el.order_time).getTime()
                })).sort((a, b) => b.timeMiilliseconds - a.timeMiilliseconds)
                mappedData = url == `${root}/reviews/all/`? mappedData.filter(function(el){ return el.printer == isVendor }) : mappedData
                setError(prev => false)
                if(filter != 'null'){
                    setData(prev => mappedData.filter(function(el){
                        return el.is_complete == filter
                    }))
                }else{
                    setData(prev => mappedData)
                }
            }else{
                setError(prev => true)
            }
        })
    }
    useEffect(()=>{
        let url
        let orders
        let headers
        switch (active) {
            case 'orders':
                  url =  isVendor? `${root}/orders/printer/` : `${root}/orders/user/`
                  headers = {
                    'Authorization': `Token ${token}`
                }
                setContentType(prev => 'orders')
                fetchContent(url, headers, 'get', 'null')
                break;
            case 'reviews':
                url =  isVendor? `${root}/reviews/all/` : `${root}/reviews/me/`
                headers = {
                  'Authorization': `Token ${token}`
               }
                setContentType(prev => 'reviews')
                fetchContent(url, headers, 'get', 'null')
                break;
            case 'order-completed':
                if(contentType == 'orders'){
                    setData(prev => prev.filter(function(el){
                        return el.is_complete == true
                    }))
                }else{
                    url =  isVendor? `${root}/orders/printer/` : `${root}/orders/user/`
                    headers = {
                        'Authorization': `Token ${token}`
                    }
                    setContentType(prev => 'orders')
                    fetchContent(url, headers, 'get', true)
                    }
                break;
            case 'order-pending':
                if(contentType == 'orders'){
                    setData(prev => prev.filter(function(el){
                        return el.is_complete == false
                    }))
                }else{
                    url =  isVendor? `${root}/orders/printer/` : `${root}/orders/user/`
                    headers = {
                        'Authorization': `Token ${token}`
                    }
                    setContentType(prev => 'orders')
                    fetchContent(url, headers, 'get', false)
                }
                break;             
        }
    }, [active])

 

    return (
        <div className="all-activities" style={ loading? {
            display: 'flex',
            alignItems: "center",
            justifyContent: "center"
        }: {} }>
            {
                loading? (
                    <LoadSpinner />
                ):(
                    error? (
                        <>An Error Occured, Check your connection!</>
                    ):(
                        contentType == 'orders'? (
                            <>
                                {
                                    data.map(order => (
                                        <div className="activity-order" onClick={ () => {
                                            setOpenOrderWindow(true)
                                            setActiveOrder(order)
                                        } }>
                                            <div className="main-area">
                                                <h3 className="customer_name">
                                                {
                                                    isVendor? (
                                                        <>
                                                             Customer: <b>{ order.customer_name }</b>
                                                        </>
                                                    ):(
                                                        <>
                                                             Vendor: <b>{ order.vendor_name }</b>
                                                        </>
                                                    )
                                                }
                                               
                                                </h3>
                                                <p className="status">
                                                    Status: <b>{
                                                        !order.is_complete? 'Pending' : 'Complete'    
                                                    }</b>
                                                </p>
                                            </div>
                                            <div className="time">
                                            <h4>
                                                {
                                                    formatDate(order.order_time).timeApproxl
                                                }
                                            </h4>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        ):(
                            <>
                                 {
                                    data.map(review => (
                                        <div className="activity-order review">
                                            <div className="main-area">
                                            <h5>Review</h5>
                                            <h3>"{review.comment}"</h3>
                                            <div className="rating-section">
                                                <Ratings rating={ review.rating }/>
                                            </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </>
                        )
                    )
                )
            }
        </div>
    )
}

export default ActivityContent