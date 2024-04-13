import '../sections/SettingsPage/settings.css'
import VendorsSideBar from '@/sections/VendorsPage/vendorsSideBar/VendorsSideBar';
import VendorsSearchArea from '@/sections/VendorsPage/vendorsSearchArea/VendorsSearchArea';
import VendorHeading from '@/components/VendorHeading/VendorHeading';
import React, { useState } from 'react';
import SettingsWindow from '@/sections/SettingsPage/SettingsWindow';



const options = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
        </svg>
        `,
        label: 'Profile-details',
        linkTo: 'profile'
    },
    {
        icon: `<svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.3 0.700684H2.7C1.2015 0.700684 0.0135 1.90218 0.0135 3.40068L0 19.6007C0 21.0992 1.2015 22.3007 2.7 22.3007H24.3C25.7985 22.3007 27 21.0992 27 19.6007V3.40068C27 1.90218 25.7985 0.700684 24.3 0.700684ZM24.3 19.6007H2.7V11.5007H24.3V19.6007ZM24.3 6.10068H2.7V3.40068H24.3V6.10068Z" fill="#171328"/>
        </svg>
        `,
        label: 'My card',
        linkTo: 'card'
    }, {
        icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect x="0.5" y="0.500488" width="24" height="24" fill="url(#pattern0_258_4436)"/>
        <defs>
        <pattern id="pattern0_258_4436" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_258_4436" transform="scale(0.0208333)"/>
        </pattern>
        <image id="image0_258_4436" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB50lEQVR4nO2ZOy8EURiGH6uRKESIBo1qUSMRhUos4he4hEKjpSdiK1EoFEpRqV06lETi0iHsJkK07sRlR05yJLKZWTM7850ZMk/yNpucc953Zs8335yBmJiYoEgAbUAa2AFOgUetE/3bLNAKlBAx40NAFrBcKgMM6LGh0gQcezCer0MgGZb5buDWh/lv3QP9ps33Ah8BmLe01FwpU+aTAV15uzvRLG0+4fM//5sOpDf2sKB5S0tVJxESuvzlL7gO1BUxnxqzYTPfhdRzos3hihVj/pt6hzlbECDtsJhfLBvNIMCOwQDbCHDmMkCPQ1uRdaj1lo1UHxU4Dy4DXBaoMFcuAzxIBHg2GOBJIsC1ywAph3Kb0f2TmwBXEgH2DW7iXQRYMhhgEQHGDAYYRQD11MwZCJADahHiyEArsYcgEzYLbmgjXlFjNm3mG0eQauC1QJ33q2egEmGWBQMsYIBG4FPA/Ivk5s1nVSDAHAZpCHgvPAI1GGY+wABThEC5Q9PmVSdAGSGR8mn+E+ggZFZ8BFgkAqiH200R5tUrZgURodPjWek70E7EmPYQQPVUkaMU2HJhfi1qX2h+UgWcFzB/aqJZC+Krjd3x+52J4/Og6Mvb1G9AF3+MQf16qDTCH2UyqhUnJua/8AVtAj9RkPIkvwAAAABJRU5ErkJggg=="/>
        </defs>
        </svg>
        `,
        label: 'Track Order',
        linkTo: 'orders'
    }, {
        icon: `<svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 32.9536C15.3562 32.9536 16.875 31.4349 16.875 29.5786H10.125C10.125 31.4349 11.6438 32.9536 13.5 32.9536ZM23.625 22.8286V14.3911C23.625 9.21049 20.8744 4.87361 16.0312 3.72611V2.57861C16.0312 1.17799 14.9006 0.0473633 13.5 0.0473633C12.0994 0.0473633 10.9688 1.17799 10.9688 2.57861V3.72611C6.1425 4.87361 3.375 9.19361 3.375 14.3911V22.8286L0 26.2036V27.8911H27V26.2036L23.625 22.8286ZM20.25 24.5161H6.75V14.3911C6.75 10.2061 9.29813 6.79736 13.5 6.79736C17.7019 6.79736 20.25 10.2061 20.25 14.3911V24.5161Z" fill="#171328"/>
        </svg>
        `,
        label: 'Notification',
        linkTo: 'notifications'
    },
    {
        icon: `<svg width="27" height="33" viewBox="0 0 27 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 0.618164C6.05118 0.618164 0 6.66934 0 14.1182C0 21.567 6.05118 27.6182 13.5 27.6182H14.2941V32.3829C22.0129 28.6664 27 21.2652 27 14.1182C27 6.66934 20.9488 0.618164 13.5 0.618164ZM15.0882 23.6476H11.9118V20.4711H15.0882V23.6476ZM15.0882 18.0888H11.9118C11.9118 12.927 16.6765 13.324 16.6765 10.1476C16.6765 8.40052 15.2471 6.97111 13.5 6.97111C11.7529 6.97111 10.3235 8.40052 10.3235 10.1476H7.14706C7.14706 6.63758 9.99 3.79463 13.5 3.79463C17.01 3.79463 19.8529 6.63758 19.8529 10.1476C19.8529 14.1182 15.0882 14.5152 15.0882 18.0888Z" fill="#171328"/>
        </svg>
        `,
        label: 'Contact Us',
        linkTo: 'contact'
    }
]

