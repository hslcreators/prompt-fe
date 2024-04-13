import { popoutWindow } from "@/pages/SettingsPage"

const DeleteCardStatus = () => {
    const success = true
    return (
        <div className="delete-status-window settings-windows">
             <div className="close-window-icon" onClick={() => {
                popoutWindow(false)
            } }>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M11.8516 9.5L16.7378 4.61377C17.3374 4.01416 17.3374 3.04199 16.7378 2.44189L15.6519 1.35596C15.0522 0.756348 14.0801 0.756348 13.48 1.35596L8.59375 6.24219L3.70752 1.35596C3.10791 0.756348 2.13574 0.756348 1.53564 1.35596L0.449707 2.44189C-0.149902 3.0415 -0.149902 4.01367 0.449707 4.61377L5.33594 9.5L0.449707 14.3862C-0.149902 14.9858 -0.149902 15.958 0.449707 16.5581L1.53564 17.644C2.13525 18.2437 3.10791 18.2437 3.70752 17.644L8.59375 12.7578L13.48 17.644C14.0796 18.2437 15.0522 18.2437 15.6519 17.644L16.7378 16.5581C17.3374 15.9585 17.3374 14.9863 16.7378 14.3862L11.8516 9.5Z" fill="#171328"/>
                </svg>
            </div>
           {
            success? (
                <>
                     <div className="main-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                        <path d="M66 31.5L58.68 23.13L59.7 12.06L48.87 9.6L43.2 0L33 4.38L22.8 0L17.13 9.57L6.3 12L7.32 23.1L0 31.5L7.32 39.87L6.3 50.97L17.13 53.43L22.8 63L33 58.59L43.2 62.97L48.87 53.4L59.7 50.94L58.68 39.87L66 31.5ZM27.27 45.66L15.87 34.23L20.31 29.79L27.27 36.78L44.82 19.17L49.26 23.61L27.27 45.66Z" fill="#0FA958"/>
                        </svg>
                    </div>
                    <h1>Successful</h1>
                    <p>You have successfully deleted your card details</p>
                </>
            ):(
                <>
                     <div className="main-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="63" viewBox="0 0 66 63" fill="none">
                            <path d="M66 31.5L58.68 23.13L59.7 12.06L48.87 9.6L43.2 0L33 4.38L22.8 0L17.13 9.57L6.3 12L7.32 23.1L0 31.5L7.32 39.87L6.3 50.97L17.13 53.43L22.8 63L33 58.59L43.2 62.97L48.87 53.4L59.7 50.94L58.68 39.87L66 31.5ZM15.87 36.6923V34.23L15.9231 30.4615L13.1538 22.3846L10.8462 31.5L15.87 29.79H48.87L48 42.6923L50.7692 36.6923H15.87Z" fill="#C93824"/>
                            </svg>
                     </div>
                        <h1>Failed</h1>
                        <p>we were unable to delete your card</p>
                </>
            )
           }
        </div>
    )
}

export default DeleteCardStatus