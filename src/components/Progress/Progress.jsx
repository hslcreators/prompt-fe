import { useEffect, useRef } from 'react'
import './progress.css'

let progressRef


const Progress = ({ sus }) => {
    progressRef = useRef(false)
    return (
        <div className={`main-progress progress ${ sus? 'start' : '' }`} ref={ progressRef  }>
            <div className={`bar`}></div>
        </div>
    )
}

export { progressRef }
export default Progress
