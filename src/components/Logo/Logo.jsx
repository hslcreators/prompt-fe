import { useState, useTransition } from "react";
import { useNavigate } from "react-router-dom";
import { progressRef } from "@components/Progress/Progress";

const Logo = () => {
	const [viewWidth, setViewWidth] = useState(window.innerWidth)

	window.addEventListener('resize', ()=>{
		setViewWidth(window.innerWidth)
	})

	const navigate = useNavigate();
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

	return (
		<>
			<div className="alg:w-[107px] alg:h-[39px]" onClick={() => {
						startTransition(()=>{
							navigate('/user-dashboard')
						})
					}}>
				<img
					className="w-full h-full object-cover"
					src={viewWidth >= 700? `/assets/icons/prompt-logo.svg` : `/assets/images/promptSingleLogo.png`}
					alt="A logo icon"
				/>
			</div>
		</>
	);
};

export default Logo;
