import { useEffect, useState } from "react"
import { useActivityNavStore } from "@/utils/OtherStores"
import { useAuthStore } from "@/utils/AuthStore"
import useFetch from "@/utils/useFetch"
import { root } from "@/utils/AuthStore"
import { formatDate } from "@/utils/dateFormat"
import Ratings from "../VendorCard/Ratings"
import LoadSpinner from "../LoadSpnnner"

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
    const [loading, setLoading] = useState(true)
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


   const getEmptyMsg = (id) => {
        if(id == 'orders'){
            return 'No Available Orders!'
        }else if(id == 'reviews'){
             return 'No Available Reviews!'
        }else if(id == 'order-pending'){
             return 'No Pending Orders!'
        }else if(id == 'order-completed'){
             return 'No Completed Orders!'
        }
   }


    return (
        <div className={`w-[full] h-activityClamp overflow-x-hidden  ${ loading || data.length == 0? 'flex items-center justify-center' : '' }`}>
            {
                    loading? (
                        <LoadSpinner />
                    ):(
                        <>
                            {
                                error? (
                                    <p className="mt-[-50px]">An Error Occured!</p>
                                ):(
                                    <>
                                        {
                                            data.length > 0? (
                                                <div className="w-[full] h-[auto]">
                                                    {
                                                        contentType == 'orders'? (
                                                            <>
                                                                {
                                                                    data.map(order => (
                                                                        <div className="w-[full] h-[130px] flex items-center cursor-[pointer]" style={ { borderBottom: '1px solid #d0d0d0' } } onClick={() => {
                                                                            setActiveOrder(order)
                                                                        }}>
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-printer w-[50px] ml-[20px] h-[50px] text-[#bababa]"  viewBox="0 0 16 16">
                                                                                <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
                                                                                <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1"/>
                                                                            </svg>
                                                                            <div className="h-[100%] bg-[] flex flex-col pl-[20px] justify-center" style={{ width: `calc(100% - 70px)` }}>
                                                                                <h4 className="font-bold text-[18px] text-[#4A5568] capitailise">{ isVendor? order.customer_name : order.vendor_name }</h4>
                                                                                <p className="text-[15px] text-[gray]">{ formatDate(order.timeMiilliseconds).timeApproxl }</p>
                                                                                <div className={` h-[23px] bg-[#4A5568]  mt-[10px] flex items-center justify-center ${ order.is_complete? 'bg-[#587f0b] w-[65px]' : 'bg-[#4A5568] w-[55px]' }`}>
                                                                                    <p className="text-[11px] text-[#fff]">{ order.is_complete? 'Completed' : 'Pending' }</p>
                                                                                </div>  
                                                                            </div>
                                                                        </div>
                                                                    ))
                                                                }
                                                            </>
                                                        ):(
                                                            data.map(review => (
                                                                <div className="w-[full] h-[100px] flex items-center" style={ { borderBottom: '1px solid #d0d0d0' } }>
                                                                    <div className="h-[100%] bg-[] flex flex-col justify-center pl-[30px]" style={{ width: 'calc(100% - 70px)' }}>
                                                                        <h4 className="text-[#4A5568] font-bold text-[20px]">"{ review.comment }"</h4>
                                                                        <div className="w-[150px] h-[30px] mt-[3px]">
                                                                        <Ratings rating = { review.rating }/>
                                                                        </div>
                                                                    </div>  
                                                                    <div className="w-[70px] h-[100%] flex items-center justify-center ">
                                                                        <p className="text-[14px] mr-[20px]">{ formatDate(review.created_at).timeApproxl  }</p>
                                                                    </div>
                                                                </div>
                                                            ))
                                                        )
                                                    }
                                                </div>
                                            ):(
                                                <p className="mt-[-50px]">{ getEmptyMsg(active) }</p>
                                            )
                                        }
                                    </>
                                )
                            }
                        </>
                    )
            }
        </div>
    )
}

export default ActivityContent