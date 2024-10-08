import { useState } from "react"

import { useActivityNavStore } from "@/utils/OtherStores"
import useFetch from "@/utils/useFetch"
import { useAuthStore } from "@/utils/AuthStore"
import { root } from "@/utils/AuthStore"

const Order = ({ activeOrder, isVendor }) => {

    // console.log(activeOrder)
    const [loading, setLoading] = useState(false)
    const [downLoading, setDownloading] = useState(false)

    const { openOrderWindow, setOpenOrderWindow, setActiveOrder, setActive, setSelected } = useActivityNavStore((state)=> ({
        openOrderWindow: state.openOrderWindow,
        setOpenOrderWindow: state.setOpenOrderWindow,
        // activeOrder: state.activeOrder,
        setActiveOrder: state.setActiveOrder,
        setSelected: state.setSelected,
        setActive: state.setActive
    }))

    // console.log(activeOrder)



    const { token } = useAuthStore((state) => ({
		token: state.token,
	}))

    console.log(activeOrder)

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
        console.log('s')
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

    const updateIsComplete = (status) => {
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

    return (
        <div className="w-[full] h-[full] overflow-y-hidden">
           <div className="w-[full] h-[auto] flex flex-col items-center relative">
            <div style={ { zIndex: 1 } } onClick={ () => {
                setActiveOrder(false)
                setSelected([{
                    id: 'orders',
                    active: false
                },{
                    id: 'reviews',
                    active: false
                }])
                setActive('orders')
            } }  className="absolute top-[40px] left-[30px] cursor-[pointer]">
                <img src="/assets/icons/leftArrow.svg" alt="" />
            </div>
            <h1 className="mt-[85px] text-[27px]">Order #{ activeOrder.id.split('-')[3] }</h1>
                <div className="w-[100%] h-[auto]  flex flex-col items-center mt-[25px]">
                    <p>{ isVendor? 'Customer' : 'Vendor' } Name</p>
                    <p className="font-bold text-[19px]">{ isVendor?  activeOrder.customer_name : activeOrder.printer_name }</p>
                </div>
                <div className="w-[100%] h-[auto]  mt-[25px] flex">
                    <div className="w-[50%] h-[auto] flex flex-col items-center">
                        <p className="text-[12px]">Time Expected</p>
                        <p className="font-bold text-[15px]">{ activeOrder.time_expected }</p>
                    </div>
                    <div className="w-[50%] h-[auto] flex flex-col items-center">
                        <p className="text-[12px]">Total Charge</p>
                        <p className="font-bold text-[15px]">N{ activeOrder.charge }</p>
                    </div>
                </div>
                <div className="w-[100%] h-[auto]  mt-[25px] flex">
                    <div className="w-[50%] h-[auto] flex flex-col items-center">
                        <p className="text-[12px]">Coloured</p>
                        <p className="font-bold text-[15px]">{ activeOrder.coloured? 'True' : 'False' }</p>
                    </div>
                    <div className="w-[50%] h-[auto] flex flex-col items-center">
                        <p className="text-[12px]">Status</p>
                        <p className="font-bold text-[15px]">{ activeOrder.is_complete? 'Completed' : 'Pending' }</p>
                    </div>
                </div>
                <div className="w-[100%] h-[auto]  mt-[25px] flex">
                    <div className="w-[50%] h-[auto] flex flex-col items-center">
                        <p className="text-[12px]">No of Copies</p>
                        <p className="font-bold text-[15px]">{ activeOrder.no_of_copies }</p>
                    </div>
                    <div className="w-[50%] h-[auto] flex flex-col items-center">
                        <p className="text-[12px]">No of Pages</p>
                        <p className="font-bold text-[15px]">{ activeOrder.pages }</p>
                    </div>
                </div>
                <div className="w-[100%] h-[auto]  flex flex-col items-center mt-[25px]">
                    <p className="text-[16px] font-bold">Description</p>
                    <p className="text-[11px] text-center px-[10px]">{ activeOrder.description }</p>
                </div>
                <div className="w-[93%] h-[130px] bg-[#fff] my-[30px]" style={ {  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.15)', }} >
                    <div className="w-[full] h-[35px] bg-[#c0c0c0] flex justify-center items-center">
                        <h3>Files</h3>
                    </div>
                    <div className="w-[full] h-[95px] overflow-x-hidden">
                        {
                            activeOrder.documents.map(doc => (
                                <div className="w-[full] h-[auto]">
                                    <div className="w-[full] h-[35px] flex overflow-y-hidden items-center relative" style={ { borderBottom: '1px solid #bdbdbd' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark w-[17px] h-[17px] ml-[10px]" viewBox="0 0 16 16">
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
                                        </svg>  
                                        <a className = "ml-[10px] cursor-[pointer] hover:underline" onClick={(e) => {
                                            downloadFile(doc.id, e)
                                        }}>{ doc.name }</a>
                                        {
                                            downLoading? (
                                                <img src="/assets/icons/loader.gif" alt="" className="w-[20px] h-[20px] absolute right-[7px]"/>
                                            ):(
                                                <></>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <button className="w-[130px] h-[36px] flex items-center justify-center bg-[#524ECA] text-[#fff] text-[14px] cursor-[pointer] mb-[16px]" onClick={ () => {
                    updateIsComplete(activeOrder.is_complete? false : true)
                } }>
                    {
                        loading? (
                             <img  className="w-[30px] h-[30px]" src="/assets/icons/loader.gif" alt="" />
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
           </div>
        </div>
    )
}

export default Order