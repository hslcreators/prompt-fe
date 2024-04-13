import { popoutWindow } from "@/pages/SettingsPage"

const TrackOrder = ({isThisOrder}) => {
    return (
        <div className={`track-order-window settings-windows ${isThisOrder? 'active': false}`}>
            <h3>Track Order</h3>
            <div className="close-window-icon" onClick={() => {
                popoutWindow(false)
            } }>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M11.8516 9.5L16.7378 4.61377C17.3374 4.01416 17.3374 3.04199 16.7378 2.44189L15.6519 1.35596C15.0522 0.756348 14.0801 0.756348 13.48 1.35596L8.59375 6.24219L3.70752 1.35596C3.10791 0.756348 2.13574 0.756348 1.53564 1.35596L0.449707 2.44189C-0.149902 3.0415 -0.149902 4.01367 0.449707 4.61377L5.33594 9.5L0.449707 14.3862C-0.149902 14.9858 -0.149902 15.958 0.449707 16.5581L1.53564 17.644C2.13525 18.2437 3.10791 18.2437 3.70752 17.644L8.59375 12.7578L13.48 17.644C14.0796 18.2437 15.0522 18.2437 15.6519 17.644L16.7378 16.5581C17.3374 15.9585 17.3374 14.9863 16.7378 14.3862L11.8516 9.5Z" fill="#171328"/>
                </svg>
            </div>
            <div className="time-estimate">
                <div className="time-estimate-text">
                    <h2>Estimated Time</h2>
                    <p>1 Day</p>
                </div>
                <div className="time-estimate-icon">
                    <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5007 42.6043C10.1397 42.6043 0.896484 33.3611 0.896484 22.0002C0.896484 10.6392 10.1397 1.396 21.5007 1.396C32.8616 1.396 42.1048 10.6392 42.1048 22.0002C42.1048 33.3611 32.8616 42.6043 21.5007 42.6043ZM21.5007 3.18766C11.1269 3.18766 2.68815 11.6264 2.68815 22.0002C2.68815 32.3739 11.1269 40.8127 21.5007 40.8127C31.8744 40.8127 40.3132 32.3739 40.3132 22.0002C40.3132 11.6264 31.8744 3.18766 21.5007 3.18766Z" fill="black"/>
                    <path d="M32.2513 22.896H21.5013C21.0068 22.896 20.6055 22.4947 20.6055 22.0002V7.66683C20.6055 7.17233 21.0068 6.771 21.5013 6.771C21.9958 6.771 22.3971 7.17233 22.3971 7.66683V21.1043H32.2513C32.7458 21.1043 33.1471 21.5057 33.1471 22.0002C33.1471 22.4947 32.7458 22.896 32.2513 22.896Z" fill="black"/>
                    </svg>
                </div>
            </div>
            <div className="order-tracking">
                <div className="tracking-stage finished">
                    <div className="stage-symbol">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>
                    <div className="stage-text">
                        <h2>Printing Order Placed</h2>
                        <p className="detail">Order Placed</p>
                        <p className="time">10:30am 30 jan 2024</p>
                    </div>
                </div>
                <div className="tracking-stage">
                    <div className="stage-symbol">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>
                    <div className="stage-text">
                        <h2>Printing Started</h2>
                        <p className="detail">Your document has started printing</p>
                    </div>
                </div>
                <div className="tracking-stage last">
                    <div className="stage-symbol">
                        <div className="circle"></div>
                        <div className="line"></div>
                    </div>
                    <div className="stage-text">
                        <h2>Ready for pickup</h2>
                        <p className="detail">CST bookstore</p>
                    </div>
                </div>
            </div>
            <div className="vendor-banner">
                <div className="vendor-image">
                    <img src="/assets/images/userProfile.png" alt="" />
                </div>
                <div className="vendor-text">
                    <h5>James Baker</h5>
                    <p className="location">Cst bookstore</p>
                    <p className="tel">Tel: 07023447654</p>
                </div>
            </div>
        </div>
    )
}

export default TrackOrder