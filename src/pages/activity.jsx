import VendorsSideBar from '@/sections/VendorsPage/vendorsSideBar/VendorsSideBar'
import '../sections/Activity/activity.css'

import React, { useEffect , useState, useRef} from 'react'
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




const UserActivityPage = () => {
        const { token, user, isVendor } = useAuthStore((state) => ({
            token: state.token,
            user: state.user,
            isVendor: state.isVendor
        }))

        const [isMobile, setIsMobile] = useState(window.innerWidth <= 550)

        window.addEventListener('resize', ()=>{
            setIsMobile(prev => window.innerWidth <= 550)
        })


        // const { openOrderWindow } = useActivityNavStore((state)=> ({
        //     openOrderWindow: state.openOrderWindow
        // }))

    useEffect(()=>{
        const url =  `${root}/orders/ef04f319-3aa8-4db9-8bb9-c4d5fc650a4d`
        const headers = {
			'Authorization': `Token ${token}`
		}
        useFetch(url, false, headers, 'get').then(({data, error}) => {
            console.log(data, error)
        })
        setIsMobile(prev => window.innerWidth <= 550)
        document.querySelector('.main-progress').classList.remove('start')
		document.querySelector('.main-progress').classList.add('end')
		setTimeout(() => {
			document.querySelector('.main-progress').classList.remove('start')
			document.querySelector('.main-progress').classList.remove('end')
		}, 1200)
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
                                <div className="w-[5.2vw] h-[5.2vw] lg:w-[14px] lg:h-[14px] xl:w-[24px] xl:h-[24px] relative top-[1.3vw] lg:top-[8px] xl:top-[10px]">
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
                <Order />
            </div>
        </React.Fragment>
    )
}

export default UserActivityPage