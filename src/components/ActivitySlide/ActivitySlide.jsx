import { useEffect } from "react"
import Ratings from "../VendorCard/Ratings"
import Order from "./Order"
import { useActivityNavStore } from "@/utils/OtherStores"
import ActivityContent from "./ActivityContent"
import { useAuthStore } from "@/utils/AuthStore"

import { sideNavRef } from "@/sections/VendorsPage/vendorsSideBar/VendorsSideBar"

import { useRef } from "react"


const activityButtons = [
    {
        id: 'orders',
        title: 'Orders'
    },
    {
        id: 'reviews',
        title: 'Reviews'
    },
    {
        id: 'order-completed',
        title: 'Completed'
    },
    {
        id: 'order-pending',
        title: 'Pending'
    },
    // {
    //     id: 'order-paid',
    //     title: 'Paid'
    // },
    // {
    //     id: 'order-unpaid',
    //     title: 'Unpaid'
    // }
]


const ActivitySlide = () => {

    const { selected, setSelected, active, setActive, slide, setSlide, activeOrder, setActiveOrder } = useActivityNavStore((state) => ({
        selected: state.selected,
        setSelected: state.setSelected,
        active: state.active,
        setActive: state.setActive,
        slide: state.slide,
        setSlide: state.setSlide,
        activeOrder: state.activeOrder,
        setActiveOrder: state.setActiveOrder
    }))

    const activitySlideRef = useRef(false)

    
    const {isVendor } = useAuthStore((state) => ({
        isVendor: state.isVendor
	}))
    
    
    const selectButtons = (id) => {
        switch (id) {
            case 'orders':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-completed',
                    active: false
                },
                {
                    id: 'order-pending',
                    active: false
                },
                {
                    id: 'order-paid',
                    active: false
                },
                {
                    id: 'order-unpaid',
                    active: false
                }])
            break;
            case 'reviews':
                setSelected([{
                    id: 'reviews',
                    active: true
                }])
            break;
            case 'order-completed':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-completed',
                    active: true
                }])
            break;
            case 'order-pending':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-pending',
                    active: true
                }])
            break;
            case 'order-paid':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-paid',
                    active: true
                }])
            break;
            case 'order-unpaid':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-unpaid',
                    active: true
                }])
            break;
            case 'default':
                setSelected([{
                    id: 'orders',
                    active: false
                },{
                    id: 'reviews',
                    active: false
                }])
            break;
        }
    }


    const ActivityButton = ( { button } ) => {
        const show = selected.filter((function(el){
            return el.id == button.id
        }))[0]? 'show': false
    
        const focus = show? selected.filter((function(el){
            return el.id == button.id
        }))[0].active? 'active': false : false
        return (
            <div className={`h-[33px]  group hover:bg-[#676767] transition duration-[300] ${ show? 'flex' : 'hidden' } ${ focus? 'bg-[#676767]' : 'bg-[#e2e2e2]' }  ${ button.id == 'order-completed'? 'w-[90px]' : 'w-[80px]' } flex-shrink-0 items-center justify-center mx-[10px] cursor-[pointer]`} onClick={() => {
                if(active == button.id){
                    setActive('orders')
                }else{
                    setActive(button.id)
                }
                if(selected.filter((function(el){
                    return el.id == button.id
                }))[0].active){
                    if(button.id.includes('order-')){
                        selectButtons('orders')
                    }else{
                        selectButtons('default')
                    }
                }else{
                    selectButtons(button.id)
                }
            }}>
                <p className={`text-[15px] group-hover:text-[#f0f0f0] duration-[300]  ${ focus? 'text-[#f0f0f0]' : '' }`}>{ button.title }</p>
            </div>
        )
    }

    useEffect(() => {
        selectButtons('default')
    }, [])

    
    return (
        <div className="w-[350px] h-[100vh] fixed top-[0px] left-[0px] bg-[#fff] overflow-x-hidden" ref={ activitySlideRef } style={ {  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.15)',  transform: slide? 'translateX(0px)' : 'translateX(-350px)',
            transition: 'transform 0.3s ease'}}>
            {
                !activeOrder? (
                    <>
                        <div onClick={() => {
                            selectButtons('default')
                            setActive(false)
                            setSlide(false)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg absolute top-[30px] right-[20px] w-[20px] h-[20px] text-[red] cursor-[pointer]" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                            </svg>
                        </div>
                         <div className="w-[full] h-[100px] bg-[] flex items-end pl-[17px]">
                             <img src="/assets/icons/activity.svg" alt="" className="w-[38px] h-[38px]"/>
                            <h2 className="text-[24px] ml-[8px]">{ isVendor? 'Vendor' : 'Your' } Activity</h2>
                         </div>
                        <div className="w-[full] h-[50px] mt-[20px] pl-[48px] flex overflow-y-hidden scrollbar-hidden">
                            {
                                activityButtons.map(button => (
                                    <ActivityButton button={ button } />
                                ))
                            }
                        </div>
                         <ActivityContent active = { active }/>
                    </>
                ):( 
                    <Order activeOrder = { activeOrder } isVendor = { isVendor }/>
                )   
            }
        </div>
    )
}

export default ActivitySlide