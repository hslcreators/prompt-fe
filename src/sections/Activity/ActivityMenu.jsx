import { useActivityNavStore } from "@/utils/OtherStores"
import { useEffect } from "react"


const ActivityMenu = () => {

    const { selected, setSelected, active, setActive } = useActivityNavStore((state) => ({
        selected: state.selected,
        setSelected: state.setSelected,
        active: state.active,
        setActive: state.setActive
    }))

    const activityButtons = [
        {
            id: 'orders',
            title: 'Orders'
        },
        {
            id: 'reviews',
            title: 'Reviews'
        },
        {
            id: 'order-completed',
            title: 'Completed'
        },
        {
            id: 'order-pending',
            title: 'Pending'
        },
        // {
        //     id: 'order-paid',
        //     title: 'Paid'
        // },
        // {
        //     id: 'order-unpaid',
        //     title: 'Unpaid'
        // }
    ]

 

    const selectButtons = (id) => {
        switch (id) {
            case 'orders':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-completed',
                    active: false
                },
                {
                    id: 'order-pending',
                    active: false
                },
                {
                    id: 'order-paid',
                    active: false
                },
                {
                    id: 'order-unpaid',
                    active: false
                }])
            break;
            case 'reviews':
                setSelected([{
                    id: 'reviews',
                    active: true
                }])
            break;
            case 'order-completed':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-completed',
                    active: true
                }])
            break;
            case 'order-pending':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-pending',
                    active: true
                }])
            break;
            case 'order-paid':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-paid',
                    active: true
                }])
            break;
            case 'order-unpaid':
                setSelected([{
                    id: 'orders',
                    active: true
                },{
                    id: 'order-unpaid',
                    active: true
                }])
            break;
            case 'default':
                setSelected([{
                    id: 'orders',
                    active: false
                },{
                    id: 'reviews',
                    active: false
                }])
            break;
        }
    }


    const ActivityButton = ({ button }) => {
        const show = selected.filter((function(el){
            return el.id == button.id
        }))[0]? 'show': false

        const focus = show? selected.filter((function(el){
            return el.id == button.id
        }))[0].active? 'active': false : false

        return (
            <div className={`activity-button ${ show } ${focus}`} onClick={() => {
                if(active == button.id){
                    setActive('orders')
                }else{
                    setActive(button.id)
                }
                if(selected.filter((function(el){
                    return el.id == button.id
                }))[0].active){
                    if(button.id.includes('order-')){
 
                        selectButtons('orders')
                    }else{
                        selectButtons('default')
                    }
                }else{
                    selectButtons(button.id)
                }
            }}>
                <p>{button.title}</p>
            </div>
        )
    }

    useEffect(() => {
        selectButtons('default')
    }, [])

    return (
        <div className="activity-menu">
            <div className="activity-bar">
                <div className="activity-bar-overflow">
                    {
                        activityButtons.map((button) => (
                            <ActivityButton button={ button }/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ActivityMenu