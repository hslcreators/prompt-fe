import { popoutWindow } from "@/pages/SettingsPage"

const DeleteCard = ({isCard}) => {
    return (
        <div className={`new-card-window settings-windows ${isCard? 'active': false}`  }>
            <h3>Delete Card</h3>
            <div className="close-window-icon" onClick={() => {
                popoutWindow(false)
            } }>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M11.8516 9.5L16.7378 4.61377C17.3374 4.01416 17.3374 3.04199 16.7378 2.44189L15.6519 1.35596C15.0522 0.756348 14.0801 0.756348 13.48 1.35596L8.59375 6.24219L3.70752 1.35596C3.10791 0.756348 2.13574 0.756348 1.53564 1.35596L0.449707 2.44189C-0.149902 3.0415 -0.149902 4.01367 0.449707 4.61377L5.33594 9.5L0.449707 14.3862C-0.149902 14.9858 -0.149902 15.958 0.449707 16.5581L1.53564 17.644C2.13525 18.2437 3.10791 18.2437 3.70752 17.644L8.59375 12.7578L13.48 17.644C14.0796 18.2437 15.0522 18.2437 15.6519 17.644L16.7378 16.5581C17.3374 15.9585 17.3374 14.9863 16.7378 14.3862L11.8516 9.5Z" fill="#171328"/>
                </svg>
            </div>
            <div className="card"></div>
            <div className="delete-card-btn">
                DELETE CARD
            </div>
            <div className="cancel-delete-btn">
                CLOSE
            </div>
        </div>
    )
}

export default DeleteCard