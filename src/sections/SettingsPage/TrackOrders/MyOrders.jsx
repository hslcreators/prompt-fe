import './trackOrders.css'
import { popoutWindow } from '@/pages/SettingsPage'


const Order = ({order}) => {
    return (
        <div className="order" onClick={ () => {
            popoutWindow('thisOrder')
        } }>
            <div className="order-text">
                <div className="order-name">
                    <h4>{order.name}</h4>
                </div>
                <div className="order-status">
                    <p>{order.status}</p>
                </div>
            </div>
            <div className="order-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_258_4652)">
                    <path d="M16.7938 12L6.14675 22.646C5.95175 22.841 5.95175 23.158 6.14675 23.353C6.34175 23.548 6.65875 23.548 6.85375 23.353L17.8538 12.353C18.0487 12.158 18.0487 11.841 17.8538 11.646L6.85375 0.646017C6.75575 0.548018 6.62775 0.500017 6.49975 0.500017C6.37175 0.500017 6.24375 0.549017 6.14575 0.646017C5.95075 0.841017 5.95075 1.15802 6.14575 1.35302L16.7938 12Z" fill="black"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_258_4652">
                    <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 -1 24 24)"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>
        </div>  
    )
}

const orders = [
    {
        name: 'OLEM PRINTING INT.',
        status: 'Your order is ready for pickup'
    },
    {
        name: 'OLEM PRINTING INT.',
        status: 'Your order is ready for pickup'
    },
    {
        name: 'OLEM PRINTING INT.',
        status: 'Your order is ready for pickup'
    }, {
        name: 'OLEM PRINTING INT.',
        status: 'Your order is ready for pickup'
    }
]

const MyOrders = ({isOrders}) => {
    console.log(isOrders)
    return (
        <div className={`my-orders-window settings-windows ${isOrders? 'active': false}`}>
            <h3>My Order</h3>
            <div className="close-window-icon" onClick={() => {
                popoutWindow(false)
            } }>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M11.8516 9.5L16.7378 4.61377C17.3374 4.01416 17.3374 3.04199 16.7378 2.44189L15.6519 1.35596C15.0522 0.756348 14.0801 0.756348 13.48 1.35596L8.59375 6.24219L3.70752 1.35596C3.10791 0.756348 2.13574 0.756348 1.53564 1.35596L0.449707 2.44189C-0.149902 3.0415 -0.149902 4.01367 0.449707 4.61377L5.33594 9.5L0.449707 14.3862C-0.149902 14.9858 -0.149902 15.958 0.449707 16.5581L1.53564 17.644C2.13525 18.2437 3.10791 18.2437 3.70752 17.644L8.59375 12.7578L13.48 17.644C14.0796 18.2437 15.0522 18.2437 15.6519 17.644L16.7378 16.5581C17.3374 15.9585 17.3374 14.9863 16.7378 14.3862L11.8516 9.5Z" fill="#171328"/>
                </svg>
            </div>
            <div className="all-orders">        
               {
                orders.map((order, index)=>(
                    <Order order = { order }/>
                ))
               }
            </div>
            <button className="cancel-order-btn">
                CANCEL
            </button>
        </div>
    )
}

export default MyOrders