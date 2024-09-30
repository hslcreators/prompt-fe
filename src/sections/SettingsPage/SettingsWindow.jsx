import ProfileDetailsWindow from "./ProfileDetailsWindow/ProfileDetailsWindow"
import MyOrders from "./TrackOrders/MyOrders"
import TrackOrder from "./TrackOrders/TrackOrder"
import ContactDetailsWindow from "./ContactDetailsWindow/ContactDetailsWindow"
import MyCards from "./MyCards/MyCards"
import NewCard from "./MyCards/NewCard"
import DeleteCard from "./MyCards/DeleteCard"
import DeleteCardStatus from "./MyCards/DeleteCardStatus"

const SettingsWindow = ({ selectWindow }) => {
 
    return (
        <div className={`settings-window ${selectWindow? 'active': false}`}>
            <ProfileDetailsWindow isProfile = { selectWindow == 'profile' ? true : false }/>
            <MyOrders isOrders = { selectWindow == 'orders'? true : false } />
            <TrackOrder isThisOrder = { selectWindow == 'thisOrder'? true: false }/>
            <ContactDetailsWindow isContact = { selectWindow == 'contact'? true : false } />
            <MyCards isCard = { selectWindow == 'card'? true: false }/>
            <NewCard isNewCard = { selectWindow == 'addCard'? true: false } />
            <DeleteCard isCard = { selectWindow == 'deleteCard'? true: false }/>
            <DeleteCardStatus />
        </div>
    )
}

export default SettingsWindow