let popoutWindow

const Icon = ({ svgMarkup }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: svgMarkup }} />
    );
  };

const SettingsOption = ({option, index, setSelectWindow}) => {
    const [notificationToggle, setNotificationToggle] = useState(false)

     popoutWindow = (linkTo) => {
        console.log(linkTo)
        if(linkTo == 'notifications'){
            setSelectWindow(false)
        }else{
            setSelectWindow(linkTo)
        }
    }

    return (
            <div className="option" onClick={ () => {
                popoutWindow(option.linkTo)
            } }>
                <div className="icon">
                  <Icon svgMarkup={ option.icon } />
                </div>
                <h3>
                    {
                        option.label
                    }
                </h3>
                {
                    option.linkTo == 'notifications'? (
                        <div className={ `toggle ${ notificationToggle? 'active': '' }` } onClick={() => {
                            setNotificationToggle((prev)=>{
                                if(prev){
                                    return false;
                                }else{
                                    return true;
                                }
                            })
                           }}>
                                <div className="toggle-btn"></div>
                           </div>
                    ):(
                        <div className="arrow-icon">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.7938 12.5005L6.14675 23.1465C5.95175 23.3415 5.95175 23.6585 6.14675 23.8535C6.34175 24.0485 6.65875 24.0485 6.85375 23.8535L17.8538 12.8535C18.0487 12.6585 18.0487 12.3415 17.8538 12.1465L6.85375 1.14651C6.75575 1.04851 6.62775 1.00051 6.49975 1.00051C6.37175 1.00051 6.24375 1.04951 6.14575 1.14651C5.95075 1.34151 5.95075 1.65851 6.14575 1.85351L16.7938 12.5005Z" fill="black"/>
                            </svg>
                        </div>
                    )
                }

            </div>
    )
}



const SettingsPage = () => {
    const [selectWindow, setSelectWindow] = useState(false)
    console.log(selectWindow)
    return (
        <React.Fragment>
            <div className="settings-page">
                <VendorsSideBar />
                <div className="settings-page-main">
                    <VendorsSearchArea />
                    <div className="settings-content">
                        <VendorHeading settings = { {
                            name: 'Ikeokwu Somtochi'
                        } }/>
                         <div className="settings-options">
                            {
                                options.map((option, index) => (
                                    <SettingsOption option = { option } index = { index } setSelectWindow = { setSelectWindow }/>
                                ))
                            }
                         </div>
                    </div>
                </div>
            </div>
            <SettingsWindow selectWindow = { selectWindow }/>
        </React.Fragment>
    )
}

export default SettingsPage
export { popoutWindow }