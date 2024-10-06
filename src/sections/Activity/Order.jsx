import './order.css'
import { useActivityNavStore } from '@/utils/OtherStores'
import { root, useAuthStore } from '@/utils/AuthStore'
import { useState, useTransition } from 'react'
import useFetch from '@/utils/useFetch'
import { useNavigate } from 'react-router-dom'

const Order = ({ activeOrder, uploadForm }) => {
    const { openOrderWindow, setOpenOrderWindow, setActiveOrder } = useActivityNavStore((state)=> ({
        openOrderWindow: state.openOrderWindow,
        setOpenOrderWindow: state.setOpenOrderWindow,
        // activeOrder: state.activeOrder,
        setActiveOrder: state.setActiveOrder
    }))

    const { token, isVendor } = useAuthStore((state) => ({
		token: state.token,
        isVendor: state.isVendor
	}))


    const [loading, setLoading] = useState(false)

    const markComplete = (status) => {
        setLoading(prev => true)
 
        const url = `${root}/orders/${activeOrder.id}/update`
        const headers = {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        }	
        const body = JSON.stringify({
            is_complete: status
        })

        useFetch()

        useFetch(url, body, headers, 'put').then(({ data: markCompleteData, error: markCompleteError })=>{
            setLoading(prev => false)
            if(markCompleteData){
                setActiveOrder({
                    ...activeOrder,
                    is_complete: status
                })
            }
        })
    }

    const navigate = useNavigate()

    const [isPending, startTransition] = useTransition()
 
     if(isPending){
                 document.querySelector('.main-progress').classList.remove('end')
                 document.querySelector('.main-progress').classList.add('start')
     }else{
                 document.querySelector('.main-progress').classList.remove('start')
                 document.querySelector('.main-progress').classList.add('end')
             setTimeout(() => {
                     document.querySelector('.main-progress').classList.remove('start')
                 document.querySelector('.main-progress').classList.remove('end')
             }, 1200)
     }

    return (
        <>
            {
            activeOrder? (
                <div className={`order-bg ${openOrderWindow? 'show' : ''}`}>
                <div className="order-window">
                    <div className="order-overflow">
                    <div className="order-heading">
                        <h2>Order { uploadForm? 'Complete !' : 'Details' } </h2>
                    </div>
                    <div className="close" onClick={()=>{
                        setOpenOrderWindow(false)
                        setActiveOrder(false)
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                    </svg>
                    </div>
                    <h1>Order #{ activeOrder.id.split('-')[3] }</h1>
                    <div className="order-section">
                        <div className="part">
                            {
                                isVendor? (
                                    <>
                                        <p>Customer Name</p>
                                        <h4 style={ { textTransform: 'uppercase' } } >{ activeOrder.customer_name }</h4>
                                    </>
                                ):(
                                    <>
                                        <p>Vendor Name</p>
                                        <h4 style={ { textTransform: 'uppercase' } }>{ activeOrder.vendor_name }</h4>
                                    </>
                                )
                            }
                        </div>
                        <div className="part">
                            <p>Total Charge</p>
                            <h4>N{activeOrder.charge}</h4>
                        </div>
                    </div>
                    <div className="order-section">
                        <div className="part">
                            <p>Time Expected</p>
                            <h4>{activeOrder.time_expected}</h4>
                        </div>
                        <div className="part">
                            <p>Status</p>
                            <h4>{ activeOrder.is_complete? 'Complete' : 'Pending' }</h4>
                        </div>
                    </div>
                    <div className="order-section three">
                        <div className="part">
                            <p>No of Pages</p>
                            <h4>{ activeOrder.pages }</h4>
                        </div>
                        <div className="part">
                            <p>No of Copies</p>
                            <h4>{ activeOrder.no_of_copies }</h4>
                        </div>
                        <div className="part">
                            <p>Coloured</p>
                            <h4>{ activeOrder.coloured? 'True' : 'False' }</h4>
                        </div>
                    </div>
                    <div className="order-section description">
                       <h4>Description</h4>
                       <p>{ activeOrder.description }.</p>
                    </div>
                    <div className="order-files">
                        <div className="order-files-heading">
                            <h3>Files</h3>
                        </div>
                        <div className="order-files-content">
                            <div className="order-files-overflow">
                                {
                                    activeOrder? (
                                        <>
                                            {
                                                activeOrder.documents.map(doc => (
                                                    <div className="order-file">
                                                        <div className="icon">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark" viewBox="0 0 16 16">
                                                            <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                                                            </svg>
                                                        </div>
                                                        <a href={ `${root}${doc}` }>{ doc.split('/')[3] }</a>
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
                    </div>
                    {
                        uploadForm? (
                            <>
                                  <button style={ { pointerEvents: loading? 'none' : 'all' } } onClick={() => {
                                            setOpenOrderWindow(false)
                                            startTransition(() => {
                                                navigate('/')
                                            })
                                        }}>
                                         Back to Home
                                    </button>
                            </>
                        ):(
                            <>
                                 {
                                    isVendor? (
                                        <button style={ { pointerEvents: loading? 'none' : 'all' } } onClick={() => {
                                            markComplete(activeOrder.is_complete? false : true)
                                        }}>
                                            {
                                                loading? (
                                                    <img src="/assets/icons/loader.gif" alt="" />
                                                ):(
                                                    <>{
                                                        activeOrder.is_complete? (
                                                            <>Flag Uncomplete</>
                                                        ):(
                                                            <>Mark Complete</>
                                                        )
                                                    }</>
                                                )
                                            }
                                        </button>
                                    ):(
                                        <></>
                                    )
                                }
                            </>
                        )
                    }
                    </div>
                </div>
            </div>
            ):(
                <></>
            )
        }
        </>
    )
}

export default Order