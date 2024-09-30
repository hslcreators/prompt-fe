import SideImage from "@/sections/AuthPages/SideImage"
import PersonalDetailsContent from "@sections/AuthPages/PersonalDetailsPage/PersonalDetailsPage"
import "../sections/AuthPages/AuthPages.css";
import { useEffect } from "react";
import { progressRef } from "@/components/Progress/Progress";

const PersonalDetailsPage = () => {
    useEffect(() => {
        document.querySelector('.main-progress').classList.remove('start')
		document.querySelector('.main-progress').classList.add('end')
		setTimeout(() => {
			document.querySelector('.main-progress').classList.remove('start')
			document.querySelector('.main-progress').classList.remove('end')
		}, 1200)
    }, [])
    return (
        <div className="auth-container">
            <SideImage />
            <PersonalDetailsContent />
        </div>
    )
}

export default PersonalDetailsPage