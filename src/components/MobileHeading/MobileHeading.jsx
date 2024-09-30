import { LogoutWindowStore, searchStore } from "@/utils/OtherStores"
import { useNavigate } from "react-router-dom"
import { useTransition } from "react"
import { progressRef } from "@components/Progress/Progress"


const MobileHeading = ({ search }) => {

    const { searchText, setSearchText } = searchStore((state) => ({
		searchText: state.searchText,
		setSearchText: state.setSearchText
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

    const { setIsOpen } = LogoutWindowStore((state) => ({
        setIsOpen: state.setIsOpen
    }))

    return (
        <div className={`min-h-[60px]  lg:h-[15vw] max-h-[86px] border-b-[1.75px] rounded-md w-full fixed z-10 h-fit border-[#D9D9D9] bg-white flex items-center ${search? 'justify-center' : 'justify-between'}`}>
            {
                search? (
                    <form onSubmit={ (e) => {
                        e.preventDefault()
                        navigate(`/search/?q=${searchText}`)
                    } }>
                        <div className="h-[40px] border-[1px] border-[#919396] rounded-full  w-[90vw] flex items-center">
                            <input
                                id="FName"
                                type="text"
                                placeholder="Search vendors..."
                                value={ searchText }
                                className="bg-[transparent] w-searchBar h-full pl-[18px]"
                                onChange={(e) => {
                                    setSearchText(e.target.value)
                                }}
                            />
                            <button className="w-[40px] h-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  class="bi bi-search w-[17px] h-[17px] font-[#919396]" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                </svg>
                            </button>
                        </div>					
                    </form>
                ):(
                    <>
                         <div className="w-[40px] h-[40px]  ml-[30px]" onClick={(() =>{
                                    startTransition(() => {
                                        navigate('/user-dashboard')
                                    })
                                })}>
                                <img src="/assets/images/promptSingleLogo.png" alt="" className="w-full h-full" />
                            </div>
                            <div className="w-[40px] h-[40px] bg-[gray] mr-[30px] rounded-full" onClick={ () => {
                                setIsOpen(true)
                            } }>
                            <img src="/assets/images/avatar.png" alt="" className="w-full h-full rounded-full"/>
                        </div>
                    </>
                )
            }
           
        </div>
    )
}

export default MobileHeading