import './order.css'
import { useActivityNavStore } from '@/utils/OtherStores'
import { root, useAuthStore } from '@/utils/AuthStore'
import { useState, useTransition } from 'react'
import useFetch from '@/utils/useFetch'
import { json, useNavigate } from 'react-router-dom'

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
    const [downLoading, setDownloading] = useState(false)

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

     const openFile = async (base64String, json, fileName) => {
        const extentsion = fileName.split('.')[1]
        const mimeType = json.extensions.find(function(el) {
            return el.extension == `.${extentsion}`
        }).mimeType
        try{
            const byteCharacters = await atob(base64String);
            
            const byteNumbers = await new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = await new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray], { type: mimeType });
            const url = await URL.createObjectURL(blob);
            return url
        }catch(err){
            throw err
        }
     }

     const downloadFile = (id, e) => {
        setDownloading(prev => true)
        const url = `${root}/orders/document/${id}`
        const headers = {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        }	
        useFetch(url, false, headers, 'get').then(({data: downloadData, error: downloadError }) => {
            if(downloadData){
                fetch('/mime.json')
                .then((response) => response.json())
                .then((json) => {
                    openFile(downloadData.document, json, downloadData.document_name).then((url) => {
                        setDownloading(prev => false)
                        const a = document.createElement('a')
                        a.href = url
                        a.download = downloadData.document_name
                        document.body.appendChild(a)
                        a.click()
                        document.body.removeChild(a); 
                        URL.revokeObjectURL(url)
                    }).catch(err => {
                        setDownloading(prev => false)
                    })
                });   
            }else{

            }
        })
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
                                                        <p>{ doc.name }</p>
                                                        <div className="download-icon" onClick={(e) => {
                                                               downloadFile(doc.id, e)
                                                            }}>
                                                            {
                                                                downLoading? (
                                                                    <img className = "w-[20px] h-[20px]" src="/assets/icons/loader.gif" alt="" />
                                                                ):(
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
                                                                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/>
                                                                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
                                                                        </svg>
                                                                )   
                                                            }                                
                                                        </div>
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