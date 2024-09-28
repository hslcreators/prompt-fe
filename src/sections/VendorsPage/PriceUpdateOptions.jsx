import { useEffect, useState } from 'react'
import './priceUpdateOptions.css'
import { useAuthStore } from '@/utils/AuthStore'
import useFetch from '@/utils/useFetch'
import { root } from '@/utils/AuthStore'
import { vendorPriceStore } from '@/utils/OtherStores'
import { data } from 'autoprefixer'

const PriceUpdateOptions = ({ vendor, setIsOpen }) => {
    const [colouredRate, setColouredRate] = useState(vendor.offers_coloured? vendor.coloured_rate : 0)
    const [uncolouredRate, setUncolouredRate] = useState(vendor.uncoloured_rate? vendor.uncoloured_rate : 0)
    const { token, user } = useAuthStore((state) => ({
		token: state.token,
		user: state.user,
	}))

    const { updateColoured, coloured,  updateUncoloured, uncoloured  } = vendorPriceStore((state)=> ({
		coloured: state.coloured,
		uncoloured: state.uncoloured,
		updateColoured: state.updateColoured,
		updateUncoloured: state.updateUncoloured
	}))

    const [loading, setLoading] = useState(false)

    const updatePrices = () => {
        setLoading(true)
        const body = {
            coloured_rate: colouredRate == 0? false : colouredRate,
            uncoloured_rate: uncolouredRate == 0? false : uncolouredRate
        }
        const headers = {
            'Authorization': `Token ${token}`,
            'Content-Type': 'application/json',
        }	
        useFetch(`${root}/auth/vendors/update-rates/`, body, headers, 'put').then(({data: updateRatesData, error: updateRatesError})=>{
            setLoading(false)
           if(updateRatesData){
                setIsOpen(false)
                updateColoured(updateRatesData.coloured_rate)
                updateUncoloured(updateRatesData.uncoloured_rate)
           }
        })
    }

    useEffect(()=>{
        setUncolouredRate(uncoloured)
        setColouredRate(coloured)
    }, [])

    return (
        <div className="price-update-options show">
             <div className="heading">
                    <h3>Update Prices</h3>
                    <div className="close-options" onClick={() => {
                        setIsOpen(false)
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" >
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </div>
                </div>
                <div className="price-update-section">
                    <div className="input-field">
                        <h4>Uncoloured Rate</h4>
                        <input type="number" name="" value={ uncolouredRate } id="" onChange={(e)=>{
                            setUncolouredRate(e.target.value)
                        } } />
                    </div>
                    <div className="input-field">
                        <h4>Coloured Rate</h4>
                        <input type="number" value={ colouredRate } name="" id="" onChange={(e)=>{
                            setColouredRate(e.target.value)
                        } }/>
                    </div>
                    <button style={ { pointerEvents: loading? 'none' : 'all' } } onClick={ () => {
                        updatePrices()
                    } }>{
                        loading? (
                            <img src="/assets/icons/loader.gif" alt="" className="w-[20px] h-[20px]"/>
                        ):(
                            <>Edit</>
                        )
                    }</button>
                </div>
        </div>
    )
}

export default PriceUpdateOptions