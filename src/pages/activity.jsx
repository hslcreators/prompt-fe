import VendorsSideBar from '@/sections/VendorsPage/vendorsSideBar/VendorsSideBar'
import '../sections/Activity/activity.css'

import React, { useEffect , useState, useRef, useTransition} from 'react'
import VendorsSearchArea from '@/sections/VendorsPage/vendorsSearchArea/VendorsSearchArea'
import useFetch from '@/utils/useFetch'

import { root, useAuthStore } from '@/utils/AuthStore'
import { useActivityNavStore } from '@/utils/OtherStores'
import ActivityMenu from '@/sections/Activity/ActivityMenu'
import ActivityContent from '@/sections/Activity/ActivityContent'
import Order from '@/sections/Activity/Order'
import MobileHeading from '@/components/MobileHeading/MobileHeading'
import MobileFooter from '@/components/MobileFooter/MobileFooter'
import { progressRef } from '@/components/Progress/Progress'
import { useNavigate } from 'react-router-dom'





const UserActivityPage = () => {
        const { token, user, isVendor } = useAuthStore((state) => ({
            token: state.token,
            user: state.user,
            isVendor: state.isVendor
        }))

        const { openOrderWindow, setOpenOrderWindow, activeOrder, setActiveOrder } = useActivityNavStore((state)=> ({
            openOrderWindow: state.openOrderWindow,
            setOpenOrderWindow: state.setOpenOrderWindow,
            activeOrder: state.activeOrder,
            setActiveOrder: state.setActiveOrder
        }))
    

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

        const [isMobile, setIsMobile] = useState(window.innerWidth <= 550)

        window.addEventListener('resize', ()=>{
            setIsMobile(prev => window.innerWidth <= 550)
        })


        // const { openOrderWindow } = useActivityNavStore((state)=> ({
        //     openOrderWindow: state.openOrderWindow
        // }))

    let isRendered

    useEffect(()=>{
        if(!isRendered){
            isRendered = true
            setIsMobile(prev => window.innerWidth <= 550)
            document.querySelector('.main-progress').classList.remove('start')
            document.querySelector('.main-progress').classList.add('end')
            setTimeout(() => {
                document.querySelector('.main-progress').classList.remove('start')
                document.querySelector('.main-progress').classList.remove('end')
            }, 1200)
        }
    }, [])
    return (
        <React.Fragment>
            <div className="activity-page">
                <VendorsSideBar />
                <div className="activity-page-main">
                    {
						isMobile? (
							<MobileHeading />
						):(
							<VendorsSearchArea />
						)
					}
                    <div className="activity-content">
                        <div className="flex flex-col pt-[3vw] lg:pt-[4vw]  nxl:pt-[1vw]  mt-[30px] ml-[30px]">
                            <button className="flex flex-row vsm:mb-0 lg:mb-[2vw]">
                                <div className="w-[5.2vw] h-[5.2vw] lg:w-[14px] lg:h-[14px] xl:w-[24px] xl:h-[24px] relative top-[1.3vw] lg:top-[8px] xl:top-[10px]" onClick={() => {
                                     startTransition(() => {
                                        navigate(-1)
                                     })
                                }}>
                                    <img
                                        className="w-full h-full object-cover"
                                        src="/assets/icons/left.svg"
                                        alt="A left arrow"
                                    />
                                </div>
                                <div className="text-[#4A5568] font-bold vsm:text-[5.2vw] lg:text-[20px] xl:text-[30px] ml-[1.5vw] lg:ml-[12px] xl:ml-[20px]">{ isVendor? 'Vendor' : 'Your' } Activity</div>
                            </button>
                        </div>
                        <ActivityMenu />
                        <ActivityContent />
                        {
                            isMobile? (
                                <MobileFooter />
                            ):(
                                <></>
                            )
					    }
                    </div>
                </div>
                <Order activeOrder={ activeOrder }/>
            </div>
        </React.Fragment>
    )
}

export default UserActivityPage